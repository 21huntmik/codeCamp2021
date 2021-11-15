# Backend Algorithm Updates

## Allowing for Plan Permutations

### Difficulty Scoring System

- Each course has a difficulty score 1-3
- Semester Difficulty is also evaluated
- Total Schedule difficulty level is applied to the final plan output
  - these values are saved in an array with the same indexing pattern
- Selection system needs to be employed for picking the proposed X schedules

### Segmented Randomization

- There are important architecture components to consider here.
- Proper randomization is the only way to ensure a high number of generated permutations.
- Going too high with generated permutations should also be avoided.
- Pre-calculating a few chunk-component-limited permutation keys and sizes would be smart. Identify the best ones.

### What to define?

- Formal scoring algorithm that reflects a nonlinear scoring scale

  - Semester rating = 3^(countOfCoursesRated3+1) + 2^(countOfCoursesRated2+1) + 2(countOfCoursesRated1)

    - Example Schedule 1 (format course - rating):
      - CS 3005 - 3
      - CS 2810 - 2
      - Math 1210 - 3
      - Filler - 1
      - MidRangeFiller - 1
      - 3^(3) + 2^(2) + 2(2) = 27 + 4 + 4 = 35
    - Example Schedule 2 (format course - rating):
      - CS 2420 - 2
      - CS 2810 - 2
      - MA 2270 - 2
      - CS 3200 - 2
      - Filler - 1
      - 3^(1) + 2^(5) + 2 = 37

  - Identify chunks that the algorithm selects from where the total score derivation remains reasonable

- Process to identify chunk size limitation conditions
