import "./App.css";
import List from "./components/List/index";
import Form from "./components/Form/index";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const testArray = [
    {
      name: "Radfahren",
      isGoodWeather: true,
    },
  ];

  const isGoodWeather = "on";

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: testArray,
  });
  function handleActivities(data) {
    setActivities([...activities, { ...data }]);
  }

  function handleFilter() {
    setActivities(activities.map((item) => item.goodWeather === "on"));
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <List activities={activities} />
        <Form handleActivities={handleActivities} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
