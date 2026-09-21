var canFinish = function (numCourses, prerequisites) {
  // STEP 1 — what each course unlocks, and how many locks each one has
  const unlocks = Array.from({ length: numCourses }, () => []);
  const locksLeft = new Array(numCourses).fill(0);

  console.log("unlocks", unlocks);
  console.log("locksLeft", locksLeft);

  // STEP 2 — read every prerequisite pair
  for (let i = 0; i < prerequisites.length; i++) {
    const course = prerequisites[i][0];
    const pre = prerequisites[i][1];
    unlocks[pre].push(course);
    locksLeft[course] = locksLeft[course] + 1;
  }

  console.log("unlocks", unlocks);
  console.log("locksLeft", locksLeft);

  // STEP 3 — courses with no locks can start immediately
  const queue = [];
  for (let c = 0; c < numCourses; c++) {
    if (locksLeft[c] === 0) {
      queue.push(c);
    }
  }

  console.log("queue", queue);

  // STEP 4 — take courses; each one taken may unlock others
  let taken = 0;
  for (let i = 0; i < queue.length; i++) {
    console.log("inside loop");
    const course = queue[i];
    console.log("course", course);
    taken = taken + 1;

    const freedByThisCourse = unlocks[course];
    console.log("freedByThisCourse", freedByThisCourse);
    for (let j = 0; j < freedByThisCourse.length; j++) {
      const next = freedByThisCourse[j];

      locksLeft[next] = locksLeft[next] - 1; // one lock opened
      const remaining = locksLeft[next]; // how many left?

      console.log("remaining", remaining, next);

      if (remaining === 0) {
        // none — it's free
        queue.push(next);
        console.log("queue", queue);
      }
    }
  }

  // STEP 5 — did we get through all of them?
  return taken === numCourses;
};

console.log(
  canFinish(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
);
