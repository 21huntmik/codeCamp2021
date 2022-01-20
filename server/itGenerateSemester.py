from database import itDB as itDB
import student as std


def appendElectives(completed, choice):  # WORKS
    electivesList = []
    choice = choice[:-1]
    for i in choice:
        electivesList.append(i)
        it = itDB()
        unfilteredCoursePrereqs = it.getPreReqs(i)
        print(unfilteredCoursePrereqs)
        if unfilteredCoursePrereqs is not None:
            unfilteredCoursePrereqs = unfilteredCoursePrereqs['prereqs']
            if unfilteredCoursePrereqs is not None:
                if '*' in unfilteredCoursePrereqs:
                    unfilteredCoursePrereqs = unfilteredCoursePrereqs.split(
                        '*')
                    unfilteredCoursePrereqs = sorted(unfilteredCoursePrereqs)
                    unfilteredCoursePrereqs = unfilteredCoursePrereqs[0]
                    for j in unfilteredCoursePrereqs.split(';'):
                        if j not in completed:
                            choice.append(j)
                            print("Appending elective: " + str(j))
                else:
                    for j in unfilteredCoursePrereqs.split(';'):
                        if j not in completed:
                            choice.append(j)
                            print("Appending elective: " + str(j))
    finalAppend = []
    for course in electivesList:
        if course not in completed:
            finalAppend.append(course)
    return finalAppend


def makeStudent(completed, electiveChoice):
    major = "it"
    electives = appendElectives(completed, electiveChoice)
    it = itDB()
    firstitRequirements = it.getRequiredCourses()
    itRequirements = []
    for i in firstitRequirements:
        if i['course'] not in completed:
            itRequirements.append(i['course'])
    student = std.Student(major, completed,
                          itRequirements, electives)
    student.updateRequirements()
    return student


def preReqCheck(student, course):
    # check if preReq is satisfied
    # if so, return True
    # else, return False
    #print("Printing course: " + str(course))
    it_db = itDB()
    rawList = it_db.getPreReqs(course)
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
    it_db = itDB()
    #print("Printing odd fall:" + str(it_db.getCourseByOddYearFall()))
    if student.currentSemester[0] == "F" and (1 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in it_db.getCourseByOddYearFall():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif student.currentSemester[0] == "S" and (1 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in it_db.getCourseByOddYearSpring():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif student.currentSemester[0] == "F" and (0 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in it_db.getCourseByEvenYearFall():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif student.currentSemester[0] == "S" and (0 == int(student.currentSemester[1:]) % 2):
        offered = []
        for i in it_db.getCourseByEvenYearSpring():
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
    it_db = itDB()
    tmpCredits = 0
    while semesterCredits < 16:

        #print("Printing Semester Courses: " + str(semesterCourses))
        for course in student.getRequirements():
            if semesterCredits >= 16:
                break
            if isOffered(student, course):
                if preReqCheck(student, course):
                    semesterCourses[course] = it_db.getCourseCredits(course)
                    #print("Printing course: " + str(course))
                    student.removeRequirement(course)
                    semesterCredits += it_db.getCourseCredits(course)[
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
        print(student.requirements)
        plan[student.currentSemester] = semester
        #print("Printing plan: " + str(plan))
        if len(student.requirements) <= 6:
            student.completed.append("PEit-4600")
        student.incrementSemester()
    #print("Printing plan")
    # print(plan)
    return plan
