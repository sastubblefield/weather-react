import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <input
          type="search"
          placeholder="enter a city..."
          className="mt-4 form-control form-control-lg font-weight-lighter"
        />
        <input
          type="submit"
          value="search"
          className="mt-4 btn btn-secondary font-weight-lighter input-button"
        />
      </form>
    </div>
  );
}

export default App;
