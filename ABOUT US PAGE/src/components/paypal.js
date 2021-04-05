import React from "react";
import donation_8 from "../images/donation_8.png";

function paypal() {
  return (
    <div>
      <form
        action="https://www.sandbox.paypal.com/donate"
        method="post"
        target="_top"
      >
        <input type="hidden" name="hosted_button_id" value="GZRJ4U657R79A" />
        <input
          type="image"
          src={donation_8}
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
          style={{width:"50%"}}

         
        />
        <img
          alt=""
          border="0"
          src="https://www.sandbox.paypal.com/en_GB/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  );
}

export default paypal;
