// Code MovieReviews Here
import React from 'react'

function MovieReviews(props) {
    return (
        <div className="review-list">
            {props.reviews.map(review => {
                return (
                    <div className="review">
                        <h2>{review.headline}</h2>
                        <h4>{review.byline} - {review['date_updated']}</h4>
                        <h4>MPAA Rating: {review['mpaa_rating']}</h4>
                        <h4>{review['critics_pick'] === 1 ? `Critic's Pick!` : null}</h4>
                        <p>{review['summary_short']}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieReviews;