import Logo from "../../assets/img/logo.png";
import Hamburger from "../../assets/img/hamburger.png";
import "./header.css"

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-top">
           <div className="header-box">
           <a href="#" className="header-logo-link">
              <img src={Logo} alt="logo" width={40} height={40} />
            </a>
            <nav className="header-nav">
              <ul className="header-list">
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    About
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Services
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Works
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
           </div>

            <button className="header-btn">
              <img
                src={Hamburger}
                alt="hamburger"
                className="header-img"
                width={30}
                height={30}
              />
            </button>
          </div>
          <div className="header-bottom">
            <div className="hero-box">
              <p className="hero-text">Hello,</p>
              <h1 className="hero-title">Adam Zakob</h1>
              <p className="hero-p">a freelance UX Designer</p>
              <button className="hero-btn">Let’s Talk</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
