import logo from "../../images/Around_Japan.svg";
import line from "../../images/Line.jpg";
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Around Japan" className="logo logo_header" />
      </div>
      <img src={line} alt="Línea divisoria" className="header__line" />
    </header>
  );
}

export default Header;
