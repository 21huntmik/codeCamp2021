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


potentials = {}
# Current semester needs to be a string that follows the format semestercodeYEAR
# Current semester needs to be a standard string, no spaces, no necessary delimeters
for i in requirements:
    prereqList = i.getPrereqs()
    add = True
    for x in prereqList:
        credits = x.getCredits()
        if str(x.semesters)+str(x.year) != currentSemester:
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
while semesterCredits < 15:
    # check if has coreqs here, add both simultaneously
    if len(courseDatabase(sorted_potentials[preReqKeys[starting_index]]).getCoreqs()) == 0:
        semesterCourses.append(preReqKeys[starting_index])
        semesterCredits += sorted_potentials[preReqKeys[starting_index]]
    else:
        for i in courseDatabase(sorted_potentials[preReqKeys[starting_index]]).getCoreqs():
            semesterCourses.append(i)
            semesterCredits += i.getCredits()
