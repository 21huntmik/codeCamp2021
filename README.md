# Graduation-Station

### Purpose

The registration process at Utah Tech University sucks. Degree-Works shows students which classes they need to ultimately complete, but their scheduled availability is not listed on the same website. To gather all relevant information for degree planning, UTU students must load the course catalog, degree works, and the banner registration page.

That's where Graduation-Station comes in. We created a web-based application that generates graduation plans for Computer Science, Software Engineering, and Mathematics majors. Users select their major, which classes they have already completed, and their desired track/electives. Graduation-Station uses this information to generate a manageable, effective degree plan. Our current algorithm outputs a plan that is the fastest degree completion path for a user's unique needs.

### Current Bugs

- [] Input buttons cannot be unpressed
- [] Multiple track/interest area buttons can be pressed; max should be 1
- [] Database connection is unsupported in current format

### Planned Features

- [] Build an effective web-scraper to gather correct requirements for all majors at UTU
- [] Generate and display 3 schedule permutations
- [] Account for courses that do not follow the same permission structures as most
- [] Implement a "Desired Graduation Date" input feature; rework the backend algorithm
- [] Allow users to export a desired plan as a pdf
- [] Create another interest area for the CS degree
- [] Identify interest area tracks for the Math degree
- [] Add a course difficulty rating to all database
- [] Re-weight the algorithm to ensure a total semester difficulty does not get too high
