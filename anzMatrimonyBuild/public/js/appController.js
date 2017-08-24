/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource',
  'ojs/ojoffcanvas'],
  function(oj, ko) {
     function ControllerViewModel() {
       var self = this;
       
       this.logout = function() {
                sessionStorage.clear();
                localStorage.clear();
                window.location.href = "/";
            };
       
     
       
       
                self.environment = ko.observable();

                $.getJSON("env_var.json", function (data) {
                    environment = data.environment;
                    $.getJSON(environment + ".json", function (data) {
                        self.gdata = data;
                        self.environment(data);
                        // alert(JSON.stringify(self.gdata));
                    });
                });

       
       
       
       

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

       // Router setup
       self.router = oj.Router.rootInstance;
       self.router.configure({
         'dashboard': {label: 'Dashboard'},
         'incidents': {label: 'Incidents'},
         'customers': {label: 'Customers'},
         'about': {label: 'About'},
         'home': {label: 'home'},
         'firstPage': {label: 'firstPage'},
         'partnerPreferences': {label: 'partnerPreferences'},
         'privacyOptions': {label: 'privacyOptions'},
         'MyProfile':{lable:'MyProfile',isDefault: true}
       });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      // Navigation setup
      var navData = [
            {name: 'My Profile', id: 'MyProfile',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-person-icon-24 '},
           {name: 'DashBoard', id: 'home',
           iconClass: 'oj-navigationlist-item-icon demo-icon-font-24  demo-home-icon-24'},
         {name: 'Matches', id: 'incidents',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'},
           
     {name: 'Notification', id: 'firstPage',
       iconClass: 'fa fa-bell fa-lg oj-navigationlist-item-icon demo-icon-font-24'},
             
      {name: 'My PartnerPreferences', id: 'partnerPreferences',
           iconClass: 'fa fa-handshake-o fa-lg oj-navigationlist-item-icon demo-icon-font-24'},
     

       
//   {name: 'Registration', id: 'dashboard',
//       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'}
//      {name: 'About', id: 'about',
//       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'}
  
      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});

      // Drawer
      // Close offcanvas on medium and larger screens
      self.mdScreen.subscribe(function() {oj.OffcanvasUtils.close(self.drawerParams);});
      self.drawerParams = {
        displayMode: 'push',
        selector: '#navDrawer',
        content: '#pageContent'
      };
      // Called by navigation drawer toggle button and after selection of nav drawer item
      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle(self.drawerParams);
      }
      // Add a close listener so we can move focus back to the toggle button when the drawer closes
      $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("App Name");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable( sessionStorage.getItem("username"));

      // Footer
      function footerLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
      }
    
      self.footerLinks = ko.observableArray([
        new footerLink('About ANZ_Matrimony', 'aboutAnzMatrimony', '#'),
        new footerLink('Contact Us', 'contactUs', '#'),
        new footerLink('Legal Notices', 'legalNotices', '#'),
        new footerLink('Terms Of Use', 'termsOfUse', '#'),
        new footerLink('Your Privacy Rights', 'yourPrivacyRights', '#')
      ]);
     }

     return new ControllerViewModel();
  }
);
