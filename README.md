# Graduation-Station

## Purpose

The registration process at Utah Tech University sucks. Degree-Works shows students which classes they need to ultimately complete, but their scheduled availability is not listed on the same website. To gather all relevant information for degree planning, UTU students must load the course catalog, degree works, and the banner registration page.

That's where Graduation-Station comes in. We created a web-based application that generates graduation plans for Computer Science, Software Engineering, and Mathematics majors. Users select their major, which classes they have already completed, and their desired track/electives. Graduation-Station uses this information to generate a manageable, effective degree plan. Our current algorithm outputs a plan that is the fastest degree completion path for a user's unique needs.

### Schema for Database

#### Table Names

CS, SE, MA, IT

#### Schema

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

- [x] No variability in CS final math course selection.
- [x] Mystery IT-3300 not registering
- [ ] Math prereqs
- [ ] Not registering 2010 as taken 

### Features Actively in Development

- [x] Allow functionality for IT major
- [x] Change CS from having theory/app dev elective choices to allowing full elective selection
- [x] Allow users to select which math class they would like to take
- [x] Implement system to generate 100 different schedules
- [x] Design and build a ranking system for schedules
- [x] Produce 3 best plans to the front-end
- [x] 3 schedule permutation front end display prototype
- [x] "Desired Graduation Date" input (just front end, not functional)
- [x] Hover Descriptions
- [x] General Education Requirements

### Planned Features

- [ ] Build an effective web-scraper to gather correct requirements for all majors at UTU
- [x] Generate and display 3 schedule permutations
- [x] Account for courses that do not follow the same permission structures as most
- [x] Implement a "Desired Graduation Date" input feature; rework the backend algorithm
- [x] Allow users to export a desired plan as a pdf
- [x] Better the user experience by adding extra features such as hover descriptions in applicable circumstances
- [x] Add a course difficulty rating to all database
- [x] Re-weight the algorithm to ensure a total semester difficulty does not get too high
- [ ] Explore ways to potentially import generated schedule into the banner registration page. This will need to be accomplished by working with the university
- [x] Allow users to go back a page
- [ ] With classes like Competitive Programming and Seminar in Computer Science, after the initial checkbox was marked, have a drop down radio button to see how many times the class was taken. This will help with schedule generation.
- [x] Restructure the entire backend. Reduce code to half.
