angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('PatientsCtrl', function($scope, Patients) {
$scope.patients = Patients.all();
$scope.remove = function(patient) {
  Patients.remove(patient);
};
})

.controller('PatientDetailCtrl', function($scope, $stateParams, Patients) {
$scope.patient = Patients.get($stateParams.patientsId);

})

.controller('Action', function($scope, $ionicActionSheet,$location, $state) {

  $scope.showActionsheet = function() {

    $ionicActionSheet.show({
      buttons: [
        { text: '<div class="padding" ui-sref="addPrescription">Add Patient</div>' },
        { text: '<div class="padding" ui-sref="addPrescription">Add Prescription</div>' },
      ],

      cancelText: 'Cancel',
      cancel: function() {

      },
      buttonClicked: function(index) {
        
        return true;
      },
      destructiveButtonClicked: function() {
        return true;
      }
    });
  };
})

.controller('MedicinesCtrl', function($scope, $ionicPopup) {
$scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Ibuprofen',
     templateUrl: 'templates/medicinedetail.html'
   });
  };
})

.controller('appoimnetconformationCtrl', function($scope, $ionicPopup) {
$scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Ibuprofen',
     templateUrl: 'templates/appoimnetconformation.html'
   });
  };
})




.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});



