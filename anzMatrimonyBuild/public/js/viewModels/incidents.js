/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','utils', 'hammerjs', 'ojs/ojjquery-hammer', 'ojs/ojknockout',  'ojs/ojoffcanvas', 'promise', 'ojs/ojlistview', 'ojs/ojmodel', 'ojs/ojpagingcontrol', 'ojs/ojpagingcontrol-model',
'ojs/ojnavigationlist','ojs/ojinputtext', 'ojs/ojselectcombobox', 'ojs/ojbutton', 'ojs/ojprogressbar','ojs/ojgauge',  'ojs/ojknockout-validation'],
 function(oj, ko, $,utils,Hammer) {
  
    function IncidentsViewModel() {
      var self = this;    
        self.token=ko.observable('Bearer'+' '+localStorage.getItem("access_token"));
       var globalVM = ko.dataFor(document.getElementById('globalBody'));
//  ==============================   matches   =============================
       self.tracker = ko.observable();
        self.tracker1 = ko.observable();
     self.moreFilter=ko.observable(false);
     self.feedinput=ko.observable(false);
     self.recommendedinput=ko.observable(false);
     self.selction=ko.observable('matches-gettingstarted2');
    self.selction1=ko.observable('matches-gettingstarted1');
    
     if (sessionStorage.getItem("gender") == "Male") {
                    self.GenderFil = ko.observable("Female")
                } else
                if (sessionStorage.getItem("gender") == "Female") {
                    self.GenderFil = ko.observable("Male")
                }else{
                 self.GenderFil = ko.observable("Other")
                }
    
     self.selectedFromAge = ko.observable();
                self.selectedToAge = ko.observable();


                self.age = ko.observableArray();
                self.Ageselectdata = ko.observableArray();
                self.agevardata = ko.observableArray();
                self.ageforData = ko.observableArray();
                $.get('age.json', function (ageforData) {
                    var agevardata = ageforData;
                    self.Ageselectdata(agevardata);
                    Ageselectdata = JSON.stringify(agevardata);
                });

                self.communitysel = ko.observableArray();
                self.community = ko.observableArray();
                self.religion = ko.observableArray();
                self.selectedCommunity = ko.observable("");
                self.religionselect = ko.observableArray();
                self.reldata = ko.observableArray();
                self.selectedReligion = ko.observable();
                $.get('religion.json', function (relgetdata) {
                    var reldata = relgetdata;
                    self.religionselect(reldata);
                    religionselect = JSON.stringify(reldata);
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

                self.annual_income = ko.observableArray();
                self.entredIncome = ko.observable();
                self.incomesel = ko.observable("");
                $.get('annualincome.json', function (incomegetdata) {
                    var incomedata = incomegetdata;
                    self.incomesel(incomedata);
                    incomesel = JSON.stringify(incomedata);
                });

               self.loadPersonPage = ko.observable();
    
//  ==============================   matches  End =============================




//  ==============================   usersearch   =============================

 this.userRef = sessionStorage.getItem("userRef");
                var globalVM = ko.dataFor(document.getElementById('globalBody'));
                self.sentdata = ko.observableArray();
                self.accepteddata = ko.observableArray();

                self.mphone = ko.observable();
                self.hPhone = ko.observable();
                self.fId = ko.observable();
                self.eId = ko.observable();
                self.lId = ko.observable();
                self.tId = ko.observable();

                self.mobileaccepted = ko.observable(true);
                self.mobilereq = ko.observable(false);

                self.twitteraccepted = ko.observable(true);
                self.twitterreq = ko.observable(false);

                self.homeaccepted = ko.observable(true);
                self.homephonereq = ko.observable(false);

                self.fbaccepted = ko.observable(true);
                self.fbrequest = ko.observable(false);

                self.linkedinaccepted = ko.observable(true);
                self.linkedinreq = ko.observable(false);



                self.U1hobbies = ko.observable();
                self.U1intrests = ko.observable();
                self.U1diet = ko.observable();
                self.U1drink = ko.observable();
                self.U1smoke = ko.observable();
                self.U1favMusic = ko.observable();
                self.U1favBook = ko.observable();
                self.U1favSports = ko.observable();
                self.U1religion = ko.observable();
                self.U1movies = ko.observable();

                self.hobbiesStatus = ko.observable(false);
                self.hobbieserror = ko.observable(true);

                self.Musicstatus = ko.observable(false);
                self.Musicerror = ko.observable(true);

                self.sportsstatus = ko.observable(false);
                self.sportserror = ko.observable(true);

                self.bookstatus = ko.observable(false);
                self.bookerror = ko.observable(true);

                self.religionstatus = ko.observable(false);
                self.religionerror = ko.observable(true);

                self.smokestatus = ko.observable(false);
                self.smokeerror = ko.observable(true);

                self.drinkstatus = ko.observable(false);
                self.drinkerror = ko.observable(true);

                self.fooderror = ko.observable(true);
                self.foodstatus = ko.observable(false);

                self.intreststatus = ko.observable(false);
                self.intresterror = ko.observable(true);

                self.moviestatus = ko.observable(false);
                self.movieerror = ko.observable(true);
                self.employees = ko.observableArray();
                self.mydata44 = ko.observable();
                self.mydata4 = ko.observable();
                self.mydata33 = ko.observable();
                self.mydata3 = ko.observable();
                self.mydata22 = ko.observable();
                self.mydata2 = ko.observable();
                self.mydata1 = ko.observable();
                self.mydata11 = ko.observable();

 self.userData={
                                                    "header":{
                                                      "guid":"asdfsd",
                                                       "requestedOn":"ffsa",
                                                       "requestedFrom" :"fas",
                                                       "geoLocation":"fasdv"

                                                                        },
                                                    "body":{
                                                    "userRef":sessionStorage.getItem("userRef")
                                                     }     
                                                     };
                                
                                 var GetDetails = {
                                    "async": true,
                                    "crossDomain": true,
                                    "url": globalVM.environment().getDetails,
                                    "method": "POST",
                                    "headers": {
                                        "content-type": "application/json",
                                        "authorization": self.token()
                                       
                                    },
                                    "processData": false,
                                    "data": JSON.stringify(self.userData)
                                };

                                $.ajax(GetDetails).done(function (data) {
                                    //alert(JSON.stringify(data));
                                             sessionStorage.setItem("gender",data[1].body.gender); 
                                             sessionStorage.setItem("age",data[1].body.age); 
                                             sessionStorage.setItem("religion",data[1].body.religion); 
                                             sessionStorage.setItem("hobbies",data[1].body.hobbies); 
                                        sessionStorage.setItem("diet",data[1].body.diet);
                                        sessionStorage.setItem("drink",data[1].body.drink);
                                        sessionStorage.setItem("smoke",data[1].body.smoke);
                                        sessionStorage.setItem("favouriteMusic",data[1].body.favouriteMusic);
                                        sessionStorage.setItem("interests",data[1].body.interests);
                                        sessionStorage.setItem("favouriteBooks",data[1].body.favouriteBooks);
                                        sessionStorage.setItem("religion",data[1].body.religion);
                                        sessionStorage.setItem("favouriteSports",data[1].body.favouriteSports);
                                       sessionStorage.setItem("favouriteMovies",data[1].body.favouriteMovies);
                                       sessionStorage.setItem("firstName",data[1].body.firstName);
                                       sessionStorage.setItem("lastName",data[1].body.lastName);
                                        console.log(sessionStorage.getItem("smoke"));
                                });
      
      self.communitydisplay=ko.observable(true);
   self.communitynotdisply=ko.observable(false);
   
    self.drinknotvisible=ko.observable(false);
   self.drinkvisible=ko.observable(true);
      
        self.foodnotvisible=ko.observable(false);
   self.foodvisible=ko.observable(true);
      
                                           
      
      
      self.fName=ko.observable();
      self.lName=ko.observable();
       self.mphone = ko.observable();
                self.hPhone = ko.observable();
                self.fId = ko.observable();
                self.eId = ko.observable();
                self.lId = ko.observable();
                self.tId = ko.observable();
                
                 self.loginUserName = ko.observable(sessionStorage.getItem("Ufname") + ' ' + sessionStorage.getItem("Ulname"));
                
//  ==============================   usersearch  End =============================

     


                this.drawer =
                        {
                            "displayMode": "push",
                            "selector": "#drawer",
                            "content": "#main",
                            "autoDismiss": "none"
                        };

                this.toggleDrawer = function ()
                {
                   self.selectedReligion(self.religion());
                        self.selectedFromAge(self.age());
                        self.selectedToAge(self.age());
                         self.selectedCommunity(self.community());
                                self.entredIncome(self.annual_income());
                    return oj.OffcanvasUtils.toggle(this.drawer);
                };

                this.openDrawer = function ()
                {
                    return oj.OffcanvasUtils.open(this.drawer);
                };

                this.isRTL = function ()
                {
                    var dir = document.documentElement.getAttribute("dir");
                    if (dir)
                        dir = dir.toLowerCase();
                    return (dir === "rtl");
                };

                //use hammer for swipe
                var mOptions = {
                    "recognizers": [
                        [Hammer.Swipe, {"direction": Hammer["DIRECTION_HORIZONTAL"]}]
                    ]};

                $("#main")
                        .ojHammer(mOptions)
                        .on("swipeleft", function (event) {
                            event.preventDefault();
                            if (self.isRTL())
                                self.openDrawer();
                        })
                        .on("swiperight", function (event) {
                            event.preventDefault();
                            if (!self.isRTL())
                                self.openDrawer();
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
                        },
                        error: function (jqXHR) {
                            // console.log("ajax error " + jqXHR.status);
                        }
                    };
                    return $.ajax(request);
                };

//      ===================Feed =========================
                self.allPeople = ko.observableArray([]);
                self.Min_Age = ko.observable();
                self.Max_Age = ko.observable();
                self.Min_Height = ko.observable();
                self.Max_Height = ko.observable();
                self.Gender = ko.observable();
                self.religions = ko.observable();
                self.country = ko.observable();
                self.bodyWegiht = ko.observable();
                self.drink = ko.observable();
                self.smoke = ko.observable();
                self.workingWith = ko.observable();
                self.highestEducation = ko.observable();
                self.annualIncome = ko.observable();
                self.skinTone = ko.observable();
                self.community1 = ko.observable();
                self.profileFor = ko.observable();
                self.maritalStatus = ko.observable();
                self.diet = ko.observable();
                self.subCommunity = ko.observable();
                self.state = ko.observable();
                self.profession = ko.observable();
                self.workingType = ko.observable();
                self.motherTounge = ko.observable();


                var defaultLayout = utils.readCookie('peopleLayout');
                if (defaultLayout) {
                    self.peopleLayoutType = ko.observable(defaultLayout);
                } else {
                    self.peopleLayoutType = ko.observable('peopleCardLayout');
                }

                self.ready = ko.observable(false);



                self.parsePeople = function (response) {
                    return response['employees'];
                };

                self.collection = new oj.Collection(null, {
                    url: self.url,
                    model: self.model
                });
                self.nameSearch = ko.observable('');
                self.filteredAllPeople = ko.computed(function () {
                    var peopleFilter = new Array();
                    if (self.allPeople().length !== 0) {
                        if (self.nameSearch().length === 0)
                        {
                            peopleFilter = self.allPeople();
                        } else {
                            ko.utils.arrayFilter(self.allPeople(),
                                    function (r) {
                                        var token = self.nameSearch().toLowerCase();
                                        if (r.firstName.toLowerCase().indexOf(token) === 0 || r.lastName.toLowerCase().indexOf(token) === 0) {
                                            peopleFilter.push(r);
                                        }
                                    });
                        }
                    }

                    self.ready(true);
                    return peopleFilter;
                    //  //alert(allPeople());
                });

                self.listViewDataSource = ko.computed(function () {
                    return new oj.ArrayTableDataSource(self.filteredAllPeople(), {idAttribute: 'firstName'});
                });
                self.cardViewDataSource = ko.computed(function () {
                    return new oj.PagingTableDataSource(self.listViewDataSource());
                });
                // //alert(self.allPeople());


                self.cardLayoutHandler = function () {
                    utils.createCookie('peopleLayout', 'peopleCardLayout');
                    self.peopleLayoutType('peopleCardLayout');
                };
                self.listLayoutHandler = function () {
                    utils.createCookie('peopleLayout', 'peopleListLayout');
                    self.peopleLayoutType('peopleListLayout');
                };


                self.changeHandler = function (page, event) {
                    if (event.option === 'selection') {
                        if (event.value[0]) {
                            var emp = {};
                            emp.first_name = event.value[0];
                            self.loadPersonPage(emp);
                        }
                    }
                };
                self.handleActivated = function (info) {
                    var parentRouter = info.valueAccessor().params.ojRouter.parentRouter;
                    // Retrieve the childRouter instance created in main.js
                    self.empRouter = parentRouter.currentState().value;
                    self.empRouter.configure(function (stateId) {
                        var state;
                        if (stateId) {
                            var data = stateId.toString();

                            // //alert(data);
                            state = new oj.RouterState(data, {
                                value: data,
                                // For each state, before entering the state,
                                // make sure the data for it is loaded.
                                canEnter: function () {
                                    // The state transition will be on hold
                                    // until loadData is resolved.
                                    return self.Feed(data);
                                }
                            });
                        }
                        return state;
                    });

                    return oj.Router.sync();
                };



                self.data = {
                    "guid": "xyz",
                    "requestedOn": "xyz",
                    "requestedFrom": "xyz",
                    "geoLocation": "xyz",
                    "gender": self.GenderFil()
                };
                self.Feed = function (data) {
                    self.moreFilter(true);
                    self.feedinput(true);
                    self.recommendedinput(false);
                    //self.selction=ko.observable('matches-home2');
                    document.getElementById("tabs-3").style.display = "block";
                    document.getElementById("tabs-6").style.display = "block";
                    //  document.getElementById("tabs-7").style.display = "none";
                    //document.getElementById("tabs-2").style.display = "none";
                   // document.getElementById("button-1").style.display = "block";
                    document.getElementById("button-2").style.display = "none";
                    document.getElementById("button-3").style.display = "none";
                    document.getElementById("tabs-7").style.display = "none";
                   // document.getElementById("feedinput").style.display = "block";
                    //document.getElementById("recommendedinput").style.display = "none";

                    //  //alert("2");



                    $.ajax({
                        url: globalVM.environment().UserFeedSearch + '?' + $.param({
                            "guid": "xyz",
                            "requestedOn": "xyz",
                            "requestedFrom": "xyz",
                            "geoLocation": "xyz",
                            "gender": self.GenderFil()
                        }),
                        dataType: 'json',
                        headers: {

                            'Authorization': self.token()},
                        success: function (people) {

                            var employees = people[0].body;
                         var  countvalue = employees.length;
                         
                                self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }

                    };
                    
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                    //alert(countvalue);
                        var employeeslike = people[0].body.likeData;
                         var  likecountvalue = employeeslike.length;
                         //alert(likecountvalue);
   // //alert(JSON.stringify(employeeslike));
                             for(count = 0; count < countvalue; count++){
                                 for(count1 = 0; count1 < likecountvalue; count1++){
                                 if(employees[count].userRef==employeeslike[count1].userRef){
                                       employees[count]['status'] = true;
                                      
                                    // //alert(employees[count].status);
                                     //alert(employeeslike[count1].userRef)
                                 }
                             };
                                
                             };
                              self.allPeople(employees);
                              
                    });
                             for(count = 0; count < countvalue; count++){
                                 if(employees[count].height&&employees[count].height!=='null'){
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             };
                             for(count = 0; count < countvalue; count++){
                             if(employees[count].status===true){
                                      
                                     }else{employees[count]['status'] = false;}}
                              //self.allPeople(employees);
                                  if (people[0].body == 0) {
                                document.getElementById("tabs-7").style.display = "block";
                                document.getElementById("tabs-6").style.display = "none";
                            }
                        }
                                 
                    });



                    return oj.OffcanvasUtils.close(this.drawer);


                };
 //      ===================Feed End=========================           

               



                //      ===================Recommend =========================


                self.minAge = ko.observable(parseInt(sessionStorage.getItem("age")) - 5)
                self.maxAge = ko.observable(parseInt(sessionStorage.getItem("age")) + 30)


                self.data1 =
                        {
                            "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "hyd"
                                    },
                            "body": {

                                "Gender": self.GenderFil(),

//                         
                                "religion": sessionStorage.getItem("religion"),
                                "Min_Age": self.minAge().toString(),
                                "Max_Age": self.maxAge().toString()
                            }
                        };
                      //  //alert(JSON.stringify(self.data1))
                self.Recommend = function (data) {
                     self.moreFilter(true);
                     self.feedinput(false);
                      self.recommendedinput(true);
                   // document.getElementById("button-1").style.display = "block";
                    document.getElementById("button-2").style.display = "none";
                    document.getElementById("tabs-7").style.display = "none";
                    document.getElementById("tabs-6").style.display = "block";
                   // document.getElementById("recommendedinput").style.display = "block";
                    //document.getElementById("feedinput").style.display = "none";
                    self.tasksURI = globalVM.environment().RecommendProfilesSearch;
                    self.serviceCall(self.tasksURI, 'POST', self.data1).done(function (people) {
                        //   //alert(JSON.stringify(people));
                        // console.log(JSON.stringify(people));
                                var employees = people[0].body;
                         var  countvalue = employees.length;
                         
                                self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }

                    };
                    
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                    //alert(countvalue);
                        var employeeslike = people[0].body.likeData;
                         var  likecountvalue = employeeslike.length;
                         //alert(likecountvalue);
   // //alert(JSON.stringify(employeeslike));
                             for(count = 0; count < countvalue; count++){
                                 for(count1 = 0; count1 < likecountvalue; count1++){
                                 if(employees[count].userRef==employeeslike[count1].userRef){
                                       employees[count]['status'] = true;
                                      
                                    // //alert(employees[count].status);
                                     //alert(employeeslike[count1].userRef)
                                 }
                             };
                                
                             };
                              self.allPeople(employees);
                                 
                    });
                             for(count = 0; count < countvalue; count++){
                                 if(employees[count].height&&employees[count].height!=='null'){
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             };
                             for(count = 0; count < countvalue; count++){
                             if(employees[count].status===true){
                                      
                                     }else{employees[count]['status'] = false;}}
                              //self.allPeople(employees);
                               if (people[0].body == 0) {
                                document.getElementById("tabs-7").style.display = "block";
                                document.getElementById("tabs-6").style.display = "none";
                            }
                    });
                    return oj.OffcanvasUtils.close(this.drawer);
                };


                //      ===================Recommend end=========================
                
                
                  //      ===================Preferences =========================





                self.Preferences = function () {
                  
                 
                                        self.queryParams = {
                        "userRef": sessionStorage.getItem("userRef"),
                        "guid": "xyz",
                        "requestedOn": "xyz",
                        "requestedFrom": "xyz",
                        "geoLocation": "xyz"

                    };

                    $.ajax({
                        url: globalVM.environment().PartnerSearchDetails + '?' + $.param({
                            "userRef": sessionStorage.getItem("userRef"),
                            "guid": "xyz",
                            "requestedOn": "xyz",
                            "requestedFrom": "xyz",
                            "geoLocation": "xyz"
                        }),
                        dataType: 'json',
                        headers: {

                            'Authorization': self.token()},
                        success: function (partnerdata) {
                            
                            var partdata = JSON.stringify(partnerdata);
                            //alert(JSON.stringify(partnerdata[1].body));
                            self.Min_Age(partnerdata[1].body.Min_Age);
                            self.Max_Age(partnerdata[1].body.Max_Age);
                            self.Min_Height(partnerdata[1].body.Min_Height);
                            self.Max_Height(partnerdata[1].body.Max_Height);
                            self.Gender(partnerdata[1].body.Gender);
                            self.religions(partnerdata[1].body.religion);
                            self.country(partnerdata[1].body.country);
                            self.bodyWegiht(partnerdata[1].body.bodyWegiht);
                            self.drink(partnerdata[1].body.drink);
                            self.smoke(partnerdata[1].body.smoke);
                            self.workingWith(partnerdata[1].body.workingWith);
                            self.highestEducation(partnerdata[1].body.highestEducation);
                            self.annualIncome(partnerdata[1].body.annualIncome);
                            self.skinTone(partnerdata[1].body.skinTone);
                            self.community1(partnerdata[1].body.community);
                            self.profileFor(partnerdata[1].body.profileFor);
                            self.maritalStatus(partnerdata[1].body.maritalStatus);
                            self.diet(partnerdata[1].body.diet);
                            self.subCommunity(partnerdata[1].body.subCommunity);
                            self.state(partnerdata[1].body.state);
                            self.profession(partnerdata[1].body.profession);
                            self.workingType(partnerdata[1].body.workingType);
                            self.motherTounge(partnerdata[1].body.motherTounge)
                            if (partnerdata[1].body.annualIncome) {
                                ////alert("kk");
                                //self.annualIncome=ko.observable(0);
                                ////alert(self.annualIncome())
                            } else {
                                self.annualIncome = ko.observable(0);
                                ////alert(self.annualIncome());
                                ////alert()
                            }
                            
                               if(partnerdata[1].body){
                     self.data2 =
                            {
                                "header":
                                        {
                                            "guid": "xyz",
                                            "requestedOn": "xyz",
                                            "requestedFrom": "xyz",
                                            "userRef": sessionStorage.getItem("userRef"),
                                            "geoLocation": "hyd"
                                        },
                                "body": {
                                    "Min_Age": self.Min_Age(),
                                    "Max_Age": self.Max_Age(),
                                    "Min_Height": self.Min_Height(),
                                    "Max_Height": self.Max_Height(),
                                    "Gender": self.Gender(),
                                    "religion": self.religions(),
                                    "country": self.country(),
                                    "bodyWegiht": self.bodyWegiht(),
                                    "drink": self.drink(),
                                    "smoke": self.smoke(),
                                    "workingWith": self.workingWith(),
                                    "highestEducation": self.highestEducation(),
                                    "annualIncome": self.annualIncome(),
                                    "skinTone": self.skinTone(),
                                    "community": self.community1(),
                                    "profileFor": self.profileFor(),
                                    "maritalStatus": self.maritalStatus(),
                                    "diet": self.diet(),
                                    "subCommunity": self.subCommunity(),
                                    "state": self.state(),
                                    "profession": self.profession(),
                                    "workingType": self.workingType(),
                                    "motherTounge": self.motherTounge(),
                                    "userRef": sessionStorage.getItem("userRef")

                                }
                            };
                 

                    self.tasksURI =  globalVM.environment().PartnerSearch;
                    self.serviceCall(self.tasksURI, 'POST', self.data2).done(function (people) {
                        // //alert(JSON.stringify(people));
                        //  console.log(JSON.stringify(people));
                        var employees = people[0].body;
                        ////alert(employees);
                           var employees = people[0].body;
                         var  countvalue = employees.length;
                         
                                self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }

                    };
                    
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                    //alert(countvalue);
                        var employeeslike = people[0].body.likeData;
                         var  likecountvalue = employeeslike.length;
                         //alert(likecountvalue);
   // //alert(JSON.stringify(employeeslike));
                             for(count = 0; count < countvalue; count++){
                                 for(count1 = 0; count1 < likecountvalue; count1++){
                                 if(employees[count].userRef==employeeslike[count1].userRef){
                                       employees[count]['status'] = true;
                                      
                                    // //alert(employees[count].status);
                                     //alert(employeeslike[count1].userRef)
                                 }
                             };
                                
                             };
                              self.allPeople(employees);
                             
                    });
                             for(count = 0; count < countvalue; count++){
                                 if(employees[count].height&&employees[count].height!=='null'){
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             };
                             for(count = 0; count < countvalue; count++){
                             if(employees[count].status===true){
                                      
                                     }else{employees[count]['status'] = false;}}
                              //self.allPeople(employees);
                                   if (people[0].body == 0) {
                                document.getElementById("tabs-7").style.display = "block";
                                document.getElementById("tabs-6").style.display = "none";
                            }
                    });
                 }
                            
                        }
                    });
                    

 self.moreFilter(false);
               
              
                    document.getElementById("button-2").style.display = "none";
                    document.getElementById("tabs-7").style.display = "none";
                    document.getElementById("tabs-6").style.display = "block";
                    
                    return oj.OffcanvasUtils.close(this.drawer);
                };
                //      ===================Preferences End=========================
                //      ===================Browser begin=========================

                jQuery(document).ready(function ($) {
                     self.moreFilter(true);
                      self.recommendedinput(true);
                   // document.getElementById("button-1").style.display = "block";
                    document.getElementById("button-2").style.display = "none";
                    document.getElementById("tabs-7").style.display = "none";
                    document.getElementById("tabs-6").style.display = "block";
                   // document.getElementById("recommendedinput").style.display = "block";
                    self.tasksURI = globalVM.environment().RecommendProfilesSearch;
                    self.serviceCall(self.tasksURI, 'POST', self.data1).done(function (people) {
                         // //alert(JSON.stringify(people));
                        // console.log(JSON.stringify(people));
                        var employees = people[0].body;
                         var  countvalue = employees.length;
                         
                                self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }

                    };
                    
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                    //alert(countvalue);
                        var employeeslike = people[0].body.likeData;
                         var  likecountvalue = employeeslike.length;
                         //alert(likecountvalue);
   // //alert(JSON.stringify(employeeslike));
                             for(count = 0; count < countvalue; count++){
                                 for(count1 = 0; count1 < likecountvalue; count1++){
                                 if(employees[count].userRef==employeeslike[count1].userRef){
                                       employees[count]['status'] = true;
                                      
                                    // //alert(employees[count].status);
                                     //alert(employeeslike[count1].userRef)
                                 }
                             };
                                
                             };
                              self.allPeople(employees);
                                 
                    });
                             for(count = 0; count < countvalue; count++){
                                 if(employees[count].height&&employees[count].height!=='null'){
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             };
                             for(count = 0; count < countvalue; count++){
                             if(employees[count].status===true){
                                      
                                     }else{employees[count]['status'] = false;}}
                              //self.allPeople(employees);
                               if (people[0].body == 0) {
                                document.getElementById("tabs-7").style.display = "block";
                                document.getElementById("tabs-6").style.display = "none";
                            }
                    });



                });
 //      ===================Browser begin End=========================
 ////alert(self.progressValue());
               
                self.feedclear = function (data) {
                     self.moreFilter(true);
                    document.getElementById("tabs-1").style.display = "block";
                    document.getElementById("tabs-6").style.display = "block";
                    document.getElementById("tabs-7").style.display = "none";
//            document.getElementById("tabs-7").style.display = "none";
                   // document.getElementById("button-1").style.display = "block";
                    document.getElementById("button-2").style.display = "none";
                    document.getElementById("button-3").style.display = "none";

                    //  //alert("2");


                    $.ajax({
                        url: globalVM.environment().UserFeedSearch + '?' + $.param({
                            "guid": "xyz",
                            "requestedOn": "xyz",
                            "requestedFrom": "xyz",
                            "geoLocation": "xyz",
                            "gender": self.GenderFil()
                        }),
                        dataType: 'json',
                        headers: {

                            'Authorization': self.token()
                        },
                        success: function (people) {

                            var employees = people[0].body;
                         var  countvalue = employees.length;
                         
                                self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }

                    };
                    
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                    //alert(countvalue);
                        var employeeslike = people[0].body.likeData;
                         var  likecountvalue = employeeslike.length;
                         //alert(likecountvalue);
   // //alert(JSON.stringify(employeeslike));
                             for(count = 0; count < countvalue; count++){
                                 for(count1 = 0; count1 < likecountvalue; count1++){
                                 if(employees[count].userRef==employeeslike[count1].userRef){
                                       employees[count]['status'] = true;
                                      
                                    // //alert(employees[count].status);
                                     //alert(employeeslike[count1].userRef)
                                 }
                             };
                                
                             };
                              self.allPeople(employees);
                                 
                    });
                             for(count = 0; count < countvalue; count++){
                                 if(employees[count].height&&employees[count].height!=='null'){
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             };
                             for(count = 0; count < countvalue; count++){
                             if(employees[count].status===true){
                                      
                                     }else{employees[count]['status'] = false;}}
                              //self.allPeople(employees);
                         if (people[0].body == 0) {
                                document.getElementById("tabs-7").style.display = "block";
                                document.getElementById("tabs-6").style.display = "none";
                            }
                        }
                    });
                        self.selectedReligion(self.religion());
                        self.selectedFromAge(self.age());
                        self.selectedToAge(self.age());
                       

                      return oj.OffcanvasUtils.close(this.drawer);
                };
                self.Recommendclear = function (data) {
                     self.moreFilter(true);
                       self.feedinput(false);
                        self.recommendedinput(true);
                    //document.getElementById("button-1").style.display = "block";
                    document.getElementById("button-2").style.display = "none";
                    document.getElementById("button-3").style.display = "none";
                    document.getElementById("tabs-7").style.display = "none";
                    document.getElementById("tabs-6").style.display = "block";
                    //document.getElementById("recommendedinput").style.display = "block";
                  //  document.getElementById("feedinput").style.display = "none";
                    self.tasksURI =  globalVM.environment().RecommendProfilesSearch;
                    self.serviceCall(self.tasksURI, 'POST', self.data1).done(function (people) {
                        //   //alert(JSON.stringify(people));
                        // console.log(JSON.stringify(people));
                        var employees = people[0].body;
                         var  countvalue = employees.length;
                         
                                self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }

                    };
                    
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                    //alert(countvalue);
                        var employeeslike = people[0].body.likeData;
                         var  likecountvalue = employeeslike.length;
                         //alert(likecountvalue);
   // //alert(JSON.stringify(employeeslike));
                             for(count = 0; count < countvalue; count++){
                                 for(count1 = 0; count1 < likecountvalue; count1++){
                                 if(employees[count].userRef==employeeslike[count1].userRef){
                                       employees[count]['status'] = true;
                                      
                                    // //alert(employees[count].status);
                                     //alert(employeeslike[count1].userRef)
                                 }
                             };
                                
                             };
                              self.allPeople(employees);
                                 
                    });
                             for(count = 0; count < countvalue; count++){
                                 if(employees[count].height&&employees[count].height!=='null'){
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             };
                             for(count = 0; count < countvalue; count++){
                             if(employees[count].status===true){
                                      
                                     }else{employees[count]['status'] = false;}}
                              //self.allPeople(employees);
                               if (people[0].body == 0) {
                                document.getElementById("tabs-7").style.display = "block";
                                document.getElementById("tabs-6").style.display = "none";
                            }
                    });
                     self.selectedReligion(self.religion());
                        self.selectedFromAge(self.age());
                        self.selectedToAge(self.age());
                         self.selectedCommunity(self.community());
                                self.entredIncome(self.annual_income());
                     return oj.OffcanvasUtils.close(this.drawer);
                };




              
                //      ===================Visitors=========================


                self.data3 =
                        {
                            "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }
                        };

                self.Visitors = function () {
//     document.getElementById("button-1").style.display = "none";
//           document.getElementById("button-2").style.display = "none";
//document.getElementById("tabs-2").style.display = "block";
//           document.getElementById("tabs-1").style.display = "none";
                    // //alert("3");
                     self.moreFilter(false);
                   // document.getElementById("button-1").style.display = "none";
                    document.getElementById("button-2").style.display = "none";
                    document.getElementById("tabs-7").style.display = "none";
                    document.getElementById("tabs-6").style.display = "block";
                    self.tasksURI =  globalVM.environment().visitorsSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.data3).done(function (people) {
                        // alert(JSON.stringify(people[0].body.visitorsData));
                        // console.log(JSON.stringify(people));
                        var employees = people[0].body.visitorsData;
                         var  countvalue = employees.length;
                         
                                self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }

                    };
                    
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                    //alert(countvalue);
                        var employeeslike = people[0].body.likeData;
                         var  likecountvalue = employeeslike.length;
                         //alert(likecountvalue);
   // //alert(JSON.stringify(employeeslike));
                             for(count = 0; count < countvalue; count++){
                                 for(count1 = 0; count1 < likecountvalue; count1++){
                                 if(employees[count].userRef==employeeslike[count1].userRef){
                                       employees[count]['status'] = true;
                                      
                                    // //alert(employees[count].status);
                                     //alert(employeeslike[count1].userRef)
                                 }
                             };
                                
                             };
                              self.allPeople(employees);
                               
                    });
                             for(count = 0; count < countvalue; count++){
                                 if(employees[count].height&&employees[count].height!=='null'){
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             };
                             for(count = 0; count < countvalue; count++){
                             if(employees[count].status===true){
                                      
                                     }else{employees[count]['status'] = false;}}
                              //self.allPeople(employees);
                                 if (people[0].body.visitorsData == 0) {
                                document.getElementById("tabs-7").style.display = "block";
                                document.getElementById("tabs-6").style.display = "none";
                            }
                    });
                    return oj.OffcanvasUtils.close(this.drawer);
                };
                //      ===================Visitors End=========================
   //      ===================likers=========================


                self.data3 =
                        {
                            "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }
                        };

                self.likers = function () {
                     self.moreFilter(false);
                   // document.getElementById("button-1").style.display = "none";
                    document.getElementById("button-2").style.display = "none";
                    document.getElementById("tabs-7").style.display = "none";
                    document.getElementById("tabs-6").style.display = "block";
                   
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.data3).done(function (people) {
                        // //alert(JSON.stringify(people[0].body.visitorsData));
                        // console.log(JSON.stringify(people));
                        var employees = people[0].body.likeData;
                        ////alert(employees);
                           //var employees = people[0].body;
                         var  countvalue = employees.length;
                             for(count = 0; count < countvalue; count++){
                                 employees[count]['status'] = true;
                                 if(employees[count].height&&employees[count].height!=='null'){
                                     ////alert(JSON.stringify(employees[count].height))
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             }
                        self.allPeople(employees);
                        if (people[0].body.likeData == 0) {
                            document.getElementById("tabs-7").style.display = "block";
                            document.getElementById("tabs-6").style.display = "none";
                        }


//                            loadPerfandPotenialData();
                    });
                    return oj.OffcanvasUtils.close(this.drawer);
                };
                
                //====================================================================================
                
        
        
        self.likeme=ko.observable();
 self.like = function (ui) {
     var countvalue1=self.allPeople().length
                   // alert(countvalue1)
                     for(count = 0; count < countvalue1; count++){
                        
                         if(self.allPeople()[count].userRef===ui.userRef){
                           if(self.allPeople()[count].status===false){
                             // alert(count);
                               //if(self.allPeople()[count].status)
                             //  self.allPeople()[count]['status1'] = true;
                               self.allPeople()[count]['status'] = true;
                           }
                         }
                      var datalike= self.allPeople();
                     }
                    // alert(datalike)
                     self.allPeople(datalike);
                     //alert(JSON.stringify(self.allPeople()))
         self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef"),
                                "searchUserRef": ui.userRef,
                            }

                    };
                    //alert(JSON.stringify(self.likedata))
                    self.tasksURI = globalVM.environment().likemeprofiles;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                   
                    });
     
     ;
      
 };
 
 //=====================================================================================================
 
  $(document).on('click', "#like", function () {

           $(this).closest('.check').remove();

       });
 
                
                //      ===================likers End=========================


                //      ===================viewed =========================



                self.data4 =
                        {
                            "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }
                        };

                self.Viewed = function () {
                     self.moreFilter(false);
//          document.getElementById("button-1").style.display = "none";
//           document.getElementById("button-2").style.display = "none";
//     document.getElementById("tabs-2").style.display = "block";
//           document.getElementById("tabs-1").style.display = "none";
                    //document.getElementById("button-1").style.display = "none";
                    document.getElementById("button-2").style.display = "none";
                    document.getElementById("tabs-7").style.display = "none";
                    document.getElementById("tabs-6").style.display = "block";
                    //  //alert("3");

                    self.tasksURI =  globalVM.environment().viewedSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.data4).done(function (people) {
                        //  //alert(JSON.stringify(people));
                        // console.log(JSON.stringify(people));
                        var employees = people[0].body.searchData;
                         var  countvalue = employees.length;
                         
                                self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }

                    };
                    
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                    //alert(countvalue);
                        var employeeslike = people[0].body.likeData;
                         var  likecountvalue = employeeslike.length;
                         //alert(likecountvalue);
   // //alert(JSON.stringify(employeeslike));
                             for(count = 0; count < countvalue; count++){
                                 for(count1 = 0; count1 < likecountvalue; count1++){
                                 if(employees[count].userRef==employeeslike[count1].userRef){
                                       employees[count]['status'] = true;
                                      
                                    // //alert(employees[count].status);
                                     //alert(employeeslike[count1].userRef)
                                 }
                             };
                                
                             };
                              self.allPeople(employees);
                             
                    });
                             for(count = 0; count < countvalue; count++){
                                 if(employees[count].height&&employees[count].height!=='null'){
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             };
                             for(count = 0; count < countvalue; count++){
                             if(employees[count].status===true){
                                      
                                     }else{employees[count]['status'] = false;}}
                              //self.allPeople(employees);
                                   if (people[0].body.searchData == 0) {
                                document.getElementById("tabs-7").style.display = "block";
                                document.getElementById("tabs-6").style.display = "none";
                            }
                    });
                    return oj.OffcanvasUtils.close(this.drawer);
                };
                //      ===================viewed end=========================

                //      ===================Feed Filter =========================



                self.feedsubmit = function () {
                  var tracker = self.tracker1();    
                          if (tracker.invalidHidden || tracker.invalidShown)
                   {
                       tracker.showMessages();
                       tracker.focusOnFirstInvalid();

                       return;
                   }
                    // //alert("feedsubmit");
                    self.data5 =
                            {
                                "header":
                                        {
                                            "guid": "xyz",
                                            "requestedOn": "xyz",
                                            "requestedFrom": "xyz",
                                            "geoLocation": "hyd",
                                            "userRef": sessionStorage.getItem("userRef")
                                        },
                                "body": {
                                    "Min_Age": self.selectedFromAge()[0],
                                    "Max_Age": self.selectedToAge()[0],

                                    "religion": self.selectedReligion()[0],
                                    "Gender": self.GenderFil()
                                }
                            }

                    ////alert(JSON.stringify(self.data5));
                    console.log(JSON.stringify(self.data5))
                    document.getElementById("tabs-1").style.display = "block";
//           document.getElementById("tabs-7").style.display = "block";
                    document.getElementById("button-2").style.display = "block";
                     self.moreFilter(false);
                   // document.getElementById("button-1").style.display = "none";
                    document.getElementById("tabs-6").style.display = "block";
                    document.getElementById("tabs-7").style.display = "none";

                    self.tasksURI =  globalVM.environment().FeedFilters;
                    self.serviceCall(self.tasksURI, 'POST', self.data5).done(function (people) {
                        ////alert(JSON.stringify(people));
                        // console.log(JSON.stringify(people));
                        var employees = people[0].body;
                         var  countvalue = employees.length;
                         
                                self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }

                    };
                    
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                    //alert(countvalue);
                        var employeeslike = people[0].body.likeData;
                         var  likecountvalue = employeeslike.length;
                         //alert(likecountvalue);
   // //alert(JSON.stringify(employeeslike));
                             for(count = 0; count < countvalue; count++){
                                 for(count1 = 0; count1 < likecountvalue; count1++){
                                 if(employees[count].userRef==employeeslike[count1].userRef){
                                       employees[count]['status'] = true;
                                      
                                    // //alert(employees[count].status);
                                     //alert(employeeslike[count1].userRef)
                                 }
                             };
                                
                             };
                              self.allPeople(employees);
                             
                    });
                             for(count = 0; count < countvalue; count++){
                                 if(employees[count].height&&employees[count].height!=='null'){
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             };
                             for(count = 0; count < countvalue; count++){
                             if(employees[count].status===true){
                                      
                                     }else{employees[count]['status'] = false;}}
                              //self.allPeople(employees);
//                            loadPerfandPotenialData();
                                if (people[0].body == 0) {
                                document.getElementById("tabs-7").style.display = "block";
                                document.getElementById("tabs-6").style.display = "none";
                            }
                    });


                };
                self.cancel = function () {
                    // self.selectedFromAge(age)
                    //     self.selectedFromAge(self.age());
                    //     self.selectedToAge(self.age());
                    //     self.selectedReligion(self.religion());
                    return oj.OffcanvasUtils.toggle(this.drawer);
                };
                //      ===================Feed Filter end=========================
                //      


                //      ===================recommend Filter =========================



                self.recommendsubmit = function () {
                    var tracker = self.tracker();    
                          if (tracker.invalidHidden || tracker.invalidShown)
                   {
                       tracker.showMessages();
                       tracker.focusOnFirstInvalid();

                       return;
                   }
                    // //alert("recommendsubmit");
                    self.data5 =
                            {
                                "header":
                                        {
                                            "guid": "xyz",
                                            "requestedOn": "xyz",
                                            "requestedFrom": "xyz",
                                            "geoLocation": "hyd",
                                            "userRef": sessionStorage.getItem("userRef")
                                        },
                                "body": {
                                    "Min_Age": self.selectedFromAge()[0],
                                    "Max_Age": self.selectedToAge()[0],
                                    "religion": self.selectedReligion()[0],
                                    "community": self.selectedCommunity()[0],
                                    "annualIncome": self.entredIncome()[0],
                                    "Gender": self.GenderFil(),

                                }
                            }

                    // //alert(JSON.stringify(self.data5));
                     console.log(JSON.stringify(self.data5))
                    document.getElementById("tabs-1").style.display = "block";
//           document.getElementById("tabs-7").style.display = "block";
                    document.getElementById("button-3").style.display = "block";
                     self.moreFilter(false);
                  //  document.getElementById("button-1").style.display = "none";
                    document.getElementById("tabs-6").style.display = "block";
                    document.getElementById("tabs-7").style.display = "none";

                    self.tasksURI =  globalVM.environment().RecommendedFilters;
                    self.serviceCall(self.tasksURI, 'POST', self.data5).done(function (people) {
                        ////alert(JSON.stringify(people));
                        // console.log(JSON.stringify(people));
                        var employees = people[0].body;
                         var  countvalue = employees.length;
                         
                                self.likedata = {
                         "header":
                                    {
                                        "guid": "xyz",
                                        "requestedOn": "xyz",
                                        "requestedFrom": "xyz",
                                        "userRef": sessionStorage.getItem("userRef"),
                                        "geoLocation": "xyz"
                                    },
                            "body": {
                                "userRef": sessionStorage.getItem("userRef")
                            }

                    };
                    
                    self.tasksURI = globalVM.environment().likesSearchDetails;
                    self.serviceCall(self.tasksURI, 'POST', self.likedata).done(function (people) {
                    //alert(countvalue);
                        var employeeslike = people[0].body.likeData;
                         var  likecountvalue = employeeslike.length;
                         //alert(likecountvalue);
   // //alert(JSON.stringify(employeeslike));
                             for(count = 0; count < countvalue; count++){
                                 for(count1 = 0; count1 < likecountvalue; count1++){
                                 if(employees[count].userRef==employeeslike[count1].userRef){
                                       employees[count]['status'] = true;
                                      
                                    // //alert(employees[count].status);
                                     //alert(employeeslike[count1].userRef)
                                 }
                             };
                                
                             };
                              self.allPeople(employees);
                              
                    });
                             for(count = 0; count < countvalue; count++){
                                 if(employees[count].height&&employees[count].height!=='null'){
                                 }else{
                                     
                                     employees[count].height = "NA";
                                 }
                             };
                             for(count = 0; count < countvalue; count++){
                             if(employees[count].status===true){
                                      
                                     }else{employees[count]['status'] = false;}}
                              //self.allPeople(employees);
//                            loadPerfandPotenialData();
                                   if (people[0].body == 0) {
                                document.getElementById("tabs-7").style.display = "block";
                                document.getElementById("tabs-6").style.display = "none";
                            }
                    });


                };

                //      ===================recommend Filter end=========================



                self.handleActivated = function (info) {
                    // Implement if needed
                };




 //================user search ==============
 self.basicinfo = ko.observable(true);







                self.communitydisplay = ko.observable(true);
                self.communitynotdisply = ko.observable(false);

                self.drinknotvisible = ko.observable(false);
                self.drinkvisible = ko.observable(true);


                self.foodnotvisible = ko.observable(false);
                self.foodvisible = ko.observable(true);

                self.fullName = ko.observable();
