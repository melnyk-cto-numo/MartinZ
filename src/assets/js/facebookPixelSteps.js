$(document).ready(function () {

    // Stage 1
    console.log('Step 1');
    fbq('trackCustom', 'True-Home-Values-Stage-1', {
        name: 'True Home Values Stage 1',
        page: 'http://truehomevalues.ca/',
        stage: '1'
    });

    // Stage 2
    $(".steps-form-2 label input").click(function () {
        const inputValue = $(this).val();
        console.log('Step 2', inputValue);
        fbq('trackCustom', 'True-Home-Values-Stage-2', {
            name: 'True Home Values Stage 2',
            page: 'http://truehomevalues.ca/',
            stage: '2'
        });
    });

    // Stage 3
    $(".steps-form-3 label input").click(function () {
        const inputValue = $(this).val();
        console.log('Step 3', inputValue);
        fbq('trackCustom', 'True-Home-Values-Stage-3', {
            name: 'True Home Values Stage 3',
            page: 'http://truehomevalues.ca/',
            stage: '3'
        });
    });

    // Stage 4
    $(".steps-form-4 label input").click(function () {
        const inputValue = $(this).val();
        console.log('Step 4', inputValue);
        fbq('trackCustom', 'True-Home-Values-Stage-4', {
            name: 'True Home Values Stage 4',
            page: 'http://truehomevalues.ca/',
            stage: '4'
        });
    });

    // Stage 5
    $(".steps-form-5 label input").click(function () {
        const inputValue = $(this).val();
        console.log('Step 5', inputValue);
        fbq('trackCustom', 'True-Home-Values-Stage-5', {
            name: 'True Home Values Stage 5',
            page: 'http://truehomevalues.ca/',
            stage: '5'
        });
    });

    // Stage 6
    $("#step6Button").click(function () {
        console.log('Step 6');
        fbq('trackCustom', 'True-Home-Values-Stage-6', {
            name: 'True Home Values Stage 6',
            page: 'http://truehomevalues.ca/',
            stage: '6'
        });
    });

    // Stage 7
    $(".steps-form-7 label input").click(function () {
        const inputValue = $(this).val();

        if (inputValue === "1-3 Months") {
            console.log('Step 7', inputValue);
            fbq('trackCustom', 'True-Home-Values-Stage-7-13months', {
                name: 'True Home Values Stage 7 1-3 Months',
                page: 'http://truehomevalues.ca/',
                stage: '7'
            });

        } else if (inputValue === "3-6 Months") {
            console.log('Step 7', inputValue);
            fbq('trackCustom', 'True-Home-Values-Stage-7-36months', {
                name: 'True Home Values Stage 7 3-6 Months',
                page: 'http://truehomevalues.ca/',
                stage: '7'
            });

        } else if (inputValue === "6-12 Months") {
            console.log('Step 7', inputValue);
            fbq('trackCustom', 'True-Home-Values-Stage-7-612months', {
                name: 'True Home Values Stage 7 6-12 Months',
                page: 'http://truehomevalues.ca/',
                stage: '7'
            });
        } else if (inputValue === "Not Sure") {
            console.log('Step 7', inputValue);
            fbq('trackCustom', 'True-Home-Values-Stage-7-NotSure', {
                name: 'True Home Values Stage 7 Not Sure',
                page: 'http://truehomevalues.ca/',
                stage: '7'
            });
        }

        fbq('trackCustom', 'True-Home-Values-Stage-7', {
            name: 'True Home Values Stage 7',
            page: 'http://truehomevalues.ca/',
            stage: '7'
        });
    });

    // Stage 8
    $("#step8Button").click(function () {
        console.log('Step 8');
        fbq('trackCustom', 'True-Home-Values-Stage-8', {
            name: 'True Home Values Stage 8',
            page: 'http://truehomevalues.ca/',
            stage: '8'
        });
    });
    // Stage 9
    $("#step9Button").click(function () {
        console.log('Step 9');
        fbq('trackCustom', 'True-Home-Values-Stage-9', {
            name: 'True Home Values Stage 9',
            page: 'http://truehomevalues.ca/',
            stage: '9'
        });
    });


    // 30 sec on site
    setTimeout(function () {
        fbq('trackCustom', 'THV-Stage-30-sec', {
            name: 'THV LP 30 seconds',
            page: 'http://truehomevalues.ca/',
            time: '30 seconds'
        });
    }, 30000);

    // 90 sec on site
    setTimeout(function () {
        fbq('trackCustom', 'THV-Stage-90-sec', {
            name: 'THV LP 90 seconds',
            page: 'http://truehomevalues.ca/',
            time: '90 seconds'
        });
    }, 90000);

});


