import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <input
          type="search"
          placeholder="enter a city..."
          className="mt-4 form-control form-control-lg input-box"
        />
        <input
          type="submit"
          value="search"
          className="mt-4 btn btn-secondary input-button"
        />
      </form>
    </div>
  );
}

export default App;
