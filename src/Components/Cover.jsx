import CountDownTimer from "./CountDownTimer";
export default function Cover() {
  return (
    <section className="py-5 text-center container d-flex justify-content-center align-items-center">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <div className="text-container">
            <h1>Blaze</h1>
          </div>
          <p className="lead text-body-secondary">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <a href="#Events" className="btn btn-outline-secondary my-2">
              Take me to events
            </a>
          </p>
          <CountDownTimer />
        </div>
      </div>
    </section>
  );
}
