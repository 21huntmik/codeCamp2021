from database import tableDB as tDB
import student as std
import random as r


def appendElectives(major, completed, choice):  # WORKS
    if major == 'se':
        choice = choice[0]
        if choice == "ent":
            electivesList = ['SE-3500', 'SE-3550', 'MK-4200']
        elif choice == "devops":
            electivesList = ['IT-3110', 'IT-3300', 'IT-4200']
        elif choice == "app":
            electivesList = ['SE-3600', 'SE-3100', 'SE-3450']
        elif choice == "data":
            electivesList = ['CS-4300', 'CS-4320', 'IT-4070']
            return electivesList
    else:
        return choice[:-1]


def extendedPrereq(major, completed, choice):
    electivesFirst = appendElectives(major, completed, choice)
    electivesList = []
    for i in electivesFirst:
        if i not in electivesList:
            electivesList.append(i)
        my_db = tDB(major)
        unfilteredCoursePrereqs = my_db.getPreReqs(i)
        if unfilteredCoursePrereqs is not None:
            unfilteredCoursePrereqs = unfilteredCoursePrereqs['prereqs']
            if unfilteredCoursePrereqs is not None:
                if '*' in unfilteredCoursePrereqs:
                    unfilteredCoursePrereqs = unfilteredCoursePrereqs.split(
                        '*')
                    unfilteredCoursePrereqs = sorted(unfilteredCoursePrereqs)
                    unfilteredCoursePrereqs = unfilteredCoursePrereqs[1]
                    for j in unfilteredCoursePrereqs.split(';'):
                        if j not in completed:
                            choice.append(j)
                else:
                    for j in unfilteredCoursePrereqs.split(';'):
                        if j not in completed:
                            choice.append(j)
    finalAppend = []
    for course in electivesList:
        if course not in completed:
            finalAppend.append(course)
    return finalAppend


def makeStudent(planNumber, major, completed, electiveChoice):
    my_db = tDB(major)

    electives = extendedPrereq(major, completed, electiveChoice)

    firstCSRequirements = my_db.getRequiredCourses()
    csRequirements = []
    for i in firstCSRequirements:
        if i['course'] not in completed:
            csRequirements.append(i['course'])
    student = std.Student(planNumber, major, completed,
                          csRequirements, electives)
    student.updateRequirements()
    return student


def preReqCheck(student, course):
    # check if preReq is satisfied
    # if so, return True
    # else, return False
    major = student.major
    my_db = tDB(major)
    rawList = my_db.getPreReqs(course)
    cleanedList = []
    value = rawList['prereqs']
    cleanedList.append(value)
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
    major = student.major
    my_db = tDB(major)
    currSem, currYear = student.currentSemester.split('-')
    if currSem == "Fall" and (1 == int(currYear) % 2):
        offered = []
        for i in my_db.getCourseByOddYearFall():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif currSem == "Spring" and (1 == int(currYear) % 2):
        offered = []
        for i in my_db.getCourseByOddYearSpring():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif currSem == "Fall" and (0 == int(currYear) % 2):
        offered = []
        for i in my_db.getCourseByEvenYearFall():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    elif currSem == "Spring" and (0 == int(currYear) % 2):
        offered = []
        for i in my_db.getCourseByEvenYearSpring():
            offered.append(i['course'])
        if course not in offered:
            offered_bool = False
    return offered_bool


def generateSemester(student):
    semesterCredits = 0
    semesterCourses = {}
    major = student.major
    my_db = tDB(major)
    tmpCredits = 0
    while semesterCredits < 15:

        for course in student.getRequirements():
            if semesterCredits >= 15:
                break
            if isOffered(student, course):
                if preReqCheck(student, course):
                    semesterCourses[course] = my_db.getCourseCredits(course)
                    student.removeRequirement(course)
                    semesterCredits += my_db.getCourseCredits(course)[
                        'credits']
                    student.totalPlanScore += (my_db.getCourseRanking(
                        course)['rating'] * my_db.getCourseCredits(course)['credits'])
        if tmpCredits == semesterCredits:
            break
        else:
            tmpCredits = semesterCredits

    for course in semesterCourses:
        student.addCompleted(course)
    student.totalPlanScore += ((semesterCredits - 15) ** 2)
    return semesterCourses


def generatePlan(planNumber, major, completed, electives):
    # generate plan
    # return dictionary of semesters
    # key is semester
    student = makeStudent(planNumber, major, completed, electives)
    plan = {}
    r.shuffle(student.requirements)

    while len(student.getRequirements()) > 0:
        semester = generateSemester(student)
        plan[student.currentSemester] = semester
        if len(student.requirements) <= 6:
            if student.major == 'cs':
                student.completed.append("PECS-4600")
            elif student.major == 'ma':
                student.completed.append("PEMA-4900")
            elif student.major == 'it':
                student.completed.append("PEIT-4600")
            elif student.major == 'se':
                student.completed.append("PESE-4600")
        student.incrementSemester()
        student.totalPlanScore += 100
    planScore = student.totalPlanScore
    return plan, planScore
