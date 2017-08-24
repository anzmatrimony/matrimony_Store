/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * home module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function homeContentViewModel() {
        var self = this;
        
        
         self.token=ko.observable('Bearer'+' '+localStorage.getItem("access_token"));
        self.userUrl=ko.observable();
         self.User=sessionStorage.getItem("username");
         
          var globalVM = ko.dataFor(document.getElementById('globalBody'));
          self.count=ko.observable('no Views');
          self.countViewed=ko.observable('no views');
          
        self.RequestedData=ko.observable('0');
        self.sentData=ko.observable('0');
        self.acceptedData=ko.observable('0');
        
          
           $.ajax({
                           url: globalVM.environment().getSentNotifications+ '?' + $.param({ notificationTo:sessionStorage.getItem("userRef")}),
                           dataType: 'json',
                           headers: {
                              
                               'Authorization': 'Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed'                        },
                           success: function(people) {
                               
                            self.sentData(people[1].body.length);
                           }
                       });
    self.AboutMe=function(){
         oj.Router.rootInstance.go('MyProfile');
    };
    self.Notifications=function(){
       oj.Router.rootInstance.go('firstPage');
    };
    self.privacyNote=function(){
        oj.Router.rootInstance.go('privacyOptions');
    };
    self.preferences=function(){
        
        oj.Router.rootInstance.go('partnerPreferences');
    };
      
          self.VisitedNav=function(){
              sessionStorage.setItem("visited",'Visitorshow');
              oj.Router.rootInstance.go('incidents');
          };
          self.ViewedNav=function(){
              oj.Router.rootInstance.go('incidents');
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
                         console.log("ajax error " + jqXHR.status);
                       }
                   };
                   return $.ajax(request);
               };
   
    
    
          

          
           
            
               self.userRef=sessionStorage.getItem("userRef");
            sessionStorage.getItem('gender');
            sessionStorage.getItem('age');
            sessionStorage.getItem('religion');
            
            
            
                        
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
 
           
            self.count(people[0].body.searchData.length);
            

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
         
           console.log("visitedData" + JSON.stringify(people[0].body.visitorsData.length));
           
            self.countViewed(people[0].body.visitorsData.length);
        

        });
        
  
                
                       

                        $.ajax({
                           url: globalVM.environment().getAcceptedNotificatons+ '?' + $.param({
                              
                               notificationTo:sessionStorage.getItem("userRef")
                           }),
                           dataType: 'json',
                           headers: {
                               // key value pair of headers
                               'Authorization': self.token()
                           },
                           success: function(response) {
                             
                              self.acceptedData(response[1].body.length);
                        
                               
                           }
                       });
                   
                     
                     
                       $.ajax({
                           url: globalVM.environment().getPendingNotifications+ '?' + $.param({
                              
                               notificationTo:sessionStorage.getItem("userRef")
                           }),
                           dataType: 'json',
                           headers: {
                               // key value pair of headers
                               'Authorization': self.token()
                           },
                           success: function(response) {
                               
                              self.RequestedData(response[1].body.length);
                          
                           }
                       });          

           
    }
    
    return homeContentViewModel;
});
