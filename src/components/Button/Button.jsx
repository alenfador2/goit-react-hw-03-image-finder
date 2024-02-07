// Button.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends Component {
  fetchMoreImages = async () => {
    const { onClick } = this.props;
    if (onClick) {
      this.setState({ isLoading: true });

      try {
        await onClick();
      } catch (error) {
        console.error('Error fetching more images:', error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    const { isLoading } = this.props;

    return (
      <>
        <button
          className={css.load_more_btn}
          onClick={this.fetchMoreImages}
          disabled={isLoading}
        >
          Load More
        </button>
      </>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default Button;
