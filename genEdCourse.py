
# Course class utilizes only course codes, not course names
# This way we avoid larger data structures, as the course ID serves as a key in the hash table of course requirements
class genEdCourse:
    def __init__(self, ID, credits, tag):  # only one that has a new input
        self.ID = ID
        self.prereqs = []
        self.semesters = []
        self.year = []
        self.coreqs = []
        self.tag = tag
        self.credits = credits
        self.area = ""

    def getCourse(self):
        return self.ID

    def addPrereq(self, prereq):
        self.prereqs.append(prereq)

    def removePrereq(self, prereq):
        self.prereqs.remove(prereq)

    def getPrereqs(self):
        return self.prereqs

    def getSemesterOffered(self):
        return self.semesters

    def addSemester(self, semester):
        self.semesters.append(semester)

    def removeSemester(self, semester):
        self.semesters.remove(semester)

    def addCoreq(self, coreq):
        self.coreqs.append(coreq)

    def removeCoreq(self, coreq):
        self.coreqs.remove(coreq)

    def getCoreqs(self):
        return self.coreqs

    def getYear(self):
        return self.year

    def getArea(self):
        return self.area
