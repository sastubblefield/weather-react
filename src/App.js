import "./App.css";

function App() {
  return (
    <div>
      <weather />
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="mt-4 form-control form-control-lg input-box"
        />
        <input
          type="submit"
          value="search"
          className="mt-4 btn btn-lg input-button"
        />
      </form>
      <div class="container">
        <div class="row">
          <div class="col">MON</div>
          <div class="col">TUES</div>
          <div class="col">WED</div>
          <div class="col">THU</div>
          <div class="col">FRI</div>
          <div class="col">SAT</div>
          <div class="col">SUN</div>
        </div>
        <div class="row">
          <div class="col">MON</div>
          <div class="col">TUES</div>
          <div class="col">WED</div>
          <div class="col">THU</div>
          <div class="col">FRI</div>
          <div class="col">SAT</div>
          <div class="col">SUN</div>
        </div>
      </div>
    </div>
  );
}

export default App;
