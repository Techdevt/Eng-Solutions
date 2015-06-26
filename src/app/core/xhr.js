(function(){
    'use strict';

    angular.module('app.core')
           .factory('XHR', XHR);


    XHR.inject = ['$http','$q','$rootScope','logger','AuthToken'];
    function XHR($http,$q,$rootScope,logger,AuthToken){    
        var service = {
            get : get,
            post : post,
            // upload: upload,
            delet: delet
        };
        var backend = 'http://localhost:8000';
        var token;
        return service;
        /////////////

        function get(url){
            var tokenObject = AuthToken.getToken();
            url = backend + url;
            var promise = $http({
                method: 'GET',
                url: url,
                headers : {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + tokenObject.token
              }
            });
            return promise;    
        }

        function post(url,data){
        url = backend + url;
        var tokenObject = AuthToken.getToken();
        var deferred = $q.defer();
        var promise = $http({
            method: 'POST',
            url: url,
            data: data,
            headers : {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + tokenObject.token
            }
        });

        promise
            .success(function(result){
                deferred.resolve(result);
            })
            .error(function(err){
                deferred.reject(err);
            });  

            return deferred.promise;          
        }

        function delet(url,body){
            url = backend + url;
            var tokenObject = AuthToken.getToken();
            var deferred = $q.defer();
            var result = confirm('continue delete?');
            
            var promise = $http({
              method : 'DELETE',
              url : url,
              data : body,
              headers : {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + tokenObject.token
              }
            });

            promise
                .success(function(result){
                    deferred.resolve(result);
                })
                .error(function(err){
                    deferred.reject(err);
                });

            return deferred.promise;
        }
    }
})();