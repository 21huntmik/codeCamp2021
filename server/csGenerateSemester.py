from database import csDB as csDB
import student as std
import flask


def appendElectives(completed, choice):
    electivesList = []
    if choice == "theory":
        electivesList = ['CS-3400', 'CS-3410', 'CS-4307', 'CS-4550',
                         'CS-4320', 'CS-4300', 'CS-3520', 'CS-3200', 'CS-3500', 'CS-3600']
    elif choice == "dev":
        electivesList = ['CS-3200', 'CS-3600', 'CS-3400', 'CS-3520',
                         'CS-4307', 'CS-4320', 'CS-4550', 'CS-4200', 'CS-3500', 'CS-3020', ]
    finalAppend = []
    for course in electivesList:
        if course not in completed:
            finalAppend.append(course)
    return finalAppend


def makeStudent(completed, electiveChoice):
    major = "CS"
    completedList = completed  # get from web input
    electives = appendElectives(completedList, electiveChoice)
    cs = csDB()
    firstCSRequirements = cs.getRequiredCourses()
    csRequirements = []
    for i in firstCSRequirements:
        i = list(i)
        if i[-1] == '|':
            nextVal = i[:-1]
        else:
            nextVal = i
        csRequirements.append(nextVal)
    student = std.Student(major, completedList,
                          csRequirements, electives)
    student.updateRequirements()
    return student


def preReqCheck(student, course):
    # check if preReq is satisfied
    # if so, return True
    # else, return False
    rawList = csDB.getPreReqs(course)
    if len(rawList) != 0:
        preReqBranches = rawList.split('*')
        evaluatedPreReqs = []
        for branch in preReqBranches:
            trueCount = 0
            for preReq in branch.split(';'):
                if (preReq in student.getCompleted()):
                    trueCount += 1
            if trueCount == len(branch):
                evaluatedPreReqs.append(True)
            else:
                evaluatedPreReqs.append(False)
        return (True in evaluatedPreReqs)
    else:
        return True


def isOffered(student, course):
    # check if course is offered
    # if so, return True
    # else, return False
    # reformat semester/year listing as F or S or U + year
    offered = True
    cs_db = csDB()
    if student.currentSemester[0] == "F" and (1 == int(student.currentSemester[1:]) % 2):
        if course not in cs_db.getCourseByOddYearFall():
            offered = False
    if student.currentSemester[0] == "S" and (1 == int(student.currentSemester[1:]) % 2):
        if course not in cs_db.getCourseByOddYearSpring():
            offered = False
    if student.currentSemester[0] == "F" and (0 == int(student.currentSemester[1:]) % 2):
        if course not in cs_db.getCourseByEvenYearFall():
            offered = False
    if student.currentSemester[0] == "S" and (0 == int(student.currentSemester[1:]) % 2):
        if course not in cs_db.getCourseByEvenYearSpring():
            offered = False
    return offered


def generateSemester(student):
    semesterCredits = 0
    semesterCourses = {}
    while semesterCredits < 12:
        for course in student.getRequirements():
            if isOffered(student, course):
                if preReqCheck(student, course):
                    semesterCourses[course] = csDB.getCourseCredits(course)
                    student.removeRequirement(course)
                    semesterCredits += csDB.getCourseCredits(course)
    return semesterCourses


def generatePlan(completed, electives):
    # generate plan
    # return dictionary of semesters
    # key is semester
    # value is list of classes
    student = makeStudent(completed, electives)
    plan = {}
    while len(student.getRequirements()) > 0:
        semester = generateSemester(student)
        plan[student.currentSemester] = semester
        student.incrementSemester()
    return plan
