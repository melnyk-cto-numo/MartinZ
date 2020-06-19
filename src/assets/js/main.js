document.addEventListener('DOMContentLoaded', function () {

    const percent = document.getElementById('percent');
    const item = document.getElementsByClassName('steps-inner');
    const nextButton = document.getElementsByClassName('js-next');
    const radioTitle = document.getElementsByClassName('radioTitle');
    const back = document.getElementsByClassName('js-back');
    let numberPage = 0;


    percent.style.transform = `translateX(${-(100 - (numberPage + 1) / (item.length + 1) * 100)}%)`;


    // Step page - click on button or radio button
    const handleClick = (element, operator) => {
        for (let n = 0; n < element.length; n++) {
            element[n].addEventListener('click', function () {
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
                }, 200);
            });
        }
    };
    handleClick(nextButton, '++');
    handleClick(radioTitle, '++');
    handleClick(back, '--');

});