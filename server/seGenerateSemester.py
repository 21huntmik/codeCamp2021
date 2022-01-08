from database import seDB as seDB
import student as std
import flask


def appendElectives(completed, choice):  # WORKS
    electivesList = []
    if choice == "ent":
        electivesList = ['SE-3500', 'SE-3550', 'MK-4200']
    elif choice == "devops":
        electivesList = ['IT-3110', 'IT-3300', 'IT-4200']
    elif choice == "app":
        electivesList = ['SE-3600', 'SE-3100', 'SE-3450']
    elif choice == "data":
        electivesList = ['CS-4300', 'CS-4320', 'IT-4070']
    finalAppend = []
    for course in electivesList:
        if course not in completed:
            finalAppend.append(course)
    # print("Printing final append: " + str(finalAppend))
    return finalAppend


def makeStudent(completed, electiveChoice):
    major = "SE"
    electives = appendElectives(completed, electiveChoice)
    se = seDB()
    firstseRequirements = se.getRequiredCourses()
    seRequirements = []
    for i in firstseRequirements:
        if i['course'] not in completed:
            seRequirements.append(i['course'])
    student = std.Student(major, completed,
                          seRequirements, electives)
    student.updateRequirements()
    # print("Printing student requirements: " + str(student.requirements))
    return student


def preReqCheck(student, course):
    # check if preReq is satisfied
    # if so, return True
    # else, return False
    # print("Printing course: " + str(course))
    se_db = seDB()
    rawList = se_db.getPreReqs(course)
    # print("Printing rawList: " + str(rawList))
    # print("Raw list prereqs: " + str(rawList))
    cleanedList = []
    value = rawList['prereqs']
    cleanedList.append(value)
    # print("Printing cleaned list: " + str(cleanedList))
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
    se_db = seDB()
    # print("Printing odd fall:" + str(se_db.getCourseByOddYearFall()))
    if student.currentSemester[0] == "F" and (1 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in se_db.getCourseByOddYearFall():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif student.currentSemester[0] == "S" and (1 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in se_db.getCourseByOddYearSpring():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif student.currentSemester[0] == "F" and (0 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in se_db.getCourseByEvenYearFall():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif student.currentSemester[0] == "S" and (0 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in se_db.getCourseByEvenYearSpring():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    # print("Printing offered: " + str(offered))
    return offered_bool


def generateSemester(student):
    # print("Generating a semester")
    # print(student.getRequirements())
    semesterCredits = 0
    semesterCourses = {}
    se_db = seDB()
    tmpCredits = 0
    while semesterCredits < 15:

        # print("Printing Semester Courses: " + str(semesterCourses))
        for course in student.getRequirements():
            if semesterCredits >= 15:
                break
            if isOffered(student, course):
                if preReqCheck(student, course):
                    semesterCourses[course] = se_db.getCourseCredits(course)
                    # print("Printing course: " + str(course))
                    student.removeRequirement(course)
                    semesterCredits += se_db.getCourseCredits(course)[
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
    # print("Printing completed: " + str(completed))
    # print("Printing electives: " + str(electives))
    student = makeStudent(completed, electives)
    plan = {}
    while len(student.getRequirements()) > 0:
        semester = generateSemester(student)
        plan[student.currentSemester] = semester
        # print("Printing plan: " + str(plan))
        student.incrementSemester()
        # print("Printing student requirements: " + str(student.getRequirements()))
    # print("Printing plan")
    # print(plan)
    return plan
