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
        return self.cursor.fetchall()

    def getOneCourse(self, number):
        data = [number]
        self.cursor.execute("SELECT * FROM CS WHERE Course = ?", data)
        course = self.cursor.fetchone()
        return course

    def getCourseByCreditHour(self, desired_credits):
        data = [desired_credits]
        self.cursor.execute("SELECT * FROM CS WHERE Credits = ?", data)
        return self.cursor.fetchall()

    def getCourseCredits(self, course):
        data = [course]
        self.cursor.execute("SELECT credits FROM CS WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseRanking(self, course):
        data = [course]
        self.cursor.execute("SELECT rating FROM CS WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseByOddYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM CS WHERE oddFall = ?", data)
        return self.cursor.fetchall()

    def getCourseByOddYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM CS WHERE oddSpring = ?", data)
        return self.cursor.fetchall()

    def getCourseByEvenYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM CS WHERE evenFall = ?", data)
        return self.cursor.fetchall()

    def getCourseByEvenYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM CS WHERE evenSpring = ?", data)
        return self.cursor.fetchall()

    def getPreReqs(self, course):
        data = [course]
        self.cursor.execute("SELECT prereqs FROM CS WHERE course = ?", data)
        return self.cursor.fetchone()

    def getRequiredCourses(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM CS WHERE required = ?", data)
        courses = self.cursor.fetchall()
        return courses


class maDB:
    def __init__(self):
        self.connection = sqlite3.connect(
            "/Users/david/Desktop/untitled folder/server/schedules.db")
        self.connection.row_factory = dict_factory
        self.cursor = self.connection.cursor()

# READ ALL RECORDS FROM THE DATABASE
    def getAllCourses(self):
        self.cursor.execute("SELECT * FROM MA")
        return self.cursor.fetchall()

    def getOneCourse(self, number):
        data = [number]
        self.cursor.execute("SELECT * FROM MA WHERE Course = ?", data)
        course = self.cursor.fetchone()
        return course

    def getCourseRanking(self, course):
        data = [course]
        self.cursor.execute("SELECT rating FROM MA WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseByCreditHour(self, desired_credits):
        data = [desired_credits]
        self.cursor.execute("SELECT * FROM MA WHERE Credits = ?", data)
        return self.cursor.fetchall()

    def getCourseCredits(self, course):
        data = [course]
        self.cursor.execute("SELECT credits FROM MA WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseByOddYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM MA WHERE oddFall = ?", data)
        return self.cursor.fetchall()

    def getCourseByOddYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM MA WHERE oddSpring = ?", data)
        return self.cursor.fetchall()

    def getCourseByEvenYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM MA WHERE evenFall = ?", data)
        return self.cursor.fetchall()

    def getCourseByEvenYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM MA WHERE evenSpring = ?", data)
        return self.cursor.fetchall()

    def getPreReqs(self, course):
        data = [course]
        self.cursor.execute("SELECT prereqs FROM MA WHERE course = ?", data)
        return self.cursor.fetchone()

    def getRequiredCourses(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM MA WHERE required = ?", data)
        courses = self.cursor.fetchall()
        return courses


class seDB:
    def __init__(self):
        self.connection = sqlite3.connect("schedules.db")
        self.connection.row_factory = dict_factory
        self.cursor = self.connection.cursor()

# READ ALL RECORDS FROM THE DATABASE
    def getAllCourses(self):
        self.cursor.execute("SELECT * FROM SE")
        return self.cursor.fetchall()

    def getOneCourse(self, number):
        data = [number]
        self.cursor.execute("SELECT * FROM SE WHERE Course = ?", data)
        course = self.cursor.fetchone()
        return course

    def getCourseByCreditHour(self, desired_credits):
        data = [desired_credits]
        self.cursor.execute("SELECT * FROM SE WHERE Credits = ?", data)
        return self.cursor.fetchall()

    def getCourseRanking(self, course):
        data = [course]
        self.cursor.execute("SELECT rating FROM SE WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseCredits(self, course):
        data = [course]
        self.cursor.execute("SELECT credits FROM SE WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseByOddYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM SE WHERE oddFall = ?", data)
        return self.cursor.fetchall()

    def getCourseByOddYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM SE WHERE oddSpring = ?", data)
        return self.cursor.fetchall()

    def getCourseByEvenYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM SE WHERE evenFall = ?", data)
        return self.cursor.fetchall()

    def getCourseByEvenYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM SE WHERE evenSpring = ?", data)
        return self.cursor.fetchall()

    def getPreReqs(self, course):
        data = [course]
        self.cursor.execute("SELECT prereqs FROM SE WHERE course = ?", data)
        return self.cursor.fetchone()

    def getRequiredCourses(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM SE WHERE required = ?", data)
        return self.cursor.fetchall()


class itDB:
    def __init__(self):
        self.connection = sqlite3.connect("schedules.db")
        self.connection.row_factory = dict_factory
        self.cursor = self.connection.cursor()

# READ ALL RECORDS FROM THE DATABASE
    def getAllCourses(self):
        self.cursor.execute("SELECT * FROM IT")
        return self.cursor.fetchall()

    def getOneCourse(self, number):
        data = [number]
        self.cursor.execute("SELECT * FROM IT WHERE Course = ?", data)
        return self.cursor.fetchone()

    def getCourseByCreditHour(self, desired_credits):
        data = [desired_credits]
        self.cursor.execute("SELECT * FROM IT WHERE Credits = ?", data)
        return self.cursor.fetchall()

    def getCourseRanking(self, course):
        data = [course]
        self.cursor.execute("SELECT rating FROM IT WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseCredits(self, course):
        data = [course]
        self.cursor.execute("SELECT credits FROM IT WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseByOddYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM IT WHERE oddFall = ?", data)
        return self.cursor.fetchall()

    def getCourseByOddYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM IT WHERE oddSpring = ?", data)
        return self.cursor.fetchall()

    def getCourseByEvenYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM IT WHERE evenFall = ?", data)
        return self.cursor.fetchall()

    def getCourseByEvenYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM IT WHERE evenSpring = ?", data)
        return self.cursor.fetchall()

    def getPreReqs(self, course):
        data = [course]
        self.cursor.execute("SELECT prereqs FROM IT WHERE course = ?", data)
        return self.cursor.fetchone()

    def getRequiredCourses(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT course FROM IT WHERE required = ?", data)
        return self.cursor.fetchall()
