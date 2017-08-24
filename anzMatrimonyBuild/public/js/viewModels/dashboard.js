define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtrain', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojselectcombobox', 'ojs/ojbutton', 'ojs/ojdatetimepicker',
    'ojs/ojradioset', 'ojs/ojtimezonedata', 'ojs/ojinputnumber'],
        function (oj, ko, $) {
            function DashboardViewModel() {
                var self = this;
                 self.token=ko.observable('Bearer'+' '+localStorage.getItem("access_token"));
                var globalVM = ko.dataFor(document.getElementById('globalBody'));
                self.userRef = sessionStorage.getItem("userRef");
                self.birthage = sessionStorage.getItem("age");
                self.message = sessionStorage.getItem("message");
                this.currentStepValue = ko.observable('stp2');
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
                  
                    console.log(response);



                });

            };
                this.stepArray =
                        ko.observableArray(
                                [{label: 'PRIMARY PROFILE', id: 'stp1'},
                                    {label: 'BASIC INFO & LIFESTYLE', id: 'stp2'},
                                    {label: 'RELIGIOUS BACKGROUND', id: 'stp3'},
                                    {label: 'EDUCATION & CAREER', id: 'stp4'},
                                    {label: 'FAMILY DETAILS', id: 'stp5'},
                                    {label: 'HOBBIES & INTERESTS', id: 'stp6'},
                                    {label: 'CONTACT INFO', id: 'stp7'}]);
                                     this.stepArray1 =
                        ko.observableArray(
                                [{label: 'P', id: 'stp1'},
                                    {label: 'B', id: 'stp2'},
                                    {label: 'R', id: 'stp3'},
                                    {label: 'E', id: 'stp4'},
                                    {label: 'F', id: 'stp5'},
                                    {label: 'H', id: 'stp6'},
                                    {label: 'C', id: 'stp7'}]);
                this.previousStep2 = function () {
                    var prev = $("#train").ojTrain("previousSelectableStep");
                    if (prev !== null)
                        this.currentStepValue(prev);
                };
                this.stp1vis = ko.computed(function () {
                    if (self.currentStepValue() === 'stp1') {
                        return true;
                    } else {

                        return false;
                    }
                });

                this.stp2vis = ko.computed(function () {
                    if (self.currentStepValue() === 'stp2') {
                        return true;

                    } else {
                        return false;
                    }
                });

                this.stp3vis = ko.computed(function () {
                    if (self.currentStepValue() === 'stp3') {
                        return true;

                    } else {
                        return false;
                    }
                });
                this.stp4vis = ko.computed(function () {
                    if (self.currentStepValue() === 'stp4') {


                        return true;

                    } else {
                        return false;
                    }
                });
                this.stp5vis = ko.computed(function () {
                    if (self.currentStepValue() === 'stp5') {


                        return true;

                    } else {
                        return false;
                    }
                });
                this.stp6vis = ko.computed(function () {
                    if (self.currentStepValue() === 'stp6') {
                        return true;

                    } else {
                        return false;
                    }
                });
                this.stp7vis = ko.computed(function () {
                    if (self.currentStepValue() === 'stp7') {
                            return true;

                    } else {
                        return false;
                    }
                });
      jQuery(window).resize(function() {
  if (jQuery(window).width() < 600) {
      document.getElementById("rtrain").style.display="block";
      document.getElementById("irtrain").style.display="none";  
    $(".stptxt").show();


  }
  else{
          document.getElementById("rtrain").style.display="none";
      document.getElementById("irtrain").style.display="block";
  $(".stptxt").hide();
     


  }
  });

                Date.prototype.yyyy = function () {
                    var yyyy = this.getFullYear().toString();
                    return yyyy;
                };
                self.date = ko.observable(new Date().yyyy());
                var birthdate = self.date() - self.birthage;
                var validdate = self.date() - self.birthage+2;
                var notvalid = oj.IntlConverterUtils.dateToLocalIso(new Date(validdate, 00, 01));
                self.dob = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(birthdate, 00, 01)));




                self.id = ko.observable();
                self.gender = ko.observableArray();
                self.genderselect = ko.observableArray();
                self.gender = ko.observable();

                self.age = ko.observable();
                self.Ageselectdata = ko.observableArray();


                self.profileFor = ko.observableArray();
                self.profileselectdata = ko.observableArray();

                self.language = ko.observable("");
                self.laguageData = ko.observable();
                self.motherTounge = ko.observable("");

                self.maritalData = ko.observable();

                self.WEighData = ko.observable();

                self.BodyData = ko.observable();

                self.DrinkData = ko.observable();
                self.HeightData = ko.observable();
                self.SkinToneData = ko.observable();
                self.DietData = ko.observable();
                self.SmokeData = ko.observable();
                self.siblingssel = ko.observableArray();
                self.gothrasel = ko.observableArray();
                self.zodiacData = ko.observableArray();
                self.workingtypesel = ko.observable();
                self.incomesel = ko.observable();
                self.subcommunitysel = ko.observableArray();

                self.fatherstatusdata = ko.observableArray();
                self.motherstatusdata = ko.observableArray();

                self.communitysel = ko.observableArray();
                self.community = ko.observable();
                self.religion = ko.observable();
                self.countryData = ko.observableArray();
                self.statedata = ko.observableArray();
                self.stateData = ko.observableArray();




                self.favourite_music = ko.observable();
                self.favourite_books = ko.observable();
                self.favouriteBooks = ko.observable();
                self.firstname = ko.observable();
                self.lastname = ko.observable();
                self.email = ko.observable();
                self.selectedprofilefor = ko.observable();
                self.selectedGender = ko.observable();
                self.selectedAge = ko.observable();
                self.mothertongue = ko.observable("");
                self.maritalstatus = ko.observable("");
                self.bodyType = ko.observable("");
                self.weight = ko.observable("");
                self.height = ko.observable("");
                self.skintone = ko.observable("");
                self.diet = ko.observable("");
                self.drink = ko.observable("");
                self.smoke = ko.observable("");
