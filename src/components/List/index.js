import "./List.css";

export default function List({ activities, isGoodWeather, buttonHandler }) {
  let weatherMessage = "Bad Weather outside! Here is what you can do now:";
  if (isGoodWeather.isGoodWeather === true) {
    weatherMessage = "The Weather is awesome! Go outside and:";
  }
  // console.log(isGoodWeather);
  return (
    <>
      <div className="weatherDisplay">
        <div className="weatherDisplay__icon">{isGoodWeather.condition}</div>
        <div className="weatherDisplay__temperature">
          {isGoodWeather.temperature} °C
        </div>
      </div>
      <h2>{weatherMessage}</h2>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} id={activity.id}>
            {activity.activity}
            <button
              onClick={buttonHandler}
              type="button"
              aria-label="delete button"
            >
              <i class="bx bx-x-circle"></i>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
