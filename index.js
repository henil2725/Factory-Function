
// q1
function create(name,price,category){
    return{
        name: name,
        price:price,
        category:category,
        displayInfo:function(){
            console.log(`product: ${this.name}`);
            console.log(`price: $${this.price}`);
            console.log(`category:${this.category}`);
        }
    };
}

const product1 =create("Smartphone", 699, "Mobile");
const product2 = create("Laptop", 1299, "Computers");

product1.displayInfo();
product2.displayInfo();


// q2
function card(name,grade,subject){
    return{
        name:name,
        grade:grade,
        subject:subject,
        displayCard:function(){
            console.log(`${this.name} got grade ${this.grade} in ${this.subject}.`);

        }
    };
}

const student1 = card("alice","A","Math");
const student2 = card("bob","b","science");

student1.displayCard();
student2.displayCard();

// q3
function car(model,rentalRate,availability){
    return{
        model:model,
        rentalRate:rentalRate,
        availability:availability,
        displayInfo : function(){
            console.log(
                `Model : ${this.model},Rate: $${this.rentalRate}/day,availabl:${this.availability}`
            );
        }
    };
}

const car1 = car("toyota fortuner",50,true); 
const car2 = car("kia seltos",45,false);
const car3 = car("Vitara brezza",80,true);

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();

//q4
function book(title, author, ISBN, availableCopies){
    return{
        title:title,
        author:author,
        ISBN:ISBN,
        availableCopies:availableCopies,
        displayInfo:function(){
            console.log(
                `title:${this.title},author:${this.author},ISBN:${this.ISBN},availableCopies:${this.availableCopies}`

            );
        }
    };
}
const book1 = book(
    "To Kill a Mockingbird",
    "Harper Lee",
    "978-0-06-112008-4",
    " only last 2"
);

const book2 = book(
    "1984",
    "George Orwell",
    "978-0-454-287655-4",
    "only 1"
);

const book3 = book(
    "The Great Gatsay",
    "F.Scott Fitzgerald",
    "978-0-454-287655-5",
    "out of stock"
);
book1.displayInfo();
book2.displayInfo();
book3.displayInfo();

// q5
function badge(name,id,department,position){
    return{
        name:name,
        id:id,
        department:department,
        position:position,
        displayInfo:function(){
            console.log(
                `title:${this.name},id:${this.id},department:${this.department},position:${this.position}`
            )
        }
    };
}
const employee1 = badge(
    "Ashish Seghani",
    "10234",
    "computer enginnering",
    "manager",
);
const employee2 = badge(
    "Kathan Rathod",
    "10278",
    "artificial intelligence",
    "employee",
);
const employee3 = badge(
    "Vedanshi Patel",
    "11298",
    "Mechanical Engineering",
    "employee",
);
// q6(Constructor)
function room(roomNumber, type, price, isAvailable){
    this.roomNumber = roomNumber;
    this.type = type;
    this.price = price;
    this.isAvailable = isAvailable;
    
}

const room1 = new room(101, "Single", 2000, true);

const room2 = new room(301, "family", 4000, false);

console.log(room1);
console.log(room2);

// q7
function online(title,instructor,duration,studentEnrolled){
    this.title = title;
    this.instructor = instructor;
    this.duration = duration;
    this.studentEnrolled = studentEnrolled;
}
const online1 = new online("JavaScript","Jhon","4 Weeks",90);
const online2 = new online("Python","Den","8 Weeks",70);

console.log(online1);
console.log(online2);

// q8
function Wallet(ownerName,balance,currency){
    this.ownerName = ownerName;
    this.balance = balance;
    this.currency = currency;
}
const Wallet1 = new Wallet("Henil Patel","20000","Doller");
const Wallet2 = new Wallet("Vedanshi Patel","30000","Dirham");

console.log(Wallet1);
console.log(Wallet2);

// q9
function Weather(City,temperature,humidity,forcast){
    this.City = City;
    this.t = temperature;
    this.humidity = humidity;
    this.forcast = forcast;
}
const Weather1 = new Weather("Ahemdabad",28, "50%","Rainy");
const Weather2 = new Weather("Baroda",34, "50%","Few Clouds");

console.log(Weather1);
console.log(Weather2);


// q10
function student(name,RollNumber,Grade,Subjects){
    this.name = name;
    this.RollNumber =  RollNumber;
    this.Grade = Grade;
    this.Subjects = Subjects;
}
const student3 = new student("Priyanshi",23012250210286,"A","JavaScript");
const student4 = new student("Henil",23012250210340,"B","Express JavaScript");

console.log(student3);
console.log(student4);