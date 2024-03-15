import iconheader from "./images/icon.png";

function Header() {
  return (
    <header>
      <div className="iconofheader">
        <img src={iconheader} />
        <div className="iconofheader-text">
          <h3 className=" text-3xl font-semibold">logoipsum</h3>
          <h4>.com</h4>
        </div>
      </div>

      <ul className="headerrightpart">
        <li>
          <a href="#">H O M E</a>
        </li>
        <li>
          <a href="#">P R O P E R T I E S</a>
        </li>
        <li>
          <a href="#">A G E N T S</a>
        </li>
        <li>
          <a href="#">B L O G</a>
        </li>
        <li>
          <button className="buttonlogin">LOG IN</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
