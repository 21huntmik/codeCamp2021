import compSciCourse as cs
import mathCourse as ma
import softEngCourse as se
import student as std

# potentials are dict values
# ID-Number: credits is the format of the dict values

# Database needs to be sorted by class ID as integers


def preReqCheck(student, course):
    # check if preReq is satisfied
    # if so, return True
    # else, return False
    if len(course.getPreReqs()) != 0:
        preReqBranches = course.getPreReqs().split('*')
        evaluatedPreReqs = []
        for fullCondition in preReqBranches:
            trueCount = 0
            for preReq in fullCondition.split(';'):
                if (preReq in student.getCompleted()):
                    trueCount += 1
            if trueCount == len(fullCondition):
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
    if ((1 == int(student.currentSemester[1:]) % 2) and "Odd" not in course.years()):
        offered = False
    if ((0 == (int(student.currentSemester[1:]) % 2)) and "Even" not in course.years()):
        offered = False
    if (student.currentSemester[0] not in course.getSemesters()):
        offered = False
    return offered


def generateSemester(student):
    semesterCredits = 0
    semesterCourses = {}
    while semesterCredits < 12:
        for course in student.getRequirements():
            if isOffered(student, course):
                if preReqCheck(student, course):
                    semesterCourses[course.getID()] = course.getCredits()
                    student.removeRequirement(course)
                    semesterCredits += course.getCredits()
    return semesterCourses


def generatePlan(student):
    # generate plan
    # return dictionary of semesters
    # key is semester
    # value is list of classes
    plan = {}
    while len(student.getRequirements()) > 0:
        semester = generateSemester(student)
        plan[student.currentSemester] = semester
        student.incrementSemester()
    return plan


def main(student):
    generatePlan(student)
    return
