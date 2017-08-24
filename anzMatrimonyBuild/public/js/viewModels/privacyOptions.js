/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout',
    'ojs/ojradioset', 'ojs/ojbutton', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojcollectiontabledatasource', 'ojs/ojarraytabledatasource'

],
        function (oj, ko, $) {

            function privacyOptionsContentViewModel() {
                var self = this;
                  self.token=ko.observable('Bearer'+' '+localStorage.getItem("access_token"));
                 var globalVM = ko.dataFor(document.getElementById('globalBody'));
                self.edit;
                self.cancel;
                self.save;
                 var arrdata;
      
         

                self.currentVal=ko.observableArray([]);
                self.previousValue = ko.observableArray([]);

                self.mobileopt = ko.observableArray([]);
                self.mobileoptsaved = ko.observableArray([]);
              
                self.twitteropt = ko.observable();
             self.twitteroptsaved = ko.observable();
              
                self.homeopt = ko.observable();
               self.homeoptsaved=ko.observable();
             
                self.fbopt = ko.observable();
              self.fboptsaved = ko.observable();
               
//                self.profileopt = ko.observable();
//                self.profileoptsaved=ko.observable();
                
                self.linkdinopt = ko.observable();
               self.linkdinoptsaved=ko.observable();
               
//                self.shortlistopt = ko.observable();
//                self.shortlistoptsaved=ko.observable();
//                
//                self.visibleopt = ko.observable();
//                self.visibleoptsvaed=ko.observable();
//                
//                self.webopt = ko.observable();
//               self.weboptsaved=ko.observable();
//               
//                self.dontdisopt = ko.observable();
//               self.dontdisoptsaved=ko.observable();
             
              
                 
                   
                         
           // self.userRef = ko.observableArray(["301"]);
                self.rdata = ko.observableArray();
//                self.queryParams = {
//                    "user_ID": this.user_ID()[0]
//                };
//                
                
               
                
                
                $.ajax({
                     
               url: globalVM.environment().getprivacyDetails+'?'+$.param({
                   userRef:sessionStorage.getItem("userRef"),
                   guid:36,
                   geoLocation:96,
                   requestedFrom:154,
                   requestedOn:6
               }), 
               dataType: 'json',
               headers: {
                   // key value pair of headers
                   'Authorization': self.token()
               },
           success: function (getdata) {
             console.log(getdata);
                             arrdata = getdata[1].body;
                            self.mobileoptsaved(getdata[1].body.mobileNo.options);
                             self.twitteroptsaved(getdata[1].body.twitterid.options);
                              self.homeoptsaved(getdata[1].body.homeNo.options);
                              self.fboptsaved(getdata[1].body.fbId.options);
//                               self.profileoptsaved(getdata[1].body.profilePrivacy.options);
                              self.linkdinoptsaved(getdata[1].body.linkedinid.options);
//                              self.shortlistoptsaved(getdata[1].body.shortlist.options);
//                               self.visibleoptsvaed(getdata[1].body.visibletySettings.options);
//                              self.weboptsaved(getdata[1].body.webnotification.options);
//                               self.dontdisoptsaved(getdata[1].body.dnd.options);
                          
                            self.rdata(arrdata);
                            rdata = JSON.stringify(arrdata);
                          //  alert(rdata);
               }
           });
 self.serviceCall = function (uri, method, data) {
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
                           'Authorization': self.token(),
                           Accept: "application/json"
                       },
                       beforeSend: function (xhr) {

//                    xhr.setRequestHeader("Authorization", 
//                        "Basic " + btoa(self.username + ":" + self.password));
                       },
                       error: function (jqXHR) {
                           console.log("ajax error " + jqXHR.status);
                       }
                   };
                   return $.ajax(request);
               };

                self.edit = function edit(divparam1, event) {

                           self.mobileopt(self.mobileoptsaved());
                                       self.twitteropt(self.twitteroptsaved());
                                        self.homeopt(self.homeoptsaved());
                                          self.fbopt(self.fboptsaved());
//                                          self.profileopt(self.profileoptsaved());
                                          self.linkdinopt(self.linkdinoptsaved());
//                                          self.shortlistopt(self.shortlistoptsaved());
//                                           self.dontdisopt(self.dontdisoptsaved());
//                                           self.visibleopt(self.visibleoptsvaed());
//                                            self.webopt(self.weboptsaved());
                           

                    if (divparam1 === "mobile")
                    {

                        
                        document.getElementById('mobilehideOpt').style.display = 'block';
                        document.getElementById('cVal').style.display = 'none';
                         (document.getElementById('mobileEdit')).style.display = 'none';
                        document.getElementById('twitteridEdit').style.display = 'none';
                        (document.getElementById('incomeEdit')).style.display = 'none';
                        (document.getElementById('fbidEdit')).style.display = 'none';
//                        (document.getElementById('profileEdit')).style.display = 'none';
                        (document.getElementById('linkdinEdit')).style.display = 'none';
//                        (document.getElementById('shortlistEdit')).style.display = 'none';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'none';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'none';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'none';
                      

                    }
                    ;

                    if (divparam1 === "twitterid")
                    {

                        
                        document.getElementById('twitterhideOpt').style.display = 'block';
                        document.getElementById('dVal').style.display = 'none';
                         (document.getElementById('mobileEdit')).style.display = 'none';
                        document.getElementById('twitteridEdit').style.display = 'none';
                        (document.getElementById('incomeEdit')).style.display = 'none';
                        (document.getElementById('fbidEdit')).style.display = 'none';
//                        (document.getElementById('profileEdit')).style.display = 'none';
                        (document.getElementById('linkdinEdit')).style.display = 'none';
//                        (document.getElementById('shortlistEdit')).style.display = 'none';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'none';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'none';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'none';
                        
                    }
                    ;
                    if (divparam1 === "homeNo")
                    {
                        document.getElementById('incomehideOpt').style.display = 'block';
                        document.getElementById('eVal').style.display = 'none';
                        (document.getElementById('mobileEdit')).style.display = 'none';
                        document.getElementById('twitteridEdit').style.display = 'none';
                        (document.getElementById('incomeEdit')).style.display = 'none';
                        (document.getElementById('fbidEdit')).style.display = 'none';
//                        (document.getElementById('profileEdit')).style.display = 'none';
                        (document.getElementById('linkdinEdit')).style.display = 'none';
//                        (document.getElementById('shortlistEdit')).style.display = 'none';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'none';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'none';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'none';
                        
                    }
                    ;

                    if (divparam1 === "fbid")
                    {
                        document.getElementById('fbhideOpt').style.display = 'block';
                        document.getElementById('fVal').style.display = 'none';
                         (document.getElementById('mobileEdit')).style.display = 'none';
                        document.getElementById('twitteridEdit').style.display = 'none';
                        (document.getElementById('incomeEdit')).style.display = 'none';
                        (document.getElementById('fbidEdit')).style.display = 'none';
//                        (document.getElementById('profileEdit')).style.display = 'none';
                        (document.getElementById('linkdinEdit')).style.display = 'none';
//                        (document.getElementById('shortlistEdit')).style.display = 'none';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'none';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'none';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'none';
                       
                    }
                    ;

                    if (divparam1 === "privacy profile")
                    {

                        document.getElementById('privacyhideOpt').style.display = 'block';
                        document.getElementById('gVal').style.display = 'none';
                        (document.getElementById('mobileEdit')).style.display = 'none';
                        document.getElementById('twitteridEdit').style.display = 'none';
                        (document.getElementById('incomeEdit')).style.display = 'none';
                        (document.getElementById('fbidEdit')).style.display = 'none';
//                        (document.getElementById('profileEdit')).style.display = 'none';
                        (document.getElementById('linkdinEdit')).style.display = 'none';
//                        (document.getElementById('shortlistEdit')).style.display = 'none';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'none';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'none';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'none';
                       

                    }
                    ;

                    if (divparam1 === "linkdin")
                    {
                   document.getElementById('linkdinhideOpt').style.display = 'block';
                        document.getElementById('hVal').style.display = 'none';
                        (document.getElementById('mobileEdit')).style.display = 'none';
                        document.getElementById('twitteridEdit').style.display = 'none';
                        (document.getElementById('incomeEdit')).style.display = 'none';
                        (document.getElementById('fbidEdit')).style.display = 'none';
//                        (document.getElementById('profileEdit')).style.display = 'none';
                        (document.getElementById('linkdinEdit')).style.display = 'none';
//                        (document.getElementById('shortlistEdit')).style.display = 'none';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'none';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'none';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'none';
                        
                    }
                    ;

                    if (divparam1 === "shortlist")
                    {
                      
                        document.getElementById('shortlisthideOpt').style.display = 'block';
                        document.getElementById('iVal').style.display = 'none';
                      (document.getElementById('mobileEdit')).style.display = 'none';
                        document.getElementById('twitteridEdit').style.display = 'none';
                        (document.getElementById('incomeEdit')).style.display = 'none';
                        (document.getElementById('fbidEdit')).style.display = 'none';
//                        (document.getElementById('profileEdit')).style.display = 'none';
                        (document.getElementById('linkdinEdit')).style.display = 'none';
//                        (document.getElementById('shortlistEdit')).style.display = 'none';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'none';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'none';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'none';
                      
                    }
                    ;

                    if (divparam1 === "visiblesettings")
                    {

                        document.getElementById('visblehideOpt').style.display = 'block';
                        document.getElementById('jVal').style.display = 'none';

                      (document.getElementById('mobileEdit')).style.display = 'none';
                        document.getElementById('twitteridEdit').style.display = 'none';
                        (document.getElementById('incomeEdit')).style.display = 'none';
                        (document.getElementById('fbidEdit')).style.display = 'none';
//                        (document.getElementById('profileEdit')).style.display = 'none';
                        (document.getElementById('linkdinEdit')).style.display = 'none';
//                        (document.getElementById('shortlistEdit')).style.display = 'none';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'none';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'none';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'none';
                        
                    }
                    ;
                    if (divparam1 === "webnotificatons")
                    {

                        document.getElementById('webhideOpt').style.display = 'block';
                        document.getElementById('kVal').style.display = 'none';
                         (document.getElementById('mobileEdit')).style.display = 'none';
                        document.getElementById('twitteridEdit').style.display = 'none';
                        (document.getElementById('incomeEdit')).style.display = 'none';
                        (document.getElementById('fbidEdit')).style.display = 'none';
//                        (document.getElementById('profileEdit')).style.display = 'none';
                        (document.getElementById('linkdinEdit')).style.display = 'none';
//                        (document.getElementById('shortlistEdit')).style.display = 'none';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'none';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'none';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'none';
                      

                    }
                    ;


                    if (divparam1 === "donotdistrub")
                    {
                        document.getElementById('dndhideOpt').style.display = 'block';
                        document.getElementById('lVal').style.display = 'none';
                        (document.getElementById('mobileEdit')).style.display = 'none';
                        document.getElementById('twitteridEdit').style.display = 'none';
                        (document.getElementById('incomeEdit')).style.display = 'none';
                        (document.getElementById('fbidEdit')).style.display = 'none';
//                        (document.getElementById('profileEdit')).style.display = 'none';
                        (document.getElementById('linkdinEdit')).style.display = 'none';
//                        (document.getElementById('shortlistEdit')).style.display = 'none';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'none';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'none';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'none';
                       

                    }
                    ;

                    
                };

              
              

                self.save = function save(divparam1) {
               
                       // alert("clicked");
          self.jsonbody = ko.observable();              
                         
               self.jsonbody = {
                            //"user_ID": this.user_ID()[0],
                             
                               
                                    "header":  {
                                   "guid":"230",           
                             "requestedFrom" :"",
                                "geoLocation":"321",
                              "userRef":sessionStorage.getItem("userRef")
                              },
                            "body":{
                               "userRef":sessionStorage.getItem("userRef"),  
                            "mobileNo": {
                                "options": self.mobileopt(),
                                "userRef": arrdata.mobileNo.userRef
                            },
                            "linkedinid": {
                                "options": self.linkdinopt(),
                                "userRef": arrdata.linkedinid.userRef
                            },
                            "twitterid": {
                                "options": self.twitteropt(),
                                "userRef": arrdata.twitterid.userRef
                            },
                       
                            "fbId": {
                                "options": self.fbopt(),
                                "userRef": arrdata.fbId.userRef
                            },
                            "homeNo": {
                                "options": self.homeopt(),
                                "userRef": arrdata.homeNo.userRef
                            }
                            }
                    };
                
     //alert('check');
                    //  alert(self.jsonbody);
                     //     alert( JSON.stringify(self.jsonbody));
                          
                            self.tasksURI = globalVM.environment().privacysettings;
                   self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {
                       //alert(JSON.stringify(data));
                       
                      console.log(JSON.stringify(data));
                   });
              

                    
                    if (divparam1 === "mobile") {

                          self.mobileoptsaved(self.mobileopt());
                        document.getElementById('mobilehideOpt').style.display = 'none';
                  
                        document.getElementById('cVal').style.display = 'block';
                         (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       

                    }
                    ;
                    if (divparam1 === "twitterid") {
                            
                            self.twitteroptsaved(self.twitteropt());
                        document.getElementById('twitterhideOpt').style.display = 'none';
                      
                        document.getElementById('dVal').style.display = 'block';
                          (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                        
                    }
                  
                    ;

                    if (divparam1 === "homeNo") {
                            
                       self.homeoptsaved(self.homeopt());
                        document.getElementById('incomehideOpt').style.display = 'none';
                      document.getElementById('eVal').style.display = 'block';
                         (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       
                    }
                    ;

                    if (divparam1 === "fbid") {

                       self.fboptsaved(self.fbopt());

                        document.getElementById('fbhideOpt').style.display = 'none';
                      document.getElementById('fVal').style.display = 'block';
                          (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       

                    }
                    ;

                    if (divparam1 === "privacy profile") {
                        
                        self.profileoptsaved(self.profileopt());
                    document.getElementById('privacyhideOpt').style.display = 'none';
                    document.getElementById('gVal').style.display = 'block';
                     (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       

                    }
                    ;

                    if (divparam1 === "linkdin") {
                          self.linkdinoptsaved(self.linkdinopt());
                        document.getElementById('linkdinhideOpt').style.display = 'none';
                     document.getElementById('hVal').style.display = 'block';
                              (document.getElementById('fbidEdit')).style.display = 'block';
                         (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                       (document.getElementById('incomeEdit')).style.display = 'block';                       
//                        (document.getElementById('profileEdit')).style.display = 'block';
                       (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                       (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                      (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       
                    }
                    ;

                   if (divparam1 === "shortlist") {
                   self.shortlistoptsaved(self.shortlistopt());
                        document.getElementById('shortlisthideOpt').style.display = 'none';
                      
                        document.getElementById('iVal').style.display = 'block';
                          (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       

                    }
                    ;

                    if (divparam1 === "visiblesettings") {

                       self.visibleoptsvaed(self.visibleopt());
                        document.getElementById('visblehideOpt').style.display = 'none';
                          document.getElementById('jVal').style.display = 'block';
                         (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                        
                       
                    }
                    ;

                    if (divparam1 === "webnotificatons") {
                           self.weboptsaved(self.webopt());

                       document.getElementById('webhideOpt').style.display = 'none';
                     document.getElementById('kVal').style.display = 'block';
                         (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                       (document.getElementById('incomeEdit')).style.display = 'block';
                      (document.getElementById('fbidEdit')).style.display = 'block';
//                     (document.getElementById('profileEdit')).style.display = 'block';
                      (document.getElementById('linkdinEdit')).style.display = 'block';
//                     (document.getElementById('shortlistEdit')).style.display = 'block';
//                      (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                       (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                      (document.getElementById('donotdistrubEdit')).style.display = 'block';
                     
                    }
                    ;
                  if (divparam1 === "donotdistrub") {

                 self.dontdisoptsaved(self.dontdisopt());
                        document.getElementById('dndhideOpt').style.display = 'none';
                       document.getElementById('lVal').style.display = 'block';
                         (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                        
                    }

                   
                };

                self.cancel = function cancel(divparam1) {
                    
                                       self.mobileopt(self.mobileoptsaved());
                                       self.twitteropt(self.twitteroptsaved());
                                        self.homeopt(self.homeoptsaved());
                                          self.fbopt(self.fboptsaved());
//                                          self.profileopt(self.profileoptsaved());
                                          self.linkdinopt(self.linkdinoptsaved());
//                                          self.shortlistopt(self.shortlistoptsaved());
//                                           self.dontdisopt(self.dontdisoptsaved());
//                                           self.visibleopt(self.visibleoptsvaed());
//                                            self.webopt(self.weboptsaved());
                                           
                    if (divparam1 === "mobile") {
                        
                        document.getElementById('mobilehideOpt').style.display = 'none';
                        document.getElementById('cVal').style.display = 'block';
                          (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                        

                    }
                    ;

                    if (divparam1 === "twitterid") {

                        document.getElementById('twitterhideOpt').style.display = 'none';
                        document.getElementById('dVal').style.display = 'block';
                          (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       

                    }
                    ;

                    if (divparam1 === "homeNo") {
                        document.getElementById('incomehideOpt').style.display = 'none';
                        document.getElementById('eVal').style.display = 'block';
                          (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       

                    }
                    ;

                    if (divparam1 === "fbid") {
                        document.getElementById('fbhideOpt').style.display = 'none';
                        document.getElementById('fVal').style.display = 'block';
                         (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       

                    }
                    ;
                    if (divparam1 === "privacy profile") {
                        document.getElementById('privacyhideOpt').style.display = 'none';
                        document.getElementById('gVal').style.display = 'block';
                          (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       

                    }
                    ;
                    if (divparam1 === "linkdin") {
                        document.getElementById('linkdinhideOpt').style.display = 'none';
                        document.getElementById('hVal').style.display = 'block';
                         (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
//                       
                    }
                    ;

                    if (divparam1 === "shortlist") {
                        document.getElementById('shortlisthideOpt').style.display = 'none';
                        document.getElementById('iVal').style.display = 'block';
                          (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                        
                    }
                    if (divparam1 === "visiblesettings") {
                        document.getElementById('visblehideOpt').style.display = 'none';
                        document.getElementById('jVal').style.display = 'block';
                          (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                       
                    }
                    ;


                    if (divparam1 === "webnotificatons") {
                  
                        document.getElementById('webhideOpt').style.display = 'none';
                        document.getElementById('kVal').style.display = 'block';
                          (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                        

                    };
                    
                    if (divparam1 === "donotdistrub") {
                        document.getElementById('dndhideOpt').style.display = 'none';
                        document.getElementById('lVal').style.display = 'block';
                         (document.getElementById('mobileEdit')).style.display = 'block';
                        document.getElementById('twitteridEdit').style.display = 'block';
                        (document.getElementById('incomeEdit')).style.display = 'block';
                        (document.getElementById('fbidEdit')).style.display = 'block';
//                        (document.getElementById('profileEdit')).style.display = 'block';
                        (document.getElementById('linkdinEdit')).style.display = 'block';
//                        (document.getElementById('shortlistEdit')).style.display = 'block';
//                        (document.getElementById('visiblesettingsEdit')).style.display = 'block';
//                        (document.getElementById('webnotificatonsEdit')).style.display = 'block';
//                        (document.getElementById('donotdistrubEdit')).style.display = 'block';
                        
                    }
                   
                 
                  

                };







                 self.Goback=function(){
                    // alert("asdrty");
             oj.Router.rootInstance.go('home');  
              };

            }

            return privacyOptionsContentViewModel();


        });