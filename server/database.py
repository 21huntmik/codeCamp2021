import sqlite3

from sqlite3 import Error


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


class tableDB:
    def __init__(self, major):
        self.major = major.upper()
        self.connection = sqlite3.connect(
            "schedules.db")
        self.connection.row_factory = dict_factory
        self.cursor = self.connection.cursor()

# READ ALL RECORDS FROM THE DATABASE
    def getAllCourses(self):
        print(self.major)
        self.cursor.execute(f"SELECT * FROM {self.major}")
        return self.cursor.fetchall()

    def getOneCourse(self, number):
        data = [number]
        self.cursor.execute(
            f"SELECT * FROM {self.major} WHERE Course = ?", data)
        course = self.cursor.fetchone()
        return course

    def getCourseByCreditHour(self, desired_credits):
        data = [desired_credits]
        self.cursor.execute(
            f"SELECT * FROM {self.major} WHERE Credits = ?", data)
        return self.cursor.fetchall()

    def getCourseCredits(self, course):
        data = [course]
        self.cursor.execute(
            f"SELECT credits FROM {self.major} WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseRanking(self, course):
        data = [course]
        self.cursor.execute(
            f"SELECT rating FROM {self.major} WHERE course = ?", data)
        credits = self.cursor.fetchone()
        return credits

    def getCourseByOddYearFall(self):
        data = ["TRUE"]
        self.cursor.execute(
            f"SELECT course FROM {self.major} WHERE oddFall = ?", data)
        return self.cursor.fetchall()

    def getCourseByOddYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute(
            f"SELECT course FROM {self.major} WHERE oddSpring = ?", data)
        return self.cursor.fetchall()

    def getCourseByEvenYearFall(self):
        data = ["TRUE"]
        self.cursor.execute(
            f"SELECT course FROM {self.major} WHERE evenFall = ?", data)
        return self.cursor.fetchall()

    def getCourseByEvenYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute(
            f"SELECT course FROM {self.major} WHERE evenSpring = ?", data)
        return self.cursor.fetchall()

    def getPreReqs(self, course):
        data = [course]
        self.cursor.execute(
            f"SELECT prereqs FROM {self.major} WHERE course = ?", data)
        return self.cursor.fetchone()

    def getRequiredCourses(self):
        data = ["TRUE"]
        self.cursor.execute(
            f"SELECT course FROM {self.major} WHERE required = ?", data)
        courses = self.cursor.fetchall()
        return courses
