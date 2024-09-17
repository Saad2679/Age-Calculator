function calculateAge() {
    const today = new Date();
    const birthDateInput = document.getElementById('birthdate').value;
    
    // Validate date format DD-MM-YYYY
    const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
    if (!dateRegex.test(birthDateInput)) {
        alert("Invalid Date Format: Please enter a valid date in DD-MM-YYYY format.");
        return;
    }
    
    const birthdateParts = birthDateInput.split('-');
    const birthDay = parseInt(birthdateParts[0], 10);
    const birthMonth = parseInt(birthdateParts[1], 10) - 1; // Month is zero-indexed
    const birthYear = parseInt(birthdateParts[2], 10);

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    if (birthDate > today || isNaN(birthDate)) {
        alert("Invalid Date: Please enter a valid birthdate.");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.44); // Approximate months
    const ageInYears = Math.floor(ageInMonths / 12);

    // Display results
    const resultContainer = document.getElementById('result-container');
    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="result-item">
            <h3>Age</h3>
            <p>${ageInYears} years, ${ageInMonths % 12} months, ${ageInDays % 30} days</p>
        </div>   
        <div class="result-item">
            <h3>Months Passed</h3>
            <p>${ageInMonths}</p>
        </div>   
        <div class="result-item">
            <h3>Weeks Passed</h3>
            <p>${ageInWeeks}</p>
        </div>   
        <div class="result-item">
            <h3>Days Passed</h3>
            <p>${ageInDays}</p>
        </div>   
        <div class="result-item">
            <h3>Hours Passed</h3>
            <p>${ageInHours}</p>
        </div>   
        <div class="result-item">
            <h3>Seconds Passed</h3>
            <p>${ageInSeconds}</p>
        </div>   
    `;

    // Animate result container
    resultContainer.style.display = "block";
    resultContainer.classList.add("fade-in");
}

document.getElementById('ageCalculator').addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
});
