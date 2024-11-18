const feedbackOptions = document.querySelectorAll('.feedback-option');
const sendReviewButton = document.querySelector('.send-review-button');

let selectedFeedback = null;

feedbackOptions.forEach(option => {   //iterates over feedback option in the array or har option k lie yeh funtion perform krta h 
    option.addEventListener('click', () => {  //har option k lie ek event listner add ho ga jo k har dfa apny andr ka funtion execute kry ga
        feedbackOptions.forEach(option => option.classList.remove('selected')); //it removes the selected class for each option //is sy hum pkka krty hyn k sirf us waqt jo class clicked ho uss k paas selected class ho
        option.classList.add('selected'); //selected class ko currently clicked option m add krty hyn
        selectedFeedback = option.textContent; //assigns the text of option to variable 
    });
});

sendReviewButton.addEventListener('click', () => {  //event listener k funtion ko attach krti h button sy or jb b button click hota h yh function execute hota h
    if (selectedFeedback) {   //to check if selectedFeedback has value 
        console.log('Selected feedback:', selectedFeedback);
        alert('Feedback sent successfully!');
    } else {
        alert('Please select a feedback option.');
    }
});