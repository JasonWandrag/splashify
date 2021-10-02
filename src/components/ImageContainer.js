import ImageCard from "./ImageCard";

const ImageContainer = ({ images, moveView, inView, active }) => {
  return (
    <main className="image-grid">
      <button
        onClick={() => moveView(320)}
        className={
          !active.active
            ? "image-grid-arrow left-arrow active"
            : "image-grid-arrow left-arrow"
        }
      >
        &#60;
      </button>
      <button
        onClick={() => moveView(-320)}
        className={
          !active.active
            ? "image-grid-arrow right-arrow active"
            : "image-grid-arrow right-arrow"
        }
      >
        &#62;
      </button>
      {images.length
        ? images.map((image) => {
            return (
              <ImageCard
                key={image.id}
                imgSrc={image.urls.small}
                imgAlt={image.alt_description}
                inView={inView}
              ></ImageCard>
            );
          })
        : "Loading Images"}
    </main>
  );
};

export default ImageContainer;
