import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { data, onClick } = this.props;

    if (!data || data.length === 0) {
      return <p>No data available</p>;
    } else {
      return (
        <>
          {data.map(item => (
            <li
              className={css['gallery-item']}
              key={item.id}
              onClick={() => onClick(item.largeImageURL)}
            >
              <img
                className={css.item_img}
                src={item.webformatURL}
                alt={item.tags}
                id={item.id}
              />
            </li>
          ))}
        </>
      );
    }
  }
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.array,
};

export default ImageGalleryItem;
