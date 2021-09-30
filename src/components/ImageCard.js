const ImageCard = ({ imgSrc, imgAlt, inView }) => {
  const viewStyle = { transform: "translateX(" + inView + "px)" };
  return (
    <div className="img-card" style={viewStyle}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default ImageCard;
