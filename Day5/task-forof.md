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
 for(let entry of entries){
    console.log(entry[0], ':', entry[1]);
 }


 //output

 name : Monika Shree
contact : { email: 'monikashree68g@gmail.com', location: 'krishnagiri' }
summary : Software Developer
WorkExperience : [ 'Teacher@school', 'contentreviewer@wipro' ]
Education : [ 'Bsc', 'Msc', 'FSD' ]
Skills : [ 'Typewritter', 'javascript' ]