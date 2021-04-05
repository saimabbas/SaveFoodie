/*
import the login and register page

*/
import Login from "./login";
import Register from "./register";

/*
The websitetext.js includes the text after the header which explain what 
is the registration page about and how the user can register.
// Auther: Naveed Nazamy
*/
function Websitetext() {
  return (
    <section className="container-fluid">
      {/* division for the header */}
      <div className="bg-light-green mt-1 round-border">
        <h4 className="pb-4 pt-4">
          JOINING OUR MISSION IS THE MOST IMPACTFUL WAY TO GIVE
        </h4>
      </div>
      <br />
      <br />
      {/* paragraph about the registration page */}
      <p>
        Register with us to become part of the SaveFoodie community where you
        can have access to out blog, vouchers, volunteering program and can make
        a swift donation to the centre you choose.
      </p>
      
      
      <p>helloo</p>

      {/* division for the filling form paragraph */}
      <div className="container-fluid row">
        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <br />

          <p>Please fill in the below form to join SaveFoodie community:</p>
          <p>helloo</p>
        </div>

        {/* login form */}
        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <div>
            <Login />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Websitetext;
