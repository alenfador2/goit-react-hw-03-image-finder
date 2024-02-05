import { Component } from 'react';
import axios from 'axios';




export class App extends Component {
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
  baseURL = 'https://pixabay.com/api/';
  
  componentDidMount() {
    const {baseURL, state} = this;
    const {searchQuery, page, per_page, key, orientation, image_type} = state;
    const url = `${baseURL}?q=${searchQuery}&page=${page}&key=${key}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`

    axios.get(url).then((response)=>{
      const data = response.data;
      console.log(data);
    }).catch((error) =>{
      console.log(`Something went wrong:`, error)
    })
  }

  render() {
    return <></>;
  }
}

