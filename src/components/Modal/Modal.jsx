import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.keyCode === 27) {
      this.props.onClose();
    }
  }

  handleClick(event) {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  }

  render() {
    const { largeImageUrl } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={largeImageUrl} alt="" className={css.large_image} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  hits: PropTypes.array.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
