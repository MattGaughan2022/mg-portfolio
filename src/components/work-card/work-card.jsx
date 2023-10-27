import "./work-card.scss";

const WorkCard = ({ id, img, name, cardStyle, picRatio }) => {
  return (
    <div
      className={`card ${cardStyle} mx-auto`}
      style={{ height: "620px", width: "96%" }}
    >
      <img src={img} alt={id} className={`${picRatio}`} />
      <h2 style={{ height: "8%" }}>{name}</h2>
      <p style={{ height: "8%" }}>Hello</p>
    </div>
  );
};

export default WorkCard;
