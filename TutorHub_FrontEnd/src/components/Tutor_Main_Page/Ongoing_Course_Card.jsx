import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Student_Course_List/Enrolled_Course_Card.css";

import Star from "../../assets/star.png";
import course_img_placeholder from "../../assets/error.png";

function Ongoing_Course_Card({programId}){
    const [courseImage, setCourseImage] = useState(course_img_placeholder);
    const [subject , setSubject] = useState("Subject");
    const [review , setReview] = useState(0.0);
    const [title , setTitle] = useState("Title");
    const [enrolled, setEnrolled] = useState("0");

  //   useEffect(() => {
  //     fetch(`API ENDPOINT TO GET COURSE INFO/${programId}`)
  //     .then(response => response.json())
  //     .then(data => {
  //         setCourseImage(data.courseImage);
  //         setSubject(data.subject);
  //         setReview(data.review);
  //         setTitle(data.title);
  //         setEnrolled(data.tutorName);
  //     });
  // }, [programId]);

    const navigate = useNavigate();

    function handleLearn(programId){
      navigate('/tutor/dashboard', { state: { programId } });
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
            <p className="instructor">Enrolled: {enrolled} Students</p>
          </div>

          <div className="card-footer">
            <button 
                className="learn-button" 
                onClick={() => {handleLearn(programId)}}
                >
                Start Teaching
            </button>
          </div>
        </div>
      );
}
export default Ongoing_Course_Card;