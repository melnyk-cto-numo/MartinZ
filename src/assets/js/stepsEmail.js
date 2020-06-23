$("#step9Button").on('click', function () {
    const emailAddress = $("[name='Email address']").val();
    const kindOfProperty = $("[name='Kind of property']:checked").val();
    const lengthOfStay = $("[name='Length of stay']:checked").val();
    const homeConditionRate = $("[name='Home condition rate']:checked").val();
    const neighborhoodRate = $("[name='Neighborhood rate']:checked").val();
    const streetAddress = $("[name='Street Address']").val();
    const unitNumber = $("[name='Unit number']").val();
    const sell = $("[name='Sell']:checked").val();
    const name = $("[name='Name']").val();
    const mobileNumber = $("[name='Mobile Number']").val();


    $.ajax({
        url: '../ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {
            'emailAddress': emailAddress,
            'kindOfProperty': kindOfProperty,
            'lengthOfStay': lengthOfStay,
            'homeConditionRate': homeConditionRate,
            'neighborhoodRate': neighborhoodRate,
            'streetAddress': streetAddress,
            'unitNumber': unitNumber,
            'sell': sell,
            'name': name,
            'mobileNumber': mobileNumber,
        },
        dataType: 'html',
        beforeSend: function () {
            $("#step1Button").prop("disabled", true);
            console.log("Wait, data is being sent to the server");
        },
        success: function (data) {
            if (!data) {
                console.log('There were errors, the message was not sent');
            } else {
                // clear form fields
                $("#stepsForm").trigger("reset");

                window.location.href = "/";
                console.log('Your request has been sent');

            }
            $("#step1Button").prop("disabled", false);
        }
    });

});