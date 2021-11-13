class Student:
    def __init__(self, major, currentSemester, completedList, requirementsList, electivesList):
        self.major = major
        self.completed = completedList
        self.requirements = requirementsList
        self.currentSemester = currentSemester
        self.electives = electivesList
        self.UpperDivCount = 0

    def addCompleted(self, course):
        self.completed.append(course)
        if int(self.course.getCourse()) >= 3000:
            self.UpperDivCount += 1

    def removeCompleted(self, course):
        self.completed.remove(course)

    def addRequirement(self, course):
        self.requirements.append(course)

    def removeRequirement(self, course):
        self.requirements.remove(course)

    def removeCompletedFromList(self, courseList):
        for course in courseList:
            self.requirements.remove(course)
        return self.requirements

    def addCouseChoicesFromList(self, courseChoiceList):
        for course in courseChoiceList:
            self.requirements.append(course)
        return self.requirements

    def getElectiveChoices(self):
        return self.electives

    def getRequirements(self):
        return self.requirements

    def getCompleted(self):
        return self.completed

    def updateRequirements(self):
        self.requirements = self.removeCompletedFromList(self.completed)
        self.requirements = self.addCouseChoicesFromList(self.electives)

    def incrementSemester(self):
        # Ensure that graduation input from the website comes in the format of semester-YEAR
        # Year is an integer
        # Semester is a string, F=Fall, S=Spring, or U=Summer
        currentSemester, currentYear = self.currentSemester.split("-")
        if currentSemester == "SP":
            currentSemester = "FA"
            currentYear = str(int(currentYear))
        elif currentSemester == "FA":
            currentSemester = "SP"
            currentYear = str(int(currentYear) + 1)
        self.currentSemester = currentSemester + "-" + currentYear

    def getGradSemester(self):
        gradSemester = self.gradDate[0]
        return gradSemester

    def getGradYear(self):
        gradYear = self.gradDate[1:]
        return int(gradYear)

    def firstUpperDivCount(self):
        for i in self.completed:
            if int(i.getCourse()) >= 3000:
                self.UpperDivCount += 1
