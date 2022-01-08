from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs
import json
import seGenerateSemester
import csGenerateSemester
import maGenerateSemester


class MyHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", self.headers["Origin"]) #-- if you add this... delete all of these headers
        #add access control allow origin because it will help on Thursday
        self.send_header("Access-Control-Allow-Credentials", "true") #is this right??
        BaseHTTPRequestHandler.end_headers(self) #call the actual self.end_headers()

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
        print("createList was called.\n\n")
        print("priting body:\n\n")
        print(body)
        #parsed_body = parse_qs(body)
        #print("Printing Parsed-Body:\n\n")
        # print(parsed_body)
        listItems = body
        #listItems = body['item'][1]
        #listItems = parsed_body[1]
        print(listItems)
        inputComponents = listItems.split(' ')
        print("Printing inputComponents:\n\n")
        print(inputComponents)
        major = inputComponents[0]
        print("Printing major:\n\n")
        print(major)
        electives = inputComponents[2]
        print("Printing electives:\n\n")
        print(electives)
        completed = inputComponents[1]
        print("Printing completed:\n\n")
        print(completed)
        print("\n\n")
        completed = completed.split("|")
        if major == "se":
            totalPlan = (seGenerateSemester.generatePlan(completed, electives))
        elif major == "cs":
            totalPlan = (csGenerateSemester.generatePlan(completed, electives))
        elif major == "ma":
            totalPlan = (maGenerateSemester.generatePlan(completed, electives))
        print("/n/n")
        print(totalPlan)
        outputPlan = []
        for semester in totalPlan:
            currentSemesterList = []
            currentSemesterList.append(semester)
            for course in totalPlan[semester]:
                information_string = f"{course}\t\t\t{totalPlan[semester][course]['credits']} credits"
                currentSemesterList.append(information_string)
            outputPlan.append(currentSemesterList)

        for i in outputPlan:
            print(i)
            for x in i:
                print(x)
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(bytes(json.dumps(outputPlan), "utf-8"))

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
