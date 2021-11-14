# Backend Algorithm Updates

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
- Process to identify chunk size limitation conditions


