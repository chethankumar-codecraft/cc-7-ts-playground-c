// * interface is another mechanism to create an object type.
// * differs from the type alias, where an interface can be extended by another interface, whereas
// * you can not extend a type from another type
// * We can open an interface again and few more properties and thus can augment an existing interface.
interface Flight {
  operator: string;
  origin: { airport: string; latitude: number; longitude: number };
  destination: { airport: string; latitude: number; longitude: number };
  date: string;
  price: number;
}

// * One can derive from existing interface
interface PassengerFlight extends Flight {
  make: string;
  countryOfOrigin: string;
}

// * One can augment existing interface by re opening the declaration and can add more fields
interface Flight {
  supersonic: boolean;

  displayInfo(): string;
}

// ! Exercise : Create an instance of Flight.
const aFlight:Flight={
  operator: 'Indigo',
  origin: { airport: 'Mangalore', latitude: 10, longitude: 14 },
  destination: { airport: 'Bangalore', latitude: 15, longitude: 14 },
  date: '17-Feb-2026',
  supersonic: false,
  price: 3000,
  displayInfo(){
     console.log(this.price);
     return '';
      },
};

console.log(aFlight.displayInfo())

// ! Exercise: Create an instance of PassengerFlight. How do we implement displayInfo?
const aPassengerFlight:PassengerFlight={
  operator: 'Indigo',
  origin: { airport: 'Mangalore', latitude: 10, longitude: 14 },
  destination: { airport: 'Bangalore', latitude: 15, longitude: 14 },
  date: '17-Feb-2026',
  supersonic: false,
  price: 3000,
  displayInfo(){
    function add(){
      console.log(this.operator);
      const add2=()=>{
      console.log(this.operator);
      }
      add2();
    }
    add();
     return '';
    },
  make: 'Airbus',
  countryOfOrigin: 'India',
}
aPassengerFlight.displayInfo();

function fuc(){
  console.log(this);
}

fuc();
// ! Exercise
// Create an interface that has an id, name, and address.
// Create Employee, and Student interfaces extending from this. Employee will have company associated, and student will have an institute associated in addition to id, name, and address

interface Person{
  id:string,
  name:string,
  address:string
};

interface Employee extends Person{
  company:string
}

interface Students extends Person{
  institute:string
}
 

//interfaces and type recursive
//Linkedlist


interface LinkedList{
  data:number;
  next:LinkedList |null;
};

let node1:LinkedList={
  data:1,
  next:null
}

let node2:LinkedList={
  data:2,
  next:null
}
node1.next=node2;

let node3:LinkedList={
  data:3,
  next:null
}
node2.next=node3;