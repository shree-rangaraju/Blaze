export default function EventCard({
  eventIdName,
  eventName,
  eventImage,
  eventDate,
  eventShortDetails,
  eventLongDetails,
  eventMode,
  rules,
  guidelines,
  submissionDetails,
  roundDetails,
  judgingParameter,
  contactDetails,
  registrationFee,
  rewards,
  gformLink,
  registrationDeadLine,
  submissionDeadLine,
}) {
  const style = { whiteSpace: "pre-line", textAlign: "left" };
  return (
    <>
      <div className="col mt-5">
        <div className="card shadow-sm  bg-transparent">
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src={eventImage}
            alt={eventName + " image"}
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            style={{ objectFit: "cover" }}
          />
          <title>{eventName}</title>
          <div className="card-body">
            <strong className="fs-4">{eventName}</strong>
            <p className="card-text detailColor">{eventShortDetails}</p>
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-outline-light btn-md"
                data-bs-toggle="modal"
                data-bs-target={"#" + eventIdName}
              >
                Know More
              </button>
              <a href={gformLink} className="btn btn-light btn-md">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={eventIdName}
        tabIndex="-1"
        aria-labelledby={eventIdName}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center">
              <h1 className="modal-title fs-5" id={eventIdName}>
                {eventName}
              </h1>
              <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={style}>
              <img
                className="bd-placeholder-img mb-4"
                width="100%"
                height="225"
                src={eventImage}
                alt={eventName + " image"}
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                style={{ objectFit: "cover", border: "5px solid #181d27" }}
              />
              <span className="detailColor">{eventLongDetails}</span>
              <br />
              <br />
              <div className="d-flex align-items-center">
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
                <span className="detailColor ms-2 fs-5">{eventDate}</span>
              </div>
              <h4 className="fs-4 mt-4">
                Event mode: <span className="detailColor">{eventMode}</span>
              </h4>
              {rules && <h4 className="fs-4 mt-4">Rules</h4>}
              {rules && <span className="detailColor">{rules}</span>}
              {guidelines && <h4 className="fs-4 mt-4">Guidelines</h4>}
              {guidelines && <span className="detailColor">{guidelines}</span>}
              {roundDetails && <h4 className="fs-4 mt-4">Round Details</h4>}
              {roundDetails && (
                <span className="detailColor">{roundDetails}</span>
              )}
              {judgingParameter && (
                <h4 className="fs-4 mt-4">Judging Parameter</h4>
              )}
              {judgingParameter && (
                <span className="detailColor">{judgingParameter}</span>
              )}
              {submissionDetails && (
                <h4 className="fs-4 mt-4">Submission Details</h4>
              )}
              {submissionDetails && (
                <span className="detailColor">{submissionDetails}</span>
              )}
              <h4 className="fs-4 mt-4">Registration Fee</h4>
              <span className="detailColor">{registrationFee}</span>
              {registrationDeadLine && (
                <div>
                  <h4 className="fs-4 mt-4">Registration Deadline</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-calendar2-week"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  </svg>
                  <span className="detailColor ms-2">
                    {registrationDeadLine}
                  </span>
                </div>
              )}
              {submissionDeadLine && (
                <div>
                  <h4 className="fs-4 mt-4">Submission Deadline</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-calendar2-week"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  </svg>
                  <span className="detailColor ms-2">{submissionDeadLine}</span>
                </div>
              )}
              {rewards && <h4 className="fs-4 mt-4">Reward Details</h4>}
              {rewards && <span className="detailColor">{rewards}</span>}
              {contactDetails && <h4 className="fs-4 mt-4">Contact</h4>}
              {contactDetails && (
                <span className="detailColor">{contactDetails}</span>
              )}
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-light btn-md"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a href={gformLink} className="btn btn-light btn-md">
                Register Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
