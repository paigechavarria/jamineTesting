window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        setupInitialValues();
      });
    }
  });
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupInitialValues() {
    let P = (document.getElementById("loan-amount").value);
    let i = (document.getElementById("loan-rate").value) / 100; //making the interest percentage into a decimal, easier to work with 
    let n = (document.getElementById("loan-years").value);

    let values = {
        principle: P,
        interest: i,
        months: n
    }
    return calculateMonthlyPayment(values);
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    let nums = Object.values(values);
    let topFrac = (nums[0] * 1) + ((nums[0] * nums[1]) * nums[2]) //calculating the total amount of loan with interest
    let bottomFrac = nums[2]; //calculating yearly total
    let monthlyPayment = ((topFrac / bottomFrac) / 12).toFixed(2); //diving the yearly total by 12 to get monthly total
    return updateMonthly(monthlyPayment);
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    let monthUI = document.querySelector('#monthly-payment');
    let newUpdate = document.createElement('div') //created the div so that the new amounts wouldn't be inline and merge together 
    newUpdate.append(monthly);
    monthUI.append(newUpdate);
    monthUI = '';
  }