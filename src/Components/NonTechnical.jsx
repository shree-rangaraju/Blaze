import EventCard from "./EventCard";
import NonTechnicalDetails from "../assets/EventDetails/NonTechnicalDetails";
export default function NonTechnical() {
  const EventCards = NonTechnicalDetails.Events.map((details) => {
    return <EventCard key={details.id} {...details} />;
  });
  return <>{EventCards}</>;
}
