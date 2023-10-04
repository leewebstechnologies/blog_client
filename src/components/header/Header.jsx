import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Adeniyi Ajibade</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="./assets/6.jpg" alt="" />
    </div>
  );
};

export default Header;
