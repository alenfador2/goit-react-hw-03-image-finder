import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import axios from 'axios';
import Button from './Button/Button';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      data: null,
      page: 1,
      per_page: 12,
      key: '41281960-4f851dde922e1c31c346e4445',
      orientation: 'horizontal',
      image_type: 'photo',
      isLoading: false,
      loadMoreBtn: false,
    };
    this.baseURL = 'https://pixabay.com/api/';
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { baseURL, state } = this;
    const { searchQuery, page, per_page, key, orientation, image_type } = state;
    const url = `${baseURL}?q=${searchQuery}&page=${page}&key=${key}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`;

    await axios
      .get(url)
      .then(response => {
        const data = response.data;
        this.setState({
          data: data.hits,
        })
        console.log(data);
      })
      .catch(error => {
        console.log(`Something went wrong:`, error);
      });
  };

  loadMore = () =>{
    // event.preventDefault();
    this.setState((prevState)=>{
      return{per_page: prevState.per_page + 12}
    });
    this.fetchData();
  }

  handleSubmitInput = value => {
    console.log(value);
    this.setState({
      searchQuery: value,
      page:1,
    }, () =>{
      this.fetchData();
    });
  };

  render() {
    const {  state } = this;
    const { searchQuery, page, per_page, key, orientation, image_type, data } = state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmitInput} />
        <ImageGallery>
          <ImageGalleryItem data={data}/>
        </ImageGallery>
        <Button onClick = {this.loadMore}/>
      </>
    );
  }
}
