import { Component } from 'react';
import axios from 'axios';
import { Notify } from 'notiflix';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

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
      showModal: false,
      selectedImage: null,
    };
    this.baseURL = 'https://pixabay.com/api/';
  }

  fetchData = async () => {
    this.setState({
      isLoading: true,
    });
    const { searchQuery, page, per_page, key, orientation, image_type } =
      this.state;
    const url = `${this.baseURL}?q=${searchQuery}&page=${page}&key=${key}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      this.setState(prevState => ({
        ...prevState,
        data: data.hits,
        loadMoreBtn: data.totalHits > this.state.per_page,
        dataTotal: data.totalHits,
      }));
      if (per_page === 12) {
        Notify.success(`Hurray, we get ${data.totalHits} results!`);
      }
    } catch (error) {
      Notify.failure('Failed to fetch data. Please try again later.');
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        per_page: prevState.per_page + 12,
      }),
      () => {
        this.fetchData();
      }
    );
  };

  handleSubmitInput = value => {
    console.log(value);
    this.setState(
      {
        searchQuery: value,
        page: 1,
        per_page: 12,
      },
      () => {
        this.fetchData();
      }
    );
  };

  handleClickImage = imageURL => {
    this.setState({
      showModal: true,
      selectedImage: imageURL,
    });
  };

  onClose = () => {
    this.setState({
      showModal: false,
      selectedImage: null,
    });
  };

  async componentDidMount() {
    await this.fetchData();
  }

  render() {
    const { data, loadMoreBtn, per_page, dataTotal, isLoading, selectedImage } =
      this.state;
    if (!loadMoreBtn && per_page >= dataTotal) {
      Notify.info("We're sorry, but you've reached the end of search results.");
    }
    return (
      <>
        {this.state.showModal && (
          <Modal
            largeImageUrl={selectedImage}
            onClose={this.onClose}
            hits={data}
          />
        )}
        <Loader loading={isLoading} />
        <SearchBar onSubmit={this.handleSubmitInput} />
        <ImageGallery>
          <ImageGalleryItem data={data} onClick={this.handleClickImage} />
        </ImageGallery>
        {loadMoreBtn && <Button onClick={this.loadMore} />}
      </>
    );
  }
}
