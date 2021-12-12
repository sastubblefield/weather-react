import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <input
          type="search"
          placeholder="Enter a City..."
          className="form-control form-control-lg font-weight-lighter"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default App;
