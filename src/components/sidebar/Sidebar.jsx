import { useEffect, useState } from "react";
import "./sidebar.css";
import axiosInstance from "../../utils/axiosInstance";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await axiosInstance.get("/categories");
      setCategory(res.data);
    };
    getCategory();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="image" src="/assets/1.png" alt="about_me" />
        <p>
          I am an experienced web developer who is very proficient at building
          scalable, fast performing applications and software using React Js and
          its ecosystem. I have thrived in the web development space for more
          than 3+ years now and have amassed the prerequisite expertise needed
          to bring your Web Product to life. What gives me an edge is the fact
          that I also know how to make eye-catching graphic design.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {category.map((c, i) => (
            <Link to={`/?category=${c.name}`} className="link">
              <li className="sidebarListItem" key={i}>
                {c.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://web.facebook.com/ali.ajibade.946">
            <i className="sidebarIcon topbarIcon fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://twitter.com/Aliu94992120">
            <i className="sidebarIcon topbarIcon fa-brands fa-square-twitter"></i>
          </a>
          <a href="mailto: aliuajibade317@gmail.com">
            <i class="sidebarIcon topbarIcon fa-solid fa-square-envelope"></i>
          </a>
          <a href="https://wa.me/+2348084838268">
            <i class="sidebarIcon topbarIcon fa-brands fa-square-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
