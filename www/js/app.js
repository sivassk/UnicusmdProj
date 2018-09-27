// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','highcharts-ng'])

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
       controller: 'LoginCntrl'
    })
	 .state('loginHome', {
       url: "/loginHome",
       templateUrl: 'templates/loginHome.html',
       controller: ''
    })
	 .state('loginPatient', {
       url: "/loginPatient",
       templateUrl: 'templates/templates/login2.html',
       controller: 'LoginCntrl'
    })
	.state('loginPharmacy', {
       url: "/loginPharmacy",
       templateUrl: 'templates/templatesPh/loginPh.html',
       controller: 'LoginCntrl'
    })
    .state('registration', {
         url: "/registration",
         templateUrl: 'templates/registration.html',
         controller: ''
      })

        .state('medicinedetail', {
             url: "/medicinedetail",
             templateUrl: 'templates/medicinedetail.html',
             controller: 'MedicinesCtrl'
          })
		 
	 
	
		  //pharmacy
		    .state('pharmacy', {
    url: '/pharmacy',
    abstract: true,
    templateUrl: 'templates/templatesPh/tabs.html'
  })
  
  .state('pharmacy.dash', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/templatesPh/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
	

  .state('pharmacy.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/templatesPh/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('pharmacy.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/templatesPh/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
	.state('pharmacy.analytics', {
        url: '/analytics',
        views: {
          'tab-analytics': {
            templateUrl: 'templates/templatesPh/tab-analytics.html',
            controller: ''
          }
        }
      })
	  .state('pharmacy.phfaq', {
       url: "/phfaq",
	   views: {
          'tab-analytics': {
       templateUrl: 'templates/templatesPh/faq.html',
       controller: 'mainctrl'
		  }
	   }
    })
	
	.state('pharmacy.phfaqdetail', {
       url: "/analytics/:questionId",
	   views: {
          'tab-analytics': {
       templateUrl: 'templates/templatesPh/contact-detail.html',
       controller: 'maindetailctrl'
		  }
	   }
    })
	          .state('pharmacy.patients', {
          url: '/patients',
          views: {
            'tab-patients': {
              templateUrl: 'templates/templatesPh/tab-patients.html',
              controller: 'PatientsCtrl'
            }
          }
        })
        .state('pharmacy.patient-detail', {
          url: '/patients/:patientsId',
          views: {
            'tab-patients': {
              templateUrl: 'templates/templatesPh/patient-detail.html',
              controller: 'PatientDetailCtrl'
            }
          }
        })
		      .state('pharmacy.addPrescription', {
           url: "/addPrescription",
		    views: {
            'tab-patients': {
           templateUrl: 'templates/templatesPh/addPrescription.html',
           controller: 'Action'
			}}
        })
		 .state('pharmacy.patientaddress', {
           url: "/patientaddress/",
		    views: {
            'tab-patients': {
           templateUrl: 'templates/templatesPh/patient-address.html',
           controller: 'Action'
			}}
        })
    .state('pharmacy.appointments', {
        url: '/appointments',
        views: {
          'tab-appointments': {
            templateUrl: 'templates/templatesPh/tab-appointments.html',
            controller: 'PatientsCtrl'
          }
        }
      })
	 
	
   .state('pharmacy.medicine', {
       url: "/medicine",
	   views: {
          'tab-analytics': {
       templateUrl: 'templates/templatesPh/analyticsMedicine.html',
       controller: 'diseasectrl'
		  }
	   }
    })
	 .state('pharmacy.medicine.overview', {
       url: "/overview",
      
               templateUrl: 'templates/templatesPh/overview.html',
               controller: 'DoctCtrl'
          
   })
   .state('pharmacy.medicine.medicine', {
    url: "/medicine",
   
            templateUrl: 'templates/templatesPh/medicine1.html',
            controller: 'medctrlPh'
      
})
    
   .state('pharmacy.medicine.patient', {
    url: "/patient",
   
            templateUrl: 'templates/templatesPh/patient.html',
            controller: 'PatientsCtrl'
      
})
.state('pharmacy.medicine.disease', {
 url: "/disease",

         templateUrl: 'templates/templatesPh/medicinedisease.html',
         controller: 'diseasectrlPh'
    
})
      .state('pharmacy.appointments.today', {
       url: "/today",
       views: {
           'today': {
               templateUrl: 'templates/templatesPh/today.html',
               controller: 'PatientsCtrl'
           }
       }
   })
   .state('pharmacy.appointments.weekly', {
    url: "/weekly",
    views: {
        'weekly': {
            templateUrl: 'templates/templatesPh/weekly.html',
            controller: 'PatientsCtrl'
        }
    }
})


      
        .state('pharmacy.medicineslist', {
            url: '/medicineslist',
            views: {
              'tab-medicineslist': {
                templateUrl: 'templates/templatesPh/tab-medicineslist.html',
                controller: 'PatientsCtrl'
              }
            }
          })


  .state('pharmacy.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/templatesPh/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
	//patient	  
		   .state('patient', {
    url: '/patient',
    abstract: true,
    templateUrl: 'templates/templates/tabs.html'
  })
  .state('patient.dash', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
   
	
  .state('patient.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('patient.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
	.state('patient.analytics', {
        url: '/analytics',
        views: {
          'tab-analytics': {
            templateUrl: 'templates/templates/tab-analytics.html',
            controller: ''
          }
        }
      })
	  .state('patient.pfaq', {
       url: "/pfaq",
	   views: {
          'tab-analytics': {
       templateUrl: 'templates/templates/faq.html',
       controller: 'mainctrl'
		  }
	   }
    })
	 .state('patient.medicine', {
       url: "/medicine",
	   views: {
          'tab-analytics': {
       templateUrl: 'templates/templates/analyticsMedicine.html',
       controller: 'diseasectrl'
		  }
	   }
    })
	 .state('patient.medicine.overview', {
       url: "/overview",
       
               templateUrl: 'templates/templates/overview.html',
               controller: 'diseasectrl'
           
      
   })
    
	  .state('patient.medicine.medicine', {
    url: "/medicine",
    
            templateUrl: 'templates/templates/medicine1.html',
            controller: 'medctrl'
        
    
})


   .state('patient.medicine.patient', {
    url: "/patient",
    
            templateUrl: 'templates/templates/patient.html',
            controller: 'PatientsCtrl'
      
})
.state('patient.medicine.disease', {
 url: "/disease",
         templateUrl: 'templates/templates/medicinedisease.html',
         controller: 'diseasectrl'
     
 
})

	.state('patient.pfaqdetail', {
       url: "/analytics/:questionId",
	   views: {
          'tab-analytics': {
       templateUrl: 'templates/templates/contact-detail.html',
       controller: 'maindetailctrl'
		  }
	   }
    })
	 
	 
    .state('patient.appointments', {
        url: '/appointments',
        views: {
          'tab-appointments': {
            templateUrl: 'templates/templates/tab-appointments.html',
            controller: 'PatientsCtrl'
          }
        }
      })
      .state('patient.appointments.today', {
       url: "/today",
       views: {
           'today': {
               templateUrl: 'templates/templates/today.html',
               controller: 'PatientsCtrl'
           }
       }
   })
   .state('patient.appointments.weekly', {
    url: "/weekly",
    views: {
        'weekly': {
            templateUrl: 'templates/templates/weekly.html',
            controller: 'PatientsCtrl'
        }
    }
})

       
        .state('patient.medicineslist', {
            url: '/medicineslist',
            views: {
              'tab-medicineslist': {
                templateUrl: 'templates/templates/tab-medicineslist.html',
                controller: ''
              }
            }
          })


  .state('patient.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
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
	.state('tab.analytics', {
        url: "/analytics",
        views: {
          'tab-analytics': {
            templateUrl: 'templates/tab-analytics.html',
            controller: ''
          }
        }
      })
	   .state('tab.faq', {
       url: "/faq",
	   views: {
          'tab-analytics': {
       templateUrl: 'templates/faq.html',
       controller: 'mainctrl'
		  }
	   }
    })
	
   .state('tab.medicine', {
       url: "/medicine",
	   views: {
          'tab-analytics': {
       templateUrl: 'templates/analyticsMedicine.html',
       controller: 'diseasectrl'
		  }
	   }
    })
	 .state('tab.medicine.overview', {
       url: "/overview",
       
               templateUrl: 'templates/overview.html',
               controller: 'diseasectrl'
           
      
   })
    
	   .state('tab.medicine.medicine', {
    url: "/medicine",
    
            templateUrl: 'templates/medicine1.html',
            controller: 'searchcontroller'
        
    
})

   .state('tab.medicine.patient', {
    url: "/patient",
    
            templateUrl: 'templates/patient.html',
            controller: 'PatientsCtrl'
       
    
})
.state('tab.medicine.disease', {
 url: "/disease",
 
         templateUrl: 'templates/medicinedisease.html',
         controller: 'diseasectrl'
     
 
})
	
   .state('tab.faq-detail', {
       url: "/analytics/:questionId",
	   views: {
          'tab-analytics': {
       templateUrl: 'templates/contact-detail.html',
       controller: 'maindetailctrl'
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
    
   .state('tab.appointments.upcoming', {
    url: "/upcoming",
    views: {
        'upcoming': {
            templateUrl: 'templates/upcoming.html',
            controller: 'PatientsCtrl'
        }
    }
})
.state('tab.appointments.past', {
 url: "/past",
 views: {
     'past': {
         templateUrl: 'templates/past.html',
         controller: ''
     }
 }
})
.state('tab.appointments-detail', {
          url: '/appointments/:appointId',
          views: {
            'tab-appointments': {
              templateUrl: 'templates/patient-detail.html',
              controller: 'AppointDetailCtrl'
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
          url: '/patients/:patientsId',
          views: {
            'tab-patients': {
              templateUrl: 'templates/patient-detail.html',
              controller: 'PatientDetailCtrl'
            }
          }
        })
	 /*  .state('tab.addPrescription', {
           url: "/addPrescription",
		    views: {
            'tab-patients': {
           templateUrl: 'templates/addPrescription.html',
           controller: 'Action'
			}}
        })
		 .state('tab.patientaddress', {
           url: "/patientaddress/",
		    views: {
            'tab-patients': {
           templateUrl: 'templates/patient-address.html',
           controller: 'Action'
			}}
        }) */
       .state('tab.medicineslist', {
            url: '/medicineslist',
            views: {
              'tab-medicineslist': {
                templateUrl: 'templates/tab-medicineslist.html',
                controller: 'MedicinesCtrl'
              }
            }
          })
		.state('tab.medicineView', {
            url: '/medicineView',
            views: {
              'tab-medicineslist': {
                templateUrl: 'templates/PieChart.html',
                controller: 'PieChartCtrl'
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
  $urlRouterProvider.otherwise('/loginHome');

});
