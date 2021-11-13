import sqlite3

from sqlite3 import Error

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d 


class CoursesDB:
    def __init__(self, course_db):
        self.connection = sqlite3.connect(course_db)
        self.connection.row_factory = dict_factory
        self.cursor = self.connection.cursor()

# READ ALL RECORDS FROM THE DATABASE
    def getAllCourses(self):
        self.cursor.execute("SELECT * FROM mytable")
        courses = self.cursor.fetchall()
        return courses

    def getOneCourse(self, number):
        data = [number]
        self.cursor.execute("SELECT * FROM mytable WHERE Course = ?", data)
        course = self.cursor.fetchone()
        return course

    def getCourseByCreditHour(self, desired_credits):
        data = [desired_credits]
        self.cursor.execute("SELECT * FROM mytable WHERE Credits = ?", data)
        course = self.cursor.fetchall()
        return course
    
    def getCourseByOddYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT * FROM mytable WHERE Odd_Fa = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByOddYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT * FROM mytable WHERE Odd_Sp = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByEvenYearFall(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT * FROM mytable WHERE Evn_Fa = ?", data)
        course = self.cursor.fetchall()
        return course

    def getCourseByEvenYearSpring(self):
        data = ["TRUE"]
        self.cursor.execute("SELECT * FROM mytable WHERE Evn_Sp = ?", data)
        course = self.cursor.fetchall()
        return course

    def getPreReqs(self, number):
        data = [number]
        self.cursor.execute("SELECT Prereqs FROM mytable WHERE Course = ?", data)
        course = self.cursor.fetchall()
        return course
    
    def getCoursesFromPrereqs(self, finished_course):
        data = [finished_course]
        self.cursor.execute("SELECT * FROM mytable")
        rows = self.cursor.fetchall()
        courses = []
        for row in rows:
            if finished_course in row["Prereqs"]:
                courses.append(row)
        return courses

    def getCoursesByPrereqQuantity(self):
        self.cursor.execute("SELECT * FROM mytable")
        rows = self.cursor.fetchall()
        courses = []
        for row in rows:
            row["Prereqs"]
            courses.append(row)
        return courses

    def getRequiredCourses(self):
        self.cursor.execute("SELECT Required FROM mytable")
        courses = self.cursor.fetchall()
        return courses

ma = CoursesDB("ma.db")
se = CoursesDB("se.db")
cs = CoursesDB("cs.db")
print(cs.getPreReqs("CS-3600"))


