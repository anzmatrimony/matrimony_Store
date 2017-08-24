/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config(
        {
            baseUrl: 'js',

            // Path mappings for the logical module names
            // Update the main-release-paths.json for release mode when updating the mappings
            paths:
//injector:mainReleasePaths

                            {
                                'knockout': 'libs/knockout/knockout-3.4.0.debug',
                                'jquery': 'libs/jquery/jquery-3.1.1',
                                'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
                                'promise': 'libs/es6-promise/es6-promise',
                                'hammerjs': 'libs/hammer/hammer-2.0.8',
                                'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
                                'ojs': 'libs/oj/v3.0.0/debug',
                                'ojL10n': 'libs/oj/v3.0.0/ojL10n',
                                'ojtranslations': 'libs/oj/v3.0.0/resources',
                                'text': 'libs/require/text',
                                'signals': 'libs/js-signals/signals',
                                'customElements': 'libs/webcomponents/CustomElements',
                                'proj4': 'libs/proj4js/dist/proj4-src',
                                'css': 'libs/require-css/css'
                            }
                    
//endinjector
                    ,
                    // Shim configurations for modules that do not expose AMD
                    shim:
                            {
                                'jquery':
                                        {
                                            exports: ['jQuery', '$']
                                        }
                            }
                }
        );

        /**
         * A top-level require call executed by the Application.
         * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
         * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
         * objects in the callback
         */
        require(['ojs/ojcore', 'knockout', 'appController', 'ojs/ojknockout',
            'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojnavigationlist', 'ojs/ojbutton', 'ojs/ojtoolbar'],
                function (oj, ko, app) { // this callback gets executed when all required modules are loaded

                    $(function () {
                        var self = this;
                        var authenicated = sessionStorage.authenticated;
                        function LoginModel() {




                            var self = this;
                            var self = this;
                            self.uname = ko.observable();
                            self.pwd = ko.observable();

self.GetData=ko.observable();
                            self.status = ko.observable();
                            self.environment = ko.observable();
                            var environment;

                            $.getJSON("env_var.json", function (data) {


                                environment = data.environment;

                                $.getJSON(environment + ".json", function (data) {

                                    self.environment(data);

                                });


                            });




                            self.Login = function () {
                                    
                                    self.getData={
                                                    "header":{
                                                      "guid":"asdfsd",
                                                       "requestedOn":"ffsa",
                                                       "requestedFrom" :"fas",
                                                       "geoLocation":"fasdv"

                                                                        },
                                                    "body":{
                                                    "emailId":self.uname()
                                                     }     
                                                     };
                                                    

                                var settings = {
                                    "async": true,
                                    "crossDomain": true,
                                    "url": self.environment().accountDetails,
                                    "method": "POST",
                                    "headers": {
                                        "content-type": "application/json",
                                        "authorization": "Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed"
                                       
                                    },
                                    "processData": false,
                                    "data": JSON.stringify(self.getData)
                                };

                                $.ajax(settings).done(function (response) {
                                 sessionStorage.setItem("userRef", response.body.userRef);
                                 sessionStorage.setItem('gender',response.body.gender);
                                 sessionStorage.setItem('age',response.body.age);
                                 sessionStorage.setItem('religion',response.body.religion);                          
                                });
                                 
                                

                                $.ajax({
                                    "async": true,
                                    "crossDomain": true,
                         
                                    "url": self.environment().tokenUri,
                                    type: "POST",
                                    headers: {
                                        "authorization": "Basic UEVSR0tVSzU2dXk5eXF1TkxiOWdLdk5HUEdZYTpGblh3a1N2NGdGZDIzUlR1OVZ5Y0pBdEY1akFh",
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        "grant_type": "password",
                                        "username": self.uname(),
                                        "password": self.pwd()
                                    },
                                    success: function (response) {

                                        localStorage.setItem("access_token", response.access_token);
                                        localStorage.setItem("AuthorizationResponse", JSON.stringify(response));

                                        sessionStorage.setItem("authenticated", true);
                                        sessionStorage.setItem("username", self.uname());
                                        //    
                                        //alert(localStorage.access_token);
                                        self.status('');
                                        //getRoles(self.environment());
                                        window.location.href = '/';
                                        
                                        var settings = {
                                    "async": true,
                                    "crossDomain": true,
                                    "url": self.environment().accountDetails,
                                    "method": "POST",
                                    "headers": {
                                        "content-type": "application/json",
                                        "authorization": "Bearer"+" "+response.access_token
                                       
                                    },
                                    "processData": false,
                                    "data": JSON.stringify(self.getData)
                                };

                                $.ajax(settings).done(function (response) {
                                 sessionStorage.setItem("userRef", response.body.userRef);
                                 sessionStorage.setItem('gender',response.body.gender);
                                 sessionStorage.setItem('age',response.body.age);
                                 sessionStorage.setItem('religion',response.body.religion);                          
                                });
                                        
                                        
                                        

                                    },
                                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                                        //        alert("Status: " + textStatus); alert("Error: " + errorThrown+ ' '+ JSON.stringify(XMLHttpRequest.responseJSON.error)); 
                                        self.status('credentials are not valid please enter correct credentials ');
                                    }
                                });











                            };




                        }


















                        function init() {
                            if (authenicated) {


                                oj.Router.sync().then(
                                        function () {
                                            // Bind your ViewModel for the content of the whole page body.
                                            ko.applyBindings(app, document.getElementById('globalBody'));
                                        },
                                        function (error) {
                                            oj.Logger.error('Error in root start: ' + error.message);
                                        }
                                );
                            }
                            if (!authenicated) {


                                ko.applyBindings(new LoginModel(), document.getElementById('globalBody'));

                            }

                        }

                        // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready 
                        // event before executing any code that might interact with Cordova APIs or plugins.
                        if ($(document.body).hasClass('oj-hybrid')) {
                            document.addEventListener("deviceready", init);
                        } else {
                            init();
                        }

                    });

                }
        );
