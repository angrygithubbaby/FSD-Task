

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
 
let entries = Object.entries(resume);
entries.forEach(entry =>{
    console.log(entry[0], ':', entry[1]);
});


//ouput


name : Monika Shree
contact : { email: 'monikashree68g@gmail.com', location: 'krishnagiri' }
summary : Software Developer
WorkExperience : [ 'Teacher@school', 'contentreviewer@wipro' ]
Education : [ 'Bsc', 'Msc', 'FSD' ]
Skills : [ 'Typewritter', 'javascript' ]
    




