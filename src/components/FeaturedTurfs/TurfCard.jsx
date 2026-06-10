import "./FeaturedTurfs.css";

function TurfCard({
  image,
  name,
  price,
  description,
  features
}) {
  return (
    <div className="turf-card">

      <img src={image} alt={name} />

      <div className="turf-content">

        <div className="card-top">
          <h3>{name}</h3>
          <span>{price}</span>
        </div>

        <p>{description}</p>

        <div className="features">
          {features.map((feature, index) => (
            <span key={index}>
              {feature}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}

export default TurfCard;