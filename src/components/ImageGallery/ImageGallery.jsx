import { Component } from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <ul className={css.gallery}>{children}</ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  children: PropTypes.node,
};

export default ImageGallery;