//      self.comle =ko.observable(false);
//        self.imgle=ko.observable(false);
                self.basicinfo;
                self.matchPercent = ko.observable('0');
                self.match = ko.observable('0');
                self.largeScreen = ko.observable(true);
                self.total = ko.observable('0');
                var arrdata;

                self.totalmatch = ko.observable(true);
                self.totalvisible = ko.observable(true);

                self.mobileopt = ko.observable();
                self.twitteropt = ko.observable();
                self.fbopt = ko.observable();
                self.linkedinopt = ko.observable();
                self.homephonept = ko.observable();
                self.emailopt = ko.observable();
                self.ageopt = ko.observable();
                self.heightopt = ko.observable();
                self.body = ko.observable();
                self.firstopt = ko.observable();
                self.lastopt = ko.observable();
                self.drinkopt = ko.observable();
                self.foodopt = ko.observable();
                self.religionopt = ko.observable();
                self.communityopt = ko.observable();
                self.genderopt = ko.observable();
                self.dobopt = ko.observable();
                self.maritalopt = ko.observable();
                self.mothertongueopt = ko.observable();
                self.bodyopt = ko.observable();
                self.skinopt = ko.observable();
                self.weightopt = ko.observable();
                self.smokeopt = ko.observable();
                self.workingasopt = ko.observable();
                self.workingwithopt = ko.observable();
                self.hobbiesopt = ko.observable();
                self.booksopt = ko.observable();
                self.sportsopt = ko.observable();
                self.musicopt = ko.observable();
                self.movieopt = ko.observable();
                self.interestsopt = ko.observable();



                self.annualopt = ko.observable();
                self.workingtypeopt = ko.observable();
                self.educatonopt = ko.observable();
                self.collegeopt = ko.observable();
                self.nativeopt = ko.observable();
                self.cityopt = ko.observable();
                self.stateopt = ko.observable();
                self.countryopt = ko.observable();
                self.workinglocationopt = ko.observable();
                self.gothraopt = ko.observable();
                self.zodiacopt = ko.observable();
                self.mothertongueopt = ko.observable();
                self.fatheropt = ko.observable();
                self.motheropt = ko.observable();
                self.sblingsopt = ko.observable();
                self.workingasopt = ko.observable();
                self.workingwithopt = ko.observable();
                self.hobbiesopt = ko.observable();
                self.booksopt = ko.observable();
                self.sportsopt = ko.observable();
                self.musicopt = ko.observable();
                self.movieopt = ko.observable();
                self.interestsopt = ko.observable();












                self.mobileopttext = ko.observable("NA");
                self.twitteropttext = ko.observable("NA");
                self.fbopttext = ko.observable("NA");
                self.linkedinopttext = ko.observable("NA");
                self.homephonepttext = ko.observable("NA");
                self.emailopttext = ko.observable("NA");
                self.ageopttext = ko.observable("NA");
                self.heightopttext = ko.observable("NA");
                self.bodyopttext = ko.observable("NA");
                self.firstopttext = ko.observable("NA");
                self.lastopttext = ko.observable("NA");
                self.drinkopttext = ko.observable("NA");
                self.smokeopttext = ko.observable("NA");
                self.weightopttext = ko.observable("NA");
                self.foodopttext = ko.observable("NA");
                self.religionopt = ko.observable("NA");
                self.communityopttext = ko.observable("NA");
                self.genderopttext = ko.observable("NA");
                self.dobopttext = ko.observable("NA");
                self.maritalopttext = ko.observable("NA");
                self.mothertongueopttext = ko.observable("NA");
                self.bodyopttext = ko.observable("NA");
                self.skinopttext = ko.observable("NA");
                self.workingasopttext = ko.observable("NA");
                self.workingwithopttext = ko.observable("NA");
                self.hobbiesopttext = ko.observable("NA");
                self.booksopttext = ko.observable("NA");
                self.sportsopttext = ko.observable("NA");
                self.musicopttext = ko.observable("NA");
                self.movieopttext = ko.observable("NA");
                self.interestsopttext = ko.observable("NA");

                self.letter = ko.observable();
                self.religion = ko.observableArray();
                self.community = ko.observableArray();
                self.comletter = ko.observable('NA');

                self.annualopttext = ko.observable("NA");
                self.workingtypeopttext = ko.observable("NA");
                self.educatonopttext = ko.observable("NA");
                self.collegeopttext = ko.observable("NA");
                self.nativeopttext = ko.observable("NA");
                self.cityopttext = ko.observable("NA");
                self.stateopttext = ko.observable("NA");
                self.countryopttext = ko.observable("NA");
                self.workinglocationopttext = ko.observable("NA");
                self.gothraopttext = ko.observable("NA");
                self.zodiacopttext = ko.observable("NA");
                self.mothertongueopttext = ko.observable("NA");
                self.fatheropttext = ko.observable("NA");
                self.motheropttext = ko.observable("NA");
                self.sblingsopttext = ko.observable("NA");



                //self.workingasopttext=ko.observable("NA");
                self.workingwithopttext = ko.observable("NA");
               // self.hobbiesopttext = ko.observable("NA");
                self.booksopttext = ko.observable("NA");
                self.sportsopttext = ko.observable("NA");
                self.musicopttext = ko.observable("NA");
                self.movieopttext = ko.observable("NA");
                //self.interestsopttext = ko.observable("NA");
                self.acceptednotData = ko.observable();
                self.searchuserRef = ko.observable();
                
                