//                self.dob = ko.observable();
                self.selectedSubCommunity = ko.observable();
                self.selectedGothra = ko.observable("");
                self.selectedZodiacSign = ko.observable("");
                self.enteredCollege = ko.observable();
                self.enteredhighestEducation = ko.observable("");
                self.enteredWorkingWith = ko.observable();
                self.enteredWorkingtype = ko.observable("");
                self.enteredWorkingAs = ko.observable();
                self.entredIncome = ko.observable("");
                self.enterdWorkingLocaton = ko.observable();
                self.college = ko.observable("");
                self.annual_income = ko.observable("");
                self.father_status = ko.observable("");
                self.mother_status = ko.observable("");
                self.native_place = ko.observable();
                self.siblings = ko.observable("");
                self.hobbies = ko.observable();
                self.interests = ko.observable();
                self.favouriteMusic = ko.observable();
                self.favourite_movies = ko.observable();
                self.favouriteMovies = ko.observable();
                self.favourite_books = ko.observable();
                self.favourite_sports = ko.observable();
                self.intrestdata = ko.observable();
                self.intrests = ko.observable();
                self.mobiletext = ko.observable();
                self.twittertext = ko.observable();
                self.fbidtext = ko.observable();
                self.linkdintext = ko.observable();
                self.googleplusidtext = ko.observable();

                self.mobileNumber = ko.observable();
                self.facebookId = ko.observable();
                self.linkedinId = ko.observable();
                self.twitterId = ko.observable();
                self.googleplusId = ko.observable();

                self.selectedCommunity = ko.observable("");
                self.religionselect = ko.observableArray();
                self.reldata = ko.observableArray();
                self.selectedReligion = ko.observable();
                self.homephonetext = ko.observable();
                self.selectedCountryLivingIn = ko.observable("");
                self.selectedStateLivingIn = ko.observable("");
                self.selectedOriginCountry = ko.observable("");
                self.selectedOriginState = ko.observable("");
                self.city = ko.observable();
                self.rdata = ko.observableArray();
                self.getdata = ko.observableArray();
                self.educationdata = ko.observableArray();
                self.educationData = ko.observableArray();
                
                
                
                
                
                
                
                
                
                Date.prototype.yyyymmddhhmmss = function () {
                    var yyyy = this.getFullYear().toString();
                    var MM = (this.getMonth() + 1).toString(); // getMonth() is zero-based
                    var dd = this.getDate().toString();
                    var hh = this.getHours().toString();
                    var mm = this.getMinutes().toString();
                    var ss = this.getSeconds().toString();
                    return yyyy + '-' + (MM[1] ? MM : "0" + MM[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + 'T' + (hh[1] ? hh : "0" + hh[0]) + ':' + (mm[1] ? mm : "0" + mm[0]) + ':' + (ss[1] ? ss : "0" + ss[0]);
                };
                self.requestedOn = ko.observable(new Date().yyyymmddhhmmss());
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



                //get country
                $.get('country.json', function (countrydata) {
                    console.info(countrydata);
                    var cdata = countrydata;
                    self.countryData(cdata);
                    countryData = JSON.stringify(cdata);
                });


                self.mystate = ko.observable();
                self.stateData = ko.observableArray();
                self.statedata = ko.observable();
                $.get('state.json', function (statedata) {
                    var sdata = statedata;
                    self.mystate = ko.computed(function () {
                        if (self.selectedCountryLivingIn() == 'India') {
                            self.stateData(sdata.India);
                            stateData = JSON.stringify(sdata.India)
                        }
                        if (self.selectedCountryLivingIn() == 'Australia') {
                            self.stateData(sdata.Australia);
                            stateData = JSON.stringify(sdata.Australia)
                        }
                        if (self.selectedCountryLivingIn() == 'New Zealand') {
                            self.stateData(sdata.NewZealand);
                            stateData = JSON.stringify(sdata.NewZealand)
                        }
                        if (self.selectedCountryLivingIn() == 'USA') {
                            self.stateData(sdata.USA);
                            stateData = JSON.stringify(sdata.USA)
                        }
                    });
                });


                $.get('religion.json', function (relgetdata) {
                    var reldata = relgetdata;
                    self.religionselect(reldata);
                    religionselect = JSON.stringify(reldata);
                });

                //===========================================================


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
                $.get('education.json', function (educationdata) {
                    var edata = educationdata;
                    self.educationData(edata);
                    educationData = JSON.stringify(edata);
                });
                 $.get('community.json', function (comgetdata) {
                    var commdata = comgetdata;

                    self.email1 = ko.computed(function () {
                        if (self.selectedReligion() == 'Hindu') {
                            self.communitysel(commdata.Hindu);
                            communitysel = JSON.stringify(commdata.Hindu);

                        }
                        if (self.selectedReligion() == 'Muslim') {
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


                self.getdata = ko.observableArray();
                   $.ajax({
                          url: globalVM.environment().getRegistration + '?' + $.param({
                                       "userRef": self.userRef,
                                       "guid": "11",
                                       "geoLocation": "11",
                                       "requestedOn": self.requestedOn(),
                                       "requestedFrom": "11"
                          }),
                          dataType: 'json',
                          headers: {
                             
                              'Authorization': self.token()                   
                          },
                          success: function(getdata) {
                   console.log(JSON.stringify(getdata));
                   self.firstname(getdata.body.firstName);
                   self.lastname(getdata.body.lastName);
                   self.selectedAge(getdata.body.age);
                   self.selectedGender(getdata.body.gender);
                   self.selectedprofilefor(getdata.body.profileFor);
                   self.email(getdata.body.emailId);
                   self.selectedReligion(getdata.body.religion);


                   var selectedAge = $("#ageinput").val(getdata.body.age);
                   var selectedGender = $("#gend").val(getdata.body.gender);
                   var selectedprofilefor = $("#profile").val(getdata.body.profileFor);
                   var selectedReligion = $("#Religioninput").val(getdata.body.religion);

               }
           });

                $(document).ready(function () {
                    $("#dateofbirth").blur(function () {
                        if (self.dob() > notvalid) {
                            document.getElementById("checkdate").innerHTML="Enter a valid Date Of Birth";
                        }
                        else{
                            document.getElementById("checkdate").innerHTML="";
                        }
                    });
                });


 



                this.nextStep2 = function () {
                    self.pdata = {
                        "header": {
                            "guid": "1233",
                            "requestedOn": "111",
                            "requestedFrom": "123",
                            "userRef": self.userRef,
                            "geoLocation": "11111"
                        },
                        "body": {
                            "userRef": self.userRef,
                            "firstName": this.firstname(),
                            "lastName": this.lastname(),
                            "gender": $("#gend").val(),
                            "profileFor": $("#profile").val(),
                            "age": $("#ageinput").val(),
                            "emailId": this.email(),
                            "motherTounge": this.mothertongue()[0],
                            "dob": this.dob(),
                            "requestedOn": self.requestedOn(),
                            "maritalStatus": this.maritalstatus()[0],
                            "height": this.height()[0],
                            "bodyType": this.bodyType()[0],
                            "weight": this.weight()[0],
                            "skinTone": this.skintone()[0],
                            "diet": this.diet()[0],
                            "drink": this.drink()[0],
                            "smoke": this.smoke()[0],
                            "religion": $("#Religioninput").val(),
                            "community": this.selectedCommunity()[0],
                            "subCommunity": this.selectedSubCommunity(),
                            "gothra": this.selectedGothra()[0],
                            "zodiacSign": this.selectedZodiacSign()[0],

                            "college": this.enteredCollege(),
                            "highestEducation": this.enteredhighestEducation()[0],
                            "workingWith": this.enteredWorkingWith(),
                            "workingType": this.enteredWorkingtype()[0],
                            "annualIncome": this.entredIncome()[0],

                            "workingAs": this.enteredWorkingAs(),

                            "workingLocation": this.enterdWorkingLocaton(),

                            "fatherStatus": this.father_status()[0],
                            "motherStatus": this.mother_status()[0],
                            "nativePlace": this.native_place(),
                            "sibblings": this.siblings()[0],
                            "country": this.selectedCountryLivingIn()[0],
                            "state": this.selectedStateLivingIn()[0],
                            "city": this.city(),
                            "originCountry": this.selectedOriginCountry()[0],
                            "originState": this.selectedOriginState()[0],

                            "hobbies": this.hobbies(),
                            "interests": this.interests(),
                            "favouriteMusic": this.favourite_music(),
                            "favouriteMovies": this.favourite_movies(),
                            "favouriteBooks": this.favourite_books(),
                            "favouriteSports": this.favourite_sports(),

                            "mobileNumber": this.mobiletext(),
                            "homePhone": this.homephonetext(),
                            "facebookId": this.fbidtext(),
                            "linkedinId": this.linkdintext(),
                            "twitterId": this.twittertext(),
                            "googleplusId": this.googleplusidtext()
                        }
                    };
                   // alert(JSON.stringify(self.pdata));
                    console.log(JSON.stringify(self.pdata));
                    self.tasksURI = globalVM.environment().completeRegistration;
                    self.serviceCall(self.tasksURI, 'POST', self.pdata).done(function (data) {
                      //  alert(JSON.stringify(self.pdata));
                    });

                    var next = $("#train").ojTrain("nextSelectableStep");
                    if (next !== null) {
                        this.currentStepValue(next);
                    }

                };

                self.CancelData = function () {
                    oj.Router.rootInstance.go('MyProfile');
                };

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
                        },
                        error: function (jqXHR) {
                            // console.log("ajax error " + jqXHR.status);
                        }
                    };
                    return $.ajax(request);
                };

                self.saveAndCloseData = function () {

                    self.pdata = {
                        "header": {
                            "guid": "1233",
                            "requestedOn": "111",
                            "requestedFrom": "123",
                            "userRef": self.userRef,
                            "geoLocation": "11111"
                        },
                        "body": {
                            "userRef": self.userRef,
                            "firstName": this.firstname(),
                            "lastName": this.lastname(),
                            "gender": $("#gend").val(),
                            "profileFor": $("#profile").val(),
                            "age": $("#ageinput").val(),
                            "emailId": this.email(),
                            "motherTounge": this.mothertongue()[0],
                            "dob": this.dob(),
                            "requestedOn": self.requestedOn(),
                            "maritalStatus": this.maritalstatus()[0],
                            "height": this.height()[0],
                            "bodyType": this.bodyType()[0],
                            "weight": this.weight()[0],
                            "skinTone": this.skintone()[0],
                            "diet": this.diet()[0],
                            "drink": this.drink()[0],
                            "smoke": this.smoke()[0],
                            "religion": $("#Religioninput").val(),
                            "community": this.selectedCommunity()[0],
                            "subCommunity": this.selectedSubCommunity(),
                            "gothra": this.selectedGothra()[0],
                            "zodiacSign": this.selectedZodiacSign()[0],

                            "college": this.enteredCollege(),
                            "highestEducation": this.enteredhighestEducation()[0],
                            "workingWith": this.enteredWorkingWith(),
                            "workingType": this.enteredWorkingtype()[0],
                            "annualIncome": this.entredIncome()[0],

                            "workingAs": this.enteredWorkingAs(),

                            "workingLocation": this.enterdWorkingLocaton(),

                            "fatherStatus": this.father_status()[0],
                            "motherStatus": this.mother_status()[0],
                            "nativePlace": this.native_place(),
                            "sibblings": this.siblings()[0],
                            "country": this.selectedCountryLivingIn()[0],
                            "state": this.selectedStateLivingIn()[0],
                            "city": this.city(),
                            "originCountry": this.selectedOriginCountry()[0],
                            "originState": this.selectedOriginState()[0],

                            "hobbies": this.hobbies(),
                            "interests": this.interests(),
                            "favouriteMusic": this.favourite_music(),
                            "favouriteMovies": this.favourite_movies(),
                            "favouriteBooks": this.favourite_books(),
                            "favouriteSports": this.favourite_sports(),

                            "mobileNumber": this.mobiletext(),
                            "homePhone": this.homephonetext(),
                            "facebookId": this.fbidtext(),
                            "linkedinId": this.linkdintext(),
                            "twitterId": this.twittertext(),
                            "googleplusId": this.googleplusidtext()
                        }
                    };
                   // alert(JSON.stringify(self.pdata));

                    console.log(JSON.stringify(self.pdata));
                    self.tasksURI = globalVM.environment().completeRegistration;
                    self.serviceCall(self.tasksURI, 'POST', self.pdata).done(function (data) {
                      //  alert(JSON.stringify(self.pdata));
                    });
                    oj.Router.rootInstance.go('MyProfile');
                };
            }
            return new DashboardViewModel();
        }
);
