#Database Bug Information & Possible Solution

I think the problem is that we have too many databases. Typically you have one database with multiple tables of data within. If we take all of the tables from the current databases and compile it into one database, that should solve our problem. We will have to go through and edit some of the server code, but it shouldn't be too bad. 

##Here are the steps we need to take to fix the bug:
* Take information and paste it into https://jsonformatter.curiousconcept.com/
* Take the JSON-formatted information and double check to make sure it looks good. Make sure the table name is relevant
* use vim to create a database file (ex. vim database.db) and paste tables into the file
* Go through server code and edit it to access specific tables within the database
* Ta-da!! Done!!
