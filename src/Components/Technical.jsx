import EventCard from "./EventCard";
import TechnicalDetails from "../assets/EventDetails/TechnicalDetails";
export default function Technical() {
  const EventCards = TechnicalDetails.Events.map((details) => {
    return <EventCard key={details.id} {...details} />;
  });
  return <>{EventCards}</>;
}
