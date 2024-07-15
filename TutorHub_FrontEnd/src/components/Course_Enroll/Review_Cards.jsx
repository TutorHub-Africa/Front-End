import "../../styles/Course_Enroll/Course_Description_body.css";
import { starIcon, blankStarIcon, quoteIcon } from "../../assets/assets.js";
import {useState , useEffect} from "react";

const Review_Cards = ({programId}) => {
    const [reviewName, setReviewName] = useState("Name");
    const [reviewRating, setReviewRating] = useState(2);
    const [reviewText, setReviewText] = useState("This is a sample review ");

    // useEffect(() => {
    //     fetch(`API ENDPOINT TO GET COURSE INFO/${programId}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setReviewName(data.reviewName);
    //         setReviewRating(data.reviewRating);
    //         setReviewText(data.reviewText);
    
    //     });
    // }, [programId]);

    return (
        <div className="review-card">
            <div className="review-card-profile">
                <div className="review-card-profile-info">
                    <div>
                        <div className="review-card-profile-name">
                           {reviewName} {programId}
                        </div>
                        <div className="review-card-profile-rating">
                            {[...Array(5)].map((star, index) => {
                                return (
                                    <img 
                                        key={index}
                                        src={index < reviewRating ? starIcon : blankStarIcon}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <img src={quoteIcon}/>
                    </div>
                </div>
            </div>
            <div className="review-card-quote">
                <p>"{reviewText}"</p>
            </div>
        </div>
        );
}

export default Review_Cards;