export default function Contact() {
  return (
    <div id="Contact" className="text-center p-5 my-2">
      <div className="text-container">
        <h1 className="fs-1">Get in Touch! </h1>
      </div>
      <p>If you have any queries</p>
      <h5>
        Function <br /> Co-ordinators
      </h5>
      <div className="container d-flex justify-content-evenly align-items-center contactNumbers">
        <div>
          <h3 className="fw-light">Ram Bharath</h3>
          <h6 className="fw-light mt-3">+91 95008 88216</h6>
        </div>
        <div>
          <h3 className="fw-light">Ramya</h3>
          <h6 className="fw-light mt-3">+91 94892 32269</h6>
        </div>
      </div>
      <h5>Social Media</h5>
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
      </div>
    </div>
  );
}
