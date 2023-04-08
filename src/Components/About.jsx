export default function About() {
  return (
    <div id="About">
      <div className="text-container pt-5">
        <h1 className="fs-1">About us</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <img
          src="static/eielogo.png"
          alt="EIE Logo"
          width="300px"
          type="image/png"
        />
        <p className="fs-5 fw-light container text-center mb-5">
          Blaze is an inter college event organized by the Department of
          Electronics and Instrumentation Engineering of GCT, Coimbatore to
          ensure the active participation of the students of other colleges in
          our events and to develop friendly relationship with the neighboring
          colleges.
          <br />
          <br /> Now feeling excited to take part in a celebration filled with
          laughter , fun and even more informative things? Through music, dance,
          and performances, we hope to celebrate and embrace our differences
          while also promoting inclusivity and understanding.
          <br /> So mark your calendars and get ready for a day to remember.
          <br />
          <br /> We can't wait to see you there!!
        </p>
      </div>
    </div>
  );
}
