// Call emlement 

const personalInfoForm = document.getElementById('personal-info-form');
const personalInfoContent = document.getElementById('personal-info-content');
const emailInput = document.getElementById('emailInput');
const submitEmailBtn = document.getElementById('submitEmail');
const emailError = document.getElementById('emailError');

//regex (check email)
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitEmailBtn.addEventListener('click', function () {
    const email = emailInput.value.trim(); // input email

    // Check correct email
    if (email === '') {
        emailError.textContent = 'Enter email to continue';
        emailError.classList.remove('hide'); // Error
        enterEmail.classList.add('hide')
    } else if (!regex.test(email)) {
        emailError.textContent = 'Wrong syntax, enter again';
        emailError.classList.remove('hide'); // Error
        enterEmail.classList.add('hide')
    } else {
        // if correct email
        personalInfoForm.classList.add('hide'); // hide form
        personalInfoContent.classList.remove('hide');
        emailError.classList.add('hide');
    }
});




document.querySelectorAll('.job-container').forEach(jobContainer => {
    const skillDetails = jobContainer.querySelector('.skill-details-content');
    const toggleButton = jobContainer.querySelector('.skill-toggle-button');
    const buttonText = toggleButton ? toggleButton.querySelector('.button-text') : null;
    const buttonIcon = toggleButton ? toggleButton.querySelector('i') : null;

    // hide content and set initial button state
    if (skillDetails && !skillDetails.classList.contains('hide')) {
        skillDetails.classList.add('hide');
    }
    if (buttonText) {
        buttonText.textContent = 'View More';
    }

    if (buttonIcon) {
        buttonIcon.className = 'bi bi-caret-down-fill';
    }
    if (toggleButton) {
        toggleButton.style.opacity = '0'; // hide toggle button initially
    }

    jobContainer.addEventListener('mouseenter', () => {
        if (toggleButton) {
            toggleButton.style.opacity = '1'; // Appear toggle button when mouse enters
        }
    });

    jobContainer.addEventListener('mouseleave', () => {
        // button will hide when mouse leaves the job container
        if (toggleButton && skillDetails.classList.contains('hide')) {
            toggleButton.style.opacity = '0';
        }
    });

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (skillDetails.classList.contains('hide')) {
                // if currently hidden, show content and change button to "View Less"
                skillDetails.classList.remove('hide');
                if (buttonText) buttonText.textContent = 'View Less';
                if (buttonIcon) buttonIcon.className = 'bi bi-caret-up-fill'; // Change to up arrow
                toggleButton.style.opacity = '1'; // hold the button visible
            } else {
                // if currently shown, hide content and change button to "View More"
                skillDetails.classList.add('hide');
                if (buttonText) buttonText.textContent = 'View More';
                // Cập nhật lớp icon để sử dụng Bootstrap Icons
                if (buttonIcon) buttonIcon.className = 'bi bi-caret-down-fill'; // Change to down arrow
            }
        });
    }
});