export default function Footer() {
  return (
    <footer className="text-body-secondary py-5">
      <div className="d-flex justify-content-center align-items-center flex-column text-center">
        <div className="text-container">
          <h1 className="fs-1">Join us</h1>
        </div>
        <h5 className="fw-light">
          Government College of Technology,
          <br /> Coimbatore - 641013
        </h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.9325844557954!2d76.9355983249739!3d11.01775980636278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859bc68a09113%3A0xe3f375684903c44b!2sDepartment%20of%20EIE%20-%20GCT!5e0!3m2!1sen!2sin!4v1680800864185!5m2!1sen!2sin"
          width="80%"
          height="300"
          style={{ border: "2px solid #1e2532", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container px-4 mt-5 d-flex justify-content-between">
        <p className="mb-1">
          <div className="text-container">
            <h1 className="fs-2">Blaze</h1>
          </div>
          &copy; Copyright 2023
          <br /> All rights reserved
        </p>
        <p className="mb-1">
          <a className="btn btn-outline-light btn-sm" href="#Hero">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
