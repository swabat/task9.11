const firstName = document.querySelector('#firstNameOutput'); 
const secondName = document.querySelector('#secondNameOutput');
const gender = document.querySelector('#genderOutput');
const surname = document.querySelector('#surnameOutput');
const profession = document.querySelector('#professionOutput');
const birthYear = document.querySelector('#birthYearOutput');
const birthDate = document.querySelector('#birthDateOutput');
const avatar = document.querySelector('.avatar');


//-----------------------START

let startGenerate = function()
{
    const initPerson = personGenerator.getPerson();
    firstName.innerText = initPerson.firstName;
    secondName.innerText = initPerson.secondName;
    gender.innerText = initPerson.gender;
    surname.innerText = initPerson.surName;
    profession.innerText = initPerson.profession;
    birthYear.innerText = `${initPerson.birthYear} года`;
    birthDate.innerText = initPerson.birthDate;
    
    if (initPerson.gender === 'Мужчина') {
        avatar.src = "images/man-avatar.jpg";
    } else {
        avatar.src = "images/woman-avatar.jpg";
    }
};


window.onload = startGenerate(); 

// Button that activates the generation of all data

document.querySelector('.btn-generate').addEventListener('click', function () {
    startGenerate();
});

// Button that clears all data

document.querySelector('.btn-clear').addEventListener('click', function () {
    
    firstName.innerText= '';
    secondName.innerText= '';
    gender.innerText = '';
    surname.innerText = '';
    profession.innerText = '';
    birthYear.innerText = '';
    birthDate.innerText = '';
    avatar.src = "images/who-avatar.jpg";
  
});