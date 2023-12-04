function projectsCreations([architectName, projectsCount]) {
  const hoursPerProject = 3;
  const totalHours = projectsCount * hoursPerProject;
  const result = `The architect ${architectName} will need ${totalHours} hours to complete ${projectsCount} project/s.`;

  console.log(result);
}

projectsCreations(["Sanya", "9"]);
