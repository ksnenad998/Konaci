const $registerForm1 = $('#reservation-form');
//let validator = void(0)

if ($registerForm1.length) {
    validator = $registerForm1.validate({
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
            },
            email: {
                required: true,
            },
        },
        messages: {
            name: {
                required: 'Unesite Vaše ime.',
            },
            email: {
                required: 'Unesite Vaš email.',
                email: 'Vaša email adresa nije validna',
            },
            phone: {
                required: 'Unesite Vaš broj telefona.',
            },
        },
        submitHandler: function submitHandler(form) {
            event.preventDefault();
            $.ajax({
                url: 'php_vendors/reservation.php',
                method: 'POST',
                data: new FormData(form),
                contentType: false,
                processData: false,
                success: function (data) {
                    let objResp = JSON.parse(data);
                    let str = objResp.type;
                    if (str === 'ERROR') {
                        str = objResp.data;
                        swal({
                            title: 'ERROR',
                            text: str,
                            timer: 2500,
                            showCancelButton: false,
                            showConfirmButton: false,
                            type: 'error',
                        });
                        return;
                    }

                    if (str === 'OK') {
                        str = objResp.data;
                        swal(
                            {
                                title: 'SUCCESS',
                                text: str,
                                showCancelButton: false,
                                showConfirmButton: true,
                                type: 'success',
                            },
                            function (isConfirm) {
                                $(location).attr('href', 'room-details.php');
                            },
                        );
                    }
                },
            });
        },
    });
}
