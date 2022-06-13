import { useSelector } from "react-redux";
import "./UserCard.css";

export default function UserCard() {
  const user = useSelector((state) => state.user);

  if (!user) {
    return (
      <div className="UserCard">
        <div
          className="header"
          style={{
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
          }}
        >
          <strong className="username">Not Found !!!</strong>
          <p>Couldn't find the user you were looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="UserCard">
      <div className="header">
        <div>
          <img src={user.avatar_url} alt="profile" />
        </div>
        <strong className="username">{user.name}</strong>
      </div>
      <div className="footer">
        <div className="footer-cell">
          <p className="cell-value"> {user.followers}</p>
          <p className="cell-name">Followers</p>
        </div>
        <div className="footer-cell">
          <p className="cell-value">{user.public_repos}</p>
          <p className="cell-name">Repository</p>
        </div>
        <div className="footer-cell">
          <p className="cell-value">{user.following}</p>
          <p className="cell-name">Following</p>
        </div>
      </div>
    </div>
  );
}
