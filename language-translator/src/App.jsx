import "./App.css";
import Translate from "./components/Translate";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Language Translator</h1>
        <p className="slogan">Bridging the language barrier with ease</p>
      </header>
      <main>
        <Translate />
      </main>
    </div>
  );
}

export default App;
