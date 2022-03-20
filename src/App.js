import './App.css';
import PersonCard from "./components/PersonCard/PersonCard";

class Person {
  constructor(firstName, lastName, age, hairColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hairColor = hairColor;
  }
}

const persons = [new Person("Jane", "Doe", 45, "Black"),
  new Person("John", "Smith", 88, "Brown"),
  new Person("Millard", "Fillmore", 50, "Brown"),
  new Person("Maria", "Smith", 62, "Brown")];

function App() {
  return (
      <div className="App">
        {persons.map((person, index) => <PersonCard key={'pc_' + index} person={person}/>)}
      </div>
  );
}

export default App;
