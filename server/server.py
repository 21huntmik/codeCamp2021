from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs
import json
import trial as db
import seGenerateSemester
import csGenerateSemester
import maGenerateSemester


class MyHandler(BaseHTTPRequestHandler):
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
        print(body)
        parsed_body = parse_qs(body)
        print(parsed_body)
        listItems = parsed_body['item'][0]
        inputComponents = listItems.split(' ')
        major = inputComponents[0]
        electives = inputComponents[1]
        completed = inputComponents[2]
        electives = electives.split("|")
        completed = completed.split("|")
        if major == "se":
            totalPlan = (seGenerateSemester.generatePlan(completed, electives))
        elif major == "cs":
            totalPlan = (csGenerateSemester.generatePlan(completed, electives))
        elif major == "ma":
            totalPlan = (maGenerateSemester.generatePlan(completed, electives))
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Allow-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(bytes(json.dumps(totalPlan), "utf-8"))

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
