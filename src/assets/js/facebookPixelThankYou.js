$(document).ready(function () {

    // Stage 1
    console.log('Step 10');
    fbq('trackCustom', 'True-Home-Values-ThankYou', {
        name: 'True Home Values Thank You',
        page: 'http://truehomevalues.ca/thankyou',
        stage: '10'
    });

    // Click on button "Book Your Free Strategy Call"
    $(".js-cta").click(function () {
        console.log('Book Your Free Strategy Call');
        fbq('trackCustom', 'Book-Your-Free-Strategy-Call', {
            name: 'Book Your Free Strategy Call',
            page: 'http://truehomevalues.ca/thankyou',
            stage: ''
        });
    });

    // 30 sec on site
    setTimeout(function () {
        fbq('trackCustom', 'THV-ThankYou-30-sec', {
            name: 'THV LP 30 seconds',
            page: 'http://truehomevalues.ca/thankyou',
            time: '30 seconds'
        });
    }, 30000);

    // 90 sec on site
    setTimeout(function () {
        fbq('trackCustom', 'THV-ThankYou-90-sec', {
            name: 'THV LP 90 seconds',
            page: 'http://truehomevalues.ca/thankyou',
            time: '90 seconds'
        });
    }, 90000);

});