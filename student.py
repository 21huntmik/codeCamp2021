class Student:
    def __init__(self, name, school, major):
        self.name = name
        self.major = major
        self.completed = []
        self.requirements = []

    def addCompleted(self, course):
        self.completed.append(course)

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
