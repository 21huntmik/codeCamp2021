import sqlite3

from sqlite3 import Error


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


class csDB:
    def __init__(self):
        self.connection = sqlite3.connect("schedules.db")
        self.connection.row_factory = dict_factory
        self.cursor = self.connection.cursor()

# READ ALL RECORDS FROM THE DATABASE
    def getAllCourses(self):
        self.cursor.execute("SELECT * FROM CS")
        courses = self.cursor.fetchall()
        return courses

    def getOneCourse(self, number):
        data = [number]
        self.cursor.execute("SELECT * FROM CS WHERE Course = ?", data)
        course = self.cursor.fetchone()
        return course

    def getCourseByCreditHour(self, desired_credits):
        data = [desired_credits]
        self.cursor.execute("SELECT * FROM CS WHERE Credits = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseCredits(self, course):
        return course["Credits"]

    def getCourseByOddYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM CS WHERE oddFall = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByOddYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM CS WHERE oddSpring = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByEvenYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM CS WHERE evenFall = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByEvenYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM CS WHERE evenSpring = ?", data)
        course = self.cursor.fetchall()
        return course

    def getPreReqs(self, number):
        data = [number]
        self.cursor.execute(
            "SELECT Prereqs FROM CS WHERE Course = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCoursesFromPrereqs(self, finished_course):
        data = [finished_course]
        self.cursor.execute("SELECT * FROM CS")
        rows = self.cursor.fetchall()
        courses = []
        for row in rows:
            if finished_course in row["Prereqs"]:
                courses.append(row)
        return courses

    def getCoursesByPrereqQuantity(self):
        self.cursor.execute("SELECT * FROM CS")
        rows = self.cursor.fetchall()
        courses = []
        for row in rows:
            row["Prereqs"]
            courses.append(row)
        return courses

    def getRequiredCourses(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT * FROM CS WHERE required = ?", data)
        courses = self.cursor.fetchall()
        print(courses)
        return courses

    def getPrereqsOfReq(self):
        req_courses = self.getRequiredCourses()
        pre_reqs = []
        for course in req_courses:
            if course["Prereqs"]:
                req_w_prereq = [course["Course"], course["Prereqs"]]
                pre_reqs.append(req_w_prereq)
        return pre_reqs
