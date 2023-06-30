import "./App.css";
import List from "./components/List/index";
import Form from "./components/Form/index";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useEffect, useState } from "react";

function App() {
  const [goodWeather, setGoodWeather] = useState("");
  useEffect(() => {
    async function apiCall() {
      try {
        const baseUrl = "https://example-apis.vercel.app/api/weather";
        const response = await fetch(baseUrl);
        const weatherData = await response.json();
        setGoodWeather(weatherData);
      } catch (error) {
        console.error(error);
      }
    }
    apiCall();
  });

  const default1 = [{ id: "420", activity: "Radfahren", goodWeather: true }];

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: default1,
  });
  function handleActivities(data) {
    setActivities([...activities, { id: uid(), ...data }]);
  }

  const filterItems = activities.filter(
    (item) => item.goodWeather === goodWeather.isGoodWeather
  );

  function buttonHandler(event) {
    event.preventDefault();
    const elementId = event.target.parentElement.parentElement.id;
    setActivities(activities.filter((n) => n.id !== elementId));
    //console.log(elementId);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <List
          activities={filterItems}
          isGoodWeather={goodWeather}
          buttonHandler={buttonHandler}
        />
        <Form handleActivities={handleActivities} />
      </main>
      <footer></footer>
    </div>
  );
}
export default App;
