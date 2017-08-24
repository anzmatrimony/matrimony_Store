/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery'],
        function (oj, ko, $)
        {
            function fetchData(url) {
                return $.getJSON(url);
            }

            function fetchPerson(url) {
                  return $.getJSON(url);
            }

            return {fetchData: fetchData};
        });