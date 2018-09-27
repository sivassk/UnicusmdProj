// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top
    $ionicConfigProvider.navBar.alignTitle('center');

}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('login', {
       url: "/login",
       templateUrl: 'templates/login.html',
       controller: ''
    })
    .state('registration', {
         url: "/registration",
         templateUrl: 'templates/registration.html',
         controller: ''
      })

    
      .state('addPrescription', {
           url: "/addPrescription",
           templateUrl: 'templates/addPrescription.html',
           controller: 'Action'
        })

      .state('doctorprofile', {
         url: "/doctorprofile",
         templateUrl: 'templates/doctorprofile.html',
         controller: 'Action'
      })


.state('today', {
         url: "/today",
         templateUrl: 'templates/today.html',
         controller: 'Action'
      })

.state('week', {
         url: "/week",
         templateUrl: 'templates/week.html',
         controller: 'Action'
      })


   
      .state('prescribedmedicines', {
         url: "/prescribedmedicines",
         templateUrl: 'templates/prescribedmedicines.html',
         controller: 'Action'
      })

      
       .state('shippingaddres', {
         url: "/shippingaddres",
         templateUrl: 'templates/shippingaddres.html',
         controller: 'Action'
      })
        .state('paymentmethod', {
         url: "/paymentmethod",
         templateUrl: 'templates/paymentmethod.html',
         controller: 'Action'
      })
     
      .state('orderconfirmation', {
         url: "/orderconfirmation",
         templateUrl: 'templates/orderconfirmation.html',
         controller: 'Action'
      })
     
     
   
          .state('doctorreview', {
         url: "/doctorreview",
         templateUrl: 'templates/doctorreview.html',
         controller: ''
      })
          .state('shipping', {
         url: "/shipping",
         templateUrl: 'templates/shipping.html',
         controller: ''
      })
         
          .state('videochat', {
         url: "/videochat",
         templateUrl: 'templates/videochat.html',
         controller: ''
      })
           .state('monthly', {
         url: "/monthly",
         templateUrl: 'templates/monthly.html',
         controller: ''
      })
.state('weekly', {
         url: "/weekly",
         templateUrl: 'templates/weekly.html',
         controller: ''
      })
.state('appoiment', {
         url: "/appoiment",
         templateUrl: 'templates/appoiment.html',
         controller: ''
      })
.state('report', {
         url: "/report",
         templateUrl: 'templates/report.html',
         controller: ''
      })
.state('personaldetails', {
         url: "/personaldetails",
         templateUrl: 'templates/personaldetails.html',
         controller: ''
      })



         .state('doctorappoimnet', {
         url: "/doctorappoimnet",
         templateUrl: 'templates/doctorappoimnet.html',
         controller: ''
      })



         //.state('doctorappoimnet', {
         //url: "/doctorreview",
         //templateUrl: 'templates/doctorappoimnet.html',
         //controller: ''
      //})



        .state('doctorappoiment.today', {
       url: "/today",
       views: {
           'today': {
               templateUrl: 'templates/today.html',
               controller: 'PatientsCtrl'
           }
       }
   })


.state('doctorappoiment.monthly', {
 url: "/monthly",
 views: {
     'monthly': {
         templateUrl: 'templates/monthly.html',
         controller: 'PatientsCtrl'
     }
 }
})


       .state('conformation', {
             url: "/medicinedetail",
             templateUrl: 'templates/medicinedetail.html',
             controller: 'MedicinesCtrl'
          })

       .state('addcatetaker', {
             url: "/addcatetaker",
             templateUrl: 'templates/addcatetaker.html',
             controller: 'addcatetakerCtrl'
          })




    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })







  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    .state('tab.appointments', {
        url: '/appointments',
        views: {
          'tab-appointments': {
            templateUrl: 'templates/tab-appointments.html',
            controller: 'PatientsCtrl'
          }
        }
      })
      .state('tab.appointments.today', {
       url: "/today",
       views: {
           'today': {
               templateUrl: 'templates/today.html',
               controller: 'PatientsCtrl'
           }
       }
   })
   .state('tab.appointments.weekly', {
    url: "/weekly",
    views: {
        'weekly': {
            templateUrl: 'templates/weekly.html',
            controller: 'PatientsCtrl'
        }
    }
})


      .state('tab.patients', {
          url: '/patients',
          views: {
            'tab-patients': {
              templateUrl: 'templates/tab-patients.html',
              controller: 'PatientsCtrl'
            }
          }
        })
        .state('tab.patient-detail', {
          url: '/chats/:patientsId',
          views: {
            'tab-chats': {
              templateUrl: 'templates/patient-detail.html',
              controller: 'PatientDetailCtrl'
            }
          }
        })
        .state('tab.medicineslist', {
            url: '/medicineslist',
            views: {
              'tab-medicineslist': {
                templateUrl: 'templates/tab-medicineslist.html',
                controller: ''
              }
            }
          })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});






