import { useDispatch } from "react-redux";
import "./SearchBox.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements[0].value.trim();
    e.target.elements[0].value = "";
    fetch(`https://api.github.com/users/${username}`).then(async (res) => {
      const user = await res.json();
      console.log("USER", user.message);
      if (!res.ok || user.message === "Not Found") {
        dispatch({ type: "UPDATE_USER", payload: null });
      } else {
        dispatch({ type: "UPDATE_USER", payload: user });
      }
    });
  };
  return (
    <form className="SearchBox" onSubmit={handleSubmit}>
      <input type="text" placeholder="Type Username + Enter" />
    </form>
  );
}
