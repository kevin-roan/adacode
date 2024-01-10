import { GalleryCard } from "../components";
function Gallery() {
  return (
    <div className="gallary_container">
      <h1>
        Our <span> Gallary</span>{" "}
      </h1>
      <div className="gallary_card_wrapper">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </div>
  );
}

export default Gallery;
