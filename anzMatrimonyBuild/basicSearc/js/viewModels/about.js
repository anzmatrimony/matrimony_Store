/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'utils' ,'ojs/ojknockout', 'ojs/ojselectcombobox', 'ojs/ojtable', 'ojs/ojrouter', 'ojs/ojknockout', 'promise', 'ojs/ojlistview', 'ojs/ojmodel', 'ojs/ojpagingcontrol', 'ojs/ojpagingcontrol-model'],
 function(oj, ko, $,utils) {
  
    function AboutViewModel() {
      var self = this;
      self.searchBasic=ko.observable(true);
      self.basicMatches=ko.observable();
    self.ageval = ko.observableArray(["18"]);
                self.agevalue = ko.observableArray(["99"]);
                self.LOOKval = ko.observableArray(["MySelf"]);
                self.RELval = ko.observableArray(["Hindu"]);
                self.basicMatches(false);
                self.back=function(){
                   self.basicMatches(false);
                    self.searchBasic(true);
                };
                self.buttonClick=function(){
                    self.basicMatches(true);
                    self.searchBasic(false);
                    self.PostData={"header":{"guid":"asdfasdf",
                                            "requestOn":"afsdf",
                                            "requestFrom":"afd",
                                            "userRef":"afsdf",
                                            "geoLocation":"dsfasf"
                                            },
                                            "body":{
                                            "gender":self.LOOKval()[0],
                                            "religion":self.RELval()[0],
                                            "ageFrom":self.ageval()[0],
                                            "ageTo":self.agevalue()[0],
                                            "rangeFrom":'0',
                                            "rangeTo":'200'
                                        }
                                        };
                                         return new Promise(function (resolve, reject) {
                             var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "https://192.168.0.116:8243/basic/1.0/basicSearch",
                            "method": "POST",
                            "headers": {
                              "content-type": "application/json",
                             
                              "authorization": "Bearer bb8c2c3e-3ba1-32f0-97ef-8555977631ed",
                             
                            },
                            "data": JSON.stringify(self.PostData)
                          };

                          $.ajax(settings).done(function (response) {
                            console.log(response);
                             var employees = response.body;
                        alert(JSON.stringify(employees));
                        console.log(JSON.stringify(employees));
                        self.allPeople(employees);
//                            loadPerfandPotenialData();
                        resolve(true);
                          });             
                                        
                                         });                   
                                        
                };
                //people
               self.ready = ko.observable(false);
               var defaultLayout = utils.readCookie('peopleLayout');
        if (defaultLayout) {
            self.peopleLayoutType = ko.observable(defaultLayout);
        } else {
            self.peopleLayoutType = ko.observable('peopleCardLayout');
        }
        self.allPeople = ko.observableArray([]);
       

      

        self.parsePeople = function (response) {
            return response['employees'];
        };

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
        });
        self.listViewDataSource = ko.computed(function () {
            return new oj.ArrayTableDataSource(self.filteredAllPeople(), {idAttribute: 'firstName'});
        });
        self.cardViewDataSource = ko.computed(function () {
            return new oj.PagingTableDataSource(self.listViewDataSource());
        });

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
            self.empRouter.configure (function (stateId) {
                var state;
                if (stateId) {
                    var data = stateId.toString();

                    alert(data);
                    state = new oj.RouterState(data, {
                        value: data,
                        // For each state, before entering the state,
                        // make sure the data for it is loaded.
                        canEnter: function () {
                            // The state transition will be on hold
                            // until loadData is resolved.
                            return self.loadData(data);
                        }
                    });
                }
                return state;
            });

            return oj.Router.sync();
        };
               
               
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additionaly available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

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
    return new AboutViewModel();
  }
);
