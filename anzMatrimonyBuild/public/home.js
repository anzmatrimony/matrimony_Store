var environment;
$(function () {

    $.getJSON("env_var.json", function (data) {

        environment = data.environment;

        $.getJSON(environment + ".json", function (data) {
            environment = data;

        });
    });
    $.get('religions.json', function (relgetdata) {
        for (var i = 0; i < relgetdata.length; i++) {

            var option = $("<option>");

            for (var key in relgetdata[i]) {
                if (typeof relgetdata[i][key] === "number") {
                    option.attr("value", relgetdata[i][key]);
                } else {
                    option.html(relgetdata[i][key]);
                }
            }

            $("#religioninput").append(option);
        }
    });
    $.get('genders.json', function (genderforData) {

        for (var i = 0; i < genderforData.length; i++) {

            var option = $("<option>");

            for (var key in genderforData[i]) {
                if (typeof genderforData[i][key] === "number") {
                    option.attr("value", genderforData[i][key]);
                } else {
                    option.html(genderforData[i][key]);
                }
            }

            $("#gend").append(option);

        }
    });
    $.get('profilefors.json', function (profileforData) {
        for (var i = 0; i < profileforData.length; i++) {

            var option = $("<option>");

            for (var key in profileforData[i]) {
                // There should only be two keys, if its a number its ID, else option name
                if (typeof profileforData[i][key] === "number") {
                    option.attr("value", profileforData[i][key]);
                } else {
                    option.html(profileforData[i][key]);
                }
            }

            $("#profile").append(option);

        }

    });
    $.get('ages.json', function (ageforData) {
        for (var i = 0; i < ageforData.length; i++) {

            var option = $("<option>");

            for (var key in ageforData[i]) {
                if (typeof ageforData[i][key] === "number") {
                    option.attr("value", ageforData[i][key]);
                } else {
                    option.html(ageforData[i][key]);
                }
            }

            $("#ageinput").append(option);

        }

    });

    $(document).ready(function () {
        $("#passwordinput").blur(function () {
            var Password = $("#passwordinput").val();
            if ($.trim(Password).length === 0) {
                document.getElementById("passwordvalid").innerHTML = "";
            } else {
                if (validatePassword()) {
                    document.getElementById("passwordvalid").innerHTML = "";
                } else {
                    document.getElementById("passwordvalid").innerHTML = "Password should reach minimum requirements";

                }
            }

        });
    });

    Date.prototype.yyyymmddhhmmss = function () {
        var yyyy = this.getFullYear().toString();
        var MM = (this.getMonth() + 1).toString();
        var dd = this.getDate().toString();
        var hh = this.getHours().toString();
        var mm = this.getMinutes().toString();
        var ss = this.getSeconds().toString();
        return yyyy + '-' + (MM[1] ? MM : "0" + MM[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + 'T' + (hh[1] ? hh : "0" + hh[0]) + ':' + (mm[1] ? mm : "0" + mm[0]) + ':' + (ss[1] ? ss : "0" + ss[0]);
    };
    var requestedOn = new Date().yyyymmddhhmmss();


    $(document).ready(function () {
        $("#validate").click(function () {
            var profile = $("#profile").val();
            var firstName = $("#fname").val();
            var lastName = $("#lname").val();
            var email = $("#emailinput").val();
            var password = $("#passwordinput").val();
            var cpassword = $("#cpasswordinput").val();
            var gender = $("#gend").val();
            var age = $("#ageinput").val();
            var religion = $("#religioninput").val();
            if (profile === null || firstName === '' || lastName === '' || email === '' || password === '' || cpassword === '' || gender === null || age === null || religion === null) {
                document.getElementById("fieldvalid").innerHTML = "* All fields are mandatory";
            } else {
                if (checkPasswordMatch() === true || validateEmail() === false || validatePassword() === false) {
                    document.getElementById("fieldvalid").innerHTML = "";
                } else {
                    var result = $("#emailinput").val();
                    var res = result.split("@");
                    console.log("Wel-Come" + "_" + res[0]);
                    window.sessionStorage.setItem("userRef", res[0] + "@" + timestamp);
                    window.sessionStorage.setItem("religion", $("#religioninput").val());

                    var minAge = (parseInt($("#ageinput").val()) - 5).toString();
                    var maxAge = (parseInt($("#ageinput").val()) + 30).toString();
                    //  alert(maxAge)
                    if ($("#gend").val() === "Male") {
                        var GenderFil = "Female";
                        //      alert(GenderFil)
                    } else
                    if ($("#gend").val() === "Female") {
                        var GenderFil = "Male";
                    }
                    pdata1 = {
                        "header": {
                            "guid": "1233",
                            "requestedOn": "111",
                            "requestedFrom": "123",
                            "userRef": res[0] + "@" + timestamp,
                            "geoLocation": "11111"
                        },
                        "body": {
                            "userRef": res[0] + "@" + timestamp,
                            "Gender": GenderFil,
                            "religion": $("#religioninput").val(),
                            "Min_Age": minAge,
                            "Max_Age": maxAge,
                            "Min_Height": "4.0",
                            "Max_Height": "7.0",
                            "annualIncome": "0"
                        }
                    };
                    console.log(JSON.stringify(pdata1));
                    // alert(JSON.stringify(pdata1));
                    tasksURI = environment.PartnerSearch;
                    serviceCall(tasksURI, 'POST', pdata1).done(function (people) {
                        //      alert(JSON.stringify(people));                        
                    });

                    var jsonbody = {

                        "header": {
                            "guid": "230",
                            "requestedFrom": "",
                            "geoLocation": "321",
                            "userRef": res[0] + "@" + timestamp
                        },
                        "body": {
                            "userRef": res[0] + "@" + timestamp,
                            "mobileNo": {
                                "options": "all",
                                "userRef": []
                            },
                            "linkedinid": {
                                "options": "all",
                                "userRef": []
                            },
                            "twitterid": {
                                "options": "all",
                                "userRef": []
                            },
                            "fbId": {
                                "options": "all",
                                "userRef": []
                            },
                            "homeNo": {
                                "options": "all",
                                "userRef": []
                            }

                        }


                    };
                    tasksURI = environment.privacysettings;
                    serviceCall(tasksURI, 'POST', jsonbody).done(function (data) {

                    });

                    data3 =
                            {
                                "header":
                                        {
                                            "guid": "xyz",
                                            "requestedOn": "xyz",
                                            "requestedFrom": "xyz",
                                            "userRef": res[0] + "@" + timestamp,
                                            "geoLocation": "xyz"
                                        },
                                "body": {
                                    "userRef": res[0] + "@" + timestamp
                                }
                            };
                    var tasksURI = environment.searchData;
                    serviceCall(tasksURI, 'POST', data3).done(function (people) {
                        //  alert(JSON.stringify(people))
                    });


                    pdata = {

                        "header": {
                            "guid": "122",
                            "requestedOn": requestedOn,
                            "requestedFrom": "elastic",
                            "userRef": res[0] + "@" + timestamp,
                            "geoLocation": "1111"
                        },

                        "body": {
                            "createdOn": requestedOn,
                            "createdBy": "1001",
                            "modifiedOn": requestedOn,
                            "modifiedBy": "1000",
                            "requestedOn": requestedOn,
                            "userRef": res[0] + "@" + timestamp,
                            "profileFor": $("#profile").val(),
                            "firstName": $("#fname").val(),
                            "lastName": $("#lname").val(),
                            "emailId": $("#emailinput").val(),
                            "password": $("#passwordinput").val(),
                            "gender": $("#gend").val(),
                            "age": $("#ageinput").val(),
                            "religion": $("#religioninput").val()
                        }
                    };
                    var tasksURI = environment.basicRegistrations;
                    serviceCall(tasksURI, 'POST', pdata).done(function (data) {
                    });

                    $("#myCarousel").hide();
                    $("#registrationpage").hide();
                    $("#regsuccess").show();

                }

            }
        });

    });

    var d = new Date();
    var timestamp = (d.getDate().toString() + d.getMonth().toString() + d.getFullYear().toString() + d.getHours().toString() + d.getMinutes().toString() + d.getMilliseconds().toString());
    console.log(timestamp);


    $(document).ready(function () {
        $("#emailinput").blur(function () {
            var sEmail = $("#emailinput").val();
            if ($.trim(sEmail).length === 0) {
                document.getElementById("emailvalid").innerHTML = "";
            } else {
                if (validateEmail()) {
                    document.getElementById("emailvalid").innerHTML = "";
                } else {
                    document.getElementById("emailvalid").innerHTML = "Invalid Email";

                }
            }


            pdata = {

                "header": {
                    "guid": "1233",
                    "requestedOn": "111",
                    "requestedFrom": "123",
                    "geoLocation": "11111"
                },
                "body": {
                    "emailId": $("#emailinput").val()}
            };

            var tasksURI = environment.getEmail;
            serviceCall(tasksURI, 'POST', pdata).done(function (result) {
                document.getElementById("emailalert").innerHTML = result.body.message;

            });
        });
    });
    $(document).ready(function () {
        $("#cpasswordinput").blur(checkPasswordMatch);

    });

   
        $("#regicon").click(function () {
            $("#myCarousel").hide();
            $("#registrationpage").show();
            $("#regsuccess").hide();
            $("#globalBody").hide();
            $("#forgotDialog").hide();
            $("input[type=text]").val("");
            $("input[type=password]").val("");
            $("input[type=email]").val("");
            $("select[name=select]").val("");
            $("#passwordvalid").html("");
            $("#validpassword").html("");
            $("#fieldvalid").html("");
            $("#emailalert").html("");
            $("#emailvalid").html("");

        });
    

    
        $("#rLogin").click(function () {
            $('.row.iconborder > div').removeClass('blue');
            $(this).addClass('homeClass');
    });
    $('.row.iconborder > div').on('click', function () {
        $('.row.iconborder > div').removeClass('blue');
        $('.nav.navbar-nav > li').removeClass('homeClass');
        $(this).addClass('blue');
    });
    serviceCall = function (uri, method, data) {
        var request = {
            url: uri,
            type: method,
            contentType: "application/json",
            accepts: "application/json",
            cache: false,
            dataType: 'json',
            crossOrigin: true,
            data: JSON.stringify(data),

            headers: {
                'Authorization': 'Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed',
                Accept: "application/json"
            },
            beforeSend: function (xhr) {
            },
            error: function (jqXHR) {
            }
        };
        return $.ajax(request);

    };

});

$(function () {
    $('[data-toggle="tooltip"]').tooltip({trigger: 'blur'});
});

function validatePassword() {
    var filter = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    var Password = $("#passwordinput").val();
    if (filter.test(Password)) {

        return true;

    } else {

        return false;

    }
}
function validateEmail() {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var sEmail = $("#emailinput").val();
    if (filter.test(sEmail)) {

        return true;

    } else {

        return false;

    }
}
function checkPasswordMatch() {
    var password = $("#passwordinput").val();
    var confirmPassword = $("#cpasswordinput").val();
    if (password !== confirmPassword) {
        $("#validpassword").html("Passwords do not match.try again?");
        return true;
    } else {
        $("#validpassword").html("");
        return false;
    }
}
