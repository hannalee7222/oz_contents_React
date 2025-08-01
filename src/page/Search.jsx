import { useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";
import { Link } from "react-router-dom";


function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get('animal');
  const reg = getRegExp(param);
  const filteredData = data.filter((el) =>
    el.name.match(reg));
  return (
  <ul>
    {filteredData.map((el) => (
    <li key={el.id}>
      <Link to={`/Detail/${el.id}`}>
      <img src={el.img} />
      <div>{el.name}</div>
      </Link>
    </li>
    ))}
  </ul>
  )
}

export default Search;