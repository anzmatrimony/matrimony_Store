/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * MyProfile module
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojknockout', 'ojs/ojprogressbar', 'ojs/ojbutton',
    'ojs/ojnavigationlist',
'ojs/ojswitch',
'ojs/ojradioset','ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojselectcombobox', 'ojs/ojbutton', 'ojs/ojdatetimepicker',
    'ojs/ojradioset', 'ojs/ojtimezonedata', 'ojs/ojinputnumber'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function MyProfileContentViewModel() {
      //  $("#pageloadMy").toggle();
      
        var self = this;
        self.SMallScreenIcons=ko.observable(false);
         self.iconDisplay=ko.observable();
        self.token=ko.observable('Bearer'+' '+localStorage.getItem("access_token"));
       // alert(self.token());
       self.imagecode=ko.observable();
          setTimeout(function () {
                //your code here

                if (window.File && window.FileReader && window.FileList && window.Blob) {
                    document.getElementById('filePicker').addEventListener('change', self.handleFileSelect, false);
                } else {
                    alert('The File APIs are not fully supported in this browser.');
                }
            }, 3000);

            self.handleFileSelect = function (evt) {
                var files = evt.target.files;
                var file = files[0];

                if (files && file) {
                    var reader = new FileReader();
                    document.getElementById("btnUpld").style.display = "block";
                    reader.onload = function (readerEvt) {
                        var binaryString = readerEvt.target.result;
                        // document.getElementById("base64textarea").value = btoa(binaryString);


                        self.imagecode(btoa(binaryString));
                       // alert(self.imagecode());

                    };

                    reader.readAsBinaryString(file);

                }
            };

            self.updateimage = function () {

                self.postingData = {
                    
                    
                    "header": {
                      "guid": "a2306dfa-b8e5-4d1e-ba36-249a8fa10f0c",
                      "geoLocation": "America",
                      "requestFrom": "user@123",
                      "requestedOn": "17/06/2017",
                      "userRef":sessionStorage.getItem('userRef')
                    },
             "body": {
                        "image": self.imagecode(),
                        "imageName": sessionStorage.getItem('userRef')
                    }
                };

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "  https://192.168.0.116:8243/anzImage/1.0/Create",
                    "method": "POST",
                    "headers": {
                        "content-type": "application/json",
                        "accept": "application/json",
                        "authorization": 'Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed'

                    },
                    "processData": false,
                    "data": JSON.stringify(self.postingData)
                };

                $.ajax(settings).done(function (response) {
                 //   alert("just in  ");
                    console.log(response);
                    location.reload();



                });

            };
            self.imagePath=ko.observable();
            self.imagePah = '/getimages/school/' + sessionStorage.getItem('userRef') + '.jpg';
            self.imagePath(self.imagePah);

       
       //// 
        self.buttonVisibleSm=ko.observable(false);
        self.buttonVisibleMd=ko.observable(true);
        var globalVM = ko.dataFor(document.getElementById('globalBody'));
        self.User=sessionStorage.getItem("username");
        self.userRef=ko.observable();
        self.MyProfileView=ko.observable(true);
        self.EditView=ko.observable(false);
       // alert(self.User);
        //count
        self.count = ko.observable('no views');
        self.countViewed = ko.observable('no views');
        self.Editfunction = function () {
          self.EditView(true);
          self.MyProfileView(false);
             self.selectedLevel('home2');
        };
        //edit button play hide and show
        self.hidingEditButton=ko.observable(true);
        self.showEditButton=ko.observable(false);
        jQuery(window).resize(function() {
  if (jQuery(window).width() < 768) {
    self.buttonVisibleSm(true);
        self.buttonVisibleMd(false);
       self.iconDisplay('icons');
   
  }else if (jQuery(window).width() > 768) {
    self.buttonVisibleSm(false);
        self.buttonVisibleMd(true);
       self.iconDisplay('all');
   
  }
else{
    self.buttonVisibleSm(false);
        self.buttonVisibleMd(true);
    self.iconDisplay();
  }});
  self.iconDisplay('all');
 
  
  
        
 Date.prototype.yyyymmddhhmmss = function() {
  var yyyy = this.getFullYear().toString();
  var MM = (this.getMonth()+1).toString(); // getMonth() is zero-based
  var dd  = this.getDate().toString();
  var hh = this.getHours().toString();
  var mm = this.getMinutes().toString();
  var ss = this.getSeconds().toString();
 return yyyy + '-' + (MM[1]?MM:"0"+MM[0]) + '-' + (dd[1]?dd:"0"+dd[0]) + '-' + (hh[1]?hh:"0"+hh[0]) + ':' + (mm[1]?mm:"0"+mm[0]) + ':' + (ss[1]?ss:"0"+ss[0]);
};
   var requestedOn= new Date().yyyymmddhhmmss();
        
        //profile data
        self.Gender = ko.observable();
        self.Age = ko.observable();
        self.Religion = ko.observable();
        self.firstname = ko.observable();
        self.Job = ko.observable();
        self.workingWith = ko.observable();
        self.locality = ko.observable();
        self.mobileNumber = ko.observable();
        self.fatherStatus = ko.observable();
        self.motherStatus = ko.observable();
        self.siblings = ko.observable();
        self.favouriteSports = ko.observable();
        self.favouriteBooks = ko.observable();
        self.favouriteMovies = ko.observable();
        self.favouriteMusic = ko.observable();
        self.interests = ko.observable();

        self.mobileNumber = ko.observable();
        self.facebookId = ko.observable();
        self.linkedinId = ko.observable();
        self.twitterId = ko.observable();
        self.googleplusId = ko.observable();
