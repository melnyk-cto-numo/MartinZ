$("#step9Button").on('click', function () {
    const email = $("[name='Email address']").val();

    $.ajax({
        url: '../ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'email': email},
        dataType: 'html',
        beforeSend: function () {
            $("#step1Button").prop("disabled", true);
            console.log("Подождите идет отправка данных на сервер");
        },
        success: function (data) {
            if (!data) {
                console.log('There were errors, the message was not sent');
            } else {
                // clear form fields
                $("#stepsForm").trigger("reset");
            }

            $("#step1Button").prop("disabled", false);
            alert(data);
        }
    });

});