import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="topbar">
      <div className="topbarLeft">
      <a href="https://web.facebook.com/ali.ajibade.946">
            <i className="topbarIcon fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://twitter.com/Aliu94992120">
            <i className="topbarIcon fa-brands fa-square-twitter"></i>
          </a>
          <a href="mailto: aliuajibade317@gmail.com">
            <i class="topbarIcon fa-solid fa-square-envelope"></i>
          </a>
          <a href="https://wa.me/+2348084838268">
            <i class="topbarIcon fa-brands fa-square-whatsapp"></i>
          </a>
      </div>
      <div className="topbarCenter">
        <div className={`top__menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="topbarList">
            <li className="topbarListItem">
              <Link className="link active" to="/">
                HOME
              </Link>
            </li>
            <li className="topbarListItem">
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>
            <li className="topbarListItem">
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>
            <li className="topbarListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topbarListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="top__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="bx bx-menu"></i>
        </div>
      </div>
      <div className="topbarRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topbarImg"
              src={PF + user.profilePicture}
              alt="user's_image"
            />
          </Link>
        ) : (
          <ul className="topbarList">
            <li className="topbarListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topbarListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topbarSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
