import logo from './logo.svg';
import './App.css';
import User from './user';

function Header({children}){
  return (
    <header>
      <h3>Esto es un header muy bonito</h3>
      {children}
    </header>
  )
}

function App() {
  const name = 'Esteban'
return (
    <div className="App">
      <Header>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
        </ul>
      </Header>

      <User
      name = 'Jehu'
      avatar = 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png'
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
