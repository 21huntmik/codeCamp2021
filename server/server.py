from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs
import json
import seGenerateSemester
import csGenerateSemester
import maGenerateSemester
import itGenerateSemester


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
        #print("createList was called.\n\n")
        #print("priting body:")
        # print(body)
        # print("\n\n")
        #parsed_body = parse_qs(body)
        #print("Printing Parsed-Body:\n\n")
        # print(parsed_body)
        listItems = body
        #listItems = body['item'][1]
        #listItems = parsed_body[1]
        # print(listItems)
        inputComponents = listItems.split(' ')
        print("Printing inputComponents:")
        print(inputComponents)
        print("\n\n")
        major = inputComponents[0]
        #print("Printing major:")
        # print(major)
        # print("\n\n")
        completed = inputComponents[1]
        #print("Printing completed:")
        # print(completed)
        # print("\n\n")
        electives = inputComponents[2]
        electives = electives.split('|')
        print("Printing electives:")
        print(electives)
        print("\n\n")
        completed = completed.split("|")
        setOfNPlans = {}
        for i in range(5):
            if major == "se":
                totalPlan = (seGenerateSemester.generatePlan(
                    completed, electives))
            elif major == "cs":
                totalPlan, planScore = (csGenerateSemester.generatePlan(i,
                                                                        completed, electives))
            elif major == "ma":
                totalPlan = (maGenerateSemester.generatePlan(
                    completed, electives))
            elif major == "it":
                totalPlan = (itGenerateSemester.generatePlan(
                    completed, electives))
            # print("/n/n")
            # print(totalPlan)
            outputPlan = []
            for semester in totalPlan:
                creditCount = 0
                currentSemesterList = []
                currentSemesterList.append(semester)
                for course in totalPlan[semester]:
                    currentSemesterList.append(f" {course}")
                    creditCount += totalPlan[semester][course]['credits']
                currentSemesterList.append(f"Total credits: {creditCount}")
                outputPlan.append(currentSemesterList)
            setOfNPlans[planScore+i] = outputPlan
        for i in setOfNPlans:
            print(f"Plan: {setOfNPlans[i]}")
            print(f"Score: {i}")
        sortedPlans = sorted(setOfNPlans.items())
        finalThreePlans = []
        for i in range(3):
            finalThreePlans.append(sortedPlans[i])
        print("Printing finalThreePlans:")
        print(finalThreePlans)
        # print(outputPlan)
        # for i in outputPlan:
        # for x in i[:-1]:
        # print(x)
        # print(i[-1])
        # print("\n\n")
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(bytes(json.dumps(finalThreePlans), "utf-8"))

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
