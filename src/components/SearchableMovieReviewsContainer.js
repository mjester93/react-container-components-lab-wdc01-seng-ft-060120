import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {

    state = {
        searchTerm: null,
        reviews: []
    }

    handleSearchInputChange = (value) => {
        this.setState({searchTerm: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL + this.state.searchTerm)
        .then(response => response.json())
        .then(reviewsData => this.setState({reviews: reviewsData.results}))
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input
                        id="search-input"
                        type="text"
                        onChange={(event) => this.handleSearchInputChange(event.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
                </div>
        )
    }
}

export default SearchableMovieReviewsContainer