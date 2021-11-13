import trial as db
import student as std


def makeStudent():
    major = input("Enter your major: ")  # actually get from web input
    if major == "Computer Science":
        completedList = []  # get from web input
        electiveChoices = []  # get from web input
        seRequirements = db.se.getRequiredCourses()
        student = std.Student(major, completedList,
                              seRequirements, electiveChoices)
        student.updateRequirements()
        return student


def preReqCheck(student, course):
    # check if preReq is satisfied
    # if so, return True
    # else, return False
    rawList = db.se.getPreReqs(course)
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
    if student.currentSemester[0] == "F" and (1 == int(student.currentSemester[1:]) % 2):
        if course not in db.se.getCourseByOddYearFall():
            offered = False
    if student.currentSemester[0] == "S" and (1 == int(student.currentSemester[1:]) % 2):
        if course not in db.se.getCourseByOddYearSpring():
            offered = False
    if student.currentSemester[0] == "F" and (0 == int(student.currentSemester[1:]) % 2):
        if course not in db.se.getCourseByEvenYearFall():
            offered = False
    if student.currentSemester[0] == "S" and (0 == int(student.currentSemester[1:]) % 2):
        if course not in db.se.getCourseByEvenYearSpring():
            offered = False
    return offered


def generateSemester(student):
    semesterCredits = 0
    semesterCourses = {}
    while semesterCredits < 12:
        for course in student.getRequirements():
            if isOffered(student, course):
                if preReqCheck(student, course):
                    semesterCourses[course] = db.se.getCourseCredits(course)
                    student.removeRequirement(course)
                    semesterCredits += db.se.getCourseCredits(course)
    return semesterCourses


def generatePlan():
    # generate plan
    # return dictionary of semesters
    # key is semester
    # value is list of classes
    student = makeStudent()
    plan = {}
    while len(student.getRequirements()) > 0:
        semester = generateSemester(student)
        plan[student.currentSemester] = semester
        student.incrementSemester()
    return plan


generatePlan()
