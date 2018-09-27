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
.factory('Contacts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var contacts =  [{"id":1,"first_name":"Patrick","last_name":"Adams","country":"Cyprus","ip_address":"153.88.89.148","email":"progers@yata.net"},
{"id":2,"first_name":"Janet","last_name":"Burns","country":"Croatia","ip_address":"209.73.121.212","email":"jgordon@skivee.biz"},
{"id":3,"first_name":"Kathy","last_name":"Chancey","country":"Armenia","ip_address":"164.214.217.162","email":"khamilton@rhynyx.biz"},
{"id":4,"first_name":"Stephanie","last_name":"Dennis","country":"Mauritius","ip_address":"8.199.242.67","email":"sjohnson@jabbertype.mil"},
{"id":5,"first_name":"Jerry","last_name":"Edwards","country":"Thailand","ip_address":"230.207.100.163","email":"jpalmer@avamm.org"},
{"id":6,"first_name":"Lillian","last_name":"Franklin","country":"Germany","ip_address":"150.190.116.1","email":"lfranklin@eare.mil"},
{"id":7,"first_name":"Melissa","last_name":"Gordon","country":"Serbia","ip_address":"162.156.29.99","email":"mgordon@flashset.org"},
{"id":8,"first_name":"Sarah","last_name":"Harris","country":"Grenada","ip_address":"13.177.156.223","email":"sburns@eimbee.info"},
{"id":9,"first_name":"Willie","last_name":"Ingles","country":"Croatia","ip_address":"115.133.81.82","email":"wburton@dynazzy.info"},
{"id":10,"first_name":"Tina","last_name":"Johnson","country":"United States Virgin Islands","ip_address":"113.49.63.18","email":"tsimmons@devpulse.mil"},
{"id":11,"first_name":"Kenneth","last_name":"Kent","country":"Mexico","ip_address":"92.89.76.196","email":"klarson@browseblab.info"},
{"id":12,"first_name":"Philip","last_name":"Lyles","country":"Cuba","ip_address":"223.180.48.70","email":"pwelch@skippad.edu"},
{"id":13,"first_name":"Nicholas","last_name":"Marker","country":"British Indian Ocean Territory","ip_address":"200.150.119.13","email":"nparker@twitternation.net"},
{"id":14,"first_name":"Nicole","last_name":"Nebb","country":"Moldova","ip_address":"47.66.237.205","email":"nwebb@midel.biz"},
{"id":15,"first_name":"Clarence","last_name":"Olsen","country":"China","ip_address":"134.84.246.67","email":"cschmidt@dazzlesphere.net"},
{"id":16,"first_name":"Jessica","last_name":"Peterson","country":"Sao Tome and Principe","ip_address":"211.30.32.109","email":"jmurray@jumpxs.net"},
{"id":17,"first_name":"Willie","last_name":"Quite","country":"US Minor Outlying Islands","ip_address":"158.40.109.208","email":"wschmidt@babbleset.edu"},
{"id":18,"first_name":"Margaret","last_name":"Robertson","country":"Bhutan","ip_address":"252.123.77.101","email":"mevans@voolia.info"},
{"id":19,"first_name":"Arthur","last_name":"Simmons","country":"Faroe Islands","ip_address":"116.5.126.29","email":"amorales@brainlounge.biz"},
{"id":20,"first_name":"Charles","last_name":"55063","country":"Italy","ip_address":"10.43.255.4","email":"cperez@avaveo.net"},
{"id":21,"first_name":"Jeffrey","last_name":"Turner","country":"Liechtenstein","ip_address":"55.140.114.8","email":"jwebb@mynte.net"},
{"id":22,"first_name":"Andrea","last_name":"Upton","country":"Nauru","ip_address":"22.243.12.86","email":"asimpson@browsetype.mil"},
{"id":23,"first_name":"Steve","last_name":"15063","country":"Morocco","ip_address":"21.166.38.112","email":"sreynolds@topiclounge.biz"},
{"id":24,"first_name":"Gerald","last_name":"Veyes","country":"Isle of Man","ip_address":"235.115.15.46","email":"greyes@voolith.biz"},
{"id":25,"first_name":"Judy","last_name":"Washington","country":"Sweden","ip_address":"39.120.240.182","email":"jwashington@oyondu.net"},
{"id":26,"first_name":"Brandon","last_name":"Xi","country":"Vietnam","ip_address":"18.176.165.38","email":"bpatterson@skyba.org"},{"id":27,"first_name":"Brandon","last_name":"Yore","country":"Vietnam","ip_address":"18.176.165.38","email":"batterson@skyba.org"},{"id":28,"first_name":"Brandon","last_name":"Zeff","country":"Vietnam","ip_address":"18.176.165.38","email":"bpatterson@skyba.org"}];

  return {
    all: function() {
      return contacts;
    },
   
    get: function(contactId) {
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id === parseInt(contactId)) {
          return contacts[i];
        }
      }
      return null;
    }
  };
})

