# Graduation-Station

### Purpose

The registration process at Utah Tech University sucks. Degree-Works shows students which classes they need to ultimately complete, but their scheduled availability is not listed on the same website. To gather all relevant information for degree planning, UTU students must load the course catalog, degree works, and the banner registration page.

That's where Graduation-Station comes in. We created a web-based application that generates graduation plans for Computer Science, Software Engineering, and Mathematics majors. Users select their major, which classes they have already completed, and their desired track/electives. Graduation-Station uses this information to generate a manageable, effective degree plan. Our current algorithm outputs a plan that is the fastest degree completion path for a user's unique needs.

### Schema for Database

##### Table Names
CS, SE, MA

##### Schema
id PRIMARY INTEGER KEY,
course TEXT,
title TEXT,
credits INTEGER,
required TEXT,
oddFall TEXT,
oddSpring TEXT,
evenFall TEXT,
evenSpring TEXT,
prereqs TEXT,
rating INTEGER

### Current Bugs

- [x] Input buttons cannot be unpressed
- [x] Multiple track/interest area buttons can be pressed; max should be 1
- [x] Database connection is unsupported in current format
- [ ] Server is not returning a generated schedule

### Planned Features

- [ ] Build an effective web-scraper to gather correct requirements for all majors at UTU
- [ ] Generate and display 3 schedule permutations
- [ ] Account for courses that do not follow the same permission structures as most
- [ ] Implement a "Desired Graduation Date" input feature; rework the backend algorithm
- [ ] Allow users to export a desired plan as a pdf
- [ ] Better the user experience by adding extra features such as hover descriptions in applicable circumstances
- [ ] Create another interest area for the CS degree
- [ ] Identify interest area tracks for the Math degree
- [x] Add a course difficulty rating to all database
- [ ] Re-weight the algorithm to ensure a total semester difficulty does not get too high
- [ ] Explore ways to potentially import generated schedule into the banner registration page. This will need to be accomplished by working with the university
- [ ] Establish a more thorough grammar process for the initial totalString value processing
- [ ] Allow users to go back a page
- [ ] With classes like Competitive Programming and Seminar in Computer Science, after the initial checkbox was marked, have a drop down radio button to see how many times the class was taken. This will help with schedule generation.
