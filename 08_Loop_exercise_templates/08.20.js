// 08.10 JavasScript code

function getValue(elementId) {
    var valueAsText = document.getElementById(elementId).value;
    return Number(valueAsText);
}

function calculate() {
    var loanAmount = getValue("txtLoanAmount");
    var interest = getValue("txtInterest");
    var years = getValue("txtYears");
    var yearlyPayments = getValue("txtYearlyPayments");
    
    var totalInterest = 0;
    var totalPayment = 0;
    
    // Write your code here (no new functions required)
    
  
  
  
  
  
  
  
    
    
    
    
    
    document.getElementById("txtTotalPayment").value = totalPayment.toFixed(2);    
    document.getElementById("txtTotalInterest").value = totalInterest.toFixed(2);
}
// End
