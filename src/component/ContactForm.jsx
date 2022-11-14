import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const AddEvent = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitData = async e => {
    e.preventDefault();
    //! Jo data firebase ma store karna ha os ko pehly destructure karna huga.

    const { firstName, lastName, phone, email, address, message } = formData;
    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        `https://reactfirebasewebsite-158f0-default-rtdb.firebaseio.com/UserData.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        alert("data store");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      } else {
        alert("please data file");
      }
    } else {
      alert("Please Enter All Data");
    }
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    contact us with our <br />
                    sales team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, reprehenderit.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="hero1"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          onChange={AddEvent}
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={formData.firstName}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          onChange={AddEvent}
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={formData.lastName}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          onChange={AddEvent}
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={formData.phone}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          onChange={AddEvent}
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={formData.email}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          onChange={AddEvent}
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={formData.address}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          onChange={AddEvent}
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={formData.message}
                        />
                      </div>
                    </div>

                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        onChange={AddEvent}
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para"
                      >
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>
                    <button
                      type="submit"
                      onClick={submitData}
                      className="btn btn-style w-100"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
