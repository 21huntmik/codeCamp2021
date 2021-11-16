class Student:
    def __init__(self, major, completedList, requirementsList, electivesList):
        self.major = major
        self.completed = completedList
        self.requirements = requirementsList
        self.currentSemester = 'S2022'
        self.electives = electivesList
        self.UpperDivCount = 0

    def addCompleted(self, course):
        newCompleted = self.completed
        newCompleted.append(course)
        self.completed = newCompleted

    def removeCompleted(self, course):
        newCompleted = self.completed
        newCompleted.remove(course)
        self.completed = newCompleted

    def addRequirement(self, course):
        newRequirements = self.requirements
        newRequirements.append(course)
        self.requirements = newRequirements

    def removeRequirement(self, course):
        newRequirements = self.requirements
        newRequirements.remove(course)
        self.requirements = newRequirements

    def removeCompletedFromList(self, courseList):
        for course in courseList:
            newRequirements = self.requirements
            if course in newRequirements:
                newRequirements.remove(course)
            self.requirements = newRequirements
        return self.requirements

    def addCourseChoicesFromList(self, courseChoiceList):
        for course in courseChoiceList:
            newRequirements = self.requirements
            if course not in newRequirements:
                newRequirements.append(course)
            self.requirements = newRequirements
        return self.requirements

    def getElectiveChoices(self):
        return self.electives

    def getRequirements(self):
        return self.requirements

    def getCompleted(self):
        return self.completed

    def updateRequirements(self):
        self.requirements = self.removeCompletedFromList(self.completed)
        self.requirements = self.addCourseChoicesFromList(self.electives)

    def incrementSemester(self):
        # Ensure that graduation input from the website comes in the format of semester-YEAR
        # Year is an integer
        # Semester is a string, F=Fall, S=Spring, or U=Summer
        currentSemester, currentYear = self.currentSemester.split("-")
        if currentSemester == "S":
            currentSemester = "F"
            currentYear = str(int(currentYear))
        elif currentSemester == "F":
            currentSemester = "S"
            currentYear = str(int(currentYear) + 1)
        self.currentSemester = currentSemester + currentYear

    def firstUpperDivCount(self):
        for i in self.completed:
            if int(i.getCourse()) >= 3000:
                self.UpperDivCount += 1
