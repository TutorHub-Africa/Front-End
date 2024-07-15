import { useState, useEffect } from "react";
import Review_Card from "../Course_Enroll/Review_Card";
import { buttonLeft, buttonRight, rateStar} from "../../assets/assets";

function Course_Review({programId}){
    const [reviewId, setReviewId] = useState([55, 92, 66, 3]);

    //   useEffect(() => {
    //     fetch(`API ENDPOINT TO GET COURSE INFO/${programId}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setRating(data.rating);
    //         setReviewId(data.reviews);
    //         setSubject(data.subject);
    //         setTitle(data.title);
    //         setTutorName(data.tutorName);
    //     });
    // }, [programId]);

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentReviewIndex(oldIndex => oldIndex > 0 ? oldIndex - 1 : reviewId.length - 1);
    }
    
    const handleRightClick = () => {
        setCurrentReviewIndex(oldIndex => oldIndex < reviewId.length - 1 ? oldIndex + 1 : 0);
    }

    return(
        <div className="course-page-main-content">
            <div className="course-review-container">
                <div className="review-cards-container">
                    <Review_Card reviewID={reviewId[currentReviewIndex]} />
                </div>
                <div className='review-nav-buttons'>
                    <img src={buttonLeft} onClick={handleLeftClick} className='review-nav-but'/>
                    <img src={buttonRight} onClick={handleRightClick} className='review-nav-but'/>
                </div>
            </div>

            <div className="submit-review-container">
                <h2> Rate & Review</h2>
                <div className="rate-stars">
                    <img src={rateStar}/>
                    <img src={rateStar}/>
                    <img src={rateStar}/>
                    <img src={rateStar}/>
                    <img src={rateStar}/>
                </div>

                <input 
                    type="text" 
                    placeholder="Write a review..."
                    className="review-textfield"
                    />
                <div className="review-but-div">
                    <button className="review-submit-but">
                        Submit Review
                    </button>
                </div>
            </div>

        </div>

    );
}

export default Course_Review;