//                self.mobRequestSent = ko.computed(function(){   
//                   
//                     var requestSent = isRequestSent("notificationData");
////                     alert('mobile');
////                     alert(requestSent);
////                      alert('mobile');
////                     alert(requestSent);
//                              
//                     return requestSent; 
//                     
//                    
//                });
//                
//                self.mobVisiblity = ko.computed(function(){  
//                   
//                    var decide=true;    
//                   
//                       
//                        if(self.mobRequestSent()){
//                        if(self.sentdata().length >=1){
//                          
//                             decide = decideVisibilty('mobileNo');
//                            alert('final result :' +decide); 
//                         
//                              self.mobileaccepted(true);
//                            self.mobilereq(false);
//                           
//                        
//                        
//                        }
//                           alert('final result :' +decide);   
//                            
//                        }
//                        
//                 
//                        
//                    return decide;
//                });
//                 
//                
//                        
//                self.homeRequestSent = ko.computed(function(){   
//                   
//                     var requestSent = isRequestSent("notificationData");
////                     alert('mobile');
////                     alert(requestSent);
////                      alert('mobile');
////                     alert(requestSent);
//                                    
//                     return requestSent; 
//                   
//                    
//                });
//                
//                self.homeVisiblity = ko.computed(function(){  
//                   
//                    var decide=true;    
//                   
//                       
//                        if(self.homeRequestSent()){
//                        if(self.sentdata().length >=1){
//                          
//                             decide = decideVisibilty('homeNo');
//                            alert('final result :' +decide); 
//                          
//                           self.homephonereq(false);
//                            self.homeaccepted(true);
//                           
//                        
//                        
//                    
//                           
//                            
//                        }
//                    }
//                        
//                 
//                        
//                    return decide;
//                });
//                 
//                
//                
//                
//                
//                
//            
//                
//                
//                function isRequestSent(notificationData) {
//                        //alert('final result :'); 
//                    var curruser = self.searchuserRef();
//                    var userSentData = [];                   
//                    var requestSent = false;
//                    
//
//
//                    for (i = 0; i < self.sentdata().length; i++) {
//                       // alert('final result :');
//                        var item = self.sentdata()[i];
////                        alert(JSON.stringify(self.sentdata()[i]));
//                        if (item.notificationFrom === curruser) {
//
//                            userSentData.push(item);
//                            
//                        }
//
//                    }                   
//
//                    for (i = 0; i < userSentData.length; i++) {
//                       // alert('final result mobile :');
////                       
////                       alert(userSentData[i].notificationData);
////                       alert(notificationData);
//                        if (userSentData[i].notificationData === notificationData) {
//                            requestSent=true;
//                           
//                        }
//
//                       
//                    }        
//                   console.log(JSON.stringify(userSentData));
//                    return requestSent;
//                    
//                }
//                
//                
//                function decideVisibilty(notificationData) {
//                     
//                    var curruser = self.searchuserRef();
//                    var userSentData = [];
//                    var acceptedData = [];
//                    var notId = null;
//                    var visibilty = null;
//
//
//                    for (i = 0; i < self.sentdata().length; i++) {
//                       
//                        var item = self.sentdata()[i];
//
//                        if (item.notificationFrom === curruser) {
//
//                            userSentData.push(item);
//                            
//                        }
//
//                    }
//                    for (i = 0; i < self.acceptednotData().length; i++) {
//
//                        var item = self.acceptednotData()[i];
//
//                        if (item.notificationFrom === curruser) {
//
//                            acceptedData.push(item);
//                        }
//
//                    }
//
//                    for (i = 0; i < userSentData.length; i++) {
//                         
//                        if (userSentData[i].notificationData === notificationData) {
//                            
//
//                            notId = userSentData[i].notificationId;
////                            alert(notId);
//                        }
//
//                        
//                    }
//
//                    console.log(JSON.stringify(userSentData));
//                    console.log(JSON.stringify(acceptedData));
//                    if (notId !== null) {
////                        alert();
//                        var check = false;
//
//                        
//                        for (i = 0; i < acceptedData.length; i++) {
//
//                            if (acceptedData[i].notificationData === notId) {
//
//                                check = true;
//
//                            }
//                        }
//                        
//                        visibilty = check;
//
//                    } else {
//                       
//                        visibilty = true;
//                    }
////                    alert('*****************');
////                    alert(visibilty);
//                    return visibilty;
//
//                }




         //              jQuery(window).resize(function () {
