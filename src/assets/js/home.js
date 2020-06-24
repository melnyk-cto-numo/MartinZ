document.addEventListener('DOMContentLoaded', function () {

    // Click button "More"
    const moreBtn = document.getElementById('more');
    const moreText = document.getElementById('moreText');
    moreBtn.addEventListener('click', function () {
        if (this.innerHTML === 'More...') {
            this.innerHTML = '...less';
            moreText.style.display = 'inline'
        } else {
            this.innerHTML = 'More...';
            moreText.style.display = 'none'
        }
    })

});