// ===============================
// Employee Pay Slip Example
// ===============================
function generatePaySlip() {
  const employeeID = 10101;
  const employeeName = "Galeti Vamsee Krishna";
  const department = "Software Development";
  const designation = "Frontend Developer";
  const universalAccountNumber = 101655335197;
  const bankAccountNumber = 123456789012;
  const ifscCode = "HDFC0001234";

  let month = "September";
  let totalWorkingDays = 30;
  let leavesTaken = 2;
  let basicSalary = 40000;
  let hra = 15000;
  let allowances = 5000;
  let deductions = 2000;

  // Calculate net salary
  let grossSalary = basicSalary + hra + allowances;
  let salaryPerDay = grossSalary / totalWorkingDays;
  let salaryAfterLeaves = grossSalary - (leavesTaken * salaryPerDay);
  let netSalary = salaryAfterLeaves - deductions;

  // Display Pay Slip
  console.clear();
  console.log("==================================");
  console.log("         Employee Pay Slip         ");
  console.log("==================================");
  console.log(`Employee ID        : ${employeeID}`);
  console.log(`Employee Name      : ${employeeName}`);
  console.log(`Department         : ${department}`);
  console.log(`Designation        : ${designation}`);
  console.log(`UAN                : ${universalAccountNumber}`);
  console.log(`Bank A/C No        : ${bankAccountNumber}`);
  console.log(`IFSC Code          : ${ifscCode}`);
  console.log("----------------------------------");
  console.log(`Month              : ${month}`);
  console.log(`Working Days       : ${totalWorkingDays}`);
  console.log(`Leaves Taken       : ${leavesTaken}`);
  console.log("----------------------------------");
  console.log(`Basic Salary       : ₹${basicSalary}`);
  console.log(`HRA                : ₹${hra}`);
  console.log(`Allowances         : ₹${allowances}`);
  console.log(`Gross Salary       : ₹${grossSalary}`);
  console.log(`Deductions         : ₹${deductions}`);
  console.log("----------------------------------");
  console.log(`Net Salary         : ₹${netSalary}`);
  console.log("==================================");
}

// Attach to button
document.getElementById("showSlip").addEventListener("click", generatePaySlip);


// ===============================
// var vs let vs const
// ===============================
var city = "Hyderabad";
var city = "Bangalore"; // redeclaration allowed
console.log("City with var:", city);

let state = "Telangana";
state = "Karnataka"; // reinit allowed
console.log("State with let:", state);

const country = "India";
console.log("Country with const:", country);

// Naming rules
const employeeId = 123456;
let employee_name = "Vamsee";
let EmployeeName = "Krishna";

// Const object case
const user = { name: "Vamsee" };
user.name = "Krishna"; // allowed
console.log("Const object updated:", user);
