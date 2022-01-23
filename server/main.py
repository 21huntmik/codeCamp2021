import server


def main():
    server.run()
    allInfo = server.MyHandler.getList()
    # print(allInfo)


if __name__ == "__main__":
    main()
