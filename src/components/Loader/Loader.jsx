import { InfinitySpin } from 'react-loader-spinner';
import { Component } from 'react';
import css from './Loader.module.css';

class Loader extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        {loading ? (
          <div className={css.loader_div}>
            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
              loading={loading}
              className={css.loader}
            />
          </div>
        ) : null}
      </>
    );
  }
}
export default Loader;
