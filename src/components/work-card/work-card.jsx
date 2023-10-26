import "./work-card.scss";

const WorkCard = ({ id, img, name, cardStyle }) => {
  return (
    <div
      className={`card ${cardStyle} mx-auto`}
      style={{ height: "620px", width: "96%" }}
    >
      <img
        src={img}
        alt={id}
        style={{ height: "80%", minHeight: "300px", width: "100%" }}
      />
      <h2 style={{ height: "8%" }}>{name}</h2>
      <p style={{ height: "8%" }}>Hello</p>
    </div>
  );
};

export default WorkCard;
