$(document).ready(function () {

    // Stage 1
    console.log('Step 1');
    fbq('trackCustom', 'True-Home-Values-Stage-1', {
        name: 'True Home Values Stage 1',
        page: 'http://truehomevalues.ca/',
        stage: '1'
    });

    // Stage 2
    $(".steps-form-1 label input").click(function () {
        const inputValue = $(this).val();
        console.log('Step 2', inputValue);
        // $(".textbox-bed input").val(inputValue);
        fbq('trackCustom', 'True-Home-Values-Stage-2', {
            name: 'True Home Values Stage 2',
            page: 'http://truehomevalues.ca/',
            stage: '2'
        });
    });


});