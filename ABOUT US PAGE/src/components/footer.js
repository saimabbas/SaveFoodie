import donate from '../images/donate.jpg';
//footer class includes all the information for the footer of SaveFoodie 
//web applicattion 
// Auther: Naveed Nazamy
function Footer() {
  return (
    // footer division 
    <footer className="site-footer">
      <div className="container">
        
        {/* first column in the footer */}
        <div className="row">    
          <div className="col-xs-6 col-md-2 ">
          <a href="#">
            <h6 className="text-white">Our Mission</h6></a>
            <ul className="footer-links">
              {/* column items */}
              <li><a className="text-white" href="#" >Find Near Food Banks</a></li>
              <li><a className="text-white" href="#">Available Support</a></li>
              <li><a className="text-white" href="#">Recipes</a></li>
             
            </ul>
          </div>

            {/* second column in the footer */}
          <div className="col-xs-6 col-md-2 ">
            <a href="#">
            <h6 className="text-white">Help</h6>
            </a>
            {/* second column items */}
            <ul className="footer-links">
              <li><a href="home.js" className="text-white">Registration Help</a></li>
              <li><a href="#" className="text-white">Get In Touch</a></li>
              
            </ul>
          </div>

            {/* third column in the footer */}
          <div className="col-xs-6 col-md-2 ">
          <a href="#">
            <h6 className="text-white">Get Involved</h6>
            </a>
            {/* third column items */}
            <ul className="footer-links">
              <li><a href="#" className="text-white">Fundraise</a></li>
              <li><a href="#" className="text-white">Campaigns</a></li>      
            </ul>
          </div>

            {/* fourth column in the footer */}
          <div className="col-xs-6 col-md-2 ">
          <a href="#">
            {/* fourth column items */}
            <h6 className="text-white" href="#">About Us</h6></a>
            <ul className="footer-links">
              <li><a href="#" className="text-white">Our Plan</a></li>
              <li><a href="#" className="text-white">Our Story</a></li>
             
            </ul>
          </div>
            {/* fifth column for donation  */}
          <div className="col-xs-6 col-md-4 ">
            <h6 className="text-white ">Donate Here:</h6>
            <div className="col-8 col-xs-11 col-sm-11 offset-1">
              {/* fifth column buttons for donation */}
            <button className="btn  btn-success">
              £15
              </button>
              <button className="btn offset-1 btn-success">
              £25
              </button>
              <button className="btn offset-1 btn-success">
              £35
              </button>
              {/* input text area for donation amount */}
              <input 
                    type="text" 
                    name="donate"
                    className="form-control col-8 offset-2 col-sm-8" 
                    required="required"
              />
              {/* donation button */}
              <button className="btn btn-success ">
                Donate
              </button>
            </div>                    
          </div>
        </div>         
      </div>
      <hr/>
      {/* copy right section after the footer */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="copyright-text text-white">Copyright &copy; 2020 All Rights Reserved by  &nbsp;
              <b>SaveFoodie</b>
            </p>
          </div>
        </div>
      </div>
</footer>
  );
}

export default Footer;
