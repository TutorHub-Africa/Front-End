import React, { useState, useEffect } from 'react';
import "../../styles/Course_Enroll/Course_Description_Card.css";

import {buttonLeft, buttonRight} from '../../assets/assets.js'

import Star from "../../assets/star.png";
import course_img_placeholder from "../../assets/error.png";

import OverView_Card from './Overview_Card'; 
import About_Tutor_Card from './About_Tutor_Card';
import Review_Cards from './Review_Cards';
import Payment_Card from './Payment_Card.jsx';
import Details_Card from './Details_Card.jsx';
import Course_Search_Head from '../Search_Courses/Course_Search_Head.jsx';

function Course_Description_Card({programId}){
    const [activeButton, setActiveButton] = useState('button1');
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
    }

    const handleLeftClick = () => {
        setCurrentReviewIndex(oldIndex => oldIndex > 0 ? oldIndex - 1 : reviewId.length - 1);
    }
    
    const handleRightClick = () => {
        setCurrentReviewIndex(oldIndex => oldIndex < reviewId.length - 1 ? oldIndex + 1 : 0);
    }
    
    const [courseImage, setCourseImage] = useState(course_img_placeholder);
    const [subject , setSubject] = useState("Subject");
    const [review, setReview] = useState(0);
    const [title , setTitle] = useState("Title");
    const [tutorName, setTutorName] = useState("Tutor Name");
    const [price, setPrice] = useState(0.0);
    const [reviewId, setReviewId] = useState([55, 92, 66, 3]);

  //   useEffect(() => {
  //     fetch(`API ENDPOINT TO GET COURSE INFO/${programId}`)
  //     .then(response => response.json())
  //     .then(data => {
  //         setCourseImage(data.courseImage);
  //         setReview(data.review);
  //         setSubject(data.subject);
  //         setTitle(data.title);
  //         setTutorName(data.tutorName);
  //         setPrice(data.price);
  //         setReviewId(data.reviews);
  //     });
  // }, [programId]);


    return (
        <div className='description-page-total'>
        <Course_Search_Head/>
        <div className='description-page'>
            <div className="description-card">
                <div className="description-card-header">
                    <img src={courseImage} alt="Instructor" />
                </div>

                <div className="description-card-badge">
                    <p className="description-category">{subject}</p>

                    <div className="description-rat">
                        <div className="description-starContainer">
                            <img src={Star} alt="star" />
                            <p>{review} Reviews</p>
                        </div>
                    </div>
                </div>
            
                <div className="description-card-body">
                    <span className="description-rating"></span>
                    <h3 className="description-title">{title}</h3>
                    <p className="description-instructor">By {tutorName}</p>
                </div>

                <div className="description-card-footer">
                    <button 
                        id='button1'
                        className={`description-text-button ${activeButton === "button1" ? "button-active" : ""}`}
                        onClick={() => handleClick("button1")}
                        >
                        OverView
                    </button>
                    <button 
                        id='button2'
                        className={`description-text-button ${activeButton === "button2" ? "button-active" : ""}`}
                        onClick={() => handleClick("button2")}
                        >
                        About Tutor
                    </button>
                    <button 
                        id='button3'
                        className={`description-text-button ${activeButton === "button3" ? "button-active" : ""}`}
                        onClick={() => handleClick("button3")}
                        >
                        Reviews
                    </button>
                    <button 
                        id='button4'
                        className={`description-text-button-payment ${activeButton === "button4" ? "button-active" : ""}`}
                        onClick={() => handleClick("button4")}
                        >
                        Make Payment
                    </button>
                </div>
                {activeButton === "button1" && <OverView_Card programId={programId}/>}
                {activeButton === "button2" && <About_Tutor_Card programId={programId}/>}
                {activeButton === "button3" &&
                    <div className='review-div'>
                        <div className="review-cards-container">
                            <Review_Cards programId={reviewId[currentReviewIndex]} />
                        </div>
                        <div className='review-nav-buttons'>
                            <img src={buttonLeft} onClick={handleLeftClick} className='review-nav-but'/>
                            <img src={buttonRight} onClick={handleRightClick} className='review-nav-but'/>
                        </div>
                    </div>
                }
                {activeButton === "button4" && <Payment_Card />}
            </div>

            <div className='description-details-container'>
                <Details_Card/>
            </div>
        </div>
        </div>
      );
}
export default Course_Description_Card;
