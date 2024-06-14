type employee = {
  name: string;
  department: string;
};

type player = {
  team: string;
};

type combinedType = employee & player;

const employeeData: combinedType = {
  name: "Hello",
  department: "IT",
  team: "CodeScratcher",
  //   rate: 5
};
