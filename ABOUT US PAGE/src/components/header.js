import logo from '../images/logo2.png';
import donate from '../images/donate.jpg';
// this is header function which includes all the navigation bar and links
// Auther: Naveed Nazamy
function Header() {
  return (
<nav className="navbar navbar-expand-lg  bg-black border-b border-t">
  <div className="container">

    {/* link for the logo */}
  <a className="navbar-brand" href="#">
    <img src={logo} className="img-fluid logo-img"/>
  </a>
  {/* navigation menu bar when the window is opened in a mobile phone */}
  <button className="btn btn-success navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    Menu
  </button>

  {/* navigation bar and its items */}
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto " >
      <li className="nav-item ">
        <a className="nav-link  text-white" href="#">Home</a>
      </li>
      <li className="nav-item " >
        <a className="nav-link text-white" href="about">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Locate Food Banks</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Recipes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="donate.js">Donate</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="home.js">SIGN UP</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    );
}

export default Header;
