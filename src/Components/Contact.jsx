export default function Contact() {
  return (
    <div id="Contact" className="text-center p-5 my-2">
      <div className="text-container">
        <h1 className="fs-1">Get in Touch!</h1>
      </div>
      <p>If you have any queries</p>
      <h5>
        Function <br /> Co-ordinators
      </h5>
      <div className="container d-flex justify-content-evenly align-items-center mt-3 contactNumber">
        <h6 className="fw-light fs-2">
          Ram Bharath <br />
          <span className="fw-light fs-4">+91 95008 88216</span>
        </h6>

        <h6 className="fw-light fs-2">
          Ramya <br />
          <span className="fw-light fs-4">+91 94892 32269</span>
        </h6>
      </div>
      <h5 className="mt-3">Contact us</h5>
      <div className="container">
        <a href="https://www.linkedin.com/company/electronics-and-instrumentation-engineering-gct/about/">
          <img
            src="https://img.icons8.com/color/48/null/linkedin.png"
            alt="linkedin icon"
          />
        </a>
        <a href="https://www.instagram.com/instrumentators/" className="ms-3">
          <img
            src="https://img.icons8.com/fluency/48/null/instagram-new.png"
            alt="instagram icon"
          />
        </a>
        <a href="mailto:gct.blaze@gmail.com" className="ms-3">
          <img
            src="https://img.icons8.com/color/48/null/gmail--v1.png"
            alt="gmail icon"
          />
        </a>
      </div>
    </div>
  );
}
