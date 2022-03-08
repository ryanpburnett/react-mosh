import logo from './logo.svg';
import './App.css';

function App() {
  let list = ["thing1", "thing2", "thing3"];
  let templateList = list.map(item => `<li>${item}</li>`)
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <h1>Greetings Globe</h1>
    {/* render template list */}
    </div>
  );
}

export default App;
