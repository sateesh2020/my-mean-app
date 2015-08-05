(function(){
    angular.module('family.module')
            .controller('FamilyController',['$scope','$http', function(model,http){
                model.families = [];
                model.family = {
                    name:'',
                    location:'',
                    members:[
                        {
                            name:''
                        }
                    ]
                };
                http.get('api/family')
                    .then(function(response){
                        model.families = response.data;
                    })
                    .catch(function(message){
                        console.log(message);
                    });
                model.addFamily = function(family){
                    http.post('api/family',family)
                        .then(function(response){
                            model.families.push(response.data);
                        })
                        .catch(function(message){
                            console.log(message);
                        });
                }
                model.addAnother = function(){
                    var member = {
                        name:''
                    }
                    model.family.members.push(member);
                }
            }]);
})();