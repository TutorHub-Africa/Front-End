import React, { useState, useEffect } from 'react';
import "../../styles/Search_Courses/Course_Card.css";

import Star from "../../assets/star.png";
import course_img_placeholder from "../../assets/error.png";

function Course_Card(){
    const [courseImage, setCourseImage] = useState(course_img_placeholder);
    const [subject , setSubject] = useState("Subject");
    const [review , setReview] = useState(0.0);
    const [title , setTitle] = useState("Title");
    const [tutorName, setTutorName] = useState("Tutor Name");
    const [price, setPrice] = useState(0.0);

    // useEffect(() => {
       
    // }, []);

    function handleEnroll(){
        console.log("Enroll button clicked");
    };

    return (
        <div className="card">
          <div className="card-header">
            <img src={courseImage} alt="Instructor" />
          </div>

          <div className="card-badge">
            <p className="category">{subject}</p>

            <div className="rat">
                <div className="starContainer">
                    <img src={Star} alt="star" />
                    <p>{review} Reviews</p>
                </div>
            </div>
          </div>
    
          <div className="card-body">
            <span className="rating"></span>
            <h3 className="title">{title}</h3>
            <p className="instructor">By {tutorName}</p>
          </div>

          <div className="card-footer">
            <button 
                className="enroll-button" 
                onClick={() => {handleEnroll()}}
            >
                Enroll Now
            </button>
            <span className="price">${price}</span>
          </div>
        </div>
      );

}
export default Course_Card;