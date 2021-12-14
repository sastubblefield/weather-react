import "./Weather.css";

function Weather() {
  return (
    <div>
      <weather />
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="mt-4 form-control form-control-md input-box"
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

export default Weather;
