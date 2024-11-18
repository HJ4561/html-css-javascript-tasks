function calculateAge() {
    const dob = document.getElementById("dob").value; // "document" means our HTML document, "getElementById" means that get the element from HTML document that has id of DOB, "value" means the value in the id that the user entered
    const birthDate = new Date(dob);  //creats date object and converts dob of document into javascript object
    const today = new Date(); //create date object and () means current time
    let age = today.getFullYear() - birthDate.getFullYear(); //gives year of current year and year of dob
    const monthDiff = today.getMonth() - birthDate.getMonth(); //gives month of current year and of dob

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;  //because they have not completed a full year so we subtract o get accurate age
    }
       //if current month is less than birth month, it menas the birthday has not occured yet, so -1 
       //if month same but date is less, then same
    document.getElementById("result").textContent = "Your age is " + age + " years old"; // selects document of html with id result , and sets the text of the element 
}