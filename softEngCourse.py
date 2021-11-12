
# Course class utilizes only course codes, not course names
# This way we avoid larger data structures, as the course ID serves as a key in the hash table of course requirements
class softEngCourse:
    def __init__(self, ID, credits):
        self.ID = ID
        self.prereqs = []
        self.semesters = []
        self.coreqs = []
        self.tag = "SE"
        self.credits = credits

    def __repr__(self):
        return self.name

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
