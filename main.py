import server
import seGenerateSemester
import csGenerateSemester
import maGenerateSemester


def main():
    server.run()
    allInfo = server.MyHandler.getList()
    major, electives, completed = allInfo.split("&")
    electives = electives.split("|")
    completed = completed.split("|")
    if major == "se":
        print(seGenerateSemester.generatePlan(completed, electives))
    elif major == "cs":
        print(csGenerateSemester.generatePlan(completed, electives))
    elif major == "ma":
        print(maGenerateSemester.generatePlan(completed, electives))


if __name__ == "__main__":
    main()