self.educationData = ko.observableArray();  
self.educationdata=ko.observable();
self.countryData=ko.observable();
self.OriginCountryIn=ko.observable();

        //progressBar
        self.progressValue = ko.observable(20);


        //service Call
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
                    'Authorization': self.token(),
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
        
    
 
          //  self.userRef(people.body.userRef);
            //alert(self.userRef());
           
            self.userRef=sessionStorage.getItem("userRef");
            sessionStorage.getItem('gender');
            sessionStorage.getItem('age');
            sessionStorage.getItem('religion');
           // alert(self.userRef);
                        self.pdata =
                            {"header": {
                                    "guid": "asfdsaf",
                                    "requestedOn": "fasdf",
                                    "requestedFrom": "fasf",
                                    "geoLocation": "adff"
                                },
                                "body": {
                                    "userRef": self.userRef
                                }
                            };
                        //alert(self.pdata);
                          self.serviceCall(globalVM.environment().getDetails, 'POST', self.pdata).done(function (data) {
                            console.log(data[1]);
                             self.Result = data[1];
                               self.Gender(self.Result.body.gender);
                                self.Age(self.Result.body.age);
                                self.Religion(self.Result.body.religion);
                                self.progressValue(Math.round(self.Result.body.profileCompleteness));
                              //  alert(self.progressValue());
                                   
                                   
                                self.firstname(self.Result.body.firstName+ " " +self.Result.body.lastName);
                             
                                self.Job(self.Result.body.workingAs);
                                self.workingWith(self.Result.body.workingWith);
                                self.locality(self.Result.body.nativePlace);
                                self.mobileNumber(self.Result.body.mobileNumber);
                                self.fatherStatus(self.Result.body.fatherStatus);
                                self.motherStatus(self.Result.body.motherStatus);
                                self.siblings(self.Result.body.sibblings);
                                self.favouriteSports(self.Result.body.favouriteSports);
                                self.favouriteBooks(self.Result.body.favouriteBooks);
                                self.favouriteMovies(self.Result.body.favouriteMovies);
                                self.favouriteMusic(self.Result.body.favouriteMusic);
                                self.interests(self.Result.body.interests);
                                self.mobileNumber(self.Result.body.mobileNumber);
                                self.facebookId(self.Result.body.facebookId);
                                self.linkedinId(self.Result.body.linkedinId);
                                self.twitterId(self.Result.body.twitterId);
                                self.googleplusId(self.Result.body.googleplusId);
                                
                                 if(self.progressValue()<='23'){
                                    // alert(self.progressValue());
                                  //  alert("please fill all details in registration!");
                                        oj.Router.rootInstance.go('dashboard');
                                    };
                                    
//                                    if(self.progressValue()<='59'){
//                                    // alert(self.progressValue());
//                                        alert("please fill  your profile to get  perfect matches  !");
//                                       
//                                    };
                                
                          });
                          
                          
                           self.postData = 
                             {  "header":{
                        "guid":"asfdsaf",
                         "requestedOn":"fasdf",
                         "requestedFrom":"fasf",
                          "geoLocation":"adff",
                          "userRef" :sessionStorage.getItem("userRef")
                         },
                         "body":{
                         "userRef" :sessionStorage.getItem("userRef")
                               }    
                    };
                   // alert(self.postData);
    
    self.serviceCall(globalVM.environment().getDetails  , 'POST', self.postData).done(function (data) {
                 console.log(data[0]); 
                       self.Result=data[1]; 
                      console.log(JSON.stringify(self.Result));
                    // alert(self.Result.body.motherTounge);
 
                    
                   // self.religion(self.Result.body.religion);                  
                    self.selectedAge(self.Result.body.age);              
                    self.favourite_music(self.Result.body.favouriteMusic);
                    self.favourite_books(self.Result.body.favouriteBooks);
                    self.fname(self.Result.body.firstName);
                    self.lastname(self.Result.body.lastName);
                    sessionStorage.setItem("Ufname",self.fname());
                     sessionStorage.setItem("Ulname",self.lastname());
                     //alert(sessionStorage.getItem("Ulname"));
                    self.email (self.Result.body.emailId);
                    self.selectedprofilefor(self.Result.body.profileFor);
                    self.HigherEducation(self.Result.body.highestEducation);
                    self.selectedGender(self.Result.body.gender);
                     self.selectedReligion(self.Result.body.religion);
                    self.mothertongue(self.Result.body.motherTounge);
                    self.maritalstatus (self.Result.body.maritalStatus);
                    self.body_type(self.Result.body.bodyType);
                    self.father_status(self.Result.body.fatherStatus);                
                    self.weight(self.Result.body.weight);
                    self.height(self.Result.body.height);                
                    self.skintone(self.Result.body.skinTone);
                    self.diet(self.Result.body.diet);                  
                    self.drink(self.Result.body.drink);                 
                    self.smoke(self.Result.body.smoke);                 
                    self.dob(self.Result.body.dob);
                    self.homeNumber(self.Result.body.homePhone);
                    self.siblings(self.Result.body.siblings);
                    self.selectedCommunity(self.Result.body.community);
                    self.selectedSubCommunity(self.Result.body.subCommunity);
                    self.selectedGothra(self.Result.body.gothra);
                    self.selectedZodiacSign(self.Result.body.zodiacSign);
                    self.enteredCollege (self.Result.body.college);
                    self.enteredWorkingWith(self.Result.body.workingWith);                    
                    self.enteredWorkingtype(self.Result.body.workingType);
                    self.enteredWorkingAs(self.Result.body.workingAs);
                    self.entredIncome(self.Result.body.annualIncome);
                    self.enterdWorkingLocaton(self.Result.body.workingLocation);                  
                    self.mother_status (self.Result.body.motherStatus);
                    self.native_place (self.Result.body.nativePlace);
                    self.siblings(self.Result.body.sibblings);                   
                    self.hobbies (self.Result.body.hobbies);
                    self.interests(self.Result.body.interests);
                    self.favourite_movies(self.Result.body.favouriteMovies);
                    self.favourite_sports(self.Result.body.favouriteSports);                   
                    self.mobiletext (self.Result.body.mobileNumber);
                    self.twittertext (self.Result.body.twitterId);
                    self.fbidtext(self.Result.body.facebookId);
                    self.linkdintext (self.Result.body.linkedinId);
                    self.googleplusidtext(self.Result.body.googleplusId);    
                  
                    
                    
                      var selectedAge = $( "#ageinput" ).val(self.Result.body.age);
                       var selectedGender =  $( "#gend" ).val(self.Result.body.gender);
                       var selectedprofilefor = $( "#profile" ).val(self.Result.body.profileFor);
                       var mothertongue = $( "#laguageData" ).val(self.Result.body.motherTounge); 
                       var maritalstatus =$( "#maritalData" ).val(self.Result.body.maritalStatus);
                        var height =$( "#HeightData" ).val(self.Result.body.height);
                        var body_type = $( "#BodyData" ).val(self.Result.body.bodyType);
                        var weight = $( "#WEighData" ).val(self.Result.body.weight);
                        var skintone = $( "#SkinToneData" ).val(self.Result.body.skintone);
                        var diet=$( "#DietData" ).val(self.Result.body.diet);
                        var drink =$( "#DrinkData" ).val(self.Result.body.drink);
                        var smoke = $( "#SmokeData" ).val(self.Result.body.smoke);
                        var selectedReligion= $( "#Religioninput" ).val(self.Result.body.religion);
                        var selectedCommunity=$( "#communitydata" ).val(self.Result.body.subCommunity);
                        var selectedGothra= $( "#gothradata" ).val(self.Result.body.gothra);
                        var selectedZodiacSign= $( "#zodiacdata" ).val(self.Result.body.zodiacSign);
                        var enteredWorkingtype= $( "#workingtypeinput" ).val(self.Result.body.workingType);
                        var father_status= $( "#fathergetdata" ).val(self.Result.body.fatherStatus);
                        var mother_status= $( "#mothergetdata" ).val(self.Result.body.motherStatus);
                         var siblings= $( "#siblingsgetdata" ).val(self.Result.body.sibblings);
                         var hobbies= $( "#hobbygetdata" ).val(self.Result.body.hobbies);
                         var interests= $( "#interestgetdata" ).val(self.Result.body.interests);
                         var entredIncome= $( "#annincomeinput" ).val(self.Result.body.annualIncome);
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    });
       
                          
                          
                          
         self.data5 = {
            "header":
                    {
                        "guid": "xyz",
                        "requestedOn": "xyz",
                        "requestedFrom": "xyz",
                        "userRef": self.userRef,
                        "geoLocation": "xyz"
                    },
            "body": {
                "userRef": self.userRef
            }
             };
        self.tasksURI = globalVM.environment().visitorsSearchDetails;
        self.serviceCall(self.tasksURI, 'POST', self.data5).done(function (people) {
           // alert('entered');
           console.log("visitedData" + JSON.stringify(people[0].body.visitorsData.length));
            // alert(JSON.stringify(people[0].body.searchData.length));
            self.countViewed(people[0].body.visitorsData.length);
            //alert(self.countViewed());

        });
        
        
            self.data4 = {
            "header":
                    {
                        "guid": "xyz",
                        "requestedOn": "xyz",
                        "requestedFrom": "xyz",
                         "userRef": self.userRef,
                        "geoLocation": "xyz"
                    },
            "body": {
                "userRef": self.userRef
            }
        };
        self.tasksURI = globalVM.environment().viewedSearchDetails;
        self.serviceCall(self.tasksURI, 'POST', self.data4).done(function (people) {
          //    alert(JSON.stringify(people));
           
            self.count(people[0].body.searchData.length);
            

        });              
                          

      
   self.gender = ko.observableArray();
   self.emailUser=ko.observable(sessionStorage.getItem("username"));
   self.emailUser(sessionStorage.getItem("username"));
  // alert(self.emailUser());
        self.genderselectdata = ko.observableArray();
        self.genderselect = ko.observableArray();       
        self.profileFor = ko.observableArray();
        self.profdata = ko.observableArray();
        self.profileselectdata = ko.observableArray();       