//                    if (jQuery(window).width() < 580) {
//
//                        // alert("450");
//
//                        // document.getElementById('userprofileid').style.display = 'none';
//                       // document.getElementById('profileid').style.display = 'none';
//
//
//                        //document.getElementById('iphonediv').style.display = 'block';
//                        // document.getElementById('largediv').style.display = 'none';
//                        //document.getElementById('mode-2').style.display = 'block';
//                      //  document.getElementById('mode-1').style.display = 'none';
//                    } else if (jQuery(window).width() < 960) {
//
//                       // document.getElementById('mode-1').style.display = 'block';
//                      //  document.getElementById('mode-2').style.display = 'none';
//                        // alert("960");
//
//                        // document.getElementById('userprofileid').style.display = 'block';
//                        //document.getElementById('profileid').style.display = 'none';
//                        //document.getElementById('iphonediv').style.display = 'block';
//                        //document.getElementById('largediv').style.display = 'none';
//                    } else {
//
//                        // document.getElementById('userprofileid').style.display = 'none';
//                        //document.getElementById('profileid').style.display = 'block';
//
//                        //document.getElementById('iphonediv').style.display = 'none';
//                        //document.getElementById('largediv').style.display = 'block';
//                       // document.getElementById('mode-2').style.display = 'none';
//                       // document.getElementById('mode-1').style.display = 'block';
//                    }
//                });


                // self.userRef=ko.observableArray(["suresh33@4620171828122"]);  
                //.self.searchUserRef = ko.observableArray(["ramvarma@4620171936978"]);

                self.requestedFrom = ko.observable("elastic");
                self.requstedOn = ko.observable("22");
                self.guid = ko.observable("320");
                self.geoLocation = ko.observable("1233");
                self.rdata = ko.observableArray();

                self.notUserRef = ko.observable();


                self.addData = function (ui) {
                    document.getElementById("tabs-2").style.display = "block";
                    self.notUserRef = ko.observable(ui.userRef);
                    document.getElementById("tabs-3").style.display = "none";
                    self.queryParams = {
                        "searchUserRef": ui.userRef,
                        "userRef": sessionStorage.getItem("userRef"),
                        "requstedOn": "xyz",
                        "requestedFrom": "xyz",
                        "guid": "xyz",
                        "geoLocation": "xyz"
                    };
                    // alert(ko.toJSON(self.queryParams));
                    // console.log(ko.toJSON(self.queryParams));

                    $.ajax({
                        url: globalVM.environment().getprivacyinfo + '?' + $.param({
                            "searchUserRef": ui.userRef,
                            "userRef": sessionStorage.getItem("userRef"),
                            "requstedOn": "xyz",
                            "requestedFrom": "xyz",
                            "guid": "xyz",
                            "geoLocation": "xyz"
                        }),
                        dataType: 'json',
                        headers: {
                            // key value pair of headers
                            'Authorization': self.token()
                        },
                        success: function (getdata) {
                            
                            
                            self.searchuserRef(ui.userRef);

                            console.log(getdata);
                            console.log(getdata[1].body.length);
                            arrdata = getdata;
                            getdata[1].body['worker_id'] = true;

                            if (getdata[1].body.annualIncome && getdata[1].body.annualIncome !== 'null') {

                                self.annualopt(getdata[1].body.annualIncome);
                            } else {

                                self.annualopt(self.annualopttext());
                            }


                            if (getdata[1].body.workingType && getdata[1].body.workingType !== 'null') {

                                self.workingtypeopt(getdata[1].body.workingType);
                            } else {
                                self.workingtypeopt(self.workingtypeopttext());

                            }

                            if (getdata[1].body.highestEducation && getdata[1].body.highestEducation !== 'null') {

                                self.educatonopt(getdata[1].body.highestEducation);
                            } else {
                                self.educatonopt(self.educatonopttext());

                            }

                            if (getdata[1].body.college && getdata[1].body.college !== 'null') {

                                self.collegeopt(getdata[1].body.college);
                            } else {
                                self.collegeopt(self.collegeopttext());

                            }


                            if (getdata[1].body.zodiacSign && getdata[1].body.zodiacSign !== 'null') {

                                self.zodiacopt(getdata[1].body.zodiacSign);
                            } else {

                                self.zodiacopt(self.zodiacopttext());
                            }


                            if (getdata[1].body.gothra && getdata[1].body.gothra !== 'null') {

                                self.gothraopt(getdata[1].body.gothra);
                            } else {

                                self.gothraopt(self.gothraopttext());
                            }



                            if (getdata[1].body.sibblings && getdata[1].body.sibblings !== 'null') {


                                self.sblingsopt(getdata[1].body.sibblings);
                            } else {
                                self.sblingsopt(self.sblingsopttext());

                            }


                            if (getdata[1].body.nativePlace && getdata[1].body.nativePlace !== 'null') {

                                self.nativeopt(getdata[1].body.nativePlace);
                            } else {
                                self.nativeopt(self.nativeopttext());

                            }


                            if (getdata[1].body.motherStatus && getdata[1].body.motherStatus !== 'null') {

                                self.motheropt(getdata[1].body.motherStatus);
                            } else {

                                self.motheropt(self.motheropttext());
                            }


                            if (getdata[1].body.fatherStatus && getdata[1].body.fatherStatus !== 'null') {

                                self.fatheropt(getdata[1].body.fatherStatus);
                            } else {

                                self.fatheropt(self.fatheropttext());
                            }


                            if (getdata[1].body.workingLocation && getdata[1].body.workingLocation !== 'null') {

                                self.workinglocationopt(getdata[1].body.workingLocation);
                            } else {

                                self.workinglocationopt(self.workinglocationopttext());
                            }


                            if (getdata[1].body.city && getdata[1].body.city !== 'null') {

                                self.cityopt(getdata[1].body.city);
                            } else {

                                self.cityopt(self.cityopttext());
                            }

                            if (getdata[1].body.state && getdata[1].body.state !== 'null') {

                                self.stateopt(getdata[1].body.state);
                            } else {
                                self.stateopt(self.stateopttext());

                            }
                            if (getdata[1].body.country && getdata[1].body.country !== 'null') {

                                self.countryopt(getdata[1].body.country);
                            } else {
                                self.countryopt(self.countryopttext());

                            }
                            if (getdata[1].body.motherTongue && getdata[1].body.motherTongue !== 'null') {

                                self.mothertongueopt(getdata[1].body.motherTongue);
                            } else {

                                self.mothertongueopt(self.mothertongueopttext());
                            }



                            if (getdata[1].body.mobilePhone && getdata[1].body.mobilePhone !== 'null') {

                                self.mobileopt(getdata[1].body.mobilePhone);
                            } else {

                                self.mobileopt(self.mobileopttext());
                            }


                            if (getdata[1].body.twitterId && getdata[1].body.twitterId !== 'null') {

                                self.twitteropt(getdata[1].body.twitterId);
                            } else {

                                self.twitteropt(self.twitteropttext());
                            }

                            if (getdata[1].body.fbId && getdata[1].body.fbId !== 'null') {

                                self.fbopt(getdata[1].body.fbId);

                            } else {
                                self.fbopt(self.fbopttext());

                            }

                            if (getdata[1].body.linkedinId && getdata[1].body.linkedinId !== 'null') {

                                self.linkedinopt(getdata[1].body.linkedinId);

                            } else {
                                self.linkedinopt(self.linkedinopttext());
                            }


                            if (getdata[1].body.homePhone && getdata[1].body.homePhone !== 'null') {

                                self.homephonept(getdata[1].body.homePhone);
                            } else {
                                self.homephonept(self.homephonepttext());

                            }


                            if (getdata[1].body.emailId && getdata[1].body.emailId !== 'null') {

                                self.emailopt(getdata[1].body.emailId);
                            } else {
                                self.emailopt(self.emailopttext());

                            }



                            if (getdata[1].body.firstName && getdata[1].body.firstName !== 'null') {


                                self.firstopt(getdata[1].body.firstName);
                            } else {
                                self.firstopt(self.firstopttext());

                            }


                            if (getdata[1].body.lastName && getdata[1].body.lastName !== 'null') {

                                self.lastopt(getdata[1].body.lastName);
                            } else {

                                self.lastopt(self.lastopttext());
                            }


                            if (getdata[1].body.age && getdata[1].body.age !== 'null') {

                                self.ageopt(getdata[1].body.age);
                            } else {

                                self.ageopt(self.ageopttext());
                            }


                            if (getdata[1].body.height && getdata[1].body.height !== 'null') {

                                self.heightopt(getdata[1].body.height);
                            } else {
                                self.heightopt(self.heightopttext());

                            }


                            if (getdata[1].body.drink && getdata[1].body.drink !== 'null') {

                                self.drinkopt(getdata[1].body.drink);
                            } else {
                                self.drinkopt(self.drinkopttext());

                            }



                            if (getdata[1].body.diet && getdata[1].body.diet !== 'null') {

                                self.foodopt(getdata[1].body.diet);
                            } else {
                                self.foodopt(self.foodopttext());

                            }



                            if (getdata[1].body.religion && getdata[1].body.religion !== 'null') {

                                self.religionopt(getdata[1].body.religion);
                            } else {
                                self.religionopt(self.religionopttext());

                            }

                            if (getdata[1].body.community && getdata[1].body.community !== 'null') {

                                self.communityopt(getdata[1].body.community);
                                // alert(getdata[1].body.community);
                            } else {
                                // alert();
                                self.communityopt(self.communityopttext());


                            }
                            if (getdata[1].body.gender && getdata[1].body.gender !== 'null') {

                                self.genderopt(getdata[1].body.gender);
                            } else {
                                self.genderopt(self.gendropttext());

                            }


                            if (getdata[1].body.dob && getdata[1].body.dob !== 'null') {

                                self.dobopt(getdata[1].body.dob);
                            } else {

                                self.dobopt(self.dobopttext());
                            }


                            if (getdata[1].body.maritalStatus && getdata[1].body.maritalStatus !== 'null') {

                                self.maritalopt(getdata[1].body.maritalStatus);
                            } else {
                                self.maritalopt(self.maritalopttext());

                            }


                            if (getdata[1].body.motherTongue && getdata[1].body.motherTongue !== 'null') {

                                self.mothertongueopt(getdata[1].body.motherTongue);
                            } else {
                                self.mothertongueopt(self.mothertongueopttext());

                            }



                            if (getdata[1].body.bodyType && getdata[1].body.bodyType !== 'null') {

                                self.bodyopt(getdata[1].body.bodyType);
                            } else {

                                self.bodyopt(self.bodyopttext());
                            }



                            if (getdata[1].body.skinTone && getdata[1].body.skinTone !== 'null') {

                                self.skinopt(getdata[1].body.skinTone);
                            } else {

                                self.skinopt(self.skinopttext());
                            }




                            if (getdata[1].body.weight && getdata[1].body.weight !== 'null') {

                                self.weightopt(getdata[1].body.weight);
                            } else {
                                self.weightopt(self.weightopttext());

                            }



                            if (getdata[1].body.smoke && getdata[1].body.smoke !== 'null') {

                                self.smokeopt(getdata[1].body.smoke);
                            } else {
                                self.smokeopt(self.smokeopttext());

                            }






                            if (getdata[1].body.workingAs && getdata[1].body.workingAs !== 'null') {

                                self.workingasopt(getdata[1].body.workingAs);

                            } else {

                                self.workingasopt(self.workingasopttext());
                            }



                            if (getdata[1].body.workingOrganization && getdata[1].body.workingOrganization !== 'null') {

                                self.workingwithopt(getdata[1].body.workingOrganization);
                            } else {
                                self.workingwithopt(self.workingwithopttext());

                            }




                            if (getdata[1].body.favouriteBooks && getdata[1].body.favouriteBooks !== 'null') {

                                self.booksopt(getdata[1].body.favouriteBooks);
                            } else {
                                self.booksopt(self.booksopttext());

                            }



                            if (getdata[1].body.hobbies && getdata[1].body.hobbies !== 'null') {

                                self.hobbiesopt(getdata[1].body.hobbies);
                            } else {
                                self.hobbiesopt(self.hobbiesopttext());

                            }



                            if (getdata[1].body.interests && getdata[1].body.interests !== 'null') {

                                self.interestsopt(getdata[1].body.interests);
                            } else {
                                self.interestsopt(self.interestsopttext());

                            }


                            if (getdata[1].body.favouriteMovies && getdata[1].body.favouriteMovies !== 'null') {

                                self.movieopt(getdata[1].body.favouriteMovies);
                            } else {
                                self.movieopt(self.movieopttext());

                            }


                            if (getdata[1].body.favouriteMusic && getdata[1].body.favouriteMusic !== 'null') {

                                self.musicopt(getdata[1].body.favouriteMusic);
                            } else {

                                self.musicopt(self.musicopttext());
                            }




                            if (getdata[1].body.favouriteSports && getdata[1].body.favouriteSports !== 'null') {

                                self.sportsopt(getdata[1].body.favouriteSports);
                            } else {
                                self.sportsopt(self.sportsopttext());

                            }



                            self.mphone = getdata[1].body.mobilePhone;
                            self.tId = getdata[1].body.twitterId;
                            self.fId = getdata[1].body.fbId;
                            self.lId = getdata[1].body.linkedinId;
                            self.hPhone = getdata[1].body.homePhone;
                            self.eId = getdata[1].body.emailId;
                            // alert(getdata[1].body.userRef);
                            self.fName = getdata[1].body.firstName;
                            self.lName = getdata[1].body.lastName;

                            self.rdata(arrdata);
                            rdata = JSON.stringify(arrdata);
                            //alert(rdata);

                            if (self.foodopt() === 'Vegetarian') {
                                document.getElementById('nonvegimage').style.display = 'none';
                                document.getElementById('vegimage').style.display = 'block';
                                document.getElementById('imagedrink3').style.display = 'none';
                                self.foodnotvisible(false);
                                self.foodvisible(true);
                            } else {
                                document.getElementById('vegimage').style.display = 'none';
                                document.getElementById('nonvegimage').style.display = 'block';
                                document.getElementById('imagedrink3').style.display = 'none';
                                self.foodnotvisible(false);
                                self.foodvisible(true);
                            }

                            if (self.drinkopt() === 'No') {
                                document.getElementById('nonimagedrink').style.display = 'block';
                                document.getElementById('imagedrink').style.display = 'none';
                                document.getElementById('imagedrink2').style.display = 'none';
                                self.drinknotvisible(false);
                                self.drinkvisible(true);

                            } else {
                                document.getElementById('imagedrink').style.display = 'block';
                                document.getElementById('nonimagedrink').style.display = 'none';
                                document.getElementById('imagedrink2').style.display = 'none';
                                self.drinknotvisible(false);
                                self.drinkvisible(true);
                            }

                            if (self.foodopt() === 'NA') {
                                document.getElementById('imagedrink3').style.display = 'block';
                                document.getElementById('nonvegimage').style.display = 'none';
                                document.getElementById('vegimage').style.display = 'none';
                                self.foodnotvisible(true);
                                self.foodvisible(false);
                            }


                            if (self.drinkopt() === 'NA') {
                                document.getElementById('imagedrink2').style.display = 'block';
                                document.getElementById('imagedrink').style.display = 'none';
                                document.getElementById('nonimagedrink').style.display = 'none';
                                self.drinkvisible(false);
                                self.drinknotvisible(true);
                            }


                            self.religion = self.religionopt();
                            self.letter(self.religion[0]);
                            self.community = self.communityopt();
                            //alert(self.communityopt());
// self.comletter(self.community[0]);
                            if (self.communityopt() !== 'NA') {
                                //alert("yes");
                                self.comletter(self.community[0]);
                                self.communitydisplay(true);
                                self.communitynotdisply(false);
                            } else {

                                self.comletter("NA");
                                self.communityopt("community");
                                self.communitydisplay(false);
                                self.communitynotdisply(true);
                                //alert(self.comletter());
                            }
//declaring fullname
                            self.fullName(self.firstopt() + ' ' + self.lastopt());
//declaring variables for match
                            self.match = ko.observable(0);
                            //alert(self.match());
                            //  alert(self.U1religion());




                            self.U1hobbies(sessionStorage.getItem("hobbies"));
                            self.U1intrests(sessionStorage.getItem("interests"));
                            self.U1diet(sessionStorage.getItem("diet"));
                            self.U1drink(sessionStorage.getItem("drink"));
                            self.U1smoke(sessionStorage.getItem("smoke"));
                            //alert(sessionStorage.getItem("smoke"));
                            self.U1favMusic(sessionStorage.getItem("favouriteMusic"));
                            self.U1favBook(sessionStorage.getItem("favouriteBooks"));
                            self.U1favSports(sessionStorage.getItem("favouriteSports"));
                            self.U1religion(sessionStorage.getItem("religion"));
                            self.U1movies(sessionStorage.getItem("favouriteMovies"));



                            if (self.U1hobbies() === self.hobbiesopt()) {
                                self.match(self.match() + 1);
                                self.hobbiesStatus(true);
                                self.hobbieserror(false);

                                //alert(self.U1hobbies())
                            } else if (self.U1hobbies() === 'undefined') {
                                self.U1hobbies('NA');
                                self.hobbieserror(true);
                            }
                            ;



                            if (self.U1intrests() === self.interestsopt()) {
                                self.match(self.match() + 1);
                                self.intreststatus(true);
                                self.intresterror(false);

                            } else if (self.U1intrests() === 'undefined') {

                                self.U1intrests('NA');
                                self.intresterror(true);

                            }
                            ;

                            if (self.U1diet() === self.foodopt()) {
                                self.match(self.match() + 1);
                                self.foodstatus(true);
                                self.fooderror(false);
                                // alert(self.U1diet());

                            } else if (self.U1diet() === 'undefined') {

                                self.U1diet('NA');
                                self.fooderror(true);

                            }
                            ;
                            if (self.U1drink() === self.drinkopt()) {
                                self.match(self.match() + 1);
                                self.drinkstatus(true);
                                self.drinkerror(false);
                            } else if (self.U1drink() === 'undefined') {

                                self.U1drink('NA');
                                self.drinkerror(true);
                            }
                            ;


                            if (self.U1smoke() === self.smokeopt()) {
                                self.match(self.match() + 1);
                                self.smokestatus(true);
                                self.smokeerror(false);
                            } else if (self.U1smoke() === 'undefined') {

                                self.U1smoke('NA');
                                self.smokeerror(true);
                            }
                            ;

                            if (self.U1favMusic() === self.musicopt()) {
                                self.match(self.match() + 1);
                                self.Musicstatus(true);
                                self.Musicerror(false);

                            } else if (self.U1favMusic() === 'undefined') {

                                self.U1favMusic('NA');
                                self.Musicerror(true);
                            }
                            ;
                            if (self.U1favBook() === self.booksopt()) {
                                self.match(self.match() + 1);
                                self.bookstatus(true);
                                self.bookerror(false);
                            } else if (self.U1favBook() === 'undefined') {

                                self.U1favBook('NA');
                                self.bookerror(true);
                            }
                            ;

                            if (self.U1favSports() === self.sportsopt()) {
                                self.match(self.match() + 1);
                                self.sportsstatus(true);
                                self.sportserror(false);
                            } else if (self.U1favSports() === 'undefined') {

                                self.U1favSports('NA');
                                self.sportserror(true);
                            }
                            ;

                            if (self.U1religion() === self.religionopt()) {
                                self.match(self.match() + 1);
                                self.religionstatus(true);
                                self.religionerror(false);
                            } else if (self.U1religion() === 'undefined') {


                                self.U1religion('NA');
                                self.religionerror(true);
                            }
                            ;
                            if (self.U1movies() === self.movieopt()) {
                                self.match(self.match() + 1);
                                self.moviestatus(true);
                                self.movieerror(false);
                            } else if (self.U1movies() === 'undefined') {

                                self.U1movies('NA');
                                self.movieerror(true);
                            }
                            ;

                            if (self.match() > 0) {


                                self.total(self.match());
                                self.matchPercent(Math.round(self.match() / 10 * 100) + '%');
                                //alert(self.matchPercent());
                            } else {

                                self.matchPercent('0');
                                self.total('0');
                                self.totalvisible(true);
                                self.totalmatch(true);
                            }


                        }


                    });
                    
                    self.emselfployees = ko.observableArray();
                    
                 
                    

                    self.fuser = ko.observable();
                    


                            $.ajax({
                                url: globalVM.environment().getSentNotifications + '?' + $.param({notificationTo: self.userRef}),

                                dataType: 'json',
                                headers: {

                                    'Authorization': self.token()},
                                success: function (people) {

                                    var employees = people[1].body;
                                    self.sentdata((employees));
//                                    alert(JSON.stringify(employees));
//                                    alert(employees.length);

                                        for(i=0;i<=people.length;i++){
                                            //alert(i);
                                            if (self.sentdata()[i].notificationFrom === ui.userRef && self.sentdata()[i].notificationData === "mobileNo" && self.sentdata()[i].status === 'sent') {
                                      
                                           // alert('mobileno');
                                            
                                                self.mobilereq(true);
                                                  self.mobileaccepted(false);
                                            }
                                       if (self.sentdata()[i].notificationFrom === ui.userRef && self.sentdata()[i].notificationData === "twitterid" && self.sentdata()[i].status === 'sent') {
                                           
                                               self.twitterreq(true);
                                                self.twitteraccepted(false);

                                                    
                                                }
                                                if (self.sentdata()[i].notificationFrom === ui.userRef && self.sentdata()[i].notificationData === "fbId" && self.sentdata()[i].status === 'sent') {
//                               
                                             self.fbrequest(true);
                                        self.fbaccepted(false);
                                             }
                                             if (self.sentdata()[i].notificationFrom === ui.userRef && self.sentdata()[i].notificationData === "linkedinid" && self.sentdata()[i].status === 'sent') {
                                             self.linkedinreq(true);
                                             self.linkedinaccepted(false);
                                             
                                                } 
                                                if (self.sentdata()[i].notificationFrom === ui.userRef && self.sentdata()[i].notificationData === 'homeNo' && self.sentdata()[i].status === 'sent') {
                                                       self.homephonereq(true);
                                                    self.homeaccepted(false);                   
                                                    
                                                } 
                                    }



                                    }

                            });



                        

                





                };







                self.basicinfo = function () {

                    document.getElementById('basic').style.display = 'block';
                    document.getElementById('lifestyleinfo').style.display = 'none';
                    document.getElementById('religionid').style.display = 'none';
                    // document.getElementById('educationid').style.display = 'none';
                    document.getElementById('profileid').style.display = 'none';
                    //document.getElementById('userprofileid').style.display = 'none';
                   
                    
                   
   $('body').animate({
      scrollTop: document.body.scrollHeight
   }, 500);
                    
                    
                };

                self.lifestyle = function () {
                    document.getElementById('lifestyleinfo').style.display = 'block';
                    document.getElementById('basic').style.display = 'none';
                    document.getElementById('religionid').style.display = 'none';
                    //document.getElementById('educationid').style.display = 'none';
                    document.getElementById('profileid').style.display = 'none';
                    //document.getElementById('userprofileid').style.display = 'none';
                   
                    
                     $('body').animate({
      scrollTop: document.body.scrollHeight
   }, 500);
                };

                self.religious = function () {
                    document.getElementById('lifestyleinfo').style.display = 'none';
                    document.getElementById('basic').style.display = 'none';
                    document.getElementById('religionid').style.display = 'block';
                    // document.getElementById('educationid').style.display = 'none';
                    document.getElementById('profileid').style.display = 'none';
                    // document.getElementById('userprofileid').style.display = 'none';
                  
                  
                   $('body').animate({
      scrollTop: document.body.scrollHeight
   }, 500);
                };
                self.matches = function ()
                {



                    document.getElementById('profileid').style.display = 'none';
                    // document.getElementById('userprofileid').style.display = 'block';
                    document.getElementById('lifestyleinfo').style.display = 'none';
                    document.getElementById('basic').style.display = 'none';
                    document.getElementById('religionid').style.display = 'none';




                    document.getElementById('lifestyleinfo').style.display = 'none';
                    document.getElementById('basic').style.display = 'none';
                    document.getElementById('religionid').style.display = 'none';
//       document.getElementById('matchid').style.display = 'block';
                    document.getElementById('profileid').style.display = 'block';
                    //document.getElementById('userprofileid').style.display = 'none';
                    // document.getElementById('userprofileid').style.display = 'none';
                     $('body').animate({
      scrollTop: document.body.scrollHeight
   }, 500);
                   
                };
                 self.uparrow = function ()
                {
                     $(window).scrollTop(0);
                };






                //================user search End==============
                //================Back ==============
                self.back = function () {
                    document.getElementById("tabs-3").style.display = "block";
                    document.getElementById("tabs-2").style.display = "none";

//            self.totalmatch(false);
//   self.totalvisible(false);

                    self.mobileaccepted(true);
                    self.mobilereq(false);

                    self.twitteraccepted(true);
                    self.twitterreq(false);

                    self.homeaccepted(true);
                    self.homephonereq(false);

                    self.fbaccepted(true);
                    self.fbrequest(false);

                    self.linkedinaccepted(true);
                    self.linkedinreq(false);


                    self.hobbiesStatus(false);
                    self.hobbieserror(true);

                    self.Musicstatus(false);
                    self.Musicerror(true);

                    self.sportsstatus(false);
                    self.sportserror(true);

                    self.bookstatus(false);
                    self.bookerror(true);

                    self.religionstatus(false);
                    self.religionerror(true);

                    self.smokestatus(false);
                    self.smokeerror(true);

                    self.drinkstatus(false);
                    self.drinkerror(true);

                    self.fooderror(true);
                    self.foodstatus(false);

                    self.intreststatus(false);
                    self.intresterror(true);

                    self.moviestatus(false);
                    self.movieerror(true);
                    self.communitydisplay(true);
                    self.communitynotdisply(false);

                    self.drinknotvisible(false);
                    self.drinkvisible(true);
                    self.foodnotvisible(false);
                    self.foodvisible(true);

                    document.getElementById('basic').style.display = 'block';
                    document.getElementById('lifestyleinfo').style.display = 'none';
                    document.getElementById('religionid').style.display = 'none';
//         document.getElementById('matchid').style.display = 'none';
                    document.getElementById('profileid').style.display = 'none';
                    //document.getElementById('userprofileid').style.display = 'none';
                };
                //================Back End==============


                //======================notifications==============


                Date.prototype.yyyymmddhhmmssms = function () {
                    var yyyy = this.getFullYear().toString();
                    var MM = (this.getMonth() + 1).toString(); // getMonth() is zero-based
                    var dd = this.getDate().toString();
                    var hh = this.getHours().toString();
                    var mm = this.getMinutes().toString();
                    var ss = this.getSeconds().toString();
                    var ms = this.getMilliseconds().toString();
                    return yyyy + (MM[1] ? MM : "0" + MM[0]) + (dd[1] ? dd : "0" + dd[0]) + (hh[1] ? hh : "0" + hh[0]) + (mm[1] ? mm : "0" + mm[0]) + (ss[1] ? ss : "0" + ss[0]) + (ms[1] ? ms : "0" + ms[0]);
                };
                var Id = new Date().yyyymmddhhmmssms();
                ;

                //  alert(Id);    




                Date.prototype.yyyymmddhhmmss = function () {
                    var yyyy = this.getFullYear().toString();
                    var MM = (this.getMonth() + 1).toString(); // getMonth() is zero-based
                    var dd = this.getDate().toString();
                    var hh = this.getHours().toString();
                    var mm = this.getMinutes().toString();
                    var ss = this.getSeconds().toString();
                    return yyyy + '-' + (MM[1] ? MM : "0" + MM[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + 'T' + (hh[1] ? hh : "0" + hh[0]) + ':' + (mm[1] ? mm : "0" + mm[0]) + ':' + (ss[1] ? ss : "0" + ss[0]);
                };
                var requestedOn = new Date().yyyymmddhhmmss();

                self.firstName = ko.observable();
                self.lastName = ko.observable();
                // alert("test");
                self.firstName(sessionStorage.getItem("firstName"));
                self.lastName(sessionStorage.getItem("lastName"));
                //alert(JSON.stringify(self.firstName()));
                //alert(JSON.stringify(self.lastName()));
                // self.firstName=ko.observable(sessionStorage.getItem("firstName"));

                //************ link for mobile no************************/////////////////////       

                jQuery(document).on('click', "#btnhomephone", function () {


                    if (self.hPhone === "Request") {

//alert("condition works");


                        self.jsonbody = {
                            "header": {
                               "guid": "aa",
                               "geoLocation": "aa",
                              "requestedFrom":"elasticsearch",
                               "requestedOn": "122"




                            },
                            "body": {
                                "notificationData": "homeNo",
                                "requestedOn": requestedOn,
                                "notificationTo": self.notUserRef(),
                                "notificationFor": self.loginUserName(),
                                "modifiedOn": self.fName + ' ' + self.lName,
                                "notificationFrom": sessionStorage.getItem("userRef"),
                                "notificationId": self.notUserRef() + 'h' + 'w',
                                "status": "waiting"
                            }};

                        // console.log(ko.toJSON(self.jsonbody));
                        //alert(ko.toJSON(self.jsonbody));

                        //  alert("mobileNo");
                        // **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            // alert("INVITATION IS POSTED for waiting");

                        });
                        self.jsonbody = {
                            "header": {
                                "guid": "aa",
                               "geoLocation": "aa",
                              "requestedFrom":"elasticsearch",
                               "requestedOn": "122"


                            },
                            "body": {
                                "notificationData": "homeNo",
                                "notificationFrom": self.notUserRef(),
                                "notificationFor": self.fName + ' ' + self.lName,
                                "notificationTo": sessionStorage.getItem("userRef"),
                                "notificationId": self.notUserRef() + 'h' + 's',
                                "requestedOn": requestedOn,
                                "status": "sent"
                            }};
                        // console.log('************');
                        // console.log(ko.toJSON(self.jsonbody));
                        //  alert(ko.toJSON(self.jsonbody));
                        // console.log('************');
                        //  alert("mobileNo");
                        // **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            // document.getElementById("cont3").style.display = "none";
                                           alert("INVITATION IS POSTED for sent");



                            self.homeaccepted(false);
                            self.homephonereq(true);
                        });




                        setTimeout(function () {

                            // $('#homepop').ojPopup('open', '#btnhomephone');
                            document.getElementById("cont3").style.display = "block";

                        });
                        setTimeout(function () {
                            //$("#homepop").ojPopup('close', '#btnhomephone');
                            document.getElementById("cont3").style.display = "none";

                        }, 2000);







                    } else {
                        //alert("alresdy displayed");
                    }
                });


                //////////************link for fbid**********************////////////////


                jQuery(document).on('click', "#btnfb", function () {

//alert("fb");
                    if (self.fId === "Request") {

                        //alert("condition works");


                        self.jsonbody = {
                            "header": {
                                "guid": "aa",
                               "geoLocation": "aa",
                              "requestedFrom":"elasticsearch",
                               "requestedOn": "122"


                            },
                            "body": {
                                "notificationData": "fbId",
                                "requestedOn": requestedOn,
                                "notificationTo": self.notUserRef(),
                                "notificationFor": self.loginUserName(),
                                "modifiedOn": self.fName + ' ' + self.lName,
                                "notificationFrom": sessionStorage.getItem("userRef"),
                                "notificationId": self.notUserRef() + 'f' + 'w',
                                "status": "waiting"
                            }};
                        // console.log('************');
                        // alert(ko.toJSON(self.jsonbody));
                        // console.log('************');
                        // alert("mobileNo");
                        // **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            //alert("INVITATION IS POSTED for waiting");

                        });
                        self.jsonbody = {
                            "header": {
                                 "guid": "aa",
                               "geoLocation": "aa",
                              "requestedFrom":"elasticsearch",
                               "requestedOn": "122"


                            },
                            "body": {
                                "notificationData": "fbId",
                                "notificationFrom": self.notUserRef(),
                                "notificationFor": self.fName + ' ' + self.lName,
                                "modifiedOn": self.loginUserName(),
                                "notificationTo": sessionStorage.getItem("userRef"),
                                "notificationId": self.notUserRef() + 'f' + 's',
                                "requestedOn": requestedOn,
                                "status": "sent"
                            }};
                        // console.log('************');
                        //  console.log(ko.toJSON(self.jsonbody));
                        //alert(ko.toJSON(self.jsonbody));
                        //  console.log('************');
                        //   alert("mobileNo");
                        // **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            // alert("INVITATION IS POSTED for sent");
                            self.fbaccepted(false);
                            self.fbrequest(true);

                        });




                        setTimeout(function () {
                            // $('#fbpopup').ojPopup('open', 'btnfb');
                            document.getElementById("cont3").style.display = "block";

                        });
                        setTimeout(function () {
                            // $("#fbpopup").ojPopup('close', 'btnfb');
                            document.getElementById("cont3").style.display = "none";

                        }, 2000);










                    } else {
                        //  alert("fbId  already display");
                    }
                });



                //////////////////*********************link for twitter***************/////////////////////////
