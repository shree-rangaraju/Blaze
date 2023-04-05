import Technical from "./Technical";
import NonTechnical from "./NonTechnical";
export default function Events() {
  return (
    <div className="album py-5 bg-body-tertiary" id="Events">
      <div className="container text-center">
        <h2 className="fs-1">Events</h2>
        <div className="row row-cols-1 row-cols-md-2 g-5">
          <div className="Technical d-flex flex-column">
            <h3>Technical</h3>
            <Technical />
          </div>
          <div className="Non-Technical d-flex flex-column">
            <h3>Non Technical</h3>
            <NonTechnical />
          </div>
        </div>
      </div>
    </div>
  );
}
