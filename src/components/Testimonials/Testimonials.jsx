import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonial-section">

      <h2>Athlete Endorsed</h2>

      <div className="testimonial-grid">

        <div className="testimonial-card">

          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Athlete"
          />

          <p>
            Amazing turf quality and super easy booking.
          </p>

          <h4>Sarah Wilson</h4>
          <span>Football Captain</span>

        </div>

        <div className="testimonial-card">

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Athlete"
          />

          <p>
            Professional facilities and excellent maintenance.
          </p>

          <h4>David Lee</h4>
          <span>Cricket Coach</span>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;