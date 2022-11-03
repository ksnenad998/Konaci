$(document).ready(function() {

    $(this).scrollTop(0);

    const $registerForm = $('#contact-form')
    let validator = void(0)

    if ($registerForm.length) {
        validator = $registerForm.validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'Please enter your name.'
                },
                email: {
                    required: 'Please enter your e-mail address.',
                    email: 'Your e-mail address is not valid'
                },
                message: {
                    required: 'Please enter your message.'
                }
            },
            submitHandler: function submitHandler(form) {
                event.preventDefault();
                $.ajax({
                    url: '../sendemail.php',
                    method: 'POST',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    success: function(data) {
                        let objResp = JSON.parse(data);
                        let str = objResp.type;
                        if (str === 'ERROR') {
                            str = objResp.data;
                            swal({
                                title: "ERROR",
                                text: str,
                                timer: 2500,
                                showCancelButton: false,
                                showConfirmButton: false,
                                type: "error"
                            });
                            return;
                        }

                        if (str === 'OK') {
                            str = objResp.data;
                            swal({
                                    title: "SUCCESS",
                                    text: str,
                                    showCancelButton: false,
                                    showConfirmButton: true,
                                    type: "success",

                                },
                                function(isConfirm) {
                                    $(location).attr('href', 'index.php');
                                }
                            );
                        }

                    }
                })
            }
        })
    }

    const $registerFormSr = $('#form_sr')
        //let validator = void(0)

    if ($registerFormSr.length) {
        validator = $registerFormSr.validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },

                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'Unesite Vaše ime.'
                },
                email: {
                    required: 'Unesite Vaš email.',
                    email: 'Vaš email nije validan.'
                },
                message: {
                    required: 'Unesite Vašu poruku.'
                }
            },
            submitHandler: function submitHandler(form) {
                event.preventDefault();
                $.ajax({
                    url: '../sendemail_sr.php',
                    method: 'POST',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    success: function(data) {
                        let objResp = JSON.parse(data);
                        let str = objResp.type;
                        if (str === 'ERROR') {
                            str = objResp.data;
                            swal({
                                title: "Greška",
                                text: str,
                                timer: 2500,
                                showCancelButton: false,
                                showConfirmButton: false,
                                type: "error"
                            });
                            return;
                        }

                        if (str === 'OK') {
                            str = objResp.data;
                            swal({
                                    title: "Uspešno",
                                    text: str,
                                    showCancelButton: false,
                                    showConfirmButton: true,
                                    type: "success",

                                },
                                function(isConfirm) {
                                    $(location).attr('href', 'index.php');
                                }
                            );
                        }

                    }
                })
            }
        })
    }

    
});