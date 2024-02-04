import { Component } from 'react';
import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      page: 1,
      per_page: 12,
      key: '41281960-4f851dde922e1c31c346e4445',
      orientation: 'horizontal',
      image_type: 'photo',
      isLoading: false,
      loadMoreBtn: false,
    };
  }
  componentDidMount() {
    axios.get(baseURL, this.state).then();
  }

  render() {
    return <></>;
  }
}
export default App;
