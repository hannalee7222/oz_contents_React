import { data } from "../assets/data/data";
import { Link } from "react-router-dom";

function Main() {
  return (
  <ul>
    {data.map((el) => (
    <li key={el.id}>
      <Link to={`/Detail/${el.id}`}>
      <img src={el.img} />
      <div>{el.name}</div>
      </Link>
    </li>
    ))}
  </ul>
  );
}

export default Main;