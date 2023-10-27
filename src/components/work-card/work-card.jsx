import "./work-card.scss";

const WorkCard = ({ id, img, name, link, cardStyle, picRatio }) => {
  return (
    <div
      className={`card ${cardStyle} mx-auto`}
      style={{
        height: "620px",
        width: "96%",
        borderTop: "4px solid #64ffda",
        borderBottom: "4px solid #64ffda",
      }}
    >
      <img
        src={img}
        alt={id}
        className={`${picRatio}`}
        onClick={() => {
          window.location.href = `${link}`;
        }}
      />
      <h2 style={{ height: "8%" }}>{name}</h2>
      <p style={{ height: "8%" }}>Hello</p>
    </div>
  );
};

export default WorkCard;
