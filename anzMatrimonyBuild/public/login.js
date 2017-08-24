/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



         var self = this;

        var authenicated = sessionStorage.authenticated;
//     alert(authenicated);
//        var uname = document.getElementById("userName").value;
//        var pwd = document.getElementById("userPword").value;
        var status ;
        var environment2 ;
        var environment1 ;
        var sdata;
        var token = "Bearer";
        var access_token;
        var css = $("#homeStyle");
//        alert(token);
 
        $("#userName").keydown(function (e) {
            if (e.keyCode === 32) {
                e.preventDefault();
            }
    	});
	$('#userPword').keypress(function(event){
           if(event.keyCode == 13){
             $('#userLogin').click();
           }
       });
        $("#login").click(function() {   

	    $('input[type="text"]').val('');
            $('input[type="password"]').val('');
            $("#globalBody").show();
            $("#myCarousel").hide();
            $("#registrationpage").hide();
            $("#forgotDialog").hide();
            $('input[type="text"]').val('');
//                return false;
        }); 
        $('.nav.navbar-nav > li').on('click', function (e) {
            $('.nav.navbar-nav > li').removeClass('homeClass');
            $('.row.iconborder > div').removeClass('blue');

            $(this).addClass('homeClass');
        });
       
 	// this will prevent  copy, paste the userName and Password  
       /* $('input[type=password]').bind('copy paste', function (e) {
         e.preventDefault();
      });
      $('input[type=text]').bind('copy paste', function (e) {
         e.preventDefault();
      });*/
        
        $("#rLogin").click(function() {         
            $("#globalBody").show();
            $("#myCarousel").hide();
            $("#registrationpage").hide();
            $("#forgotDialog").hide();
            $('input[type="text"]').val('');
            $('input[type="password"]').val('');
            $("#regsuccess").hide();

                return false;
        });   
        $("#lsignUp").click(function(){
            $("#globalBody").hide();
            $("#myCarousel").hide();
            $("#registrationpage").show();
            $('form').trigger("reset");
            $("#forgotDialog").hide();
           $("input[type=text]").val("");
            $("input[type=password]").val("");
            $("input[type=email]").val("");
            $("select[name=select]").val("");
            $("#passwordvalid").html("");
            $("#validpassword").html("");
            $("#emailalert").html("");
            $("#emailvalid").html("");
            $("#fieldvalid").html("");
            $('.nav.navbar-nav > li').removeClass('homeClass');
            $('.row.iconborder > div').removeClass('blue');
            $("#regbar").addClass('blue');
	     document.getElementById("status").style.visibility = "hidden"; 
             return false;
        });
        $("#fLogin").click(function() {     
            $('form').trigger("reset");
            $("#globalBody").show();
            $("#myCarousel").hide();
            $("#registrationpage").hide();
            $("#forgotDialog").hide();
                return false;
        });                  
    	
	$("#ftLogin").click(function() {     
           
            $("#globalBody").show();
            $("#myCarousel").hide();
            $("#registrationpage").hide();
            $("#forgotDialog").hide();
             $('input[type="text"]').val('');
            $('input[type="password"]').val('');
                return false;
        });
        $("#forgot").click(function(){
            $("#forgotDialog").show();
            $("#globalBody").hide();
            $("#myCarousel").hide();
            $("#registrationpage").hide();
           $('input[type="text"]').val('');
            $('input[type="password"]').val('');
	    document.getElementById("status").style.visibility = "hidden"; 
        });
        $("#cancel").click(function(){
            $("#forgotDialog").hide();
            $("#globalBody").hide();
            $("#myCarousel").show();
            $("#registrationpage").hide();
		document.getElementById("status").style.visibility = "hidden"; 
        });
        
        $("#fcancel").click(function(){
            $("#forgotDialog").hide();
            $("#globalBody").hide();
            $("#myCarousel").show();
            $("#registrationpage").hide();
        });
   
		 $("#userName").blur(function(){
            if(document.getElementById("userName").value !== "") {
            document.getElementById("uName").style.visibility = "hidden";
            }
        });
        $("#userPword").blur(function(){
            if(document.getElementById("userPword").value !== ""){
            document.getElementById("uPassword").style.visibility = "hidden";
        }
        });

                $.getJSON("env_var.json", function(data) {
//                    console.log(data);
//                    console.log(data.environment);
                    
                    $.getJSON(data.environment + ".json", function(data2) {
//                        console.log(data2);
                        console.log(data2.forgotPassword);
                        console.log(data2.accountDetails);
                         token = data2.access_token ;

               $("#userLogin").click( function() {
                    var uname = document.getElementById("userName").value;
                    var pwd = document.getElementById("userPword").value;
                   
//                   alert(uname);
//                   alert(pwd);
		if( document.getElementById("userName").value=== "" ){
                        //alert("enter userName");
                document.getElementById("uName").innerHTML="Enter UserName";
                document.getElementById("uName").style.visibility = "visible";
            }
           else if( document.getElementById("userPword").value=== ""){
                 
                    //alert('Enter Password');
                    document.getElementById("uPassword").innerHTML="Enter Password";
                    document.getElementById("uPassword").style.visibility = "visible";
                     }
            else if(document.getElementById("userName").value !== "" && document.getElementById("userPword").value !== "" ){
                    $.ajax({
                        "async": true,
                        "crossDomain": true,
                        "url": data2.tokenUri,
                        type: "POST",
                        headers: {
                            "authorization": "Basic UEVSR0tVSzU2dXk5eXF1TkxiOWdLdk5HUEdZYTpGblh3a1N2NGdGZDIzUlR1OVZ5Y0pBdEY1akFh",
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            "grant_type": "password",
                            "username": uname,
                            "password": pwd
                        },
                        success: function(response) {                         
                            localStorage.setItem("access_token", response.access_token);
                            localStorage.setItem("AuthorizationResponse", JSON.stringify(response));

                           // alert(token+" "+localStorage.access_token);
                            
                            sessionStorage.setItem("authenticated", true);
                            sessionStorage.setItem("username",uname);
//                            alert(localStorage.access_token);
                            
                        window.location.href = '/';

                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
//                                    alert("Status: " + textStatus); alert("Error: " + errorThrown+ ' '+ JSON.stringify(XMLHttpRequest.responseJSON.error)); 
                            
                           document.getElementById("status").innerHTML="Email and Password are not match our records";
                            document.getElementById("status").style.visibility = "visible";
                            
                        //  $('input[type="text"]').val('');
                         $('input[type="password"]').val('');
                        }
                    });
			}
                    var getData={
                        "header":{
                          "guid":"asdfsd",
                           "requestedOn":"ffsa",
                           "requestedFrom" :"fas",
                           "geoLocation":"fasdv"
                        },
                        "body":{
                             "emailId":uname
                        }     
                    };
                                                    

                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": data2.accountDetails,
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json",
                            "authorization": "Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed"
//                            "authorization": token+" "+localStorage.access_token 

                        },
                        "processData": false,
                        "data": JSON.stringify(getData)
                    };

                    $.ajax(settings).done(function (response) {
                       // alert('getting');
                        sessionStorage.setItem("userRef", response.body.userRef);
                        sessionStorage.setItem('gender',response.body.gender);
                        sessionStorage.setItem('age',response.body.age);
                        sessionStorage.setItem('religion',response.body.religion);
                    }); 

                });

   //Forget password
    self.serviceCall = function(uri, method, data){
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
                    // key value pair of headers
                    'Authorization': 'Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed',
                    Accept: "application/json"
                },
                beforeSend: function (xhr) {
                },
                error: function (jqXHR) {
                    console.log("ajax error " + jqXHR.status);
                }
            };
            return $.ajax(request);
        };
        $("#fsubmit").click(function(){
//            alert('clicked');
            self.pdata = {
                "header" : {
                    "guid": "aa",
                    "geoLocation":"aa",
                    "responseon" : "",
                     "status" : "success",
                     "statusCode" : "0",
                    "responsefrom" : ""
                    },
                "body": { 
                        "emailId" : $("#femail").val()
                    }
                };
                
      //  alert(JSON.stringify( self.pdata));
        self.tasksURI = data2.forgotPassword;
        self.serviceCall(self.tasksURI, 'POST', self.pdata).done(function (data) {
            console.log(JSON.stringify(data));     
//            alert(JSON.stringify(data.header.statusCode));
            var responsedStatus = JSON.stringify(data);
        if(data){
            if(data.statusCode === "-1"){
            
            document.getElementById("forgotSuccess").innerHTML="Enter valid mailId";
            document.getElementById("forgotSuccess").style.visibility = "visible";
            
//            setTimeout(function() {               
//                 document.getElementById("forgotSuccess").style.visibility = "hidden"; 
//                }, 5000);
            }else{
//                document.getElementById("forgotSuccess").innerHTML="Please check your mail for temporary password";
            document.getElementById("forgotSuccess").style.visibility = "visible";
            $('input[type="password"]').val('');
//            setTimeout(function() {               
//                 document.getElementById("forgotSuccess").style.visibility = "hidden"; 
//                }, 5000);
            }
            }
            
        });
	$('input[type="text"]').val('');
        $("#forgotDialog").show();
             $("#globalBody").hide();
            $("#myCarousel").hide();
            $("#registrationpage").hide();
//        $("#globalBody").dialog("open");
//            $("#forgotDialog").dialog("close");

    });

});
                 });
