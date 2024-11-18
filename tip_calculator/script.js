function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value); //gets element of html with id "billamount" and its values, and "parsefloat" coverts the value into float for calculation
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);//same as above

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById("total").textContent = "Total: $" + totalAmount.toFixed(2); //returns only 2 numbers after decimal 
}