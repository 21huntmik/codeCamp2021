from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs
import json
import generate as g


class MyHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        # -- if you add this... delete all of these headers
        self.send_header("Access-Control-Allow-Origin", self.headers["Origin"])
        # add access control allow origin because it will help on Thursday
        self.send_header("Access-Control-Allow-Credentials",
                         "true")  # is this right??
        # call the actual self.end_headers()
        BaseHTTPRequestHandler.end_headers(self)

    def handleNotFound(self):
        self.send_response(404)
        self.send_header("Allow-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(bytes("Not Found", "utf-8"))

    def handleGetList(self):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Allow-Control-Allow-Origin", "*")
        self.end_headers()

    def createList(self):
        length = int(self.headers['Content-Length'])
        body = self.rfile.read(length).decode('utf-8')
        listItems = body
        inputComponents = listItems.split(' ')
        major = inputComponents[0]
        completed = inputComponents[1]
        electives = inputComponents[2]
        electives = electives.split('|')
        completed = completed.split("|")
        setOfNPlans = {}
        for i in range(100):
            newCompleted = completed[:]
            newElectives = electives[:]

            totalPlan, planScore = g.generatePlan(
                i, major, newCompleted, newElectives)
            outputPlan = []

            # Generates the printed out list in python
            for semester in totalPlan:
                creditCount = 0
                currentSemesterList = []
                currentSemesterList.append(semester)
                for course in totalPlan[semester]:
                    currentSemesterList.append(f" {course}")
                    creditCount += totalPlan[semester][course]['credits']
                currentSemesterList.append(f"Total credits: {creditCount}")
                outputPlan.append(currentSemesterList)

            # Generates the list of dictionaries
            setOfNPlans[planScore+(i/100)] = outputPlan
        sortedPlans = sorted(setOfNPlans.items())
        finalThreePlans = []
        finalThreePlans.append(sortedPlans[0:3])
        final = finalThreePlans[0]
        for i in finalThreePlans:
            final.append(i[1][1][1])
        finalFinal = []
        for i in final:
            finalFinal.append(i[1])
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(bytes(json.dumps(finalFinal), "utf-8"))

    def getList(self):
        listItems = self.createList()
        listItems = listItems[:-1]
        return listItems

    def do_POST(self):
        if self.path == '/grad':
            self.createList()
        else:
            self.handleNotFound()


def run():
    listen = ("127.0.0.1", 8080)
    server = HTTPServer(listen, MyHandler)
    print("Starting server, use <Ctrl-C> to stop")
    server.serve_forever()


run()
