import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ imgArray, onGetFullUrl, loadMoreIMG, isLoading }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {imgArray.map((img) => {
          return (
            <ImageGalleryItem
              key={img.id}
              img={img}
              onGetFullUrl={() => onGetFullUrl(img.largeImageURL)}
            />
          );
        })}
      </ul>
      {isLoading && <Loader />}
      <Button onLoadMore={loadMoreIMG} />
    </>
  );
};
ImageGallery.propTypes = {
  imgArray: PropTypes.array.isRequired,
  onGetFullUrl: PropTypes.func.isRequired,
  loadMoreIMG: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default ImageGallery;