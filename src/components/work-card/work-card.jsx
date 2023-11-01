import "./work-card.scss";

const WorkCard = ({ id, img, name, link, cardStyle, picRatio, info }) => {
  function openLinkInNewTab(url) {
    window.open(link, "_blank");
  }
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
          openLinkInNewTab(link);
        }}
      />
      <h2 style={{ height: "8%" }}>{name}</h2>
      <p
        style={{
          height: "8%",
          maxWidth: "82%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {info}
      </p>
    </div>
  );
};

export default WorkCard;
