import React from 'react';
import '../styles/App.css';

//Components
function HelloWorld(props) {
  //console.log(props)
  return (
    <div id ="Hello">
      <h3>{props.subtite}</h3>
      {props.myText}
    </div>
  )
}
//Component funcion tipo flecha
const App2 = () => <div>
  This is my component:
  <HelloWorld myText="Hello App2" subtite="Dixit"/>
</div>

//Component tipo clase
class App3 extends React.Component {
  //Estoy heredando desde react las funciones de los componentes
  //Metodo Render de React
  render() {
    return (
      <div>
        Esto es la Clase 3
        <HelloWorld myText="Hello App3" subtite="Nib sub sole"/>
      </div>
      )
  }
}

class AppHelloWorld extends React.Component {
  render() {
    return (
      <div id ="Hello">
        Esto es la Clase AppHelloWorld
        <h3>{this.props.subtite}</h3>
        {this.props.myText}
      </div>
    )
  }
}

//Component que se llama desde el index.js
function App() {
  return (
    // Esto es JSX no HTML
    <div>
      This is my component:
      <HelloWorld myText="Hello BB" subtite="Carpe díem"/>
      <HelloWorld myText="Hello Renee" subtite="Memento Mori"/>
      <HelloWorld myText="Houuuu Yeaah!" subtite="Modelus Ponens"/>
      <AppHelloWorld myText="Clase BB!" subtite="Virgilio"/>
      <App2/>
      <App3/>
    </div>
  )
}

export default App;
