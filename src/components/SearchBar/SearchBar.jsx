import { Component } from 'react';
import css from './SearchBar.module.css';
import { CiSearch } from 'react-icons/ci';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }
  handleChange = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { inputValue } = this.state;
    const { onSubmit } = this.props;
    onSubmit(inputValue);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form className={css.form} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.button}>
              <CiSearch size={32} className={css.search} />
            </button>
            <input
              onChange={this.handleChange}
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
