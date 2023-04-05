export default function EventCard({
  eventName,
  eventImage,
  eventShortDetails,
  eventLongDetails,
  gformLink,
}) {
  return (
    <div className="col mt-5">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            Thumbnail
          </text>
        </svg>
        <div className="card-body">
          <p className="card-text">{eventShortDetails}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Know More
            </button>
            <button className="btn btn-outline-secondary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
