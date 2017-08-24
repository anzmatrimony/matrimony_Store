define(['ojs/ojcore','knockout','jquery','ojs/ojknockout',
    'ojs/ojnavigationlist', 'ojs/ojtable', 'ojs/ojtabs', 'ojs/ojconveyorbelt', 'ojs/ojselectcombobox', 'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojmenu', 'ojs/ojaccordion', 'ojs/ojcollapsible', 'ojs/ojradioset', 'promise',
    'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojbutton', 'ojs/ojmodel', 'ojs/ojcheckboxset'
],
        function (oj, ko, $) {
            function firstPageViewModel() {
                var self = this;
                self.token = ko.observable('Bearer' + ' ' + localStorage.getItem("access_token"));
                self.userRef = sessionStorage.getItem("userRef");
                var globalVM = ko.dataFor(document.getElementById('globalBody'));
                var logedInUserName;
                
 self.loginUserName = ko.observable(sessionStorage.getItem("Ufname") + ' ' + sessionStorage.getItem("Ulname"));
// logedInUserName = self.loginUserName();
//                    self.queryParams.searchUserRef= ko.observableArray();
//                    self.searchUserRef=ko.observableArray();
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
               
               
               self.sent = ko.observableArray();
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

                self.acc1=ko.observableArray();
                self.user=ko.observableArray();
                self.homeaccepted = ko.observable(true);
                self.dataSource = ko.observableArray();
                self.loginUserName = ko.observableArray();
                self.waitingdata = ko.observableArray();
                self.notificationId = ko.observableArray();
                self.accepteddata = ko.observableArray();
                self.sentdata = ko.observableArray();
                self.likedata = ko.observableArray();
                self.rejecteddata = ko.observableArray();
                self.dataSource1 = ko.observableArray();
                self.dataSource3 = ko.observableArray();
                self.dataSource4 = ko.observableArray();
                self.dataSource5 = ko.observableArray();
                self.dataSource2 = ko.observableArray();
                self.selecteditem = ko.observable();
                self.notData = ko.observableArray();
                self.notFrom = ko.observableArray();
                self.notCreated = ko.observableArray();
                self.notificationFrom = ko.observableArray();
                self.createdOn = ko.observableArray();
                self.acceptedDisplay = ko.observable(false);
                self.sentDisplay = ko.observable(false);
                self.likeDisplay = ko.observable(false);
                self.rejectedDisplay = ko.observable(false);
                self.invitaionDisplay = ko.observable(true);
                self.loginUserName = ko.observable(sessionStorage.getItem("Ufname") + ' ' + sessionStorage.getItem("Ulname"));

                self.notUserRef = ko.observable();

                self.fName = ko.observable();
                self.lName = ko.observable();
                self.mphone = ko.observable();
                self.hPhone = ko.observable();
                self.fId = ko.observable();
                self.eId = ko.observable();
                self.lId = ko.observable();
                self.tId = ko.observable();

                $(document).ready(function () {
                    document.getElementById("tabsn-1").style.display = "block";
                    document.getElementById("tabsn-2").style.display = "none";
                    document.getElementById("tabsn-3").style.display = "none";
                    document.getElementById("tabsn-4").style.display = "none";
                    document.getElementById("tabsn-5").style.display = "none";

                    $.ajax({
                        url: globalVM.environment().getPendingNotifications + '?' + $.param({notificationTo: self.userRef}),
                        dataType: 'json',
                        headers: {

                            'Authorization': self.token()},
                        success: function (people) {
                            // alert(people);
                            if (people === "0") {
                             console.log(people);
//                            self.waitingdata(item);
                                document.getElementById("page2").style.display = "none";
                                document.getElementById("d1").style.display = "block";
                            } else {
                                // self.waitingdata = ko.observableArray();
                                var employees = people[1].body;
                                self.waitingdata(employees);
                                      console.log(JSON.stringify(people[1].body.length));
                            }
                            ;
                        }
                    });

                    this.dataSource1 = new oj.ArrayTableDataSource(self.waitingdata, {idAttribute: "notificationId"});
                });



                self.home5 = function (data) {
                    // alert("home5")

                    document.getElementById("tabsn-1").style.display = "block";
                    document.getElementById("tabsn-2").style.display = "none";
                    document.getElementById("tabsn-3").style.display = "none";
                    document.getElementById("tabsn-4").style.display = "none";
                    document.getElementById("tabsn-5").style.display = "none";
                    $.ajax({
                        url: globalVM.environment().getPendingNotifications + '?' + $.param({notificationTo: self.userRef}),
                        dataType: 'json',
                        headers: {

                            'Authorization': self.token()},
                        success: function (people) {
                            //alert(JSON.stringify(people));
                           // console.log(JSON.stringify(people));
                        

                            if (people === "0") {
                                console.log(people);
                                   document.getElementById("page2").style.display = "none";
                                document.getElementById("d1").style.display = "block";
                            } else {

                                var employees = people[1].body;
                                self.waitingdata(employees);
                                      console.log(JSON.stringify(people[1].body.length));
                                    // self.waitingdata(people[1].body.length);
                               // alert(JSON.stringify(self.waitingdata));
                                // console.log(JSON.stringify(self.waitingdata.body[1].notificationId)) ;
                            }
                        }
                    });

                    this.dataSource1 = new oj.ArrayTableDataSource(self.waitingdata, {idAttribute: "notificationId"});
                };
                self.gettingstarted5 = function (data) {
                    // alert("gettingstarted5")
                    document.getElementById("tabsn-1").style.display = "none";
                    document.getElementById("tabsn-2").style.display = "block";
                    document.getElementById("tabsn-3").style.display = "none";
                    document.getElementById("tabsn-4").style.display = "none";
                    document.getElementById("tabsn-5").style.display = "none";

                    $.ajax({
                        url: globalVM.environment().getAcceptedNotificatons + '?' + $.param({notificationTo: self.userRef}),
                        dataType: 'json',
                        headers: {

                            'Authorization': self.token()},
                        success: function (people) {
//alert(people);
 
                            if (people === "0") {
                                console.log(people);
                                document.getElementById("page3").style.display = "none";
                                document.getElementById("d2").style.display = "block";
                            } else {

                                var employees = people[1].body;
                                self.accepteddata(employees);
                                console.log(JSON.stringify(people[1].body.length));
                            }
//                            loadPerfandPotenialData();
                        }
                    });



                    this.dataSource2 = new oj.ArrayTableDataSource(self.accepteddata, {idAttribute: "notificationId"});
                    //  alert(JSON.stringify(this.dataSource2))

                };
                self.cookbook5 = function (data) {
                    // alert("cookbook5")
                    document.getElementById("tabsn-1").style.display = "none";
                    document.getElementById("tabsn-2").style.display = "none";
                    document.getElementById("tabsn-3").style.display = "block";
                    document.getElementById("tabsn-4").style.display = "none";
                    document.getElementById("tabsn-5").style.display = "none";

                    $.ajax({
                        url: globalVM.environment().getSentNotifications + '?' + $.param({notificationTo: self.userRef}),
                        dataType: 'json',
                        headers: {

                            'Authorization': self.token()},
                        success: function (people) {

                            if (people === "0") {
                                console.log(people);
                                document.getElementById("page4").style.display = "none";
                                document.getElementById("d3").style.display = "block";
                            } else {

                                var employees = people[1].body;
                                self.sentdata(employees);
                                 console.log(JSON.stringify(people[1].body.length));
                            }
//                            loadPerfandPotenialData();
                        }
                    });

                    this.dataSource3 = new oj.ArrayTableDataSource(self.sentdata, {idAttribute: "notificationId"});

                };
                self.library5 = function (data) {
                    //alert("library5")
                    document.getElementById("tabsn-1").style.display = "none";
                    document.getElementById("tabsn-2").style.display = "none";
                    document.getElementById("tabsn-3").style.display = "none";
                    document.getElementById("tabsn-4").style.display = "block";
                    document.getElementById("tabsn-5").style.display = "none";

                    $.ajax({
                        url: globalVM.environment().getRejectedNotifications + '?' + $.param({notificationTo: self.userRef}),
                        dataType: 'json',
                        headers: {

                            'Authorization': self.token()},
                        success: function (people) {
                          
                            // alert(JSON.stringify(employees));
                            self.rejecteddata(employees);
                            
                           
                            if (people === "0") {
                                console.log(people);
                                document.getElementById("page5").style.display = "none";
                                document.getElementById("d4").style.display = "block";
                            } else {

                                var employees = people[1].body;
                                self.rejecteddata(employees);
                                 // console.log(JSON.stringify(people[1].body.length));
                                 
                            }
                        }
                    });

                  //  this.dataSource4 = new oj.ArrayTableDataSource(self.rejecteddata, {idAttribute: "notificationId"});
                };

                //self.likedata=ko.observableArray();


                self.likesDataArray = ko.observable();
                self.library6 = function (data) {
//alert();
                    document.getElementById("tabsn-1").style.display = "none";
                    document.getElementById("tabsn-2").style.display = "none";
                    document.getElementById("tabsn-3").style.display = "none";
                    document.getElementById("tabsn-4").style.display = "none";
                    document.getElementById("tabsn-5").style.display = "block";


                    self.like1data = {
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

                    self.tasksURI = "https://192.168.0.116:8243/anz_likesProfiles_operations/1.0/favouriteSearchDetails";
                    self.serviceCall(self.tasksURI, 'POST', self.like1data).done(function (people) {
                       // alert();
                       // alert(people);
                       // console.log(JSON.stringify(people[0].body.favouriteData));
                       
                        var employees = people[0].body.favouriteData;
                        self.likedata(employees);
                       // console.log(JSON.stringify(self.likedata()));
                        self.dataSource5(new oj.ArrayTableDataSource(self.likedata(), {idAttribute: "userRef"}));
                        self.likesDataArray("success");

                    });

                };


                Date.prototype.yyyymmddhhmmss = function () {
                    var yyyy = this.getFullYear().toString();
                    var MM = (this.getMonth() + 1).toString(); // getMonth() is zero-based
                    var dd = this.getDate().toString();
                    var hh = this.getHours().toString();
                    var mm = this.getMinutes().toString();
                    var ss = this.getSeconds().toString();
                    return yyyy + '-' + (MM[1] ? MM : "0" + MM[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + '-' + (hh[1] ? hh : "0" + hh[0]) + ':' + (mm[1] ? mm : "0" + mm[0]) + ':' + (ss[1] ? ss : "0" + ss[0]);
                };
                var requestedOn = new Date().yyyymmddhhmmss();

//alert(requestedOn);

                this.selectedItem = ko.observable("Invitations");

                self.showdata = function (item) {
                };
               
                this.dataSource1 = new oj.ArrayTableDataSource(self.waitingdata, {idAttribute: "notificationId"});

                this.dataSource4 = new oj.ArrayTableDataSource(self.rejecteddata, {idAttribute: "notificationId"});
               

                this.dataSource3 = new oj.ArrayTableDataSource(self.sentdata, {idAttribute: "notificationId"});

                this.dataSource2 = new oj.ArrayTableDataSource(self.accepteddata, {idAttribute: "notificationId"});
        
                // **** button function for Accepted *******
                // **** button function for approving privacy settings *******

                self.addData = function (ui) {
                    self.selecteditem(ui.notificationData);
                    self.selecteditem(ui.notificationFrom);
                    self.selecteditem(ui.requestedOn);
                    console.log(ui.notificationId);
                    var id = ui.notificationId;
                  //  alert(id);
                    var id2 = id.slice(0, -1) + 's';
                  //  alert(id2);
                    
                    
                    
                    self.notData(ui.notificationData);
                    self.notFrom(ui.notificationFrom);
                    self.notCreated(ui.requestedOn);
                    //self.notificationFrom = ko.observable(mobileNo);
                    self.jsonbody =
                            {
                                "header": {
                                    "guid": "aa",
                                    "geoLocation": "aa",
                                    "statusCode": "0",
                                    "status": "success",
                                    "requestedOn": requestedOn
                                },
                                "body": {
                                    requestedOn: requestedOn,
                                    notificationData: ui.notificationData,
                                    notificationFrom: ui.notificationFrom,
                                    notificationTo: ui.notificationTo,
                                    notificationFor: ui.notificationFor,
                                    modifiedOn: ui.notificationFor
//                        notificationId: ui.notificationId,
//                        status: "Accepted"
                                }
                            };

                    //  alert(ko.toJSON(self.jsonbody));


                    // **** post operation for Accept*****
                    // self.tasksURI =  globalVM.environment().approvingNotification;
                       self.tasksURI = globalVM.environment().approvingNotification;
                  //  self.tasksURI = "https://192.168.0.116:8243/anz_user_notification/1.0/approvingNotification";
                    self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {
                      //  alert("INVITATION IS Approved");

                    });


                    self.jsonbody11 =
                            {
                                "header": {
                                    "guid": "aa",
                                    "geoLocation": "aa",
                                    "statusCode": "0",
                                    "status": "success",
                                    "requestedOn": requestedOn


                                },
                                "body": {
                                    requestedOn: requestedOn,
                                    notificationData: ui.notificationData,
                                    notificationFrom: ui.notificationTo,
                                    notificationTo: ui.notificationFrom,
                                    notificationFor: ui.modifiedOn,
                                    modifiedOn: ui.notificationFor,
                                    notificationId: ui.notificationId,
                                    status: "Accepted"
                                }
                            };
                           // alert(notificationId);
                   // alert(ko.toJSON(self.jsonbody11));
//                   
                    ////////******post operation for Approving privacy settings**********///////////
                    self.tasksURI = globalVM.environment().createnotification;
                    self.serviceCall(self.tasksURI, 'POST', self.jsonbody11).done(function (data) {

                        //   alert("INVITATION IS posted");

                    });
                    self.jsonbody111 =
                            {
                                "header": {
                                    "guid": "aa",
                                    "geoLocation": "aa",
                                    "statusCode": "0",
                                    "status": "success",
                                    "requestedOn": requestedOn


                                },
                                "body": {
                                    requestedOn: requestedOn,
                                    notificationData: ui.notificationData,
                                    notificationFrom: ui.notificationTo,
                                    notificationTo: ui.notificationFrom,
                                    notificationFor: ui.modifiedOn,
                                    modifiedOn: ui.notificationFor,
                                    notificationId: id2,
                                    status: "Approved"
                                }
                            };
                  //  alert(ko.toJSON(self.jsonbody111));
                    ////////******post operation for Approving privacy settings**********///////////
                    self.tasksURI = globalVM.environment().createnotification;
                    self.serviceCall(self.tasksURI, 'POST', self.jsonbody111).done(function (data) {

                         //  alert("INVITATION IS Approved");

                    });
                };


                // **** button function for Rejected *******


                self.removeData = function (ui) {
                    self.selecteditem(ui.notificationData);
                    console.log(ui.notificationData);
                    self.notData(ui.notificationData);

                    self.jsonbody =
                            {
                                "header": {
                                    "guid": "aa",
                                    "geoLocation": "aa",
                                    "statusCode": "0",
                                    "status": "success",
                                    "requestedOn": requestedOn


                                },
                                "body": {
                                    requestedOn: requestedOn,
                                    notificationData: ui.notificationData,
                                    notificationFrom: ui.notificationTo,
                                    notificationTo: ui.notificationFrom,
                                    notificationFor: ui.modifiedOn,
                                    modifiedOn: ui.notificationFor,
                                    notificationId: ui.notificationId,
                                    "status": "Rejected"
                                }
                            };

                    // **** post operation*****

                    self.tasksURI = globalVM.environment().createnotification;
                    self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {

//                        alert("INVITATION IS Rejected");

                    });
                };

                // **** button function for Rejected *******
                self.canselData = function (ui) {
                    self.selecteditem(ui.notificationData);
                    console.log(ui.notificationData);
                    self.notData(ui.notificationData);

                    // console.log(self.notData());
//                    alert(self.notData());
                    // ***** creating json body for updating *****   

                    //self.notificationFrom = ko.observable(mobileNo);
                    self.jsonbody =
                            {
                                "header": {
                                    "guid": "",
                                    "geoLocation": "",
                                    "statusCode": "0",
                                    "status": "success",
                                    "requestedOn": ""


                                },
                                "body": {

                                    "notificationData": ui.notificationData,
                                    "notificationFor": " ui.notificationFor",
                                    "notificationFrom": ui.notificationFrom,
                                    "createdOn": requestedOn,
                                    "notificationTo": ui.notificationTo,
                                    "notificationId": ui.notificationId,
                                    "status": "cansel"
                                }
                            };
                    //alert(ko.toJSON(self.jsonbody));
                    // $(this).parents('.hell').eq(1).remove(); 
                    // **** post operation*****

                    self.tasksURI = globalVM.environment().createnotification;
                    self.serviceCall(self.tasksURI, 'POST', self.jsonbody).done(function (data) {
//                        alert("INVITATION IS Cansel");
                    });
                };

                ////////*******Service call function************************************/////////

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
                            console.log("ajax error " + jqXHR.status);
                        }
                    };
                    return $.ajax(request);
                };
                $(document).on('click', "#aa", function () {

                    $(this).closest('.check').remove();

                });



//=========================incidents=============================
 self.basicinfo=ko.observable(true); 
//      self.Vismovies=ko.observable(true);  
//     self.Vishobbie=ko.observable(true);
//     self.VisMusic=ko.observable(true);
//       self.VisBooks=ko.observable(true);
//     self.VisSports=ko.observable(true);
//       self.VisSmoke=ko.observable(true);
//     self.VisDiet=ko.observable(true);
//       self.VisDrink=ko.observable(true);
//     self.Visreligion=ko.observable(true);
//      self.Visintrests=ko.observable(true);
//     self.communitydisplay(false);

 
 
 
 
   
self.communitydisplay=ko.observable(true);
   self.communitynotdisply=ko.observable(false);
   
    self.drinknotvisible=ko.observable(false);
   self.drinkvisible=ko.observable(true);
   
   
     self.foodnotvisible=ko.observable(false);
   self.foodvisible=ko.observable(true);
   
     self.fullName=ko.observable();
//      self.comle =ko.observable(false);
//        self.imgle=ko.observable(false);
            self.basicinfo;
        self.matchPercent=ko.observable('0');
        self.match=ko.observable('0');
        self.largeScreen=ko.observable(true);
        self.total=ko.observable('0');
                     var arrdata;
                     
                   self.totalmatch=ko.observable(true);
  self.totalvisible=ko.observable(true);
  
     self.mobileopt=ko.observable();
      self.twitteropt=ko.observable();
       self.fbopt=ko.observable();
        self.linkedinopt=ko.observable();
      self.homephonept=ko.observable();
      self.emailopt=ko.observable();
       self.ageopt=ko.observable();
        self.heightopt=ko.observable();
       self.body =ko.observable();
       self.firstopt =ko.observable();
         self.lastopt =ko.observable();
        self.drinkopt=ko.observable();
        self.foodopt=ko.observable();
       self.religionopt=ko.observable();
       self.communityopt=ko.observable();
       self.genderopt=ko.observable();
       self.dobopt=ko.observable();
       self.maritalopt=ko.observable();
       self.mothertongueopt=ko.observable();
        self.bodyopt=ko.observable();
       self.skinopt=ko.observable();
       self.weightopt=ko.observable();
       self.smokeopt=ko.observable();
        self.workingasopt=ko.observable();
       self.workingwithopt=ko.observable();
        self.hobbiesopt=ko.observable();
       self.booksopt=ko.observable();
       self.sportsopt=ko.observable();
        self.musicopt=ko.observable();
       self.movieopt=ko.observable();
       self.interestsopt=ko.observable();
       
       
       
        self.annualopt=ko.observable();
       self.workingtypeopt =ko.observable();
         self.educatonopt =ko.observable();
        self.collegeopt=ko.observable();
        self.nativeopt=ko.observable();
       self.cityopt=ko.observable();
       self.stateopt=ko.observable();
       self.countryopt=ko.observable();
       self.workinglocationopt=ko.observable();
       self.gothraopt=ko.observable();
       self.zodiacopt=ko.observable();
        self.mothertongueopt=ko.observable();
       self.fatheropt=ko.observable();
       self.motheropt=ko.observable();
       self.sblingsopt=ko.observable();
      self.workingasopt=ko.observable();
      self.workingwithopt=ko.observable();
        self.hobbiesopt=ko.observable();
       self.booksopt=ko.observable();
       self.sportsopt=ko.observable();
        self.musicopt=ko.observable();
       self.movieopt=ko.observable();
       self.interestsopt=ko.observable();
       
       
       
       
       
       
       
       
       
       
       
       
       self.mobileopttext=ko.observable("NA");
       self.twitteropttext=ko.observable("NA");
       self.fbopttext=ko.observable("NA");
       self.linkedinopttext=ko.observable("NA");
        self.homephonepttext=ko.observable("NA");
       self.emailopttext=ko.observable("NA");
        self.ageopttext=ko.observable("NA");
       self.heightopttext=ko.observable("NA");
        self.bodyopttext=ko.observable("NA");
       self.firstopttext=ko.observable("NA");
        self.lastopttext=ko.observable("NA");
       self.drinkopttext=ko.observable("NA");
        self.smokeopttext=ko.observable("NA");
       self.weightopttext=ko.observable("NA");
        self.foodopttext=ko.observable("NA");
       self.religionopt=ko.observable("NA");
        self.communityopttext=ko.observable("NA");
       self.genderopttext=ko.observable("NA");
        self.dobopttext=ko.observable("NA");
       self.maritalopttext=ko.observable("NA");
        self.mothertongueopttext=ko.observable("NA");
       self.bodyopttext=ko.observable("NA");
        self.skinopttext=ko.observable("NA");
       self.workingasopttext=ko.observable("NA");
        self.workingwithopttext=ko.observable("NA");
       self.hobbiesopttext=ko.observable("NA");
        self.booksopttext=ko.observable("NA");
       self.sportsopttext=ko.observable("NA");
        self.musicopttext=ko.observable("NA");
       self.movieopttext=ko.observable("NA");
        self.interestsopttext=ko.observable("NA");
       
       self.letter=ko.observable();
       self.religion=ko.observableArray();
       self.community=ko.observableArray();
       self.comletter=ko.observable('NA');
       
       	self.annualopttext=ko.observable("NA");
	self.workingtypeopttext=ko.observable("NA");
         self.educatonopttext=ko.observable("NA");
        self.collegeopttext=ko.observable("NA");
        self.nativeopttext=ko.observable("NA");
       self.cityopttext=ko.observable("NA");
       self.stateopttext=ko.observable("NA");
       self.countryopttext=ko.observable("NA");
       self.workinglocationopttext=ko.observable("NA");
       self.gothraopttext=ko.observable("NA");
       self.zodiacopttext=ko.observable("NA");
        self.mothertongueopttext=ko.observable("NA");
       self.fatheropttext=ko.observable("NA");
       self.motheropttext=ko.observable("NA");
       self.sblingsopttext=ko.observable("NA");
	   
	   
	   
        self.workingasopttext=ko.observable("NA");
       self.workingwithopttext=ko.observable("NA");
        self.hobbiesopttext=ko.observable("NA");
       self.booksopttext=ko.observable("NA");
       self.sportsopttext=ko.observable("NA");
        self.musicopttext=ko.observable("NA");
       self.movieopttext=ko.observable("NA");
       self.interestsopttext=ko.observable("NA");
       
       
        jQuery(window).resize(function() {
  if (jQuery(window).width() < 450) {

 // alert("450");
 
  // document.getElementById('userprofileid').style.display = 'none';
   document.getElementById('profileid').style.display = 'none';
   
   
   //document.getElementById('iphonediv').style.display = 'block';
   document.getElementById('largediv').style.display = 'none';
//    document.getElementById('mode-2').style.display = 'block';
//   document.getElementById('mode-1').style.display = 'none';
  }
 else if (jQuery(window).width() < 960) {

//    document.getElementById('mode-1').style.display = 'block';
//   document.getElementById('mode-2').style.display = 'none';
    // alert("960");
   
   // document.getElementById('userprofileid').style.display = 'block';
   document.getElementById('profileid').style.display = 'none';
      //document.getElementById('iphonediv').style.display = 'block';
   document.getElementById('largediv').style.display = 'none';
  }
 else {
   
     // document.getElementById('userprofileid').style.display = 'none';
   document.getElementById('profileid').style.display = 'block';
   
      //document.getElementById('iphonediv').style.display = 'none';
   document.getElementById('largediv').style.display = 'block';
//      document.getElementById('mode-2').style.display = 'none';
//   document.getElementById('mode-1').style.display = 'block';
 }
});
        
       
     // self.userRef=ko.observableArray(["suresh33@4620171828122"]);  
    //.self.searchUserRef = ko.observableArray(["ramvarma@4620171936978"]);
   
    self.requestedFrom=ko.observable("elastic");
    self.requstedOn=ko.observable("22");
      self.guid=ko.observable("320");
       self.geoLocation=ko.observable("1233");
                self.rdata = ko.observableArray();
              
       self.notUserRef=ko.observable();
        
        
        self.addData1 = function (ui) {
                         document.getElementById("hide").style.display = "none";
             self.notUserRef = ko.observable(ui.userRef);
         // alert(JSON.stringify(self.notUserRef));
          
           document.getElementById("tabs-2").style.display = "block";
       self.queryParams = {
                    "searchUserRef": ui.notificationFrom,
                    
                    "userRef": sessionStorage.getItem("userRef"),
                    "requstedOn": "xyz",
                    "requestedFrom": "xyz",
                      "guid"  :"xyz",
                      "geoLocation":"xyz"
                };
               
                 // alert(ko.toJSON(self.queryParams.searchUserRef));
                  self.user=self.queryParams.searchUserRef;
               //   alert("user");
                //  alert(self.user);
            // console.log(ko.toJSON(self.queryParams));
             
                    $.ajax({
                           url: 'https://192.168.0.116:8243/privacydetailsop/1.0/getprivacyinfo' + '?' + $.param({
                               "searchUserRef": ui.notificationFrom,
                    "userRef": sessionStorage.getItem("userRef"),
                    "requstedOn": "xyz",
                    "requestedFrom": "xyz",
                      "guid"  :"xyz",
                      "geoLocation":"xyz"
                           }),
                           dataType: 'json',
                           headers: {
                   // key value pair of headers
                   'Authorization': self.token()
               },
           success: function (getdata) {
             
              console.log(getdata);
                            console.log(getdata[1].body.length);
                             arrdata = getdata;
                             
                             if(getdata[1].body.annualIncome&&getdata[1].body.annualIncome!=='null'){
                                
                                    self.annualopt(getdata[1].body.annualIncome);
                                       }
                                  else{
                             
                                         self.annualopt(self.annualopttext());
                                          }    
                                          
                                        
                           if(getdata[1].body.workingType&&getdata[1].body.workingType!=='null'){
                                
                                     self.workingtypeopt(getdata[1].body.workingType);
                                       }
                                  else{
                              self.workingtypeopt(self.workingtypeopttext());

                                          }    
                                                          
                              if(getdata[1].body.highestEducation&&getdata[1].body.highestEducation!=='null'){
                                
                                 self.educatonopt(getdata[1].body.highestEducation);
                                       }
                                  else{
                               self.educatonopt(self.educatonopttext());

                                          }    
                                                       
                              if(getdata[1].body.college&&getdata[1].body.college!=='null'){
                                
                                   self.collegeopt(getdata[1].body.college);
                                       }
                                  else{
                             self.collegeopt(self.collegeopttext());

                                          }    
                                                       
                                          
                             if(getdata[1].body.zodiacSign&&getdata[1].body.zodiacSign!=='null'){
                                 
                                 self.zodiacopt(getdata[1].body.zodiacSign);
                                       }
                                  else{
                              
                                  self.zodiacopt(self.zodiacopttext());
                                          }    
                                                        
                                          
                              if(getdata[1].body.gothra&&getdata[1].body.gothra!=='null'){
                                
                                     self.gothraopt(getdata[1].body.gothra);
                                       }
                                  else{
                             
                                     self.gothraopt(self.gothraopttext());
                                          }    
                                                       
                                          
                                          
                             if(getdata[1].body.sibblings&&getdata[1].body.sibblings!=='null'){
                                 
                                 
                                     self.sblingsopt(getdata[1].body.sibblings);
                                       }
                                  else{
                             self.sblingsopt(self.sblingsopttext());

                                          }    
                                                        
                                          
                             if(getdata[1].body.nativePlace&&getdata[1].body.nativePlace!=='null'){
                                
                                     self.nativeopt(getdata[1].body.nativePlace);
                                       }
                                  else{
                              self.nativeopt(self.nativeopttext());

                                          }    
                                                        
                                          
                              if(getdata[1].body.motherStatus&&getdata[1].body.motherStatus!=='null'){
                                 
                                         self.motheropt(getdata[1].body.motherStatus);
                                       }
                                  else{
                             
                                        self.motheropt(self.motheropttext());
                                          }    
                                                       
                                          
                             if(getdata[1].body.fatherStatus&&getdata[1].body.fatherStatus!=='null'){
                                
                                     self.fatheropt(getdata[1].body.fatherStatus);
                                       }
                                  else{
                             
                                         self.fatheropt(self.fatheropttext());
                                          }    
                                                        
                                          
                             if(getdata[1].body.workingLocation&&getdata[1].body.workingLocation!=='null'){
                               
                                     self.workinglocationopt(getdata[1].body.workingLocation);
                                       }
                                  else{
                             
                                      self.workinglocationopt(self.workinglocationopttext());
                                          }    
                                                        
                             
                              if(getdata[1].body.city&&getdata[1].body.city!=='null'){
                                
                                      self.cityopt(getdata[1].body.city);
                                       }
                                  else{
                            
                                         self.cityopt(self.cityopttext());
                                          }    
                             
                              if(getdata[1].body.state&&getdata[1].body.state!=='null'){
                                
                                     self.stateopt(getdata[1].body.state);
                                       }
                                  else{
                              self.stateopt(self.stateopttext());

                                          }    
                              if(getdata[1].body.country&&getdata[1].body.country!=='null'){
                                
                                        self.countryopt(getdata[1].body.country);
                                       }
                                  else{
                               self.countryopt(self.countryopttext());

                                          }  
                                           if(getdata[1].body.motherTongue&&getdata[1].body.motherTongue!=='null'){
                                
                                         self.mothertongueopt(getdata[1].body.motherTongue);
                                       }
                                  else{
                             
                                         self.mothertongueopt(self.mothertongueopttext());
                                          }  
                             
                    
                             
                              if(getdata[1].body.mobilePhone&&getdata[1].body.mobilePhone!=='null'){
                                 
                                  self.mobileopt(getdata[1].body.mobilePhone);
                                       }
                                  else{
                              
                                    self.mobileopt(self.mobileopttext());
                                          }    
                                          
                                        
                           if(getdata[1].body.twitterId&&getdata[1].body.twitterId!=='null'){
                                 
                                     self.twitteropt(getdata[1].body.twitterId);
                                       }
                                  else{
                             
                                        self.twitteropt(self.twitteropttext());
                                          }    
                                                          
                              if(getdata[1].body.fbId&&getdata[1].body.fbId!=='null'){
                                 
                                    self.fbopt(getdata[1].body.fbId);
                                       }
                                  else{
                              self.fbopt(self.fbopttext());

                                          }    
                                                       
                              if(getdata[1].body.linkedinId&&getdata[1].body.linkedinId!=='null'){
                                 
                                      self.linkedinopt(getdata[1].body.linkedinId);

                                       }
                                  else{
                            self.linkedinopt(self.linkedinopttext());
                                          }    
                                                       
                                          
                             if(getdata[1].body.homePhone&&getdata[1].body.homePhone!=='null'){
                              
                                     self.homephonept(getdata[1].body.homePhone);
                                       }
                                  else{
                                self.homephonept(self.homephonepttext());

                                          }    
                                                        
                                          
                              if(getdata[1].body.emailId&&getdata[1].body.emailId!=='null'){
                                
                                    self.emailopt(getdata[1].body.emailId);
                                       }
                                  else{
                                       self.emailopt(self.emailopttext());

                                          }    
                                                       
                                          
                                          
                             if(getdata[1].body.firstName&&getdata[1].body.firstName!=='null'){
                                 
                                
                                  self.firstopt(getdata[1].body.firstName);
                                       }
                                  else{
                              self.firstopt(self.firstopttext());

                                          }    
                                                        
                                          
                             if(getdata[1].body.lastName&&getdata[1].body.lastName!=='null'){
                                
                                   self.lastopt(getdata[1].body.lastName);
                                       }
                                  else{
                            
                                     self.lastopt(self.lastopttext());
                                          }    
                                                        
                                          
                              if(getdata[1].body.age&&getdata[1].body.age!=='null'){
                                
                                    self.ageopt(getdata[1].body.age);
                                       }
                                  else{
                              
                                     self.ageopt(self.ageopttext());
                                          }    
                                                       
                                          
                             if(getdata[1].body.height&&getdata[1].body.height!=='null'){
                                
                                     self.heightopt(getdata[1].body.height);
                                       }
                                  else{
                              self.heightopt(self.heightopttext());

                                          }    
                                                        
                                          
                             if(getdata[1].body.drink&&getdata[1].body.drink!=='null'){
                               
                                     self.drinkopt(getdata[1].body.drink);
                                       }
                                  else{
                               self.drinkopt(self.drinkopttext());

                                          }    
                                                        
                                          
                                          
                             if(getdata[1].body.diet&&getdata[1].body.diet!=='null'){
                                
                                     self.foodopt(getdata[1].body.diet);
                                       }
                                  else{
                              self.foodopt(self.foodopttext());

                                          }    
                                                        
                                          
                                          
                             if(getdata[1].body.religion&&getdata[1].body.religion!=='null'){
                                
                                   self.religionopt(getdata[1].body.religion);
                                       }
                                  else{
                             self.religionopt(self.religionopttext());

                                          }    
                                                        
                            if(getdata[1].body.community&&getdata[1].body.community!=='null'){
                                  
                                  self.communityopt(getdata[1].body.community);
        // alert(getdata[1].body.community);
                                       }
                                  else{
                                     // alert();
                                      self.communityopt(self.communityopttext());
                             

                                         }    
                              if(getdata[1].body.gender&&getdata[1].body.gender!=='null'){
                                 
                                    self.genderopt(getdata[1].body.gender);
                                       }
                                  else{
                              self.genderopt(self.gendropttext());

                                          }    
                                                       
                                                              
                              if(getdata[1].body.dob&&getdata[1].body.dob!=='null'){
                               
                                  self.dobopt(getdata[1].body.dob);
                                       }
                                  else{
                             
                                      self.dobopt(self.dobopttext());
                                          }    
                                          
                                                                   
                              if(getdata[1].body.maritalStatus&&getdata[1].body.maritalStatus!=='null'){
                               
                                     self.maritalopt(getdata[1].body.maritalStatus);
                                       }
                                  else{
                               self.maritalopt(self.maritalopttext());

                                          }    
                                          
                                                            
                              if(getdata[1].body.motherTongue&&getdata[1].body.motherTongue!=='null'){
                               
                                     self.mothertongueopt(getdata[1].body.motherTongue);
                                       }
                                  else{
                               self.mothertongueopt(self.mothertongueopttext());

                                          }          
                                          
                                 
                                                     
                              if(getdata[1].body.bodyType&&getdata[1].body.bodyType!=='null'){
                                
                                     self.bodyopt(getdata[1].body.bodyType);
                                       }
                                  else{
                             
                                     self.bodyopt(self.bodyopttext());
                                          }    
               
               
                                                      
                              if(getdata[1].body.skinTone&&getdata[1].body.skinTone!=='null'){
                                
                                         self.skinopt(getdata[1].body.skinTone);
                                       }
                                  else{
                             
                                         self.skinopt(self.skinopttext());
                                          }    
               
               
               
                                                     
                              if(getdata[1].body.weight&&getdata[1].body.weight!=='null'){
                                
                                     self.weightopt(getdata[1].body.weight);
                                       }
                                  else{
                                       self.weightopt(self.weightopttext());

                                          }    
               
               
                                                       
                              if(getdata[1].body.smoke&&getdata[1].body.smoke!=='null'){
                                 
                                     self.smokeopt(getdata[1].body.smoke);
                                       }
                                  else{
                             self.smokeopt(self.smokeopttext());

                                          }    
               
               
               
               
               
                                                        
                              if(getdata[1].body.workingAs&&getdata[1].body.workingAs!=='null'){
                                 
                                     self.workingasopt(getdata[1].body.workingAs);
                                       }
                                  else{
                             
                                  self.workingasopt(self.workingasopttext());
                                          }    
               
               
                                                     
                              if(getdata[1].body.workingOrganization&&getdata[1].body.workingOrganization!=='null'){
                                
                                     self.workingwithopt(getdata[1].body.workingOrganization);
                                       }
                                  else{
                              self.workingwithopt(self.workingwithopttext());

                                          }    
               
               
            
                                                     
                              if(getdata[1].body.favouriteBooks&&getdata[1].body.favouriteBooks!=='null'){
                                
                                     self.booksopt(getdata[1].body.favouriteBooks);
                                       }
                                  else{
                              self.booksopt(self.booksopttext());

                                          }    
               
               
                                                      
                              if(getdata[1].body.hobbies&&getdata[1].body.hobbies!=='null'){
                                
                                      self.hobbiesopt(getdata[1].body.hobbies);
                                       }
                                  else{
                             self.hobbiesopt(self.hobbiesopttext());

                                          }    
                                          
                                          
                                                       
                              if(getdata[1].body.interests&&getdata[1].body.interests!=='null'){
                                
                                     self.interestsopt(getdata[1].body.interests);
                                       }
                                  else{
                              self.interestsopt(self.interestsopttext());

                                          }                
                                          
                                                        
                              if(getdata[1].body.favouriteMovies&&getdata[1].body.favouriteMovies!=='null'){
                                
                                     self.movieopt(getdata[1].body.favouriteMovies);
                                       }
                                  else{
                              self.movieopt(self.movieopttext());

                                          }               
                                          
                                                      
                              if(getdata[1].body.favouriteMusic&&getdata[1].body.favouriteMusic!=='null'){
                                 
                                   self.musicopt(getdata[1].body.favouriteMusic);
                                       }
                                  else{
                            
                                    self.musicopt(self.musicopttext());
                                          }                 
                                          
                                          
                                          
                                                      
                              if(getdata[1].body.favouriteSports&&getdata[1].body.favouriteSports!=='null'){
                                
                                    self.sportsopt(getdata[1].body.favouriteSports);
                                       }
                                  else{
                               self.sportsopt(self.sportsopttext());

                                          }                 
                                          
                            
                            
                             self.mphone=getdata[1].body.mobilePhone;
                           self.tId=getdata[1].body.twitterId;
                           self.fId=getdata[1].body.fbId;
                           self.lId=getdata[1].body.linkedinId;
                           self.hPhone=getdata[1].body.homePhone;
                           self.eId=getdata[1].body.emailId;
                          // alert(getdata[1].body.userRef);
                           self.fName=getdata[1].body.firstName;
                         self.lName=getdata[1].body.lastName;
                            
                            self.rdata(arrdata);
                            rdata = JSON.stringify(arrdata);
                           // alert(rdata);
                            
  if(self.foodopt()==='Vegetarian'){
   document.getElementById('nonvegimage').style.display = 'none';
   document.getElementById('vegimage').style.display = 'block';
   document.getElementById('imagedrink3').style.display = 'none';
     self.foodnotvisible(false);
   self.foodvisible(true);
}
      else{
    document.getElementById('vegimage').style.display = 'none';
    document.getElementById('nonvegimage').style.display = 'block';
    document.getElementById('imagedrink3').style.display = 'none';
  self.foodnotvisible(false);
   self.foodvisible(true);
}
              
    if(self.drinkopt()==='No'){
   document.getElementById('nonimagedrink').style.display = 'block';
   document.getElementById('imagedrink').style.display = 'none';
    document.getElementById('imagedrink2').style.display = 'none';
      self.drinknotvisible(false);
   self.drinkvisible(true);
    
}else{
    document.getElementById('imagedrink').style.display = 'block';
    document.getElementById('nonimagedrink').style.display = 'none';
     document.getElementById('imagedrink2').style.display = 'none';
       self.drinknotvisible(false);
   self.drinkvisible(true);
}

if(self.foodopt()==='NA'){
   document.getElementById('imagedrink3').style.display = 'block';
   document.getElementById('nonvegimage').style.display = 'none';
   document.getElementById('vegimage').style.display = 'none';
   self.foodnotvisible(true);
   self.foodvisible(false);
}


if(self.drinkopt()==='NA'){
   document.getElementById('imagedrink2').style.display = 'block';
   document.getElementById('imagedrink').style.display = 'none';
   document.getElementById('nonimagedrink').style.display = 'none';
     self.drinkvisible(false);
   self.drinknotvisible(true);
}


 self.religion=self.religionopt();
 self.letter(self.religion[0]);
 self.community=self.communityopt();
 //alert(self.communityopt());
// self.comletter(self.community[0]);
 if(self.communityopt()!=='NA'){
     //alert("yes");
    self.comletter(self.community[0]);
     self.communitydisplay(true);
   self.communitynotdisply(false);
 }else{
    
   self.comletter("NA");
   self.communityopt("community");
    self.communitydisplay(false);
   self.communitynotdisply(true);
    //alert(self.comletter());
 }
//declaring fullname
 self.fullName(self.firstopt() +' '+ self.lastopt());
//declaring variables for match
   self.match=ko.observable(0);
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

      
      
 if(self.U1hobbies()===self.hobbiesopt()){
          self.match(self.match()+ 1);
   self.hobbiesStatus(true);
   self.hobbieserror(false);
     
      //alert(self.U1hobbies())
  }else if (self.U1hobbies()==='undefined'){
      self.U1hobbies('NA');
      self.hobbieserror(true);
  };
  
  
 
    if(self.U1intrests()===self.interestsopt()){
          self.match( self.match()+1);
     self.intreststatus(true);
     self.intresterror(false);
    
  }else if (self.U1intrests()==='undefined'){
        
           self.U1intrests('NA');
       self.intresterror(true);
                                       
  };
  
  if(self.U1diet()===self.foodopt()){
          self.match( self.match()+1);
          self.foodstatus(true);
          self.fooderror(false);
         // alert(self.U1diet());

  }else if (self.U1diet()==='undefined'){
        
           self.U1diet('NA');
       self.fooderror(true);
                                       
  };
  if(self.U1drink()===self.drinkopt()){
          self.match(self.match()+ 1);
self.drinkstatus(true);
self.drinkerror(false);
  }else if (self.U1drink()==='undefined'){
      
           self.U1drink('NA');
       self.drinkerror(true);
  };
  
  
    if(self.U1smoke()===self.smokeopt()){
          self.match( self.match()+1);
           self.smokestatus(true);
self.smokeerror(false);
  }else if (self.U1smoke()==='undefined'){
      
           self.U1smoke('NA');
       self.smokeerror(true);
  };
  
  if(self.U1favMusic()===self.musicopt()){
          self.match( self.match()+1);
          self.Musicstatus(true);
          self.Musicerror(false);

  }else if (self.U1favMusic()==='undefined'){
      
           self.U1favMusic('NA');
       self.Musicerror(true);
  };
  if(self.U1favBook()===self.booksopt()){
          self.match(self.match()+ 1);
          self.bookstatus(true);
          self.bookerror(false);
  }else if (self.U1favBook()==='undefined'){
      
           self.U1favBook('NA');
       self.bookerror(true);
  };
  
    if(self.U1favSports()===self.sportsopt()){
          self.match( self.match()+1);
self.sportsstatus(true);
self.sportserror(false);
  }else if (self.U1favSports()==='undefined'){
      
           self.U1favSports('NA');
       self.sportserror(true);
  };
  
  if(self.U1religion()===self.religionopt()){
          self.match( self.match()+1);
self.religionstatus(true);
self.religionerror(false);
  }else if (self.U1religion()==='undefined'){
     
     
           self.U1religion('NA');
       self.religionerror(true);
  };
 if(self.U1movies()===self.movieopt()){
          self.match( self.match()+1);
self.moviestatus(true);
self.movieerror(false);
  }else if (self.U1movies()==='undefined'){
      
           self.U1movies('NA');
       self.movieerror(true);
  };

if (self.match() > 0) {
        
                   
    self.total(self.match());
    self.matchPercent(Math.round(self.match()/10*100)+'%');
    //alert(self.matchPercent());
}else{
     
     self.matchPercent('0');
        self.total('0');
self.totalvisible(true);
     self.totalmatch(true);
}
             
             
             }
             
             
           });
           
          
            self.emselfployees=ko.observableArray();
             self.employees=ko.observableArray();
              self.fuser=ko.observable();           
              
              
              
               $.ajax({
                               url: globalVM.environment().getSentNotifications + '?' + $.param({notificationTo: self.userRef}),

                               dataType: 'json',
                               headers: {

                                   'Authorization': 'Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed'},
                               success: function (people) {

                                   var employees = people[1].body;
                                   self.sentdata((employees));
//                                   alert(JSON.stringify(employees));
//                                   alert(employees.length);

                                       for(i=0;i<=people.length;i++){
                                           //alert(i);
                                           if (self.sentdata()[i].notificationFrom === ui.userRef && self.sentdata()[i].notificationData === "mobileNo" && self.sentdata()[i].status === 'sent') {
                                     
                                           //lert('mobileno');
                                           
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



           
           //self.notificationFrom=ko.observable();
         
         
           //this.fuser=ko.observable();
          
          
           
           
       
           
       };
            
        
        self.addData2 = function (ui) {
                         document.getElementById("hide").style.display = "none";
          self.notUserRef=ko.observable(ui.userRef);
           document.getElementById("tabs-2").style.display = "block";
       self.queryParams = {
                    "searchUserRef": ui.userRef,
                    "userRef": sessionStorage.getItem("userRef"),
                    "requstedOn": "xyz",
                    "requestedFrom": "xyz",
                      "guid"  :"xyz",
                      "geoLocation":"xyz"
                };
                //  alert(ko.toJSON(self.queryParams));
            // console.log(ko.toJSON(self.queryParams));
             
                    $.ajax({
                           url: 'https://192.168.0.116:8243/privacydetailsop/1.0/getprivacyinfo' + '?' + $.param({
                               "searchUserRef": ui.userRef,
                    "userRef": sessionStorage.getItem("userRef"),
                    "requstedOn": "xyz",
                    "requestedFrom": "xyz",
                      "guid"  :"xyz",
                      "geoLocation":"xyz"
                           }),
                           dataType: 'json',
                           headers: {
                   // key value pair of headers
                   'Authorization': self.token()
               },
           success: function (getdata) {
             
              console.log(getdata);
                            console.log(getdata[1].body.length);
                             arrdata = getdata;
                             
                             if(getdata[1].body.annualIncome&&getdata[1].body.annualIncome!=='null'){
                                
                                    self.annualopt(getdata[1].body.annualIncome);
                                       }
                                  else{
                             
                                         self.annualopt(self.annualopttext());
                                          }    
                                          
                                        
                           if(getdata[1].body.workingType&&getdata[1].body.workingType!=='null'){
                                
                                     self.workingtypeopt(getdata[1].body.workingType);
                                       }
                                  else{
                              self.workingtypeopt(self.workingtypeopttext());

                                          }    
                                                          
                              if(getdata[1].body.highestEducation&&getdata[1].body.highestEducation!=='null'){
                                
                                 self.educatonopt(getdata[1].body.highestEducation);
                                       }
                                  else{
                               self.educatonopt(self.educatonopttext());

                                          }    
                                                       
                              if(getdata[1].body.college&&getdata[1].body.college!=='null'){
                                
                                   self.collegeopt(getdata[1].body.college);
                                       }
                                  else{
                             self.collegeopt(self.collegeopttext());

                                          }    
                                                       
                                          
                             if(getdata[1].body.zodiacSign&&getdata[1].body.zodiacSign!=='null'){
                                 
                                 self.zodiacopt(getdata[1].body.zodiacSign);
                                       }
                                  else{
                              
                                  self.zodiacopt(self.zodiacopttext());
                                          }    
                                                        
                                          
                              if(getdata[1].body.gothra&&getdata[1].body.gothra!=='null'){
                                
                                     self.gothraopt(getdata[1].body.gothra);
                                       }
                                  else{
                             
                                     self.gothraopt(self.gothraopttext());
                                          }    
                                                       
                                          
                                          
                             if(getdata[1].body.sibblings&&getdata[1].body.sibblings!=='null'){
                                 
                                 
                                     self.sblingsopt(getdata[1].body.sibblings);
                                       }
                                  else{
                             self.sblingsopt(self.sblingsopttext());

                                          }    
                                                        
                                          
                             if(getdata[1].body.nativePlace&&getdata[1].body.nativePlace!=='null'){
                                
                                     self.nativeopt(getdata[1].body.nativePlace);
                                       }
                                  else{
                              self.nativeopt(self.nativeopttext());

                                          }    
                                                        
                                          
                              if(getdata[1].body.motherStatus&&getdata[1].body.motherStatus!=='null'){
                                 
                                         self.motheropt(getdata[1].body.motherStatus);
                                       }
                                  else{
                             
                                        self.motheropt(self.motheropttext());
                                          }    
                                                       
                                          
                             if(getdata[1].body.fatherStatus&&getdata[1].body.fatherStatus!=='null'){
                                
                                     self.fatheropt(getdata[1].body.fatherStatus);
                                       }
                                  else{
                             
                                         self.fatheropt(self.fatheropttext());
                                          }    
                                                        
                                          
                             if(getdata[1].body.workingLocation&&getdata[1].body.workingLocation!=='null'){
                               
                                     self.workinglocationopt(getdata[1].body.workingLocation);
                                       }
                                  else{
                             
                                      self.workinglocationopt(self.workinglocationopttext());
                                          }    
                                                        
                             
                              if(getdata[1].body.city&&getdata[1].body.city!=='null'){
                                
                                      self.cityopt(getdata[1].body.city);
                                       }
                                  else{
                            
                                         self.cityopt(self.cityopttext());
                                          }    
                             
                              if(getdata[1].body.state&&getdata[1].body.state!=='null'){
                                
                                     self.stateopt(getdata[1].body.state);
                                       }
                                  else{
                              self.stateopt(self.stateopttext());

                                          }    
                              if(getdata[1].body.country&&getdata[1].body.country!=='null'){
                                
                                        self.countryopt(getdata[1].body.country);
                                       }
                                  else{
                               self.countryopt(self.countryopttext());

                                          }  
                                           if(getdata[1].body.motherTongue&&getdata[1].body.motherTongue!=='null'){
                                
                                         self.mothertongueopt(getdata[1].body.motherTongue);
                                       }
                                  else{
                             
                                         self.mothertongueopt(self.mothertongueopttext());
                                          }  
                             
                    
                             
                              if(getdata[1].body.mobilePhone&&getdata[1].body.mobilePhone!=='null'){
                                 
                                  self.mobileopt(getdata[1].body.mobilePhone);
                                       }
                                  else{
                              
                                    self.mobileopt(self.mobileopttext());
                                          }    
                                          
                                        
                           if(getdata[1].body.twitterId&&getdata[1].body.twitterId!=='null'){
                                 
                                     self.twitteropt(getdata[1].body.twitterId);
                                       }
                                  else{
                             
                                        self.twitteropt(self.twitteropttext());
                                          }    
                                                          
                              if(getdata[1].body.fbId&&getdata[1].body.fbId!=='null'){
                                 
                                    self.fbopt(getdata[1].body.fbId);
                                       }
                                  else{
                              self.fbopt(self.fbopttext());

                                          }    
                                                       
                              if(getdata[1].body.linkedinId&&getdata[1].body.linkedinId!=='null'){
                                 
                                      self.linkedinopt(getdata[1].body.linkedinId);

                                       }
                                  else{
                            self.linkedinopt(self.linkedinopttext());
                                          }    
                                                       
                                          
                             if(getdata[1].body.homePhone&&getdata[1].body.homePhone!=='null'){
                              
                                     self.homephonept(getdata[1].body.homePhone);
                                       }
                                  else{
                                self.homephonept(self.homephonepttext());

                                          }    
                                                        
                                          
                              if(getdata[1].body.emailId&&getdata[1].body.emailId!=='null'){
                                
                                    self.emailopt(getdata[1].body.emailId);
                                       }
                                  else{
                                       self.emailopt(self.emailopttext());

                                          }    
                                                       
                                          
                                          
                             if(getdata[1].body.firstName&&getdata[1].body.firstName!=='null'){
                                 
                                
                                  self.firstopt(getdata[1].body.firstName);
                                       }
                                  else{
                              self.firstopt(self.firstopttext());

                                          }    
                                                        
                                          
                             if(getdata[1].body.lastName&&getdata[1].body.lastName!=='null'){
                                
                                   self.lastopt(getdata[1].body.lastName);
                                       }
                                  else{
                            
                                     self.lastopt(self.lastopttext());
                                          }    
                                                        
                                          
                              if(getdata[1].body.age&&getdata[1].body.age!=='null'){
                                
                                    self.ageopt(getdata[1].body.age);
                                       }
                                  else{
                              
                                     self.ageopt(self.ageopttext());
                                          }    
                                                       
                                          
                             if(getdata[1].body.height&&getdata[1].body.height!=='null'){
                                
                                     self.heightopt(getdata[1].body.height);
                                       }
                                  else{
                              self.heightopt(self.heightopttext());

                                          }    
                                                        
                                          
                             if(getdata[1].body.drink&&getdata[1].body.drink!=='null'){
                               
                                     self.drinkopt(getdata[1].body.drink);
                                       }
                                  else{
                               self.drinkopt(self.drinkopttext());

                                          }    
                                                        
                                          
                                          
                             if(getdata[1].body.diet&&getdata[1].body.diet!=='null'){
                                
                                     self.foodopt(getdata[1].body.diet);
                                       }
                                  else{
                              self.foodopt(self.foodopttext());

                                          }    
                                                        
                                          
                                          
                             if(getdata[1].body.religion&&getdata[1].body.religion!=='null'){
                                
                                   self.religionopt(getdata[1].body.religion);
                                       }
                                  else{
                             self.religionopt(self.religionopttext());

                                          }    
                                                        
                            if(getdata[1].body.community&&getdata[1].body.community!=='null'){
                                  
                                  self.communityopt(getdata[1].body.community);
        // alert(getdata[1].body.community);
                                       }
                                  else{
                                     // alert();
                                      self.communityopt(self.communityopttext());
                             

                                         }    
                              if(getdata[1].body.gender&&getdata[1].body.gender!=='null'){
                                 
                                    self.genderopt(getdata[1].body.gender);
                                       }
                                  else{
                              self.genderopt(self.gendropttext());

                                          }    
                                                       
                                                              
                              if(getdata[1].body.dob&&getdata[1].body.dob!=='null'){
                               
                                  self.dobopt(getdata[1].body.dob);
                                       }
                                  else{
                             
                                      self.dobopt(self.dobopttext());
                                          }    
                                          
                                                                   
                              if(getdata[1].body.maritalStatus&&getdata[1].body.maritalStatus!=='null'){
                               
                                     self.maritalopt(getdata[1].body.maritalStatus);
                                       }
                                  else{
                               self.maritalopt(self.maritalopttext());

                                          }    
                                          
                                                            
                              if(getdata[1].body.motherTongue&&getdata[1].body.motherTongue!=='null'){
                               
                                     self.mothertongueopt(getdata[1].body.motherTongue);
                                       }
                                  else{
                               self.mothertongueopt(self.mothertongueopttext());

                                          }          
                                          
                                 
                                                     
                              if(getdata[1].body.bodyType&&getdata[1].body.bodyType!=='null'){
                                
                                     self.bodyopt(getdata[1].body.bodyType);
                                       }
                                  else{
                             
                                     self.bodyopt(self.bodyopttext());
                                          }    
               
               
                                                      
                              if(getdata[1].body.skinTone&&getdata[1].body.skinTone!=='null'){
                                
                                         self.skinopt(getdata[1].body.skinTone);
                                       }
                                  else{
                             
                                         self.skinopt(self.skinopttext());
                                          }    
               
               
               
                                                     
                              if(getdata[1].body.weight&&getdata[1].body.weight!=='null'){
                                
                                     self.weightopt(getdata[1].body.weight);
                                       }
                                  else{
                                       self.weightopt(self.weightopttext());

                                          }    
               
               
                                                       
                              if(getdata[1].body.smoke&&getdata[1].body.smoke!=='null'){
                                 
                                     self.smokeopt(getdata[1].body.smoke);
                                       }
                                  else{
                             self.smokeopt(self.smokeopttext());

                                          }    
               
               
               
               
               
                                                        
                              if(getdata[1].body.workingAs&&getdata[1].body.workingAs!=='null'){
                                 
                                     self.workingasopt(getdata[1].body.workingAs);
                                       }
                                  else{
                             
                                  self.workingasopt(self.workingasopttext());
                                          }    
               
               
                                                     
                              if(getdata[1].body.workingOrganization&&getdata[1].body.workingOrganization!=='null'){
                                
                                     self.workingwithopt(getdata[1].body.workingOrganization);
                                       }
                                  else{
                              self.workingwithopt(self.workingwithopttext());

                                          }    
               
               
            
                                                     
                              if(getdata[1].body.favouriteBooks&&getdata[1].body.favouriteBooks!=='null'){
                                
                                     self.booksopt(getdata[1].body.favouriteBooks);
                                       }
                                  else{
                              self.booksopt(self.booksopttext());

                                          }    
               
               
                                                      
                              if(getdata[1].body.hobbies&&getdata[1].body.hobbies!=='null'){
                                
                                      self.hobbiesopt(getdata[1].body.hobbies);
                                       }
                                  else{
                             self.hobbiesopt(self.hobbiesopttext());

                                          }    
                                          
                                          
                                                       
                              if(getdata[1].body.interests&&getdata[1].body.interests!=='null'){
                                
                                     self.interestsopt(getdata[1].body.interests);
                                       }
                                  else{
                              self.interestsopt(self.interestsopttext());

                                          }                
                                          
                                                        
                              if(getdata[1].body.favouriteMovies&&getdata[1].body.favouriteMovies!=='null'){
                                
                                     self.movieopt(getdata[1].body.favouriteMovies);
                                       }
                                  else{
                              self.movieopt(self.movieopttext());

                                          }               
                                          
                                                      
                              if(getdata[1].body.favouriteMusic&&getdata[1].body.favouriteMusic!=='null'){
                                 
                                   self.musicopt(getdata[1].body.favouriteMusic);
                                       }
                                  else{
                            
                                    self.musicopt(self.musicopttext());
                                          }                 
                                          
                                          
                                          
                                                      
                              if(getdata[1].body.favouriteSports&&getdata[1].body.favouriteSports!=='null'){
                                
                                    self.sportsopt(getdata[1].body.favouriteSports);
                                       }
                                  else{
                               self.sportsopt(self.sportsopttext());

                                          }                 
                                          
                            
                            
                             self.mphone=getdata[1].body.mobilePhone;
                           self.tId=getdata[1].body.twitterId;
                           self.fId=getdata[1].body.fbId;
                           self.lId=getdata[1].body.linkedinId;
                           self.hPhone=getdata[1].body.homePhone;
                           self.eId=getdata[1].body.emailId;
                          // alert(getdata[1].body.userRef);
                           self.fName=getdata[1].body.firstName;
                         self.lName=getdata[1].body.lastName;
                            
                            self.rdata(arrdata);
                            rdata = JSON.stringify(arrdata);
                           // alert(rdata);
                            
  if(self.foodopt()==='Vegetarian'){
   document.getElementById('nonvegimage').style.display = 'none';
   document.getElementById('vegimage').style.display = 'block';
   document.getElementById('imagedrink3').style.display = 'none';
     self.foodnotvisible(false);
   self.foodvisible(true);
}
      else{
    document.getElementById('vegimage').style.display = 'none';
    document.getElementById('nonvegimage').style.display = 'block';
    document.getElementById('imagedrink3').style.display = 'none';
  self.foodnotvisible(false);
   self.foodvisible(true);
}
              
    if(self.drinkopt()==='No'){
   document.getElementById('nonimagedrink').style.display = 'block';
   document.getElementById('imagedrink').style.display = 'none';
    document.getElementById('imagedrink2').style.display = 'none';
      self.drinknotvisible(false);
   self.drinkvisible(true);
    
}else{
    document.getElementById('imagedrink').style.display = 'block';
    document.getElementById('nonimagedrink').style.display = 'none';
     document.getElementById('imagedrink2').style.display = 'none';
       self.drinknotvisible(false);
   self.drinkvisible(true);
}

if(self.foodopt()==='NA'){
   document.getElementById('imagedrink3').style.display = 'block';
   document.getElementById('nonvegimage').style.display = 'none';
   document.getElementById('vegimage').style.display = 'none';
   self.foodnotvisible(true);
   self.foodvisible(false);
}


if(self.drinkopt()==='NA'){
   document.getElementById('imagedrink2').style.display = 'block';
   document.getElementById('imagedrink').style.display = 'none';
   document.getElementById('nonimagedrink').style.display = 'none';
     self.drinkvisible(false);
   self.drinknotvisible(true);
}


 self.religion=self.religionopt();
 self.letter(self.religion[0]);
 self.community=self.communityopt();
 //alert(self.communityopt());
// self.comletter(self.community[0]);
 if(self.communityopt()!=='NA'){
     //alert("yes");
    self.comletter(self.community[0]);
     self.communitydisplay(true);
   self.communitynotdisply(false);
 }else{
    
   self.comletter("NA");
   self.communityopt("community");
    self.communitydisplay(false);
   self.communitynotdisply(true);
    //alert(self.comletter());
 }
//declaring fullname
 self.fullName(self.firstopt() +' '+ self.lastopt());
//declaring variables for match
   self.match=ko.observable(0);
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

      
      
 if(self.U1hobbies()===self.hobbiesopt()){
          self.match(self.match()+ 1);
   self.hobbiesStatus(true);
   self.hobbieserror(false);
     
      //alert(self.U1hobbies())
  }else if (self.U1hobbies()==='undefined'){
      self.U1hobbies('NA');
      self.hobbieserror(true);
  };
  
  
 
    if(self.U1intrests()===self.interestsopt()){
          self.match( self.match()+1);
     self.intreststatus(true);
     self.intresterror(false);
    
  }else if (self.U1intrests()==='undefined'){
        
           self.U1intrests('NA');
       self.intresterror(true);
                                       
  };
  
  if(self.U1diet()===self.foodopt()){
          self.match( self.match()+1);
          self.foodstatus(true);
          self.fooderror(false);
         // alert(self.U1diet());

  }else if (self.U1diet()==='undefined'){
        
           self.U1diet('NA');
       self.fooderror(true);
                                       
  };
  if(self.U1drink()===self.drinkopt()){
          self.match(self.match()+ 1);
self.drinkstatus(true);
self.drinkerror(false);
  }else if (self.U1drink()==='undefined'){
      
           self.U1drink('NA');
       self.drinkerror(true);
  };
  
  
    if(self.U1smoke()===self.smokeopt()){
          self.match( self.match()+1);
           self.smokestatus(true);
self.smokeerror(false);
  }else if (self.U1smoke()==='undefined'){
      
           self.U1smoke('NA');
       self.smokeerror(true);
  };
  
  if(self.U1favMusic()===self.musicopt()){
          self.match( self.match()+1);
          self.Musicstatus(true);
          self.Musicerror(false);

  }else if (self.U1favMusic()==='undefined'){
      
           self.U1favMusic('NA');
       self.Musicerror(true);
  };
  if(self.U1favBook()===self.booksopt()){
          self.match(self.match()+ 1);
          self.bookstatus(true);
          self.bookerror(false);
  }else if (self.U1favBook()==='undefined'){
      
           self.U1favBook('NA');
       self.bookerror(true);
  };
  
    if(self.U1favSports()===self.sportsopt()){
          self.match( self.match()+1);
self.sportsstatus(true);
self.sportserror(false);
  }else if (self.U1favSports()==='undefined'){
      
           self.U1favSports('NA');
       self.sportserror(true);
  };
  
  if(self.U1religion()===self.religionopt()){
          self.match( self.match()+1);
self.religionstatus(true);
self.religionerror(false);
  }else if (self.U1religion()==='undefined'){
     
     
           self.U1religion('NA');
       self.religionerror(true);
  };
 if(self.U1movies()===self.movieopt()){
          self.match( self.match()+1);
self.moviestatus(true);
self.movieerror(false);
  }else if (self.U1movies()==='undefined'){
      
           self.U1movies('NA');
       self.movieerror(true);
  };

if (self.match() > 0) {
        
                   
    self.total(self.match());
    self.matchPercent(Math.round(self.match()/10*100)+'%');
    //alert(self.matchPercent());
}else{
     
     self.matchPercent('0');
        self.total('0');
self.totalvisible(true);
     self.totalmatch(true);
}
             
             
             }
             
             
           });
           
          
            self.emselfployees=ko.observableArray();
             self.employees=ko.observableArray();
              self.fuser=ko.observable();
           $.ajax({
                               url: globalVM.environment().getSentNotifications + '?' + $.param({notificationTo: self.userRef}),

                               dataType: 'json',
                               headers: {

                                   'Authorization': 'Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed'},
                               success: function (people) {

                                   var employees = people[1].body;
                                   self.sentdata((employees));
//                                   alert(JSON.stringify(employees));
//                                   alert(employees.length);

                                       for(i=0;i<=people.length;i++){
                                           //alert(i);
                                           if (self.sentdata()[i].notificationFrom === ui.userRef && self.sentdata()[i].notificationData === "mobileNo" && self.sentdata()[i].status === 'sent') {
                                     
                                         //  alert('mobileno');
                                           
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



           
           //self.notificationFrom=ko.observable();
         
         
           //this.fuser=ko.observable();
          
          
           
           
       
           
       };
            

         
 self.basicinfo=function(){
     
      document.getElementById('basic').style.display = 'block';
       document.getElementById('lifestyleinfo').style.display = 'none';
        document.getElementById('religionid').style.display = 'none';
        // document.getElementById('educationid').style.display = 'none';
         document.getElementById('profileid').style.display = 'none';
          //document.getElementById('userprofileid').style.display = 'none';
           $(window).scrollTop(0);
 };
               
self.lifestyle=function(){
     document.getElementById('lifestyleinfo').style.display = 'block';
      document.getElementById('basic').style.display = 'none';
       document.getElementById('religionid').style.display = 'none';
        //document.getElementById('educationid').style.display = 'none';
        document.getElementById('profileid').style.display = 'none';
         //document.getElementById('userprofileid').style.display = 'none';
          $(window).scrollTop(0);
 };

  self.religious=function(){
     document.getElementById('lifestyleinfo').style.display = 'none';
      document.getElementById('basic').style.display = 'none';
      document.getElementById('religionid').style.display = 'block';
      // document.getElementById('educationid').style.display = 'none';
       document.getElementById('profileid').style.display = 'none';
       // document.getElementById('userprofileid').style.display = 'none';
         $(window).scrollTop(0);
 };             
self.matches=function()
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
   
    $(window).scrollTop(0);
};



               
     

  //================user search End==============
  //================Back ==============
        self.back = function() {
document.getElementById("hide").style.display = "block";
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
  

 Date.prototype.yyyymmddhhmmssms = function() {
 var yyyy = this.getFullYear().toString();
 var MM = (this.getMonth()+1).toString(); // getMonth() is zero-based
 var dd  = this.getDate().toString();
 var hh = this.getHours().toString();
 var mm = this.getMinutes().toString();
 var ss = this.getSeconds().toString();
 var ms = this.getMilliseconds().toString();
return yyyy + (MM[1]?MM:"0"+MM[0]) + (dd[1]?dd:"0"+dd[0]) + (hh[1]?hh:"0"+hh[0]) + (mm[1]?mm:"0"+mm[0]) + (ss[1]?ss:"0"+ss[0]) + (ms[1]?ms:"0"+ms[0]);
};
  var Id= new Date().yyyymmddhhmmssms();
;
       
 //  alert(Id);    
   
   
   
   
Date.prototype.yyyymmddhhmmss = function() {
 var yyyy = this.getFullYear().toString();
 var MM = (this.getMonth()+1).toString(); // getMonth() is zero-based
 var dd  = this.getDate().toString();
 var hh = this.getHours().toString();
 var mm = this.getMinutes().toString();
 var ss = this.getSeconds().toString();
return yyyy + '-' + (MM[1]?MM:"0"+MM[0]) + '-' + (dd[1]?dd:"0"+dd[0]) + 'T' + (hh[1]?hh:"0"+hh[0]) + ':' + (mm[1]?mm:"0"+mm[0]) + ':' + (ss[1]?ss:"0"+ss[0]);
};
  var requestedOn= new Date().yyyymmddhhmmss();
  
   self.firstName=ko.observable();
   self.lastName=ko.observable();
  // alert("test");
   self.firstName(sessionStorage.getItem("firstName"));
   self.lastName(sessionStorage.getItem("lastName"));
  //alert(JSON.stringify(self.firstName()));
  //alert(JSON.stringify(self.lastName()));
  // self.firstName=ko.observable(sessionStorage.getItem("firstName"));
                           
 //************ link for mobile no************************/////////////////////       
        
 jQuery(document).on('click', "#btnhomephone1", function () {


if(self.hPhone === "Request"){
    
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
                                "notificationTo": self.user,
                              "notificationFor":  self.loginUserName(),
                                "modifiedOn":  self.fName + ' ' + self.lName,
                                "notificationFrom": sessionStorage.getItem("userRef"),
                                "notificationId": self.user + 'h' + 'w',
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
                                "notificationFrom": self.user,
                                "notificationFor":  self.fName + ' ' + self.lName,
                                "notificationTo": sessionStorage.getItem("userRef"),
                                "notificationId": self.user + 'h' + 's',
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
               //              // alert("INVITATION IS POSTED for sent");
 
                           
                            
                            self.homeaccepted(false);
                        self.homephonereq(true);
                        });
                        
                        
                        
         
  setTimeout(function () {
    
              // $('#homepop').ojPopup('open', '#btnhomephone');
                 document.getElementById("cont3").style.display = "block";
  
  } );
 setTimeout(function () {
      //$("#homepop").ojPopup('close', '#btnhomephone');
       document.getElementById("cont3").style.display = "none"; 
     
}, 2000);
   

           
    
          
                        
                        
                    } else {
                        //alert("alresdy displayed");
                    }
                });
 
 
 //////////************link for fbid**********************////////////////
 
 
                jQuery(document).on('click', "#btnfb1", function () {

//alert("fb");
                    if (self.fId === "Request") {

                        //alert(self.notUserRef());


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
                                "notificationTo": self.user,
                                "notificationFor":  self.loginUserName(),
                                "modifiedOn":  self.fName + ' ' + self.lName,
                                "notificationFrom": sessionStorage.getItem("userRef"),
                                 "notificationId": self.user + 'f' + 'w',
                                "status": "waiting"
                            }};
                        // console.log('************');
                        //alert(ko.toJSON(self.jsonbody));
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
                                "notificationFrom": self.user,
                                "notificationFor":  self.fName + ' ' + self.lName,
                                 "modifiedOn":  self.loginUserName(),
                                "notificationTo": sessionStorage.getItem("userRef"),
                                "notificationId": self.user + 'f' + 's',
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
  
  } );
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
        
       
   
 
                jQuery(document).on('click', "#btntwitter1", function () {

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
                                "notificationTo": self.user,
                            "notificationFor":  self.loginUserName(),
                                "modifiedOn":  self.fName + ' ' + self.lName,
                                "notificationFrom": sessionStorage.getItem("userRef"),
                                "notificationId": self.user + 't' + 'w',
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
                                "notificationFrom": self.user,
                                "notificationTo": sessionStorage.getItem("userRef"),
                             "notificationFor":  self.fName + ' ' + self.lName,
                                "notificationId": self.user + 't' + 's',
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
  
  } );
 setTimeout(function () {
      // $("#twitterpopup").ojPopup('close', 'btntwitter');
       document.getElementById("cont3").style.display = "none";
     
}, 2000);    
                             
            

   

   
     

                        
                        
                    } else {
                        //alert("mobileno  already display");
                    }
                });
                jQuery(document).on('click', "#btnlinkedin1", function () {

//alert("linkedin");
                    if (self.lId === "Request") {

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
                                "notificationTo": self.user,
                                "notificationFrom": sessionStorage.getItem("userRef"),
                                 "notificationFor":  self.loginUserName(),
                                "modifiedOn":  self.fName + ' ' + self.lName,
                       
                                "notificationId": self.user + 'l' + 'w',
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
                                "notificationFrom": self.user,
                                "notificationTo": sessionStorage.getItem("userRef"),
                                  "notificationFor":  self.fName + ' ' + self.lName,
                                "notificationId": self.user + 'l' + 's',
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
  
  } );
 setTimeout(function () {
      // $("#linkedinpopup").ojPopup('close', 'btnlinkedin');
       document.getElementById("cont3").style.display = "none";
     
}, 2000);
   

    
            

                        
                        
                    } else {
                        //  alert("linkedin  already display");
                    }
                });
               
                jQuery(document).on('click', "#btnmobile1", function () {

//alert("asdfghj");
                    if (self.mphone === "Request") {

//alert("condition works");

               // alert(ko.toJSON(self.user));
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
                                "notificationTo": self.user,
                                "notificationFrom": sessionStorage.getItem("userRef"),
                                "notificationFor":  self.loginUserName(),
                                "modifiedOn":  self.fName + ' ' + self.lName,
                        
                                "notificationId": self.user+ 'm' + 'w',
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
                                "notificationFrom": self.user,
                                "notificationTo": sessionStorage.getItem("userRef"),
                                "notificationId": self.user + 'm' + 's',
                                 "notificationFor":  self.fName + ' ' + self.lName,
                        
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

                            //  alert("INVITATION IS POSTED for sent");
   self.mobileaccepted(false);
        self.mobilereq(true);
  
                        });
                        
                     
  setTimeout(function () {
                //$('#mobilepopup').ojPopup('open', '#btnmobile');
                 document.getElementById("cont3").style.display = "block";
                
  
  } );
 setTimeout(function () {
      // $("#mobilepopup").ojPopup('close', '#btnmobile');
       document.getElementById("cont3").style.display = "none";
     
}, 2000);
   


           
          
          
                        
                        
                        
                    }
                    
                    
                    
                    
                    else {
                        //  alert("linkedin  already display");
                    }
                });
  


 
  
     
    }
//======================notifications end==============
   
   

             




           
            return new firstPageViewModel();
        }
);
