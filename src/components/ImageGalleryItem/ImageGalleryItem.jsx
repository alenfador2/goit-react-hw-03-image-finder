import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { data } = this.props;
    if (data === null) {
      return <p>No data avalaible</p>;
    } else {
      return (
        <>
          {data.map(item => (
            <li className={css['gallery-item']} key={item.id}>
              <img className={css.item_img} src={item.webformatURL} alt="" id={item.id} />
            </li>
          ))}
        </>
      );
    }
  }
}

ImageGalleryItem.propTypes = {
  data: PropTypes.array,
  key: PropTypes.number,
};
export default ImageGalleryItem;
