var Login = function() {
	"use strict";
	
	
	
	var runSetDefaultValidation = function() {
		$.validator.setDefaults({
			errorElement : "span", // contain the error msg in a small tag
			errorClass : 'help-block',
			errorPlacement : function(error, element) {// render error placement for each input type
				if (element.attr("type") == "radio" || element.attr("type") == "checkbox") {// for chosen elements, need to insert the error after the chosen container
					error.insertAfter($(element).closest('.form-group').children('div').children().last());
				} else if (element.attr("name") == "card_expiry_mm" || element.attr("name") == "card_expiry_yyyy") {
					error.appendTo($(element).closest('.form-group').children('div'));
				} else {
					error.insertAfter(element);
					// for other inputs, just perform default behavior
				}
			},
			ignore : ':hidden',
			success : function(label, element) {
				label.addClass('help-block valid');
				// mark the current input as valid and display OK icon
				$(element).closest('.form-group').removeClass('has-error');
			},
			highlight : function(element) {
				$(element).closest('.help-block').removeClass('valid');
				// display OK icon
				$(element).closest('.form-group').addClass('has-error');
				// add the Bootstrap error class to the control group
			},
			unhighlight : function(element) {// revert the change done by hightlight
				$(element).closest('.form-group').removeClass('has-error');
				// set error class to the control group
			}
		});
	};
	var runLoginValidator = function() {
		var form = $('.form-login');
		var errorHandler = $('.errorHandler', form);
		var postLogin = function(){
			 $.post("/signin",form.serialize(),function(res){
                if(res.status === 1){
                    window.location.href = "/";
                } else{
                    $("#J_loginMsg").html(res.msg);
                }
            });
		}
		form.validate({
			rules : {
				username : {
					minlength : 2,
					required : true
				},
				pwd : {
					// minlength : 6,
					required : true
				}
			},
			submitHandler : function(form) {
				errorHandler.hide();
				postLogin();
			},
			invalidHandler : function(event, validator) {//display error alert on form submit
				errorHandler.show();
			}
		});
	};
	var runForgotValidator = function() {
		var form2 = $('.form-forgot');
		var errorHandler2 = $('.errorHandler', form2);
		form2.validate({
			rules : {
				email : {
					required : true
				}
			},
			submitHandler : function(form) {
				errorHandler2.hide();
				form2.submit();
			},
			invalidHandler : function(event, validator) {//display error alert on form submit
				errorHandler2.show();
			}
		});
	};
	var runRegisterValidator = function() {
		var form3 = $('.form-register');
		var errorHandler3 = $('.errorHandler', form3);

		var postSignUp = function(){
			$.ajax({
                url: "/add/user",
                type: "post",
                processData: false,
                contentType: false,
                data: new FormData($('#J_signupForm')[0]),
                success: function(res) {
                    if (res.status === 1) {
                        window.location.href = "/";
                    } else {
                        $("#J_signupMsg").html(res.msg);
                    }
                }
            });

		}
		form3.validate({
			rules : {
				username : {
					// minlength : 2,
					required : true
				},
				gender : {
					required : true
				},
				email : {
					required : true
				},
				pwd : {
					required : true,
					minlength : 6
				},
				birthday : {
					required : true
				},
				password_again : {
					required : true,
					minlength : 6,
					equalTo : "#pwd"
				}
			},
			submitHandler : function(form) {
				errorHandler3.hide();
				postSignUp();
			},
			invalidHandler : function(event, validator) {//display error alert on form submit
				errorHandler3.show();
			}
		});
	};
	var datePickerHandler = function() {
		if($.prototype.datepicker){
			$('#J_datepicker').datepicker({
				autoclose: true,
				todayHighlight: true
			});
		}
		
	};
	return {
		//main function to initiate template pages
		init : function() {
			runSetDefaultValidation();
			runLoginValidator();
			runForgotValidator();
			runRegisterValidator();
			datePickerHandler();
		}
	};
}();
