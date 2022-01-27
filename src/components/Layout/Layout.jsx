import { NavLink } from "react-router-dom";

function Layout({children}) {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <NavLink to="/" className="nav__link">Home</NavLink>
          <NavLink to="/modal" className="nav__link">modal</NavLink>
        </nav>
      </header>
      <div className="wrap">{children}</div>
    </>
  );
}

export default Layout;
