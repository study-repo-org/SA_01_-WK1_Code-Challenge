// Function to calculate net salary
function calculateNetSalary() {
    // Get input values for basic salary and benefits from the user
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
  
    // Calculating the gross salary by adding basic salary and benefits
    const grossSalary = basicSalary + benefits;
  
    // Calculating NHIF deduction based on gross salary
    let nhifDeduction;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } else {
        nhifDeduction = 1000; // for salaries above 40,000
    }
  
    // Calculating NSSF deduction (assuming Tier I and Tier II are applicable)
    const nssfDeduction = Math.min(basicSalary * 0.12, 7000); // 6% each, capped at 7000
  
    // Calculate PAYE (Tax) based on current rates as of March 2024
    const taxablePay = grossSalary - nhifDeduction - nssfDeduction;
    let payee;
    if (taxablePay <= 24000) {
        payee = taxablePay * 0.1;
    } else if (taxablePay <= 32333) {
        payee = 2400 + (taxablePay - 24000) * 0.25;
    } else if (taxablePay <= 500000) {
        payee = 9083.25 + (taxablePay - 32334) * 0.3;
    } else {
        payee = 160000 + (taxablePay - 500001) * 0.325;
    }
  
    // Calculate net salary
    const netSalary = grossSalary - nhifDeduction - nssfDeduction - payee;
  
    // Return an object containing salary details
    return {
        grossSalary,
        nhifDeduction,
        nssfDeduction,
        payee,
        netSalary,
    };
}

// Example usage
const salaryInfo = calculateNetSalary();
console.log(salaryInfo);
