import Technical from "./Technical";
import NonTechnical from "./NonTechnical";
export default function Events() {
  return (
    <div className="album py-5" id="Events">
      <div className="container text-center">
        <div className="text-container">
          <h1 className="fs-1 mb-5"> Events </h1>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-5">
          <div className="Technical">
            <h2>TECHNICAL EVENTS</h2>
            <Technical />
          </div>
          <div className="Non-Technical">
            <h2>NON TECHNICAL EVENTS</h2>
            <NonTechnical />
          </div>
        </div>
      </div>
    </div>
  );
}
