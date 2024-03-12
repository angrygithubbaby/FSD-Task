let resume = {
    'name' : 'Monika Shree',
    'contact': {
         'email':"monikashree68g@gmail.com",
         'location': "krishnagiri"
  } ,
    'summary': "Software Developer",
'WorkExperience': ['Teacher@school','contentreviewer@wipro'],
'Education': ['Bsc','Msc','FSD'],
'Skills':['Typewritter','javascript'],
    
}

for(let key in resume ){
    console.log( key, ':', resume[key]);
}
//output
name : Monika Shree
contact : { email: 'monikashree68g@gmail.com', location: 'krishnagiri' }
summary : Software Developer
WorkExperience : [ 'Teacher@school', 'contentreviewer@wipro' ]
Education : [ 'Bsc', 'Msc', 'FSD' ]
Skills : [ 'Typewritter', 'javascript' ]
