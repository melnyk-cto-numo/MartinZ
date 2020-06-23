document.addEventListener('DOMContentLoaded', function () {

    const percent = document.getElementById('percent');
    const item = document.getElementsByClassName('steps-inner');
    const radioTitle = document.getElementsByClassName('radioTitle');
    const back = document.getElementById('back');
    let numberPage = 0;

    // Progress Bar
    percent.style.transform = `translateX(${-(100 - (numberPage + 1) / (item.length + 1) * 100)}%)`;

    // Step Switching Logic
    const nextStep = (operator) => {
        if (operator === '++') {
            numberPage++;
        } else {
            numberPage--;
        }
        if (numberPage === -1) numberPage = 0;
        setTimeout(() => {
            percent.style.transform = ` translateX(${-(100 - (numberPage + 1) / (item.length + 1) * 100)}%)`;
            for (let i = 0; i < item.length; i++) {
                item[i].classList.add('d-none');
            }
            item[numberPage].classList.remove('d-none');
        }, 100);
    };

    // Click on "Back" button
    back.addEventListener('click', function () {
        nextStep(back, '--');
    });

    // Click on "Back" button
    for (let i = 0; i < radioTitle.length; i++) {
        radioTitle[i].addEventListener('click', function () {
            nextStep('++');
        });
    }


    // Validation From
    const error = document.getElementsByClassName('error-message');

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // Click on on "Step 1" button
    const step1Button = document.getElementById('step1Button');
    const emailField = document.getElementById('email');
    step1Button.addEventListener('click', function () {
        if (emailField.value === '') {
            error[0].innerHTML = 'The field cannot be empty';
        } else if (!validateEmail(emailField.value)) {
            error[0].innerHTML = 'Invalid Email';
        } else {
            console.log('Email valid');
            error[0].innerHTML = '';
            nextStep('++');
        }
    });

    // Click on on "Step 6" button
    const step6Button = document.getElementById('step6Button');
    const streetAddress = document.getElementById('streetAddress');
    const location = document.getElementById('location');
    const unitNumber = document.getElementById('unitNumber');
    step6Button.addEventListener('click', function () {
        if (streetAddress.value === '') {
            error[1].innerHTML = 'The Your Street Address cannot be empty';
        } else if (location.value === '') {
            error[1].innerHTML = 'The location cannot be empty';

        } else if (unitNumber.value === '') {
            error[1].innerHTML = 'The Unit number cannot be empty';
        } else {
            error[1].innerHTML = '';
            nextStep('++');
        }
    });

    // Click on on "Step 8" button
    const step8Button = document.getElementById('step8Button');
    const name = document.getElementById('name');
    step8Button.addEventListener('click', function () {
        if (name.value === '') {
            error[2].innerHTML = 'The field cannot be empty';
        } else {
            error[2].innerHTML = '';
            nextStep('++');
        }
    });

    // Click on on "Step 9" button
    const step9Button = document.getElementById('step9Button');
    const yourMobile = document.getElementById('yourMobile');
    step9Button.addEventListener('click', function () {
        if (yourMobile.value === '') {
            error[3].innerHTML = 'The field cannot be empty';
        } else {
            error[3].innerHTML = '';
        }
    });

});