class Human {
    constructor(name, growth, weight, age, gender, disability) {
        this.name = name;
        this.growth = growth;
        this.weight = weight;
        this.age = age;
        this.gender = gender;
        this.disability = disability;
    }
    get getInfo () {
        const information = {
            name: this.name,
            growth: this.growth,
            weight: this.weight,
            age: this.age,
            gender: this.gender,
            disability: this.disability,
        }
        console.log(information);
    }

    sayHi(){
        console.log('Привет, меня зовут' + ' ' + this.name)
    }
    set setName(name) {
        this.name = name;
        console.log('теперь меня зовут' + ' ' + name);
    }
    set setNewDisability(disability) {
        this.disability = disability;
        console.log('теперь инвалидность равняется' + ' ' + disability);
    }
}

const newHuman = new Human("Piter", 192, 92, '1998-04-05', 'men', true)
newHuman.sayHi();
console.log(newHuman);
newHuman.getInfo;
newHuman.setName = 'Petro';
newHuman.setNewDisability = false;
newHuman.getInfo;



const prevCompany = [
    {
        start: new Date(2020,6,15),
        end : new Date(2020,12,21),
        salaryPerMonth : 500,
        position : 'junior',
        companyName : 'Oracle'
    },
    {
        start :  new Date(2021,1,15),
        end : new Date(2021,10,2),
        salaryPerMonth : 1500,
        position : 'middle',
        companyName : 'NYX'
    },
    {
        start : new Date(2021,11,15),
        end : new Date(2022,7,23),
        salaryPerMonth : 2500,
        position : 'middle',
        companyName : 'SoftServe'
    }
]


class FrontEnd extends Human {

    constructor(name, growth, weight, age, gender, disability, careerStart, prevCompany) {
        super(name, growth, weight, age, gender, disability);
        this.careerStart = careerStart;
        this.prevCompany = prevCompany;
    }
    get getInfo(){
        return {
            ...super.getInfo,
            careerStart: this.careerStart,
            prevCompany: this.prevCompany
        }
    }
    sayHi(){
        console.log('Привет, меня зовут' + ' ' + this.name + ',' + 'я Фронтенд разработчик. Работаю с' + ' ' + this.careerStart)
    }

    selary(){
        let ss = 0;
        let diffInMonths = prevCompany.reduce((acc,el)=>{
            acc= Math.abs(el.end.getTime() -el.start.getTime());
            acc= Math.round(acc / (2e3 * 3600 * 365));
            acc = acc * el.salaryPerMonth;
            ss += acc;
        }, 0)
        console.log(ss, 'всего заработал ');
    }
    workHistory(company) {
        let ww = prevCompany.filter(object => {
            return object.companyName===company
        })
        console.log(ww);
    }
    dobwork(object) {
        prevCompany.push(object)
        console.log(prevCompany);
    }

}

const newFrontEnd = new FrontEnd("Marina", 165, 65, 1995, 'women', true, '03-08-2022');
newFrontEnd.sayHi();
console.log(newFrontEnd);

newFrontEnd.selary();
console.log(newFrontEnd);
newFrontEnd.workHistory('ais');
newFrontEnd.dobwork({start: new Date('2020-06-13'),
    end: new Date('2022-04-05'),
    salaryPerMonth: 2000,
    position: 'middle',
    companyName: 'Zori',});





let kit = ['кирка', 'топор'];

class Builder extends Human {
    constructor(name, growth, weight, age, gender, disability, location, kit, speed) {
        super(name, growth, weight, age, gender, disability);
        this.location = location;
        this.kit = kit;
        this.speed = speed;
    }
    get getInfo(){
        return {
            ...super.getInfo,
            location: this.location,
            kit:this.kit,
            speed: this.speed,
        }
    }
    sayHi(){
        console.log('Привет, меня зовут' + ' ' + this.name)
    }
    building(kolMetr) {
        let kolMin = this.speed * kolMetr
        let kolHour = Math.floor(kolMin / 60);
        let lastHour = kolHour % 24;
        let kolDay = Math.floor(kolHour / 24)
        let lastDay = kolDay % 7;
        let kolWeek = Math.floor(kolDay / 7);
        let lastWeek = kolWeek % 4;
        let kolMonthe = Math.floor(kolWeek / 4);
        let lastMonthe = kolMonthe % 12;
        let kolYear = Math.floor(kolMonthe / 12);
        if (kolHour < 24) {
            return `${kolHour} часов`;
        }
        else if (kolHour > 24 && kolDay < 7) {
            return `${kolDay} дней и ${lastHour} часов`;
        }
        else if (kolDay > 7 && kolWeek < 4) {
            return `${kolWeek} недель ${lastDay} дней и ${lastHour}часов`;
        }
        else if (kolWeek > 4 && kolMonthe < 12) {
            return `${kolMonthe} месяцев ${lastWeek} недель ${lastDay} дней и ${lastHour} часов`
        }
        else {
            return `${kolYear} лет ${lastMonthe} месяцев ${lastWeek} недель ${lastDay} дней ${lastHour}`;
        }
    }
}




const newBuilder = new Builder('Max', 186, 86, 1990, 'men', false, 'New-York', kit, 50);
newBuilder.sayHi();
console.log(newBuilder);
let duration = newBuilder .building(24);
console.log(duration);