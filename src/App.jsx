import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Title from './components/Title/Title'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  const [count, setCount] = useState(0)


  // class Persona {
  //   constructor(nombre, apellido, edad) {
  //     this.nombre = nombre;
  //     this.apellido = apellido;
  //     this.edad = edad;
  //   }
  // }

  // let age = 'age';

  // const objPerson = {
  //   name: 'Goretti',
  //   last_name: 'Amorcito',
  //   [age] : 32
  // }

  // // console.log(objPerson);
  // const {name, last_name} = objPerson;
  // console.log(name, last_name, age = 32);


  // const testStyles = {
  //   backgroundColor: 'gray', color: 'pink'
  // }


  return (
    <div className="App">
      <NavBar />
      {/* <Title title='ONE' subTitle='1 sub'/>
      <Title title='TWO' subTitle='2 sub'/>
      <Title title='THREE' subTitle='3 sub'/> */}
      <ItemListContainer greeting='Saludos desde prop ItemListContainer!'/>
    </div>
  )
}

export default App


