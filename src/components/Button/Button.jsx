// Button.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends Component {
  fetchMoreImages = async () => {
    const { onClick } = this.props;
    if (onClick) {
      // Disable the button during the asynchronous operation to prevent multiple calls
      this.setState({ isLoading: true });

      try {
        await onClick();  // Assuming your fetchData logic is inside onClick
      } catch (error) {
        console.error('Error fetching more images:', error);
      } finally {
        // Enable the button after the asynchronous operation is complete
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    const { isLoading } = this.props;

    return (
      <button
        className={css.load_more_btn}
        onClick={this.fetchMoreImages}
        disabled={isLoading}  // Disable the button when isLoading is true
      >
        Load More
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default Button;