.factory('Questions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var questions = [
  {
			id:1,
			question: "Who is most loyal patient?",
			answer: "Watson from Livonia "
		},
		{
			id:2,
			question: "What is the most diagnosed disease?",
			answer: "Acne" 
		},
		{	
		   id:3,
			question: "What is the popularity for Acne in my area?",
			answer: " Second most popular disease in my area"
		},
		{
			id:4,
			question: "what is the most popular age group among my patients?",
			answer: "25-35"
		},
		{
			id:5,
			question: "What is the right treatment for varicosities in the leg?",
			answer: "Varicosities in the leg can be treated by injection therapy or by surgery. Surgery gives better results than injection therapy. Surgery may be open surgery  or endoscopic surgery. The results from both types of surgery are about the same. Most surgeons would take measures to heal the ulcer first, before operating to remove the varicose veins."
		},
		{
			id:6,
			question: "Why do I have frequent itching in my ear?",
			answer: "Itching in ear will get worse if you clean ear every day especially if you use an ear bud. Stop cleaning. Take atarax (10 mg) tablet at bed time and put betnesol N ear drops once after bath."
		},
		{
			id:7,
			question: "What causes ringworms?",
			answer: "  Ringworm is not caused by the fungus Candida but by dermatophytes. Usually dermatophyte infections of the skin requires around 3 weeks of treatment. If the condition recurs again and again, then there must be some predisposing factors. These need to be identified and managed."
		},
		{
			id:8,
			question: "Do I need to undergo an angiogram?",
			answer: " From your reports, it appears that you ideally should undergo an angiogram in view of your family history and the finding of a 30% lesion in your previous angiogram.  But as your cardiologist suggested, it would be better to exhaust non- invasive modalities first.  Hence, an isotope scan would be advisable as it would indicate whether or not, you will require a formal invasive angiography.  This investigation will reveal any area of heart muscle that is ischemic and hence dictate the need for a further invasive angiogram.  However, the final call in this regard would be better taken after discussion with your treating cardiologist." 
		},
		{	
		   id:9,
			question: "Does alcohol within limit damage the liver?",
			answer: "Important factor is what is a reasonable limit of alcohol intake and how your body metabolises alcohol. We also need to consider your lifestyle including smoking, diet, exercise, family history of diabetes, hypertension, liver or heart disease. You may undergo a baseline blood test for liver (LFT) including GGT, lipid profile, fasting blood sugar and creatinine. Subsequently, tests are not required every month but can be done once or twice a year depending on these values. Your doctor can interpret these lab results for you."
		},
		{	
		   id:9,
			question: "How to cure Appendicitis?",
			answer: "The treatment for appendicitis usually is antibiotics and appendectomy (surgery to remove the appendix)."
		}
		
	];
  return {
    all: function() {
      return questions;
    },
    get: function(questionId) {
      for (var i = 0; i < questions.length; i++) {
        if (questions[i].id === parseInt(questionId)) {
          return questions[i];
        }
      }
      return null;
    }
  };
})
.factory('PQuestions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pquestions = [
		{
			id:1,
			question: "How can lymphoedema be treated?",
			answer: " Not an easy situation. I don't know the extent of the lymphoedema, but I think if the lymphoedema is controlled, the symptoms will decrease. Contact a plastic surgeon and ask the plastic surgeon where you can get compression therapy. In this therapy they apply severe compression to the limb to decrease the lymphoedema. It may take several sittings, but gives good results. The limb will not become normal, but will become better. In my opinion, do not accept surgery, even if the plastic surgeon recommends it, unless you have first seen the compression therapy specialist."
		},
		{
			id:2,
			question: "What is the treatment for opioid addiction?",
			answer: "Opioid addiction is addressed by going for detoxification first and then taking Naltrexone 50 mg daily. If you take the drug without detoxing, you will experience forced withdrawal. Naltrexone helps with craving and preventing further relapse. Please consult a psychiatrist and also go to ‘12 steps’ meetings."
		},
		{
			id:3,
			question: "Why am I suffering from swelling in legs and joint pain after dengue?",
			answer: "Generally, swelling in joints in dengue subsides in 2-4 weeks of illness. Dengue also causes some derangement in liver enzymes, low protein levels and capillaries become leaky causing swelling over body, fluid collection around lungs and in abdomen. All these recover naturally. In your case, your liver function maybe weak due to an alcohol problem and symptoms are taking longer to resolve. Check liver function tests (LFT) and uric acid, restrict alcohol and increase protein intake in diet. Elevate your legs while sleeping by using a pillow. Take paracetamol for pain."
		},
		{
			id:4,
			question: "What are the chances of recurrent seizures?",
			answer: "Febrile seizures (febrile convulsions) are the most common convulsive events in human experience. Although they can be frightening to parents, the vast majority of febrile seizures are harmless. The earlier the age of onset, the more likely is a recurrence, particularly if the onset is under 12 months of age. Children with a first febrile seizure before 1 year of age have a 50% chance of recurrence, compared with a recurrence risk of only 20% if the first seizure is after age of 3 years." 
		},
		{	
		   id:5,
			question: "How can my hair fall be managed?",
			answer: "Medicines which contain minoxidil are useful in androgenetic alopecia. The drug minoxidil inhibits the enzyme 5-alpha reductase which converts testosterone into 5DHT. It is this 5DHT which stops the hair from re-growing. Therefore, minoxidil will be effective only in cases where 5-alpha reductase is involved in the genesis of alopecia. In the genesis of alopecia areata (AA) this enzyme has no role. Hence from scientific point of view, minoxidil has no role in AA"
		},
		{
			id:6,
			question: "What are hemorrhoids?",
			answer: "The blood vessels that line the anus are the hemorrhoid blood vessels. They form three cushions or bumps at the end of the anus that helps maintain continence. We all have hemorrhoids. When they enlarge the pressure builds up and they may be painful and bleed. "
		},
		{
			id:7,
			question: "Can I eat before visit? Preparation?",
			answer: "There is no need to fast or take an enema before treatment. We encourage you to eat a well balanced meal before coming in for treatment." 
		},
		{	
		   id:8,
			question: "What should my blood sugar level be?",
			answer: "Blood sugar ranges may be different for each person and can change throughout the day. Your health care provider will tell you what range is good for you. If your blood sugar is less than 70 mg/dl or more than 180 mg/dl for three days in a row, call your health care provider."
		},
		{
			id:9,
			question: "How can I know if I have diabetes?",
			answer: "Your health care provider can perform blood and urine tests to see if you have diabetes. Normal blood sugar is between 70 mg/dl and 100 mg/dl. The standard diagnosis of diabetes is made when two blood tests show that your fasting blood sugar level (blood sugar before you have eaten anything) is 126 mg/dl or greater."
		},
		{
			id:10,
			question: "How Arthritis can be cured?",
			answer: "Doctors traditionally treat arthritis with anti-inflammatory medications and painkillers. However, some medications cause side effects, and a natural approach to pain relief is becoming more popular. Remember to consult your doctor before trying these natural remedies."
		}
	];
  return {
    all: function() {
      return pquestions;
    },
    get: function(questionId) {
      for (var i = 0; i < pquestions.length; i++) {
        if (pquestions[i].id === parseInt(questionId)) {
          return pquestions[i];
        }
      }
      return null;
    }
  };
})
 .factory('PHQuestions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var phquestions = [
		{
			id:1,
			question: "How do I know if a nonprescription medication is working?",
			answer: "If your illness (i.e., fever, cough, or body ache) doesn't get better in three to five days, you should seek additional medical care. Over-the-counter (nonprescription) drugs are meant to treat only the most minor health problems."
		},
		{
			id:2,
			question: "If I get confused about what I can eat and not eat and certain side effects with my prescription, what should I do?",
			answer: " All four of our outpatient pharmacies have a designated quiet area for person and confidential consultations for patient and pharmacist discussions."
		},
		{
			id:3,
			question: "What about generic drugs?",
			answer: " Generic drugs are an excellent way to help avoid spiraling medical costs. Generics are approved and endorsed by the government. In other words, generic prescriptions are just as safe and as effective as brand name drugs and, in fact, have been found to have fewer recalls."
		},
		{
			id:4,
			question: "I live in a house with no children in it, why do I have to suffer with those “child proof” caps when I want to take my medicine?",
			answer:" Tell your pharmacist and request no child proof caps on all of your medications." 
		},
		{	
		   id:5,
			question: "My course of treatment requires hypodermic needles (household sharps). How do I safely get rid of used household sharps?",
			answer: "Medicines which contain minoxidil are useful in androgenetic alopecia. The drug minoxidil inhibits the enzyme 5-alpha reductase which converts testosterone into 5DHT. It is this 5DHT which stops the hair from re-growing. Therefore, minoxidil will be effective only in cases where 5-alpha reductase is involved in the genesis of alopecia. In the genesis of alopecia areata (AA) this enzyme has no role. Hence from scientific point of view, minoxidil has no role in AA"
		},
		{
			id:6,
			question: "What does it take to be an excellent pharmacist?",
			answer: " Information. No professional has more access to understanding today's drug information than a good pharmacist. The age-old profession that even precedes ancient Greece has changed from being product-centered to information gathering and education. Pharmacists help people manage their diseases."
		},
		{
			id:7,
			question: "What's one of the quickest ways to land back in the hospital following discharge?",
			answer: "Not taking medications as prescribed." 
		},
		{	
		   id:8,
			question: "My mother puts all medications in the refrigerator. Should all medications be refrigerated?",
			answer: "Proper storage of drugs is always on the label of a certified pharmaceutical. Follow those guidelines which may, in fact, call for refrigeration."
		},
		
		{	
		   id:9,
			question: "How are the URMC outpatient pharmacies different from a regular pharmacy?",
			answer: "Our staff in all four facilities represent a knowledge base with specialty prescriptions not routinely found in community pharmacies. Hospitals are different. On a daily basis we serve the pharmacy needs for transplant procedures, HIV, hepatitis, severe mental illness, and other complicated conditions. We also offer specialty pharmaceuticals by (compounding) right in Strong Memorial Hospital."
		},
		{	
		   id:10,
			question: "How long will I have to wait to have my prescription filled?",
			answer: "Assuming you are a walk-in customer, all three URMC outpatient pharmacies try to fill a prescription within 20 minutes, but due to the work load, this is not always possible. To avoid delays, you can call ahead so that the prescription will be ready to be picked up."
		}
		
	];
  return {
    all: function() {
      return phquestions;
    },
    get: function(questionId) {
      for (var i = 0; i < phquestions.length; i++) {
        if (phquestions[i].id === parseInt(questionId)) {
          return phquestions[i];
        }
      }
      return null;
    }
  };
})
 .factory('Diseases', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var diseases = [
		{
			id:1,
			disease: "Acne"
			},
		{
			id:2,
			disease: "Degenerative Joint Disease (Osteoarthritis)"
			},
		{
			id:3,
			disease: "Dental Lasers (Lasers in Dental Care)"
			},
		{
			id:4,
			disease: "Testicular Cancer"
			},
		{
			id:5,
			disease: "Deep Skin Infection (Cellulitis)"
			},
		{	
		   id:6,
			disease: "Telangiectasias (Varicose Veins)"},
			/*{	
		   id:7,
			disease: "Hashimoto's Thyroiditis"},
			{	
			
		   id:8,
			disease: "Enteritis (Crohn's Disease)" },
			{	
			
		   id:9,
			disease: "Liposuction"} */
	];
  return {
    all: function() {
      return diseases;
    },
    get: function(diseaseId) {
      for (var i = 0; i < diseases.length; i++) {
        if (diseases[i].id === parseInt(diseaseId)) {
          return diseases[i];
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
    message : 'Hi doctor',
	date:'12/4/2017 2.30PM',
    gender:'Male'
  }, {
    id: 1,
    face: 'img/patients2.png',
    name: 'Robert',
    PatientID: '125544',
    Age : '30',
    message : 'Hi doctor, please provide medicine name',
	date:'17/4/2017  11.00AM',
    gender:'Male'
  }, {
    id: 2,
    face: 'img/patients3.png',
    name: 'Monika Julanda',
    PatientID: '125545',
    Age : '20',
    message : 'Hi doctor, still getting joint pains',
	date:'21/4/2017 10.05AM',
    gender:'Female'
  },
  {
    id: 3,
    face: 'img/max.png',
    name: 'Max Lynx',
    PatientID: '125546',
    Age : '20',
    message : 'Hi doctor, still getting joint pains',
	date:'22/4/2017 4.05PM',
    gender:'Female'
  },
  {
    id: 4,
    face: 'img/mike.png',
    name: 'Mike',
    PatientID: '125547',
    Age : '27',
    message : 'Hi doctor, still getting joint pains',
	date:'25/4/2017 12.05PM',
    gender:'Male'
  },
  {
    id: 5,
    face: 'img/adam.jpg',
    name: 'Adam',
    PatientID: '125548',
    Age : '28',
    message : 'Hi doctor, still getting joint pains',
	date:'26/4/2017 2.00PM',
    gender:'Male'
  },
  {
    id: 6,
    face: 'img/perry.png',
    name: 'Perry',
    PatientID: '125549',
    Age : '26',
    message : 'Hi doctor',
	date:'27/4/2017 3.20PM',
    gender:'Male'
  }];

  return {
    all: function() {
      return patients;

    },
    remove: function(patient) {
      patients.splice(chats.indexOf(patient), 1);
    },
	save: function(patient){
		patients.push(patient);
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
})


.factory('medicines', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var medicines = [{
    id: 0,
    name: 'Adderall',
   satisfied: '65',
    sideeffect: '20',
    samedisease : '15',
    betteralternative:'18',
	alternative: 'Doxiderol'
  }, 
  {
    id: 1,
    name: 'Ativan',
    satisfied: '75',
    sideeffect: '4',
    samedisease : '13',
     betteralternative : '32',
	 alternative: 'Valium'
	 },
  
  {
    id: 2,
    name: 'Baclofen',
    satisfied: '70',
    sideeffect: '3',
    samedisease : '11',
     betteralternative : '20',
	 alternative: 'Zanaflex'
	 },
  
    {
    id: 3,
    name: 'Cardizem',
    satisfied: '65',
    sideeffect: '4',
    samedisease : '16',
     betteralternative : '23',
	 alternative: 'Diltiazem'
	 },
	  {
    id: 4,
    name: 'Demerol',
    satisfied: '45',
    sideeffect: '3',
    samedisease : '24',
     betteralternative : '21',
	 alternative: 'Morphine'
	 
  }];

  return {
    all: function() {
      return medicines;

    },
    remove: function(medicines) {
      medicines.splice(chats.indexOf(medicines), 1);
    },
    get: function(medicinesId) {
      for (var i = 0; i < medicines.length; i++) {
        if (medicines[i].id === parseInt(medicinesId)) {
          return medicines[i];

        }
      }
      return null;
    }
  };
})
.factory('Docts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var patients = [{
    id: 0,
    face: 'img/doc.png',
    name: ' Mike',
    DoctorID: '125543',
    Age : '20',
    message : 'Hi doctor',
    gender:'Male'
  }, {
    id: 1,
    face: 'img/mike.png',
    name: 'Ernine Blanco',
    DoctorID: '125544',
    Age : '30',
    message : 'Hi doctor',
    gender:'Male'
  }, 
  /*{
    id: 2,
    face: 'img/patients3.png',
    name: 'Mark',
    PatientID: '125545',
    Age : '20',
    message : 'Hi doctor',
    gender:'Female'
  },*/ 
  {
    id: 2,
    face: 'img/max.png',
    name: 'Mark',
    DoctorID: '125546',
    Age : '20',
    message : 'Hi doctor',
    gender:'Male'
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