//       self.religion = ko.observableArray();
        self.religionselect = ko.observableArray();
        self.reldata = ko.observableArray();        
        self.age = ko.observableArray();
        self.Ageselectdata = ko.observableArray();
        self.agevardata = ko.observableArray();
     //   self.ageforData = ko.observableArray();       
        self.favourite_music = ko.observable();
        self.favourite_books = ko.observable();
        self.fname = ko.observable();
        self.lastname = ko.observable();
        self.email = ko.observable();
        self.homeNumber=ko.observable();
        self.selectedprofilefor = ko.observable();
        self.HigherEducation =ko.observable();
        self.selectedGender = ko.observable();
        self.selectedAge = ko.observable();
        self.selectedReligion = ko.observable();
        self.gender = ko.observable();
        self.age = ko.observable();
        self.religion = ko.observable();
        self.mothertongue = ko.observable("");
        self.maritalstatus = ko.observable("");
        self.body_type = ko.observable("");
        self.language = ko.observable();
        self.laguageData = ko.observable("");
        self.father_status = ko.observable();
        self.maritalData = ko.observable();
        self.weight = ko.observable("");
        self.WEighData = ko.observable();
        self.bodytype = ko.observable("");
        self.BodyData = ko.observable();
        self.height = ko.observable("");
        self.HeightData = ko.observable();
        self.skintone = ko.observable("");
        self.SkinToneData = ko.observable();
        self.diet = ko.observable("");
        self.DietData = ko.observable();
        self.drink = ko.observable("");
        self.DrinkData = ko.observable();
        self.smoke = ko.observable("");
        self.SmokeData = ko.observable();
        self.dob = ko.observable();
        self.siblings = ko.observable();
        self.siblingssel = ko.observableArray();
        self.community = ko.observable();
        self.selectedCommunity = ko.observable("");
        self.selectedSubCommunity = ko.observable("");
        self.selectedGothra = ko.observable("");
        self.selectedZodiacSign = ko.observable("");
        self.community = ko.observable("");
        self.sub_community = ko.observable("");
        self.gothra = ko.observable();
        self.gothrasel = ko.observableArray();
        self.zsigndata = ko.observableArray();
        self.zodiacData = ko.observableArray();
        self.subcommunitysel = ko.observableArray();
        self.communitysel = ko.observableArray();
        self.enteredCollege = ko.observable();
        self.enteredWorkingWith = ko.observable("");
        self.enteredWorkingtype = ko.observable("");
        self.enteredWorkingAs = ko.observable();
        self.entredIncome = ko.observable();
        self.enterdWorkingLocaton = ko.observable();
        self.college = ko.observable();
        self.working_type = ko.observable("");
        self.working_with = ko.observable("");
        self.workingtypesel = ko.observable("");
        self.incomesel = ko.observable("");
        self.working_as = ko.observable();
        self.annual_income = ko.observable();
        self.working_location = ko.observable();
        self.father_status = ko.observable("");
        self.mother_status = ko.observable("");
        self.native_place = ko.observable();
        self.siblings = ko.observable("");
        self.selectedsiblings = ko.observable("");
        self.fatherstatusdata = ko.observableArray([]);
        self.motherstatusdata = ko.observableArray([]);
        self.hobbies = ko.observable("");
        self.interests = ko.observable("");
        self.favourite_movies = ko.observable();
        self.favourite_books = ko.observable();
        self.favourite_sports = ko.observable();
        self.hobbydata = ko.observable();
        self.intrestdata = ko.observable();
        self.hobby = ko.observable();
        self.intrests = ko.observable();
        self.mobiletext = ko.observable();
        self.twittertext = ko.observable();
        self.fbidtext = ko.observable();
        self.linkdintext = ko.observable();
        self.googleplusidtext = ko.observable();
        self.mobile_number = ko.observable("");
        self.facebook_id = ko.observable("");
        self.linkedin_id = ko.observable("");
        self.twitter_id = ko.observable("");
        self.googleplus_id = ko.observable("");
        self.rdata = ko.observableArray();
        self.getdata = ko.observableArray();    
        self.ostateData=ko.observable();
        self.OriginStateIn=ko.observable();
           //Declatring bindend component of Div parts
           self.DivVisible=ko.observable(true);
           self.DivVisible1=ko.observable(false);
           self.DivVisible2=ko.observable(false);
           self.DivVisible3=ko.observable(false);
           self.DivVisible4=ko.observable(false);
           self.DivVisible5=ko.observable(false);
          
           //nav list config
           self.navigationLevel = ko.observable('page');
           self.isChecked = ko.observable();
           self.isChecked.subscribe(function(newValue) {
               var navlistInstances = $('#navlistdemo').find(':oj-navigationlist');
               if(newValue) {
                   navlistInstances.addClass('oj-sm-condense');
               } else {
                   navlistInstances.removeClass('oj-sm-condense');
               }
           });
           self.isContrastBackground = ko.observable(false);
           self.isContrastBackground.subscribe(function(newValue) {
               if(newValue) {
                   $(".navlistcontainer").addClass("demo-panel-contrast1 oj-contrast-marker");
               } else {
                   $(".navlistcontainer").removeClass("demo-panel-contrast1 oj-contrast-marker");
               }
           });
        
           //nav list functions
           self.home2=function(){
                 self.DivVisible(true);
                 self.DivVisible1(false);
                 self.DivVisible2(false);
                 self.DivVisible3(false);
                 self.DivVisible4(false);
                 self.DivVisible5(false);
           };
           self.gettingstarted2 =function(){
                 self.DivVisible1(true);
                 self.DivVisible(false);
                 self.DivVisible2(false);
                 self.DivVisible3(false);
                 self.DivVisible4(false);
                 self.DivVisible5(false);
        };
           self.cookbook2 =function(){
           self.DivVisible(false);
                 self.DivVisible1(false);
                 self.DivVisible2(true);
                 self.DivVisible3(false);
                 self.DivVisible4(false);
                 self.DivVisible5(false);
        };
           self.stylelab2=function(){
                 self.DivVisible(false);
                 self.DivVisible1(false);
                 self.DivVisible2(false);
                 self.DivVisible3(true);
                 self.DivVisible4(false);
                 self.DivVisible5(false);
        };
           self.library2=function(){
               self.DivVisible(false);
               self.DivVisible1(false);
               self.DivVisible2(false);
               self.DivVisible3(false);                  
               self.DivVisible4(true);
               self.DivVisible5(false);
        };
           self.library3=function(){
               self.DivVisible(false);
               self.DivVisible1(false);
               self.DivVisible2(false);
                self.DivVisible3(false);                  
            self.DivVisible4(false);
            self.DivVisible5(true);
        };
        
    //////json Details
      //=================mobile validation============     
        $(document).ready(function () {

            $("#mobile-num").keydown(function (e) {
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                        (e.keyCode >= 35 && e.keyCode <= 40)) {
                    return;
                }
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();

                }
            });
        });
        //==========================================================          

        $.get('community.json', function (comgetdata) {
            var commdata = comgetdata;
             
            self.email1 = ko.computed(function () {
                if ( $( "#Religioninput" ).val()== 'Hindu') {
                    self.communitysel(commdata.Hindu);
                    communitysel = JSON.stringify(commdata.Hindu);

                }
                if ( $( "#Religioninput" ).val() == 'Muslim') {
                    self.communitysel(commdata.Muslim);
                    communitysel = JSON.stringify(commdata.Muslim);

                }
                if (self.selectedReligion() == 'Christian') {
                    self.communitysel(commdata.Christian);
                    communitysel = JSON.stringify(commdata.Christian);

                }
                if (self.selectedReligion() == 'Sikh') {
                    self.communitysel(commdata.Sikh);
                    communitysel = JSON.stringify(commdata.Sikh);

                }
                if (self.selectedReligion() == 'Jain') {
                    self.communitysel(commdata.Jain);
                    communitysel = JSON.stringify(commdata.Jain);

                }
                if (self.selectedReligion() == 'Buddhist') {
                    self.communitysel(commdata.Buddhist);
                    communitysel = JSON.stringify(commdata.Buddhist);

                }
                if (self.selectedReligion() == 'Parsi') {
                    self.communitysel(commdata.Parsi);
                    communitysel = JSON.stringify(commdata.Parsi);

                }
                if (self.selectedReligion() == 'Jewish') {
                    self.communitysel(commdata.Jewish);
                    communitysel = JSON.stringify(commdata.Jewish);

                }
                if (self.selectedReligion() == 'Spiritual') {
                    self.communitysel(commdata.Spiritual);
                    communitysel = JSON.stringify(commdata.Spiritual);

                }
                if (self.selectedReligion() == 'Other') {
                    self.communitysel(commdata.Other);
                    communitysel = JSON.stringify(commdata.Other);

                }


            });

        });
        //===========================================================

        $.get('education.json', function(educationdata) {
               var edata = educationdata;
               self.educationData(edata);
               educationData = JSON.stringify(edata);
             });
        $.get('gender.json', function (genderforData) {
            console.info(genderforData);
            var genderselectdata = genderforData;
            self.genderselect(genderselectdata);
            genderselect = JSON.stringify(genderselectdata);
        });
        $.get('profilefor.json', function (profileforData) {
            console.info(profileforData);
            var profdata = profileforData;
            self.profileselectdata(profdata);
            profileselectdata = JSON.stringify(profdata);
        });

        $.get('annualincome.json', function (incomegetdata) {
            var incomedata = incomegetdata;
            self.incomesel(incomedata);
            incomesel = JSON.stringify(incomedata);
        });
        $.get('workingtype.json', function (workingtypegetdata) {
            var workingtypedata = workingtypegetdata;
            self.workingtypesel(workingtypedata);
            workingtypesel = JSON.stringify(workingtypedata);
        });
        $.get('religion.json', function (relgetdata) {
            var reldata = relgetdata;
            self.religionselect(reldata);
            religionselect = JSON.stringify(reldata);
        });
        $.get('fatherstatus.json', function (getdata) {
            var arrdata = getdata;
            self.fatherstatusdata(arrdata);
            fatherstatusdata = JSON.stringify(arrdata);
        });
        $.get('motherstatus.json', function (getdata) {
            var arrdata = getdata;
            self.motherstatusdata(arrdata);
            motherstatusdata = JSON.stringify(arrdata);
        });
        $.get('gothra.json', function (getdata) {
            var arrdata = getdata;
            self.gothrasel(arrdata); 
            gothrasel = JSON.stringify(arrdata);
        });
        $.get('siblings.json', function (getsiblingsdata) {
            var siblingsvar = getsiblingsdata;
            self.siblingssel(siblingsvar);
            siblingssel = JSON.stringify(siblingsvar);
        });
        $.get('mothertounge.json', function (Mdata) {
            var arrrdata = Mdata;
            self.laguageData(arrrdata);
            laguageData = JSON.stringify(arrrdata);
        });
        $.get('maritalstatus.json', function (Marydata) {
            var Marrrdata = Marydata;
            self.maritalData(Marrrdata);
            maritalData = JSON.stringify(Marrrdata);
        });
        $.get('weight.json', function (weightdata) {
            var wegidata = weightdata;
            self.WEighData(wegidata);
            WEighData = JSON.stringify(wegidata);
        });
        $.get('bodytype.json', function (bodydata) {
            var bodyData = bodydata;
            self.BodyData(bodyData);
            BodyData = JSON.stringify(bodyData);
        });
        $.get('height.json', function (Heihgtdata) {
            var heightData = Heihgtdata;
            self.HeightData(heightData);
            HeightData = JSON.stringify(heightData);
        });
        $.get('skintone.json', function (getskintone) {
            var skinData = getskintone;
            self.SkinToneData(skinData);
            SkinToneData = JSON.stringify(skinData);
        });
        $.get('drink.json', function (getdrink) {
            var drinkData = getdrink;
            self.DrinkData(drinkData);
            DrinkData = JSON.stringify(drinkData);
        });
        $.get('smoke.json', function (getsmoke) {
            var smokeData = getsmoke;
            self.SmokeData(smokeData);
            SmokeData = JSON.stringify(smokeData);
        });
        $.get('diet.json', function (getdiet) {
            var getData = getdiet;
            self.DietData(getData);
            DietData = JSON.stringify(getData);
        });
        $.get('age.json', function (ageforData) {
            var agevardata = ageforData;
            self.Ageselectdata(agevardata);
            Ageselectdata = JSON.stringify(agevardata);
        });
        $.get('zodaic_signs.json', function (zsigndata) {
            var zdata = zsigndata;
            self.zodiacData(zdata);
            zodiacData = JSON.stringify(zdata);
        });
    $.get('country.json', function(countrydata) {
    var cdata = countrydata;
    self.countryData(cdata);
    countryData = JSON.stringify(cdata);
    });
     $.get('state.json', function(ostatedata){
        var Osdata = ostatedata;
            self.oState = ko.computed(function (){
                if(self.OriginCountryIn()=='India') {
                        self.ostateData(Osdata.India);
                        ostateData = JSON.stringify(Osdata.India)
                } 
                if(self.OriginCountryIn()=='Australia') {
                        self.ostateData(Osdata.Australia);
                        ostateData = JSON.stringify(Osdata.Australia)
                }
                if(self.OriginCountryIn()=='NewZealand') {
                        self.ostateData(Osdata.NewZealand);
                        ostateData = JSON.stringify(Osdata.NewZealand)
                }
                if(self.OriginCountryIn()=='USA') {
                        self.ostateData(Osdata.USA);
                        ostateData = JSON.stringify(Osdata.USA)
                }
        });
    });


        
        
       
        
     //calling data      
    
    self.pdata = 
                             {  "header":{
                        "guid":"asfdsaf",
                         "requestedOn":"fasdf",
                         "requestedFrom":"fasf",
                          "geoLocation":"adff",
                          "userRef" :sessionStorage.getItem("userRef")
                         },
                         "body":{
                         "userRef" :sessionStorage.getItem("userRef")
                               }    
                    };
    
    self.serviceCall(globalVM.environment().getDetails  , 'POST', self.pdata).done(function (data) {
                 console.log(data[0]); 
                       self.Result=data[1]; 
                      console.log(JSON.stringify(self.Result));
                    // alert(self.Result.body.motherTounge);
 
                    
                   // self.religion(self.Result.body.religion);                  
                    self.selectedAge(self.Result.body.age);              
                    self.favourite_music(self.Result.body.favouriteMusic);
                    self.favourite_books(self.Result.body.favouriteBooks);
                    self.fname(self.Result.body.firstName);
                    self.lastname(self.Result.body.lastName);
                    sessionStorage.setItem("Ufname",self.fname());
                     sessionStorage.setItem("Ulname",self.lastname());
                     //alert(sessionStorage.getItem("Ulname"));
                    self.email (self.Result.body.emailId);
                    self.selectedprofilefor(self.Result.body.profileFor);
                    self.HigherEducation(self.Result.body.highestEducation);
                    self.selectedGender(self.Result.body.gender);
                     self.selectedReligion(self.Result.body.religion);
                    self.mothertongue(self.Result.body.motherTounge);
                    self.maritalstatus (self.Result.body.maritalStatus);
                    self.body_type(self.Result.body.bodyType);
                    self.father_status(self.Result.body.fatherStatus);                
                    self.weight(self.Result.body.weight);
                    self.height(self.Result.body.height);                
                    self.skintone(self.Result.body.skinTone);
                    self.diet(self.Result.body.diet);                  
                    self.drink(self.Result.body.drink);                 
                    self.smoke(self.Result.body.smoke);                 
                    self.dob(self.Result.body.dob);
                    self.homeNumber(self.Result.body.homePhone);
                    self.siblings(self.Result.body.siblings);
                    self.selectedCommunity(self.Result.body.community);
                    self.selectedSubCommunity(self.Result.body.subCommunity);
                    self.selectedGothra(self.Result.body.gothra);
                    self.selectedZodiacSign(self.Result.body.zodiacSign);
                    self.enteredCollege (self.Result.body.college);
                    self.enteredWorkingWith(self.Result.body.workingWith);                    
                    self.enteredWorkingtype(self.Result.body.workingType);
                    self.enteredWorkingAs(self.Result.body.workingAs);
                    self.entredIncome(self.Result.body.annualIncome);
                    self.enterdWorkingLocaton(self.Result.body.workingLocation);                  
                    self.mother_status (self.Result.body.motherStatus);
                    self.native_place (self.Result.body.nativePlace);
                    self.siblings(self.Result.body.sibblings);                   
                    self.hobbies (self.Result.body.hobbies);
                    self.interests(self.Result.body.interests);
                    self.favourite_movies(self.Result.body.favouriteMovies);
                    self.favourite_sports(self.Result.body.favouriteSports);                   
                    self.mobiletext (self.Result.body.mobileNumber);
                    self.twittertext (self.Result.body.twitterId);
                    self.fbidtext(self.Result.body.facebookId);
                    self.linkdintext (self.Result.body.linkedinId);
                    self.googleplusidtext(self.Result.body.googleplusId);    
                 self.OriginCountryIn(self.Result.body.orginCountry),
                          self.OriginStateIn(self.Result.body.orginState)                    
                      var selectedAge = $( "#ageinput" ).val(self.Result.body.age);
                       var selectedGender =  $( "#gend" ).val(self.Result.body.gender);
                       var selectedprofilefor = $( "#profile" ).val(self.Result.body.profileFor);
                       var mothertongue = $( "#laguageData" ).val(self.Result.body.motherTounge); 
                       var maritalstatus =$( "#maritalData" ).val(self.Result.body.maritalStatus);
                        var height =$( "#HeightData" ).val(self.Result.body.height);
                        var body_type = $( "#BodyData" ).val(self.Result.body.bodyType);
                        var weight = $( "#WEighData" ).val(self.Result.body.weight);
                        var skintone = $( "#SkinToneData" ).val(self.Result.body.skintone);
                        var diet=$( "#DietData" ).val(self.Result.body.diet);
                        var drink =$( "#DrinkData" ).val(self.Result.body.drink);
                        var smoke = $( "#SmokeData" ).val(self.Result.body.smoke);
                        var selectedReligion= $( "#Religioninput" ).val(self.Result.body.religion);
                        var selectedCommunity=$( "#communitydata" ).val(self.Result.body.subCommunity);
                        var selectedGothra= $( "#gothradata" ).val(self.Result.body.gothra);
                        var selectedZodiacSign= $( "#zodiacdata" ).val(self.Result.body.zodiacSign);
                        var enteredWorkingtype= $( "#workingtypeinput" ).val(self.Result.body.workingType);
                        var father_status= $( "#fathergetdata" ).val(self.Result.body.fatherStatus);
                        var mother_status= $( "#mothergetdata" ).val(self.Result.body.motherStatus);
                         var siblings= $( "#siblingsgetdata" ).val(self.Result.body.sibblings);
                         var hobbies= $( "#hobbygetdata" ).val(self.Result.body.hobbies);
                         var interests= $( "#interestgetdata" ).val(self.Result.body.interests);
                         var entredIncome= $( "#annincomeinput" ).val(self.Result.body.annualIncome);
                         
                    
                    
                    
                        $.get('community.json', function (comgetdata) {
            var commdata = comgetdata;
             
            self.email1 = ko.computed(function () {
                if ( $( "#Religioninput" ).val()== 'Hindu') {
                    self.communitysel(commdata.Hindu);
                    communitysel = JSON.stringify(commdata.Hindu);

                }
                if ( $( "#Religioninput" ).val() == 'Muslim') {
                    self.communitysel(commdata.Muslim);
                    communitysel = JSON.stringify(commdata.Muslim);

                }
                if (self.selectedReligion() == 'Christian') {
                    self.communitysel(commdata.Christian);
                    communitysel = JSON.stringify(commdata.Christian);

                }
                if (self.selectedReligion() == 'Sikh') {
                    self.communitysel(commdata.Sikh);
                    communitysel = JSON.stringify(commdata.Sikh);

                }
                if (self.selectedReligion() == 'Jain') {
                    self.communitysel(commdata.Jain);
                    communitysel = JSON.stringify(commdata.Jain);

                }
                if (self.selectedReligion() == 'Buddhist') {
                    self.communitysel(commdata.Buddhist);
                    communitysel = JSON.stringify(commdata.Buddhist);

                }
                if (self.selectedReligion() == 'Parsi') {
                    self.communitysel(commdata.Parsi);
                    communitysel = JSON.stringify(commdata.Parsi);

                }
                if (self.selectedReligion() == 'Jewish') {
                    self.communitysel(commdata.Jewish);
                    communitysel = JSON.stringify(commdata.Jewish);

                }
                if (self.selectedReligion() == 'Spiritual') {
                    self.communitysel(commdata.Spiritual);
                    communitysel = JSON.stringify(commdata.Spiritual);

                }
                if (self.selectedReligion() == 'Other') {
                    self.communitysel(commdata.Other);
                    communitysel = JSON.stringify(commdata.Other);

                }


            });

        });
                    
                    
                    
                    
                    
                    
                    
                    
                    });
   
     
        //sending data
        this.saveAndCloseData=function(){
           // alert("entered");
         
             self.go={
                 "header":{"guid":"asfdsaf",
                         "requestedOn":"fasdf",
                         "requestedFrom":"fasf",
                          "geoLocation":"adff",
                          "userRef":sessionStorage.getItem("userRef")
                        },
                 "body":{
                            "requestedOn":requestedOn,
                            "modifiedBy":self.emailUser(),
                            "emailId":self.emailUser(),
                            "userRef":sessionStorage.getItem("userRef"),
                             "gender": $("#gend").val(),
                            "profileFor": $("#profile").val(),
                             "firstName": self.fname(),
                             "lastName": this.lastname(),
                            "age":  $("#ageinput").val(),   
                          
                           "motherTounge": this.mothertongue(),
                           "dob": this.dob(),
                           "maritalStatus":  self.maritalstatus() ,
                           "height": this.height(),
                           "bodyType": this.body_type(),
                           "weight": this.weight(),
                           "skinTone": this.skintone(),
                           "diet": this.diet(),
                           "drink": this.drink(),
                           "smoke": this.smoke(),
                          
                           "religion": $( "#Religioninput" ).val(),
                           "community":$( "#communitydata" ).val(),
                           "subCommunity": this.selectedSubCommunity(),
                           "gothra": this.selectedGothra(),
                           "zodiacSign": this.selectedZodiacSign(),
                           "college": this.enteredCollege(),
                           "highestEducation": this.HigherEducation(),
                           "workingWith": this.enteredWorkingWith(),
                           "workingType": this.enteredWorkingtype(),
                           "annualIncome": $( "#annincomeinput" ).val(),
                           "workingAs": this.enteredWorkingAs(),
                           "workingLocation": this.enterdWorkingLocaton(),
                           "fatherStatus": this.father_status(),
                           "motherStatus": this.mother_status(),
                           "nativePlace": this.native_place(),
                           "sibblings": this.siblings(),
                             "hobbies": this.hobbies(),
                           "interests": this.interests(),
                           "favouriteMusic": this.favourite_music(),
                           "favouriteMovies": this.favourite_movies(),
                           "favouriteBooks": this.favourite_books(),
                           "favouriteSports": this.favourite_sports(),
                           "mobileNumber": this.mobiletext(),
                           "facebookId": this.fbidtext(),
                           "linkedinId": this.linkdintext(),
                           "twitterId": this.twittertext(),
                           "googleplusId": this.googleplusidtext(),
                           "homePhone":this.homeNumber(),
                           "orginCountry":this.OriginCountryIn(),
                           "orginState":this.OriginStateIn()
                           
                    
                  
                 }
             };
             
           // alert(JSON.stringify(self.go));
         
             self.serviceCall(globalVM.environment().postEditDetails,'POST',self.go).done(function(UpdatedData){
           //     alert(JSON.stringify(UpdatedData)); 
           if(UpdatedData=='0'){
           //    alert("profile is not updated please try after sometime!");
           }
          self.EditView(false);
          self.MyProfileView(true);
           self.DivVisible(true);
                 self.DivVisible1(false);
                 self.DivVisible2(false);
                 self.DivVisible3(false);
                 self.DivVisible4(false);
                 self.DivVisible5(false);
           self.selectedLevel('home2');
//           location.reload();
           
           
           
           
                  $.ajax({
                                    "async": true,
                                    "crossDomain": true,
                                    "url": globalVM.environment().getDetails,
                                    type: "POST",
                                    headers: {
                                        "authorization": self.token(),
                                        "content-type": "application/json"
                                    },
                                    data:JSON.stringify(self.data4) ,
                                    success: function (response) {
                                       // alert("sdf");
                                            self.Gender(response[1].body.gender);
                                self.Age(response[1].body.age);
                                self.Religion(response[1].body.religion);
                                self.progressValue(Math.round(response[1].body.profileCompleteness));  
                                self.firstname(response[1].body.firstName+ " " +response[1].body.lastName);
                                self.Job(response[1].body.workingAs);
                                self.workingWith(response[1].body.workingWith);
                                self.locality(response[1].body.workingLocation);
                                self.mobileNumber(response[1].body.mobileNumber);
                                self.fatherStatus(response[1].body.fatherStatus);
                                self.motherStatus(response[1].body.motherStatus);
                                self.siblings(response[1].body.sibblings);
                                self.favouriteSports(response[1].body.favouriteSports);
                                self.favouriteBooks(response[1].body.favouriteBooks);
                                self.favouriteMovies(response[1].body.favouriteMovies);
                                self.favouriteMusic(response[1].body.favouriteMusic);
                                self.interests(response[1].body.interests);
                                self.mobileNumber(response[1].body.mobileNumber);
                                self.facebookId(response[1].body.facebookId);
                                self.linkedinId(response[1].body.linkedinId);
                                self.twitterId(response[1].body.twitterId);
                                self.googleplusId(response[1].body.googleplusId);
                                    
                     self.OriginCountryIn(response[1].body.orginCountry),
                          self.OriginStateIn(response[1].body.orginState)        
                                    },
                                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                                                alert("Status: " + textStatus); alert("Error: " + errorThrown+ ' '+ JSON.stringify(XMLHttpRequest.responseJSON.error)); 
                                                                            }
                                });

           
           
           
           
             }
                     
                     );
           
                };
                
       

        self.selectedLevel=ko.observable();
         this.CancelData=function(){
                 self.EditView(false);
                 self.MyProfileView(true);
                 self.DivVisible(true);
                 self.DivVisible1(false);
                 self.DivVisible2(false);
                 self.DivVisible3(false);
                 self.DivVisible4(false);
                 self.DivVisible5(false);
                 self.selectedLevel('home2');
        };



    }

    return MyProfileContentViewModel;
});

