import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const messageRef = React.useRef(null);  
  // function validateEmail(value) {
  //   let error;
  //   if (!value) {
  //     error = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
  //     error = "Invalid email address";
  //   }
  //   return error;
  // }

  // validation
   const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .matches(
        /^[A-Za-z]+( [A-Za-z]+)*$/,
        "Name can only contain letters and spaces"
      )
      .required("Name is required"),
    company: Yup.string().required("Company Name is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      )
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Phone number must be digits only")
      .min(1, "Phone number must be at least 1 digit")
      .max(15, "Phone number must be at most 15 digits")
      .required("Phone is required"),
    country: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Country can only contain letters and spaces")
      .required("Country is required"),
    message: Yup.string().required("Message are required"),
  });
  // const [errors, setErrors] = useState({});
  // const validateForm = async () => {
  //   try {
  //     await validationSchema.validate(formData, { abortEarly: false });
  //     return {};
  //   } catch (err) {
  //     const validationErrors = {};
  //     err.inner.forEach((error) => {
  //       validationErrors[error.path] = error.message;
  //     });
  //     return validationErrors;
  //   }
  // };
  // validation
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    
    <section className="contact section-padding">
      <div className="container">
       
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <Formik
                initialValues={{
                  name: "",
                  company:"",
                  email: "",
                  phone:"",
                  country:"",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = ''
                  }, 2000)
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_company"
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          // validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field                          
                          id="form_phone"
                          type="number"
                          name="phone"
                          placeholder="Phone"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field                          
                          id="form_country"
                          type="text"
                          name="country"
                          placeholder="Country"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      />
                    </div>

                    <button type="submit" className="butn bord">
                      <span>Send Message</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="mailto:info@metalerp.com">info@metalerp.com</a>
                </h5>
                <h5>
                  <a href="tel:18002700405">{ContactFromDate.phone}</a></h5>
              </div>
              <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>
              {/* <div className="social mt-50">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
