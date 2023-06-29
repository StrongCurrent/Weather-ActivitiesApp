import "./List.css";

export default function List({ activities }) {
  console.log(activities);
  return (
    <ul className="activity-list">
      {activities.map((activity) => (
        <li>{activity.activity}</li>
      ))}
    </ul>
  );
}
