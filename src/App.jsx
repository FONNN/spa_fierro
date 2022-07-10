import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/NavBar/Navbar'


function App() {
  const [count, setCount] = useState(0)


  // class Persona {
  //   constructor(nombre, apellido, edad) {
  //     this.nombre = nombre;
  //     this.apellido = apellido;
  //     this.edad = edad;
  //   }
  // }

  // const persona = new Persona('Benito', 'Camelo', 36);
  // console.log(persona);

  let age = 'age';

  const objPerson = {
    name: 'Goretti',
    last_name: 'Amorcito',
    [age] : 32
  }
  // console.log(objPerson);
  const {name, last_name} = objPerson;
  console.log(name, last_name, age = 32);


  const testStyles = {
    backgroundColor: 'gray', color: 'pink'
  }


  return (
    <div className="App">
      <Navbar />
    </div>
  )
}

export default App


