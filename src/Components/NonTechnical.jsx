import EventCard from "./EventCard";
import NonTechnicalDetails from "../assets/EventDetails/NonTechnicalDetails";
export default function NonTechnical() {
  const EventCards = NonTechnicalDetails.Events.map((details) => {
    return <EventCard key={details.id} {...details} />;
  });
  return (
    <>
      {EventCards}
      <img
        src="static/undraw_game_world_re_e44j.svg"
        alt="game image"
        width="250px"
        className="mt-5 mb-3"
        type="image/svg+xml"
      />
      <h2>Join us Now!</h2>
    </>
  );
}
