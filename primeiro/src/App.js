import './App.css';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import Frase from './components/Frase'
// import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form';


function App() {
// const name = 'Jamile';
// const newName = name.toUpperCase();

// const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      {/* <Frase/>
      <Frase/> */}
      <h1>Testando eventos</h1>
      {/* <p>Olá, {newName}</p> */}
      {/* <p>Soma: {2+2}</p> */}
      {/* <img src={url} alt='Minha Imagem'/> */}
      {/* <HelloWorld/>
      <SayMyName nome='Jamile'/>
      <SayMyName nome='Akira'/>
      <Pessoa nome='Diogo' idade='33' profissão='Programador'/> */}
      {/* <List/> */}
      <Evento/>
      <Form /> 
    </div>
  );
}

export default App;
