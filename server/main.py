import server
import seGenerateSemester
import csGenerateSemester
import maGenerateSemester


def main():
    server.run()
    allInfo = server.MyHandler.getList()
    # print(allInfo)


if __name__ == "__main__":
    main()
