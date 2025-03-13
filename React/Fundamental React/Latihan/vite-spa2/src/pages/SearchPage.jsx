import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMovies } from '../utils/data';
import { useParams, useSearchParams } from 'react-router-dom';


const SearchPageWrapper = () =>{

  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');
  
  const changeSearchParams = (keyword) => {
    setSearchParams({title: keyword});
  }

  return <SearchPage onSearch={changeSearchParams} activeKeyword={title}/>;
}


class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   foundMovies: []
    // };
    this.state = {
      foundMovies: props.activeKeyword ? searchMovies(props.activeKeyword) : []
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        foundMovies: searchMovies(props.activeKeyword)
      };
    });
    
    this.props.onSearch(keyword);
  }

  render() {
    return (
      <section>
        <h2>Search Movie</h2>
        <SearchBar search={this.onSearch} defaultKeyword={this.props.activeKeyword} />
        <MovieList movies={this.state.foundMovies} />
      </section>
    );
  }
}

// export default SearchPage;
export default SearchPageWrapper;
