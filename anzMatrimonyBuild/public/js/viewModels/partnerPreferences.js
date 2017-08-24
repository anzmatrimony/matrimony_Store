/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojtabs', 'ojs/ojconveyorbelt', 'ojs/ojselectcombobox', 'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojmenu', 'ojs/ojaccordion', 'ojs/ojcollapsible', 'ojs/ojradioset', 'promise',
    'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojbutton', 'ojs/ojmodel', 'ojs/ojcheckboxset', 'ojs/ojinputtext'],
        function (oj, ko, $) {
            function partnerPreferencesContentViewModel() {
                var self = this;
                   var globalVM = ko.dataFor(document.getElementById('globalBody'));
                   
                   self.show=ko.observable(false);
               self.show1=ko.observable(false);
               self.show2=ko.observable(false);
               self.show3=ko.observable(false);
                self.dataSource = ko.observableArray();
                self.rdata = ko.observableArray();
                self.dataSource1 = ko.observableArray();                             
                self.selectedItem = ko.observable();
                self.professioninputOther=ko.observable(false);
                self.workinginputOther=ko.observable(false);
                self.educationinputOther=ko.observable(false);
                self.selectedFromAge = ko.observable();
                self.selectedToAge = ko.observable();
                self.selectedFromHeight = ko.observable();
                self.selectedToHeight = ko.observable();
                self.selectedMaritalStatus=ko.observable();           
                self.selectedReligion=ko.observable();           
                self.selectedCommunity =ko.observable();
                self.selectedSubCommunity =ko.observable();            
                self.selectedMotherTongue=ko.observable();
                self.selectedCountryLivingIn=ko.observable();            
                self.originCountry=ko.observable();            
                self.OriginCountryIn=ko.observable();            
                self.selectedStateLivingIn=ko.observable();            
                self.originState=ko.observable();            
                self.OriginStateIn=ko.observable();            
                self.entredNativePlace=ko.observable();            
                self.selectedEducation=ko.observable();                        
                self.selectedWorkingWith=ko.observable();            
                self.selectedProfessionArea=ko.observable();            
                self.selectedAnnualIncome=ko.observable();            
                self.selectedProfileCreatedBy=ko.observable();                      
                self.selectedDiet=ko.observable();           
                self.enteredSubCommunity = ko.observable();
                self.selectedSkinType = ko.observableArray();
                self.selectedBodyWeight = ko.observableArray();
                self.selectedDrink = ko.observableArray();
                self.selectedsmoke = ko.observableArray();  
                self.enteredEducation = ko.observableArray();  
                self.enteredWork = ko.observableArray();  
                self.enteredPorfession = ko.observableArray();  
                self.educationdata = ko.observableArray();    
                self.educationData = ko.observableArray();   
                self.worktypedata = ko.observableArray();    
                self.worktypeData = ko.observableArray();   
                self.professiondata = ko.observableArray();    
                self.professionData = ko.observableArray();   
                self.incomedata = ko.observableArray();    
                self.incomeData = ko.observableArray();   
                self.createddata = ko.observableArray();    
                self.createdData = ko.observableArray();   
                self.skintonedata = ko.observableArray();    
                self.skintoneData = ko.observableArray();   
                self.dietdata = ko.observableArray();    
                self.dietData = ko.observableArray();   
                self.drinkdata = ko.observableArray();    
                self.drinkData = ko.observableArray();   
                self.smokedata = ko.observableArray();    
                self.smokeData = ko.observableArray();
                self.heightfrom = ko.observableArray();
                self.heightto = ko.observableArray();
                self.HeightData=ko.observable();
                self.height=ko.observable("");
                self.age = ko.observableArray();
                self.Ageselectdata = ko.observableArray();
                self.agevardata = ko.observableArray();
                self.ageforData = ko.observableArray();
                self.mstatus=ko.observable();
                self.maritalData=ko.observable();
                self.religionselect = ko.observableArray();
                self.religion = ko.observable(); 
                self.selectedReligion=ko.observable();
                self.community= ko.observable(); 
                self.sub_community= ko.observable();     
                self.subcommunitysel=ko.observableArray();
                self.communitysel=ko.observableArray();
                self.religionfun=ko.observable();
                self.mothertongue = ko.observable();
                self.language=ko.observable(); 
                self.laguageData=ko.observable();
                self.countrydata = ko.observableArray();    
                self.countryData = ko.observableArray();   
                self.statedata = ko.observableArray();    
                self.stateData = ko.observableArray();
                self.mystate = ko.observable();
                self.oState = ko.observable();
                self.ostateData = ko.observable();
                
                  var data=[{
                        name: 'Basic',
                        id: 'Basic'
                    },
                    {
                        name: 'Location',
                        id: 'Location'
                    },
                    {
                        name: 'Education',
                        id: 'Education'
                    },
                    {
                        name: 'Others',

                        id: 'Others'

                    }];
              
                 
        this.dataSource = new oj.ArrayTableDataSource(data,{idAttribute:'id'});
        this.selectedItem = ko.observable("Basic");
          
            $(document).ready(function() {
                   self.show(true);
                   self.show1(false);
                   self.show2(false);
                   self.show3(false);
               });
            $(document).on('click', "#Basic", function () {
                self.show(true);
                    self.show1(false);
                    self.show2(false);
                    self.show3(false);
                document.getElementById("invitations").style.display = "initial";
                document.getElementById("accepeted").style.display = "none";
                document.getElementById("sent").style.display = "none";
                document.getElementById("rejected").style.display = "none";
            });
                
            this.nextStep2 = function () {
                this.selectedItem("Location"); 
                self.show(false);
                        self.show1(true);
                        self.show2(false);
                        self.show3(false);
                $(document).on('click', "#toLocation", function () {
                document.getElementById("invitations").style.display = "none";
                document.getElementById("accepeted").style.display = "initial";
                document.getElementById("sent").style.display = "none";
                document.getElementById("rejected").style.display = "none";
                });              

            };
            $(document).on('click', "#Location", function () {   
                 self.show(false);
                        self.show1(true);
                        self.show2(false);
                        self.show3(false);
                document.getElementById("invitations").style.display = "none";
                document.getElementById("accepeted").style.display = "initial";
                document.getElementById("sent").style.display = "none";
                document.getElementById("rejected").style.display = "none";
            });
            this.nextStep3 = function () {
                this.selectedItem("Education");
                self.show(false);
                        self.show1(false);
                        self.show2(true);
                        self.show3(false);
                $(document).on('click', "#toEducation", function () {                    
                document.getElementById("invitations").style.display = "none";
                document.getElementById("accepeted").style.display = "none";
                document.getElementById("sent").style.display = "initial";
                document.getElementById("rejected").style.display = "none";
                });               
            };
                
            $(document).on('click', "#Education", function () {
                self.show(false);
                        self.show1(false);
                        self.show2(true);
                        self.show3(false);
                document.getElementById("invitations").style.display = "none";
                document.getElementById("accepeted").style.display = "none";
                document.getElementById("sent").style.display = "initial";
                document.getElementById("rejected").style.display = "none";
            });
            this.nextStep4 = function () {
                this.selectedItem("Others");
                 self.show(false);
                        self.show1(false);
                        self.show2(false);
                        self.show3(true);
                $(document).on('click', "#toOthers", function () {
                document.getElementById("invitations").style.display = "none";
                document.getElementById("accepeted").style.display = "none";
                document.getElementById("sent").style.display = "none";
                document.getElementById("rejected").style.display = "initial";
                });
            };
            $(document).on('click', "#Others", function () {
                 self.show(false);
                        self.show1(false);
                        self.show2(false);
                        self.show3(true);
                document.getElementById("invitations").style.display = "none";
                document.getElementById("accepeted").style.display = "none";
                document.getElementById("sent").style.display = "none";
                document.getElementById("rejected").style.display = "initial";
            });
                 
        if(sessionStorage.getItem("gender")==="Male"){
            self.GenderValue = ko.observable("Female");
        }else if(sessionStorage.getItem("gender")==="Female"){
            self.GenderValue = ko.observable("Male");
        }
        self.userref=sessionStorage.getItem("userRef");
        self.religion=sessionStorage.getItem("religion");
       
        self.CancelData = function () {
           oj.Router.rootInstance.go('incidents');
        };                  
    //Get Age
    $.get('age.json', function(ageforData) {
         var agevardata = ageforData;
         self.Ageselectdata(agevardata);
        Ageselectdata = JSON.stringify(agevardata);
       }); 
    // Get Height
      $.get('height.json', function(Heihgtdata) {
          var heightData = Heihgtdata;
          self.HeightData(heightData);
         HeightData = JSON.stringify(heightData);
        });      
    //Get Maritalstatus
    $.get('maritalstatus.json', function(Marydata) {
          var Marrrdata = Marydata;
          self.maritalData(Marrrdata);
         maritalData = JSON.stringify(Marrrdata);
        });    
        
        
        $.get('maritalstatus.json', function (Marydata) {
    for(var i = 0; i < Marydata.length; i++){

    var option = $("<option>");

    for( var key in Marydata[i] ){
        if( typeof Marydata[i][key] === "number" ){
            option.attr("value", Marydata[i][key]);
        }else{
            option.html(Marydata[i][key]);
        }
    }

    $("#Maritalinput").append(option);

}

});
    //Get Relgion
    $.get('religion.json', function(relgetdata) {
          var reldata = relgetdata;
          self.religionselect(reldata);
         religionselect = JSON.stringify(reldata);
        });
   //Get community based on religin
    $.get('community.json', function(comgetdata) {
        var commdata = comgetdata; 
         self.religionfun = ko.computed(function () {
           if (self.selectedReligion()=='Hindu') {
               self.communitysel(commdata.Hindu);
             communitysel = JSON.stringify(commdata.Hindu);
           }
           if (self.selectedReligion()=='Muslim') {
               self.communitysel(commdata.Muslim);
             communitysel = JSON.stringify(commdata.Muslim);
           }
           if (self.selectedReligion()=='Christian') {
               self.communitysel(commdata.Christian);
             communitysel = JSON.stringify(commdata.Christian);
           }
           if (self.selectedReligion()=='Sikh') {
               self.communitysel(commdata.Sikh);
             communitysel = JSON.stringify(commdata.Sikh);
           }
           if (self.selectedReligion()=='Jain') {
               self.communitysel(commdata.Jain);
             communitysel = JSON.stringify(commdata.Jain);
           }
           if (self.selectedReligion()=='Buddhist') {
               self.communitysel(commdata.Buddhist);
             communitysel = JSON.stringify(commdata.Buddhist);
           }
           if (self.selectedReligion()=='Parsi') {
               self.communitysel(commdata.Parsi);
             communitysel = JSON.stringify(commdata.Parsi);
           }
           if (self.selectedReligion()=='Jewish') {
               self.communitysel(commdata.Jewish);
             communitysel = JSON.stringify(commdata.Jewish);
           }
           if (self.selectedReligion()=='Spiritual') {
               self.communitysel(commdata.Spiritual);
             communitysel = JSON.stringify(commdata.Spiritual);
           }
           if (self.selectedReligion()=='Other') {
               self.communitysel(commdata.Other);
             communitysel = JSON.stringify(commdata.Other);
           }
        });
       
    });
    //Get MotherTounge
    $.get('mothertounge.json', function(Mdata) {
      var arrrdata = Mdata;
      self.laguageData(arrrdata);
      laguageData = ko.toJSON(arrrdata);
    }); 
    //get country
   $.get('country.json', function(countrydata) {
    var cdata = countrydata;
    self.countryData(cdata);
    countryData = JSON.stringify(cdata);
    });
//get state         
    $.get('state.json', function(statedata){
        var sdata = statedata;                
            self.mystate = ko.computed(function (){
                if(self.selectedCountryLivingIn()=='India') {
                        self.stateData(sdata.India);
                        stateData = JSON.stringify(sdata.India)
                } 
                if(self.selectedCountryLivingIn()=='Australia') {
                        self.stateData(sdata.Australia);
                        stateData = JSON.stringify(sdata.Australia)
                }
                if(self.selectedCountryLivingIn()=='NewZealand') {
                        self.stateData(sdata.NewZealand);
                        stateData = JSON.stringify(sdata.NewZealand)
                }
                if(self.selectedCountryLivingIn()=='USA') {
                        self.stateData(sdata.USA);
                        stateData = JSON.stringify(sdata.USA)
                }
        });
		
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
    //get Education
    $.get('education.json', function(educationdata) {
         var edata = educationdata;
         self.educationData(edata);
         educationData = JSON.stringify(edata);
       });
   //get workingtype
    $.get('workingtype.json', function(worktypedata) {
         var wdata = worktypedata;
         self.worktypeData(wdata);
         worktypeData = JSON.stringify(wdata);
       });
  //get profession
    $.get('profession.json', function(professiondata) {
         var pdata = professiondata;
         self.professionData(pdata);
         professionData = JSON.stringify(pdata);
       });
   //get annual income
    $.get('annualincome.json', function(incomedata) {
         var idata = incomedata;
         self.incomeData(idata);
         incomeData = JSON.stringify(idata);
       });
  //get profile created by 
    $.get('profileCreatedBy.json', function(createddata) {
         var pcdata = createddata;
         self.createdData(pcdata);
         createdData = JSON.stringify(pcdata);
       });
   //get Skin Tone
    $.get('skintone.json', function(skintonedata) {
         var sdata = skintonedata;
         self.skintoneData(sdata);
         skintoneData = JSON.stringify(sdata);
       });
  //get Diet
    $.get('diet.json', function(dietdata) {
         var ddata = dietdata;
         self.dietData(ddata);
         dietData = JSON.stringify(ddata);
       });
    //get Drink
    $.get('drink.json', function(drinkdata) {
         var ddata = drinkdata;
         self.drinkData(ddata);
         drinkData = JSON.stringify(ddata);
       });
  //get Smoke
    $.get('smoke.json', function(smokedata) {
         var sdata = smokedata;
         self.smokeData(sdata);
         smokeData = JSON.stringify(sdata);
       });
       //TO get already saved preferences data from back end
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
                           'Authorization': 'Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed',
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

          self.rdata = ko.observableArray();
                       
                       $.ajax({
                           url: globalVM.environment().PartnerSearchDetails+ '?' + $.param({
                               "requestedOn": "timestamp",
                               "requestedFrom": "website",
                               "guid": 123456789,
                               "geoLocation": "anonymous",
                               "userRef": sessionStorage.getItem("userRef")
                           }),
                           dataType: 'json',
                           headers: {
                               // key value pair of headers
                               'Authorization': 'Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed'
                           },
                           success: function(getdata) {
                              //console.log(getdata);
//                           alert(JSON.stringify(getdata));
                           console.log(JSON.stringify(getdata));                   
                            arrdata = getdata;
                self.selectedFromAge(getdata[1].body.Min_Age);
                self.selectedToAge(getdata[1].body.Max_Age);
                self.selectedFromHeight(getdata[1].body.Min_Height);              
                self.selectedToHeight(getdata[1].body.Max_Height);
                self.selectedMaritalStatus(getdata[1].body.maritalStatus);
                self.selectedReligion(getdata[1].body.religion);
                self.selectedCommunity(getdata[1].body.community);
                self.enteredSubCommunity(getdata[1].body.subCommunity);					
                self.selectedMotherTongue(getdata[1].body.motherTounge);
                self.selectedCountryLivingIn(getdata[1].body.country);
                self.OriginCountryIn(getdata[1].body.originCountry);                
                self.selectedStateLivingIn(getdata[1].body.state);	 
                self.OriginStateIn(getdata[1].body.originState);	 
                self.entredNativePlace(getdata[1].body.nativePlace);
                self.selectedEducation(getdata[1].body.highestEducation);
                self.selectedWorkingWith(getdata[1].body.workingType);
                self.selectedProfessionArea(getdata[1].body.profession);
                self.selectedAnnualIncome(getdata[1].body.annualIncome);
                self.selectedProfileCreatedBy(getdata[1].body.profileFor);
                self.selectedSkinType(getdata[1].body.skinTone);				
                self.selectedDiet(getdata[1].body.diet);
                self.selectedDrink(getdata[1].body.drink);				
                self.selectedsmoke(getdata[1].body.smoke);
        
                var selectedFromAge = $("#ageinputfrom1").val(getdata[1].body.Min_Age);
                var selectedToAge = $("#ageinputto").val(getdata[1].body.Max_Age);
                var selectedFromHeight = $("#heightinputfrom").val(getdata[1].body.Min_Height);
                var selectedToHeight = $("#heightinputto").val(getdata[1].body.Max_Height);
                var selectedMaritalStatus = $("#Maritalinput").val(getdata[1].body.maritalStatus);
                var selectedReligion = $("#Religioninput").val(getdata[1].body.religion);
                var selectedCommunity = $("#Communityinput").val(getdata[1].body.community);
                var enteredSubCommunity = $(getdata[1].body.subCommunity);	
                var selectedMotherTongue = $("#MotherTongueinput").val(getdata[1].body.motherTounge);
                var selectedCountryLivingIn = $("#Countryinput").val(getdata[1].body.country);
                var OriginCountryIn = $("#originCountry").val(getdata[1].body.originCountry);
                var selectedStateLivingIn = $("#Stateinput").val(getdata[1].body.state); 	
                var OriginStateIn = $("#Stateinput").val(getdata[1].body.originState); 	
                var entredNativePlace = $("#nativePlace").val(getdata[1].body.nativePlace);	
                var selectedEducation = $("#Educationinput").val(getdata[1].body.highestEducation);
                var selectedWorkingWith = $("#Workinginput").val(getdata[1].body.workingType);
                var selectedProfessionArea = $("#Professioninput").val(getdata[1].body.profession);
                var selectedAnnualIncome = $("#Incomeinput").val(getdata[1].body.annualIncome);
                var selectedProfileCreatedBy = $("#profileinput").val(getdata[1].body.profileFor);
                var selectedSkinType = $("#skiniput").val(getdata[1].body.skinTone); 
                var selectedDiet = $("#dietinput").val(getdata[1].body.diet);
                var selectedDrink = $("#drinkinput").val(getdata[1].body.drink);
                var selectedsmoke = $("#smokeinput").val(getdata[1].body.smoke);    
    

                           self.rdata(arrdata);
                           rdata = JSON.stringify(arrdata);
                         //  alert(rdata);
                           }
                       });
               // For Education Others       
                self.educationFun = ko.computed(function () {
                   if (self.selectedEducation()==='Others') {
                      
                       self.educationinputOther(true);
                   
                   }else{
                       self.educationinputOther(false);
                   }
                }); 
               // For working With Others  
                self.workFun = ko.computed(function () {
                   if (self.selectedWorkingWith()==='Others') {
                       
                       self.workinginputOther(true);
                   }else{
                       self.workinginputOther(false);
                   }
                }); 
               // For Profession Others   
                self.ProfessionFun = ko.computed(function () {
                   if (self.selectedProfessionArea()==='Others') {
                       
                       self.professioninputOther(true);
                   }
                   else{
                        self.professioninputOther(false);
                   }
                
                }); 
                
         //post operation
         
          self.saveAndCloseData = function() {
                            
       //     alert("clicked");                             
            self.pdata= {
                "header":
                    {
                   "guid":"xyz",
                   "requestedOn":"xyz",
                   "requestedFrom" :"xyz",
                   "userRef" : sessionStorage.getItem("userRef"),
                   "geoLocation":"hyd"
                    },
                "body":
                    {
                    "userRef" : sessionStorage.getItem("userRef"),
                    "Min_Age":$( "#ageinputfrom1" ).val(),
                    "Max_Age":$( "#ageinputto" ).val(),
                    "Min_Height": $( "#heightinputfrom" ).val(), 
                    "Max_Height": $( "#heightinputto" ).val(), 
                    "maritalStatus": $( "#Maritalinput" ).val(),                                    
                    "religion": $( "#Religioninput" ).val() ,
                    "community": $( "#Communityinput" ).val(),
                    "subCommunity": $( "#inputsub" ).val(),
                    "motherTounge": $( "#MotherTongueinput" ).val() ,
                    "country":$( "#Countryinput" ).val(),
                    "originCountry":$( "#originCountry" ).val(),
                    "state": $( "#Stateinput" ).val(),
                    "originState": $( "#originState" ).val(),
                    "nativePlace": $( "#nativePlace" ).val(),                    
                    "highestEducation": $( "#Educationinput" ).val(),
                    "workingType": $( "#Workinginput" ).val(),
                    "profession": $( "#Professioninput" ).val(),
                    "annualIncome": $( "#Incomeinput" ).val(),
                    "profileFor":$( "#profileinput" ).val(),
                    "skinTone": $( "#skiniput" ).val(),
                    "diet": $( "#dietinput" ).val(),
                    "drink": $( "#drinkinput" ).val(),
                    "smoke": $( "#smokeinput" ).val(),                                   
                    "Gender": self.GenderValue()                                    
                    }                              
            };
       //     alert('check');
            alert( JSON.stringify(self.pdata));
                                oj.Router.rootInstance.go('/incidents/Preferences'); 

            console.log(JSON.stringify(self.pdata));

            self.tasksURI = globalVM.environment().PartnerSearch;
           self.serviceCall(self.tasksURI, 'POST', self.pdata).done(function (data) {
             //   alert(JSON.stringify(self.pdata));
            });

//                    oj.Router.rootInstance.go('incidents'); 
//                    oj.Router.rootInstance.go('incidents/Preferences'); 


           
    };
      
      
      
            }
     
    return new partnerPreferencesContentViewModel();
  }
);