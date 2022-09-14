const personGenerator = {

    //----------------SURNAME JSON------------------------------
    
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    //-------------NAME JSON---------------------------

    // male

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    // female

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Кристина",
            "id_2": "Ирина",
            "id_3": "Татьяна",
            "id_4": "Ольга",
            "id_5": "Елена",
            "id_6": "Анастасия",
            "id_7": "Анна",
            "id_8": "Юлия",
            "id_9": "Карина",
            "id_10": "Ксения"
        }
    }`,

    //-------------SECOND NAME---------------------------

    // male

    secondNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Сергеевич",
            "id_2": "Алексеевич",
            "id_3": "Андреевич",
            "id_4": "Романович",
            "id_5": "Михайлович",
            "id_6": "Александрович",
            "id_7": "Петрович",
            "id_8": "Викторович",
            "id_9": "Владимирович",
            "id_10": "Иванович"
        }
    }`,

    // female

    secondNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алексеевна",
            "id_2": "Ильинична",
            "id_3": "Павловна",
            "id_4": "Петровна",
            "id_5": "Максимовна",
            "id_6": "Александровна",
            "id_7": "Андреевна",
            "id_8": "Викторовна",
            "id_9": "Владимировна",
            "id_10": "Ивановна"
        }
    }`,

    //-------------PROFESSION---------------------------

    // male
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Электрик",
            "id_2": "Шахтер",
            "id_3": "Водитель",
            "id_4": "Сантехник",
            "id_5": "Автомеханик",
            "id_6": "Слесарь",
            "id_7": "Пилот",
            "id_8": "Строитель",
            "id_9": "Сварщик",
            "id_10": "Моряк"
        }
    }`,

    // female

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Швея",
            "id_2": "Няня",
            "id_3": "Проводница",
            "id_4": "Секретарь",
            "id_5": "Учительница",
            "id_6": "Бухгалтер",
            "id_7": "Косметолог",
            "id_8": "Медсестра",
            "id_9": "Стюардесса",
            "id_10": "Горничная"
        }
    }`,

    //------------------------GENDER----------------
    
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    //---------------------RANDOM VALUE FUNCTION------------------

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator, here and further
        return obj.list[prop];
    },

    //-------------DEFINE GENDER FUNCTION---------------------------

    randomGender: function () {
    let gender = this.randomIntNumber () ?  this.GENDER_MALE : this.GENDER_FEMALE;
    return gender;
    },


    //-------------DEFINE NAME FUNCTION---------------------------

    randomFirstName: function() {
        if (this.person.gender === 'Мужчина') {
        return this.randomValue(this.firstNameMaleJson);
        } else {
        return this.randomValue(this.firstNameFemaleJson);    
        }
    },

    //-------------DEFINE SECOND NAME FUNCTION---------------------------

    randomSecondName: function() {
        if (this.person.gender === 'Мужчина') {
        return this.randomValue(this.secondNameMaleJson);
        } else {
        return this.randomValue(this.secondNameFemaleJson);    
        }
    },

     //-------------DEFINE SURNAME FUNCTION---------------------------

     randomSurname: function() {
        if (this.person.gender === 'Мужчина') {
        return this.randomValue(this.surnameJson);
        } else {
        return `${this.randomValue(this.surnameJson)}а`;
        }

    },

    //-------------DEFINE PROFESSION FUNCTION---------------------------

    randomProfession: function() {
        if (this.person.gender === 'Мужчина') {
        return this.randomValue(this.professionMaleJson);
        } else {
        return this.randomValue(this.professionFemaleJson);
        }

    },

    //------------------DEFINE BIRTH YEAR FUNCTION-------------------------

    randomBirthYear: function() {
        let birthYear = this.randomIntNumber(2000, 1960);
        return birthYear;
    },


    //------------------DEFINE BIRTH DATE FUNCTION-------------------------

    randomBirthDate: function() {
        let birthDay = 1; // birth day
        let birthMonth = this.randomIntNumber(12, 1); // birth month
        
        

        if (birthMonth === 2) {                              // date depends on month
            if (this.person.birthYear%4 === 0){             // leap year
                birthDay = this.randomIntNumber(29, 1);
            } else {
                birthDay = this.randomIntNumber(28, 1); 
            }
        } else if (birthMonth === 4 || birthMonth === 6 || birthMonth ===  9 || birthMonth === 11) {
            birthDay = this.randomIntNumber(30, 1);
        } else {
            birthDay = this.randomIntNumber(31, 1);
        } 

        switch (birthMonth) {
            case 1 : birthMonth = "января"
            break;
            case 2 : birthMonth = "февраля"
            break;
            case 3 : birthMonth = "марта"
            break;
            case 4 : birthMonth = "апреля"
            break;
            case 5 : birthMonth = "мая"
            break;
            case 6 : birthMonth = "июня"
            break;
            case 7 : birthMonth = "июля"
            break;
            case 8 : birthMonth = "августа"
            break;
            case 9 : birthMonth = "сентября"
            break;
            case 10 : birthMonth = "октября"
            break;
            case 11 : birthMonth = "ноября"
            break;
            case 12 : birthMonth = "декабря"
            break;
        }
        return `${birthDay} ${birthMonth}`;
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender(); // gender
        this.person.firstName = this.randomFirstName(); // name
        this.person.secondName = this.randomSecondName(); // second name
        this.person.surName = this.randomSurname(); // surname
        this.person.profession = this.randomProfession(); // profession
        this.person.birthYear = this.randomBirthYear(); // birth year
        this.person.birthDate = this.randomBirthDate(); // birth date
        return this.person;
    }
};
