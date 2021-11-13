import compSciCourse as cs
import mathCourse as ma
import softEngCourse as se
import student as std
import genEdCourse as gen
import collections as col
import courseDataDB as cDB


def main(student):
    return

# potentials are dict values
# ID-Number: credits is the format of the dict values

# Database needs to be sorted by class ID as integers


def preReqCheck(student, course):
    # check if preReq is satisfied
    # if so, return True
    # else, return False
    preReqBranches = course.getPreReqs().split('*')
    evaluatedPreReqs = []
    add = False
    for preReq in course.getPreReqs:
        if (preReq in student.getCompleted()):
            evaluatedPreReqs.append(True)
    if True in evaluatedPreReqs:
        add = True
    return add


def isOffered(student, course):
    # check if course is offered
    # if so, return True
    # else, return False
    offered = True
    if ((1 == int(student.currentSemester[1:]) % 2) and "Odd" not in course.years()):
        offered = False
    if ((0 == (int(student.currentSemester[1:]) % 2)) and "Even" not in course.years()):
        offered = False
    if (student.currentSemester[0] not in course.getSemesters()):
        offered = False
    return offered


def generate(student):
    semesterCredits = 0
    semesterCourses = {}
    while semesterCredits < 15:
        for i in student.getRequirements():
            if isOffered(student, i):
                if preReqCheck(student, i):
                    semesterCourses[i.getID()] = i.getCredits()
                    student.removeRequirement(i)
                    semesterCredits += i.getCredits()
    return semesterCourses


def addSemester(student):


potentials = {}
# Current semester needs to be a string that follows the format semestercodeYEAR
# Current semester needs to be a standard string, no spaces, no necessary delimeters
for i in std.student.getRequirements:
    prereqList = i.getPrereqs()
    add = True
    for j in prereqList.split('*'):
        for x in j.split(','):
            credits = x.getCredits()
            # NEED To do some hard restructuring to account for the way split prereqs are evaluated
            if ((1 == int(currentSemester[1:]) % 2) and "Odd" not in x.years()) or ((0 == (int(currentSemester[1:]) % 2)) and "Even" not in x.years()) or (currentSemester[0] not in x.getSemesters()):
                add = False
            if x not in completed:
                add = False
            if add:
                potentials[x] = [credits]

sorted_potentials = col.OrderedDict(potentials)
starting_index = 0
preReqKeys = sorted_potentials.keys()
semesterCourses = []
semesterCredits = 0


def generateSemester(student, requirements):
    # generate semester
    # requirements is a list of courses
    # return 2 things
    #   dictionary of classes for that semester with their respective credits
    #   modified list of requirements

    return semesterCourses, requirements


while semesterCredits < 15:
    # check if has coreqs here, add both simultaneously
    if len(courseDatabase(sorted_potentials[preReqKeys[starting_index]]).getCoreqs()) == 0:
        semesterCourses.append(preReqKeys[starting_index])
        semesterCredits += sorted_potentials[preReqKeys[starting_index]]
    else:
        for i in courseDatabase(sorted_potentials[preReqKeys[starting_index]]).getCoreqs():
            semesterCourses.append(i)
            semesterCredits += i.getCredits()
    starting_index += 1
