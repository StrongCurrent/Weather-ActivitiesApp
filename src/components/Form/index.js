import "./Form.css";
export default function Form({ handleActivities }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const goodWeather = event.target.elements.goodWeather.checked;
    handleActivities({ ...data, goodWeather });
    event.target.reset();
  }

  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <h3>Add new Activity:</h3>
      <div className="inputWrapper">
        <label htmlFor="activity">Name:</label>
        <input type="text" id="activity" name="activity"></input>
      </div>
      <div className="inputWrapper">
        <label htmlFor="goodWeather">Good - Weather Activity:</label>
        <input type="checkbox" id="goodWeather" name="goodWeather"></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
