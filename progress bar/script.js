const circles = document.querySelectorAll(".circle"),
      progressBar = document.querySelector(".indicator"),
      buttons = document.querySelectorAll("button");

let currentStep = 1;

// Function to update current clicked step
const updateSteps = (e) => {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  // Loop through all circles and update active class based on current step
  circles.forEach((circle, index) => {
    circle.classList.toggle("active", index < currentStep);
  });

  // Update progress bar width
  progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

  // Disable/Enable buttons based on current step
  buttons[0].disabled = currentStep === 1;
  buttons[1].disabled = currentStep === circles.length;
};

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener("click", updateSteps);
});