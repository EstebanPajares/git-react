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

function handleSubmit(event){
  event.preventDefault() //Para no recargar el navegador
  console.log('No recarga el navegador')
}

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
      name = 'Esteban'
      avatar = 'https://www.elcolombiano.com/binrepository/580x872/0c10/580d365/none/11101/GBFJ/capitan-america_37326520_20210310181935.jpg'
      />

      <form action='' onSubmit={handleSubmit}>
        <input type="text" />
        <input type="text" />
        <input type="submit" />
      </form>

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
