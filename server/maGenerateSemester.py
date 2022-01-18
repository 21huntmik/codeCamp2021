from database import maDB as maDB
import student as std
import flask


def appendElectives(completed, choice):  # Change to be the list of electives taken in
    finalAppend = []
    choice = choice.split('|')
    for course in choice:
        if course not in completed:
            finalAppend.append(course)
    return finalAppend


def makeStudent(completed, electiveChoice):
    major = "MA"
    updatedElectiveChoice = electiveChoice  # [:-1]
    electives = appendElectives(completed, updatedElectiveChoice)
    ma = maDB()
    firstmaRequirements = ma.getRequiredCourses()
    maRequirements = []
    for i in firstmaRequirements:
        if i['course'] not in completed:
            maRequirements.append(i['course'])
    student = std.Student(major, completed,
                          maRequirements, electives)
    student.updateRequirements()
    # print(student.requirements)
    return student


def preReqCheck(student, course):
    # check if preReq is satisfied
    # if so, return True
    # else, return False
    #print("Printing course: " + str(course))
    ma_db = maDB()
    rawList = ma_db.getPreReqs(course)
    #print("Raw list prereqs: " + str(rawList))
    cleanedList = []
    value = rawList['prereqs']
    cleanedList.append(value)
    #print("Printing cleaned list: " + str(cleanedList))
    if cleanedList[0] == None:
        cleanedList = cleanedList.remove(None)
        return True
    else:
        evaluatedPreReqs = []
        sufficiencies = cleanedList[0].split('*')
        for branch in sufficiencies:
            trueCount = 0
            branch = branch.split(";")
            for i in branch:
                if i in student.getCompleted():
                    trueCount += 1
            if trueCount == len(branch):
                evaluatedPreReqs.append(True)
            else:
                evaluatedPreReqs.append(False)
        return (True in evaluatedPreReqs)


def isOffered(student, course):
    # check if course is offered
    # if so, return True
    # else, return False
    # reformat semester/year listing as F or S or U + year
    offered_bool = True
    ma_db = maDB()
    #print("Printing odd fall:" + str(ma_db.getCourseByOddYearFall()))
    if student.currentSemester[0] == "F" and (1 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in ma_db.getCourseByOddYearFall():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif student.currentSemester[0] == "S" and (1 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in ma_db.getCourseByOddYearSpring():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif student.currentSemester[0] == "F" and (0 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in ma_db.getCourseByEvenYearFall():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif student.currentSemester[0] == "S" and (0 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in ma_db.getCourseByEvenYearSpring():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    #print("Printing offered: " + str(offered))
    return offered_bool


def generateSemester(student):
    #print("Generating a semester")
    # print(student.getRequirements())
    semesterCredits = 0
    semesterCourses = {}
    ma_db = maDB()
    tmpCredits = 0
    while semesterCredits < 16:

        #print("Printing Semester Courses: " + str(semesterCourses))
        for course in student.getRequirements():
            if semesterCredits >= 16:
                break
            if isOffered(student, course):
                if preReqCheck(student, course):
                    semesterCourses[course] = ma_db.getCourseCredits(course)
                    #print("Printing course: " + str(course))
                    student.removeRequirement(course)
                    semesterCredits += ma_db.getCourseCredits(course)[
                        'credits']
        if tmpCredits == semesterCredits:
            break
        else:
            tmpCredits = semesterCredits

    for course in semesterCourses:
        student.addCompleted(course)

    # print(semesterCourses)
    return semesterCourses


def generatePlan(completed, electives):
    # generate plan
    # return dictionary of semesters
    # key is semester
    # value is list of classes
    #print("Printing completed: " + str(completed))
    #print("Printing electives: " + str(electives))
    student = makeStudent(completed, electives)
    plan = {}
    while len(student.getRequirements()) > 0:
        semester = generateSemester(student)
        plan[student.currentSemester] = semester
        #print("Printing plan: " + str(plan))
        if len(student.requirements) < 6:
            student.completed.append("PEMA-4900")
        student.incrementSemester()
    #print("Printing plan")
    # print(plan)
    return plan
