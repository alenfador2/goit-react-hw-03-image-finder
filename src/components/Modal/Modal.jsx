import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.getIndex = this.getIndex.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.keyCode === 'Escape') {
      this.props.onClose();
    }
  }

  handleClick(event) {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  }
  getIndex = event =>{
    const index = event.currentTarget.dataset.index;
    return index;
  }

  render() {
    const { hits } = this.props;
  
    const largeImageUrl = hits[1].largeImageURL;

    return (
      <div className={css.overlay} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={this.props.largeImageUrl} alt="" className={css.large_image} />
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
