import CountDownTimer from "./CountDownTimer";
export default function Cover() {
  const regisStyle={
    width: "70%",
    borderRadius: "20px",
    backgroundColor: "#0b0d12"
  }
  return (
    <section className="py-5 text-center container d-flex justify-content-center align-items-center">
      <div className="row py-lg-5  d-flex justify-content-center">
        <h6 className="fw-light mt-5">The Department of EIE presents...</h6>
        <div className="text-container">
          <h1>Blaze</h1>
        </div>
        <p className="fs-5">
          A remarkably rare occurrence that must not be missed.
        </p>
        <p>
          <a href="#Events" className="btn btn-outline-light my-2">
            Take me to events
          </a>
        </p>
        {/*  */}
        <div style={regisStyle} className="my-5 py-3">
          <div className="text-container">
            <h1 className="fs-2">Combo Offer</h1>
          </div>
          <h4 className="fw-light fs-5 mb-0 mobileSize">Paper Presentation</h4>
          <h4 className="fw-light my-0 fs-5 mobileSize">+</h4>
          <h4 className="fw-light fs-5 mobileSize">All Non-tech Events</h4>
          <h4 className="fw-light fs-5 mobileSize">Price to Catch</h4>
          <div className="d-flex justify-content-evenly contactNumber">
            <h4 className="fw-light fs-5 mobileSize">Rs.250 For Non-GCTians</h4>
            <h4 className="fw-light fs-5 mobileSize">Rs.200 For GCTians</h4>
          </div>
          <button className="btn btn-outline-light mt-3" href="https://docs.google.com/forms/d/e/1FAIpQLSfYH5wQ9_T14zNhg8-nTnU4phKy5RapB1RRT62Zi_0qtweBxw/viewform">Take me In</button>
        </div>
        <div>
          <h1 className="fs-3">
            POOL PRIZE WORTH
            <br />
            <div className="cash">
              <h1
                className="symbol"
                style={{ fontSize: "120px !important", display: "inline" }}
              >
                &#8377;
              </h1>
              &nbsp; &nbsp;
              <h1 style={{ display: "inline" }}>15,000</h1>
            </div>
          </h1>
        </div>
        <div className="d-flex justify-content-evenly coverEvent">
          <span className="fw-bold fs-1">
            4
            <br /> <h4 className="typeEvents">Tech Events </h4>
          </span>
          <span className="fw-bold fs-1">
            4
            <br /> <h4 className="typeEvents">Non-Tech Events </h4>
          </span>
        </div>
        <h3 className="fw-light mt-3"> Coming Soon!</h3>
        <div className="d-flex align-items-center justify-content-center mt-3 mb-3  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-calendar-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          <span className="detailColor ms-2 fs-5">20 April, 2023</span>
        </div>
        <CountDownTimer />
      </div>
    </section>
  );
}
