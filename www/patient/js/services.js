angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory('Patients', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var patients = [{
    id: 0,
    face: 'img/patients1.png',
    name: 'Ben Sparrow',
    PatientID: '125543',
    Age : '20',
    message : 'Hi doctor'
  }, {
    id: 1,
    face: 'img/patients2.png',
    name: 'Max Lynx',
    PatientID: '125544',
    Age : '30',
    message : 'Hi doctor'
  }, {
    id: 2,
    face: 'img/patients3.png',
    name: 'Peterson',
    PatientID: '125545',
    Age : '40',
    message : 'Hi doctor'
  }, {
    id: 3,
    face: 'img/ben.png',
    name: 'Kevin Peterson',
    PatientID: '125546',
    Age : '20',
    message : 'Hi doctor'
  }];

  return {
    all: function() {
      return patients;

    },
    remove: function(patient) {
      patients.splice(chats.indexOf(patient), 1);
    },
    get: function(patientsId) {
      for (var i = 0; i < patients.length; i++) {
        if (patients[i].id === parseInt(patientsId)) {
          return patients[i];

        }
      }
      return null;
    }
  };
});
