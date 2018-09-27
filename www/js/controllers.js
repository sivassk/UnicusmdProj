angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('PieChartCtrl', function($scope,$stateParams,$timeout,$rootScope,$ionicScrollDelegate) {
	// serviceModule.onloadingshow();
	$timeout( function() {
			serviceModule.onloadinghide();
	},1400);
	
	  $scope.chartPie = {
      options: {
        chart: {
          type: 'pie',
          // marginTop: '10px'
        },
        colors: ['#00FF80', '#ff0000', '#5882FA'],

      },
      series: [{
        data: [
          ['Nausea', 20],
          ['Skin rashes', 50],
          ['No side effects', 30],
         
        ],
        name: ' ',
        //data:[50,40],
        dataLabels: {
          rotation: 270,
          enabled: false,
          format: '{series.name}:  <b>{series.percentage:.1f}%</b>',
        }
      }],
      title: {
        text: 'Medicine Details'
      },
       tooltip: {
            valueDecimals: 2,
            valueSuffix: ' USD',
			 pointFormat: '{series.name}: <b>{series.percentage:.1f}%</b>'
        },

      credits: {
        enabled: false
      },

      loading: false
    }
})
.controller('LoginCntrl', function($scope,$state) {
  $scope.dform={};
  $scope.ptform={};
  $scope.phform={};

  $scope.login = function() {
    var user=$scope.dform.username;
    var dpass=$scope.dform.password;
   var duser=user.toLowerCase();
   // if(duser.substr(0,6)=="doctor" && dpass=="doctor123")
	    if(duser=="blanco" && dpass=="blanco123")
    $state.go("tab.dash");
    else
	    document.getElementById("loginErr").innerHTML="Invalid Credentials";
  };
  $scope.ptLogin = function() {
    
    var tuser=$scope.ptform.username;
    var ptpass=$scope.ptform.password;
 var ptuser=tuser.toLowerCase();
   // if(ptuser.substr(0,7)=="patient" && ptpass=="patient123")
	    if(ptuser=="sheldon" && ptpass=="sheldon123")
    $state.go("patient.dash");
    else
    document.getElementById("ptErr").innerHTML="Invalid Credentials";
  
  };
    $scope.phLogin = function() {
    
     var huser=$scope.phform.username;
    var phpass=$scope.phform.password;
	var phuser=huser.toLowerCase();
    if(phuser.substr(0,8)=="pharmacy" && phpass=="pharmacy123")
    $state.go("pharmacy.dash");
    else
    document.getElementById("phErr").innerHTML="Invalid Credentials";
  
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	
  $scope.chat = Chats.get($stateParams.chatId);
  
})
.controller('diseasectrl', function($scope, $stateParams,$ionicHistory,Diseases,$ionicPopup) {
	/*$scope.goBack = function() {
     $ionicHistory.goBack();
    };*/
    $scope.diseases = Diseases.all();
$scope.remove = function(disease) {
Diseases.remove(disease); }
$scope.showAlert = function(m) {

   var alertPopup = $ionicPopup.alert({
     title: m,
     templateUrl: 'templates/templates/diseasesmed.html'
   });
  };


})
.controller('diseasectrlPh', function($scope, $stateParams,$ionicHistory,Diseases,$ionicPopup) {
	/*$scope.goBack = function() {
     $ionicHistory.goBack();
    };*/
    $scope.diseases = Diseases.all();
$scope.remove = function(disease) {
Diseases.remove(disease); }
$scope.showAlert = function(m) {

   var alertPopup = $ionicPopup.alert({
     title: m,
     templateUrl: 'templates/templatesPh/diseasesmed.html'
   });
  };


})
.controller('PatientsCtrl', function($scope, Patients,$ionicHistory,$ionicPopup) {

$scope.patients = Patients.all();
$scope.remove = function(patient) {
  Patients.remove(patient);
};

$scope.showAlert = function(nam) {
	
   var alertPopup = $ionicPopup.alert({
     title: nam,
     templateUrl: 'templates/templatesPh/patientmed.html'
   });
  };


})
.controller('searchcontroller', function($ionicHistory,$scope,$http,$ionicLoading,$timeout,medicines) {
	
$scope.Result;
$scope.flag=false;

$scope.getMed = function (k) {
	
$scope.med=medicines.get(k);

}
$scope.getValue = function (key) {
  $scope.flag=false;
if($scope.search.length>1){

var id =$scope.search;

//$scope.loading = $ionicLoading.show({content: 'Loading...'});

$scope.mmed=medicines.all();
//alert(JSON.stringify($scope.mmed))

   if($scope.mmed.length==0){
    $scope.flag=true;   
$scope.Result="There are no products matching the selection.";
   }


$scope.result=$scope.mmed;


}
}
})
.controller('medctrl', function($scope, $stateParams,medicines,$ionicPopup) {
$scope.med=medicines.all();
$scope.medAlert = function(t) {
   var alertPopup = $ionicPopup.alert({
	   
     title: t,
     templateUrl: 'templates/templates/patientmed.html'
   });
  };

})

.controller('medctrlPh', function($scope, $stateParams,medicines,$ionicPopup) {
$scope.med=medicines.all();
$scope.medAlert = function(t) {
   var alertPopup = $ionicPopup.alert({
	   
     title: t,
     templateUrl: 'templates/templatesPh/pharmacymed.html'
   });
  };

})

.controller('DoctCtrl', function($scope, Docts,$ionicHistory,$ionicPopup) {

$scope.patients = Docts.all();
$scope.remove = function(patient) {
  Docts.remove(patient);
};

$scope.showAlert = function(nam) {
	
   var alertPopup = $ionicPopup.alert({
     title: nam,
     templateUrl: 'templates/templatesPh/patientmed1.html'
   });
  };

})
/*
.controller('MedCtrl', function($scope, medicines,$ionicHistory,$ionicPopup) {

$scope.meds = medicines.all();


$scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Acne',
     templateUrl: 'templates/templatesPh/patientmed.html'
   });
  };

})*/

.controller('PatientDetailCtrl', function($scope, $stateParams, Patients) {
$scope.patient = Patients.get($stateParams.patientsId);

})
.controller('AppointDetailCtrl', function($scope, $stateParams, Patients) {
$scope.patient = Patients.get($stateParams.appointId);

})

.controller('Action', function($scope, $ionicActionSheet,$location, $state,ContactService,Patients) {
 
  /* $scope.showActionsheetDoc = function() {

    $ionicActionSheet.show({
      buttons: [
        
        { text: '<div class="padding" >Add Patient</div>' }
      ],

      cancelText: 'Cancel',
      cancel: function() {

      },
      buttonClicked: function(index) {
        
			 if(index === 0){ // Allgemein
			 	  $state.go('tab.addPrescription');
			 }
        return true;
      },
      destructiveButtonClicked: function() {
        return true;
      }
    });
  };
 */
  $scope.showActionsheet = function() {

    $ionicActionSheet.show({
      buttons: [
        
        { text: '<div class="padding" >Add Prescription</div>' }
      ],

      cancelText: 'Cancel',
      cancel: function() {

      },
      buttonClicked: function(index) {
        
			 if(index === 0){ // Allgemein
			 	  $state.go('pharmacy.addPrescription');
			 }
        return true;
      },
      destructiveButtonClicked: function() {
        return true;
      }
    });
  };
   $scope.cancelAddress=function(){

	
		
	  $state.go('pharmacy.patients');
	 
  };

  //uid=3;
  $scope.contacts = ContactService.list();
  //alert(JSON.stringify($scope.contacts));
  $scope.newcontact = {};
  $scope.saveAddress=function(){
//alert($scope.newcontact.fname)
	 ContactService.save($scope.newcontact);
       

$state.go("pharmacy.patientaddress");
        
		
    };
		
  
   $scope.cancel=function(){
$state.go("pharmacy.addPrescription");
        };
 
  $scope.done=function(){
	  $scope.p=Patients.all();
	  $scope.add={};
	  alert($scope.add.fname);
	  var id1=$scope.p[$scope.p.length-1].id+1;
	  var savep={
    id: id1,
    face: 'img/mike.png',
    name: $scope.add.fname,
    PatientID: '12556'+id1,
    Age : $scope.add.fname,
    message : 'Hi doctor',
	date:'26/3/2017 3.20PM',
    gender:'Male'
  };
	 // Patients.save(savep);
$state.go("pharmacy.patients");

        };
})
.controller('AddressCtrl', function($scope, $stateParams) {
//alert(JSON.stringify($stateParams.addr)+" sss");
//$scope.fname=$stateParams.addr;
$scope.addr=$stateParams.addr;
alert($scope.addr);
})
.controller('MedicinesCtrl', function($scope,$state, $ionicPopup) {
$scope.showAlert = function() {
	//alert()
   /*var alertPopup = $ionicPopup.alert({
     title: 'Ibuprofen',
     templateUrl: 'templates/medicinedetail.html'
   }); */
   $state.go("tab.medicineView");
  };
})


.controller('mainctrl', function($scope,$state,Questions,PQuestions,PHQuestions,$location,$ionicHistory) {
	 $scope.goBack = function() {
     $ionicHistory.goBack();
    };

	 $scope.questions = Questions.all();
	 $scope.pquestions = PQuestions.all();
	 	 $scope.phquestions = PHQuestions.all();
  //alert(JSON.stringify($scope.contacts))
 /* $scope.qashow="true";
   $scope.quesshow="true";*/

  $scope.clearSearch = function() {
    $scope.search = '';
  };
})
.controller('maindetailctrl', function($scope, $stateParams,$ionicHistory, Questions,PQuestions,PHQuestions) {
	$scope.question = Questions.get($stateParams.questionId);
$scope.pquestion = PQuestions.get($stateParams.questionId);
$scope.phquestion = PHQuestions.get($stateParams.questionId);
 $scope.goBack = function() {
     $ionicHistory.goBack();
    };
})

.controller('AccountCtrl', function($scope,$ionicHistory,$state) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.logout=function(){
	  $ionicHistory.clearCache();
	  $ionicHistory.clearHistory();
$ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
$state.go("loginHome");
	  
	  
  }
})
.service('ContactService', function () {
    //to create unique contact id
    var uid = 15567;
    
    //contacts array to hold list of all contacts
    var contacts = [];
    
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }

    }

    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }

    }
    
    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }

    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
});
