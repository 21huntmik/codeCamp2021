import sqlite3

from sqlite3 import Error


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


class csDB:
    def __init__(self):
        self.connection = sqlite3.connect(
            "/Users/david/Desktop/FinalCodeCamp/codeCamp2021/server/schedules.db")
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
        data = [course]
        self.cursor.execute("SELECT credits FROM CS WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

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

    def getPreReqs(self, course):
        data = [course]
        self.cursor.execute("SELECT prereqs FROM CS WHERE course = ?", data)
        courses = self.cursor.fetchone()
        return courses

    def getRequiredCourses(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM CS WHERE required = ?", data)
        courses = self.cursor.fetchall()
        # print(courses)
        return courses


class maDB:
    def __init__(self):
        self.connection = sqlite3.connect(
            "/Users/david/Desktop/FinalCodeCamp/codeCamp2021/server/schedules.db")
        self.connection.row_factory = dict_factory
        self.cursor = self.connection.cursor()

# READ ALL RECORDS FROM THE DATABASE
    def getAllCourses(self):
        self.cursor.execute("SELECT * FROM MA")
        courses = self.cursor.fetchall()
        return courses

    def getOneCourse(self, number):
        data = [number]
        self.cursor.execute("SELECT * FROM MA WHERE Course = ?", data)
        course = self.cursor.fetchone()
        return course

    def getCourseByCreditHour(self, desired_credits):
        data = [desired_credits]
        self.cursor.execute("SELECT * FROM MA WHERE Credits = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseCredits(self, course):
        data = [course]
        self.cursor.execute("SELECT credits FROM MA WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseByOddYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM MA WHERE oddFall = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByOddYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM MA WHERE oddSpring = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByEvenYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM MA WHERE evenFall = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByEvenYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM MA WHERE evenSpring = ?", data)
        course = self.cursor.fetchall()
        return course

    def getPreReqs(self, course):
        data = [course]
        self.cursor.execute("SELECT prereqs FROM MA WHERE course = ?", data)
        courses = self.cursor.fetchone()
        return courses

    def getRequiredCourses(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM MA WHERE required = ?", data)
        courses = self.cursor.fetchall()
        # print(courses)
        return courses


class seDB:
    def __init__(self):
        self.connection = sqlite3.connect(
            "/Users/david/Desktop/FinalCodeCamp/codeCamp2021/server/schedules.db")
        self.connection.row_factory = dict_factory
        self.cursor = self.connection.cursor()

# READ ALL RECORDS FROM THE DATABASE
    def getAllCourses(self):
        self.cursor.execute("SELECT * FROM SE")
        courses = self.cursor.fetchall()
        return courses

    def getOneCourse(self, number):
        data = [number]
        self.cursor.execute("SELECT * FROM SE WHERE Course = ?", data)
        course = self.cursor.fetchone()
        return course

    def getCourseByCreditHour(self, desired_credits):
        data = [desired_credits]
        self.cursor.execute("SELECT * FROM SE WHERE Credits = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseCredits(self, course):
        data = [course]
        self.cursor.execute("SELECT credits FROM SE WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseByOddYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM SE WHERE oddFall = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByOddYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM SE WHERE oddSpring = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByEvenYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM SE WHERE evenFall = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByEvenYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM SE WHERE evenSpring = ?", data)
        course = self.cursor.fetchall()
        return course

    def getPreReqs(self, course):
        data = [course]
        self.cursor.execute("SELECT prereqs FROM SE WHERE course = ?", data)
        courses = self.cursor.fetchone()
        return courses

    def getRequiredCourses(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM SE WHERE required = ?", data)
        courses = self.cursor.fetchall()
        # print(courses)
        return courses
