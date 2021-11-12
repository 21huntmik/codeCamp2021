class Student:
    def __init__(self, name, major, gradDate):
        self.name = name
        self.major = major
        self.completed = []
        self.requirements = []
        self.UpperDivCount = 0
        self.graduationYear = 0
        self.gradDate = gradDate
        self.graduationSemester = ""

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

    def getCompleted(self):
        return self.completed

    def getRequirements(self):
        return self.requirements

    # Ensure that graduation input from the website comes in the format of semesterYEAR
    # Year is an integer
    # Semester is a string, F=Fall, S=Spring, or U=Summer
    def getGradSemester(self):
        gradSemester = self.gradDate[0]
        return gradSemester

    def getGradYear(self):
        gradYear = self.gradDate[1:]
        return int(gradYear)
