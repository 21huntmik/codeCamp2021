from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs


class MyHandler(BaseHTTPRequestHandler):
    def handleNotFound(self):
        self.send_response(404)
        self.send_header("Allow-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(bytes("Not Found", "utf-8"))

    def createList(self):
        body = self.rfile.read(self.headers(
            ['Content-Length'])).decode('utf-8')
        parsed_body = parse_qs(body)
        listItems = parsed_body['item'][0]
        listItems = listItems.split('|')
        return listItems

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