// alert(self.notUserRef());
//    var name1 = self.fName ;
//    var name2 = self.lName ;
//     self.fullName(self.firstopt() +' '+ self.lastopt());
//     var totalName = name1 + name2 ;




                jQuery(document).on('click', "#btntwitter", function () {

                    //alert("twitter");
                    if (self.tId === "Request") {

                        //  alert("condition works");
                        // alert(self.fName()+''+self.lName());



                        self.jsonbody = {
                            "header": {
                                 "guid": "aa",
                               "geoLocation": "aa",
                              "requestedFrom":"elasticsearch",
                               "requestedOn": "122"


                            },
                            "body": {
                                "notificationData": "twitterid",
                                "requestedOn": requestedOn,
                                "notificationTo": self.notUserRef(),
                                "notificationFor": self.loginUserName(),
                                "modifiedOn": self.fName + ' ' + self.lName,
                                "notificationFrom": sessionStorage.getItem("userRef"),
                                "notificationId": self.notUserRef() + 't' + 'w',
                                "status": "waiting"
                            }};
                        // console.log('************');
                        // alert(ko.toJSON(self.jsonbody));
                        //  console.log('************');
                        // alert("mobileNo");
                        // **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            //   alert("INVITATION IS POSTED for waiting");

                        });
                        self.jsonbody = {
                            "header": {
                                "guid": "aa",
                               "geoLocation": "aa",
                              "requestedFrom":"elasticsearch",
                               "requestedOn": "122"


                            },
                            "body": {
                                "notificationData": "twitterid",
                                "notificationFrom": self.notUserRef(),
                                "notificationTo": sessionStorage.getItem("userRef"),
                                "notificationFor": self.fName + ' ' + self.lName,
                                "notificationId": self.notUserRef() + 't' + 's',
                                "requestedOn": requestedOn,
                                "status": "sent"
                            }};
                        // console.log('************');
                        // console.log(ko.toJSON(self.jsonbody));
                        // alert(ko.toJSON(self.jsonbody));
                        //  console.log('************');
                        // alert("mobileNo");
                        // **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            //alert("twitterid IS POSTED for sent");
                            self.twitteraccepted(false);
                            self.twitterreq(true);
                        });

                        setTimeout(function () {
                            // $('#twitterpopup').ojPopup('open', 'btntwitter');
                            document.getElementById("cont3").style.display = "block";

                        });
                        setTimeout(function () {
                            // $("#twitterpopup").ojPopup('close', 'btntwitter');
                            document.getElementById("cont3").style.display = "none";

                        }, 2000);










                    } else {
                        //alert("mobileno  already display");
                    }
                });
                jQuery(document).on('click', "#btnlinkedin", function () {

//alert("linkedin");
                    if (self.lId == "Request") {

//alert("condition works");


                        self.jsonbody = {
                            "header": {
                                "guid": "aa",
                               "geoLocation": "aa",
                              "requestedFrom":"elasticsearch",
                               "requestedOn": "122"

                            },
                            "body": {
                                "notificationData": "linkedinid",
                                "requestedOn": requestedOn,
                                "notificationTo": self.notUserRef(),
                                "notificationFrom": sessionStorage.getItem("userRef"),
                                "notificationFor": self.loginUserName(),
                                "modifiedOn": self.fName + ' ' + self.lName,

                                "notificationId": self.notUserRef() + 'l' + 'w',
                                "status": "waiting"
                            }};
                        //  console.log('************');
                        //  alert(ko.toJSON(self.jsonbody));
                        //  console.log('************');
                        // alert("mobileNo");
                        // **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            //  alert("INVITATION IS POSTED for waiting");

                        });
                        self.jsonbody = {
                            "header": {
                                "guid": "aa",
                               "geoLocation": "aa",
                              "requestedFrom":"elasticsearch",
                               "requestedOn": "122"


                            },
                            "body": {
                                "notificationData": "linkedinid",
                                "notificationFrom": self.notUserRef(),
                                "notificationTo": sessionStorage.getItem("userRef"),
                                "notificationFor": self.fName + ' ' + self.lName,
                                "notificationId": self.notUserRef() + 'l' + 's',
                                "requestedOn": requestedOn,
                                "status": "sent"
                            }};
                        console.log('************');
                        console.log(ko.toJSON(self.jsonbody));
                        //alert(ko.toJSON(self.jsonbody));
                        console.log('************');
                        // alert("mobileNo");
                        // **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            //alert("INVITATION IS POSTED for sent");
                            self.linkedinaccepted(false);
                            self.linkedinreq(true);
                        });



                        setTimeout(function () {
                            // $('#linkedinpopup').ojPopup('open', 'btnlinkedin');
                            document.getElementById("cont3").style.display = "block";

                        });
                        setTimeout(function () {
                            // $("#linkedinpopup").ojPopup('close', 'btnlinkedin');
                            document.getElementById("cont3").style.display = "none";

                        }, 2000);







                    } else {
                        //  alert("linkedin  already display");
                    }
                });
                jQuery(document).on('click', "#emailopt", function () {

//alert("linkedin");
                    if (self.eId === "Request") {

//alert("condition works");


                        self.jsonbody = {
                            "notificationData": "emailId",
                            "requestedOn": requestedOn,
                            "notificationTo": self.notUserRef(),
                            "notificationFrom": sessionStorage.getItem("userRef"),
                            "notificationFor": self.loginUserName(),
                            "modifiedOn": self.fName + ' ' + self.lName,

                            "notificationId": sessionStorage.getItem("userRef") + 'e' + 'w',
                            "status": "waiting"
                        };
                        //  console.log('************');
                        // alert(ko.toJSON(self.jsonbody));
                        //   console.log('************');
                        // alert("mobileNo");
                        // **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            //   alert("INVITATION IS POSTED for waiting");

                        });
                        self.jsonbody = {
                            "notificationData": "emailId",
                            "notificationFrom": self.notUserRef(),
                            "notificationTo": sessionStorage.getItem("userRef"),
                            "notificationFor": self.fName + ' ' + self.lName,

                            "requestedOn": requestedOn,
                            "notificationId": self.notUserRef() + 'e' + 's',

                            "status": "sent"
                        };
                        //  console.log('************');
                        // console.log(ko.toJSON(self.jsonbody));
                        //  alert(ko.toJSON(self.jsonbody));
                        // console.log('************');
                        //  alert("mobileNo");
                        //  **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            //  alert("INVITATION IS POSTED for sent");

                        });
                    } else {
                        // alert("linkedin  already display");
                    }
                });
                jQuery(document).on('click', "#btnmobile", function () {

//alert("asdfghj");
                    if (self.mphone === "Request") {

//alert("condition works");


                        self.jsonbody = {
                            "header": {
                                "guid": "aa",
                               "geoLocation": "aa",
                              "requestedFrom":"elasticsearch",
                               "requestedOn": "122"


                            },
                            "body": {
                                "notificationData": "mobileNo",
                                "requestedOn": requestedOn,
                                "notificationTo": self.notUserRef(),
                                "notificationFrom": sessionStorage.getItem("userRef"),
                                "notificationFor": self.loginUserName(),
                                "modifiedOn": self.fName + ' ' + self.lName,

                                "notificationId": self.notUserRef() + 'm' + 'w',
                                "status": "waiting"
                            }};
                        // console.log('************');
                        // alert(ko.toJSON(self.jsonbody));
                        //console.log('************');
                        // alert("mobileNo");
                        // **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                            // alert("INVITATION IS POSTED for waiting");

                        });
                        self.jsonbody = {
                            "header": {
                                "guid": "aa",
                               "geoLocation": "aa",
                              "requestedFrom":"elasticsearch",
                               "requestedOn": "122"


                            },
                            "body": {
                                "notificationData": "mobileNo",
                                "notificationFrom": self.notUserRef(),
                                "notificationTo": sessionStorage.getItem("userRef"),
                                "notificationId": self.notUserRef() + 'm' + 's',
                                "notificationFor": self.fName + ' ' + self.lName,

                                "requestedOn": requestedOn,
                                "status": "sent"
                            }};
                        // console.log('************');
                        //console.log(ko.toJSON(self.jsonbody));
                        // alert(ko.toJSON(self.jsonbody));
                        // console.log('************');
                        //  alert("mobileNo");
                        ///// **** post operation*****
                        self.tasksURI = globalVM.environment().createnotification;
                        self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

                             //alert("INVITATION IS POSTED for sent");
                            self.mobileaccepted(false);
                            self.mobilereq(true);

                        });


                        setTimeout(function () {
                            //$('#mobilepopup').ojPopup('open', '#btnmobile');
                            document.getElementById("cont3").style.display = "block";


                        });
                        setTimeout(function () {
                            // $("#mobilepopup").ojPopup('close', '#btnmobile');
                            document.getElementById("cont3").style.display = "none";

                        }, 2000);









                    } else {
                        //  alert("linkedin  already display");
                    }
                });




                //======================notifications end==============
       /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);
