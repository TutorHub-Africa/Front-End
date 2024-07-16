import { useState } from 'react';
import '../../styles/Course_Dashboard/Tutor_Dashboard.css';
import Course_Search_Head from '../Search_Courses/Course_Search_Head.jsx';

import Tutor_Greeting from './Tutor_Greeting.jsx';
import Post_Resources from './Post_Resources.jsx';
import Post_Assesments from './Post_Assesments.jsx';
import See_Review from './See_Review.jsx';
import Message from './Message.jsx';

function Tutor_DashBoard(){
    const [activeButton, setActiveButton] = useState('button1');
    const [programId, setProgramId] = useState('');
    const [selectedProgramName, setSelectedProgramName] = useState('NOT SELECTED');

    const courses = [
        { id: '1', name: 'Course 1' },
        { id: '2', name: 'Course 2' },
    ];

    const handleClick = (buttonId) => {
      setActiveButton(buttonId);
    }

    const handleCourseChange = (event) => {
        setProgramId(event.target.value); 
        setSelectedProgramName(courses.find(course => course.id === event.target.value).name);
    }
  
    return (
      <div className='course-page-container'>
        <Course_Search_Head/>
        <div className="course-page-dashboard">
          <div className="course-page-sidebar">
            <select className='select-course' value={programId} onChange={handleCourseChange}> {/* Add this block */}
                <option value="">Select a course</option>
                {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                        {course.name}
                    </option>
                ))}
            </select>
            <button 
              id='button1'
              className={`course-page-sidebar-item ${activeButton === "button1" ? "course-page-sidebar-item active" : ""}`}
              onClick={() => handleClick("button1")}
              >
              Dashboard
            </button>
            <button 
                id='button2'
                className={`course-page-sidebar-item ${activeButton === "button2" ? "course-page-sidebar-item active" : ""}`}
                onClick={() => handleClick("button2")}
                >
                Post Resources
            </button>
            <button 
                id='button3'
                className={`course-page-sidebar-item ${activeButton === "button3" ? "course-page-sidebar-item active" : ""}`}
                onClick={() => handleClick("button3")}
                >
                Post Assesments
            </button>
            <button 
                id='button4'
                className={`course-page-sidebar-item ${activeButton === "button4" ? "course-page-sidebar-item active" : ""}`}
                onClick={() => handleClick("button4")}
                >
                Reviews
            </button>
            <button 
                id='button5'
                className={`course-page-sidebar-item ${activeButton === "button5" ? "course-page-sidebar-item active" : ""}`}
                onClick={() => handleClick("button5")}
                >
                Contact Tutor
            </button>
          </div>
  
          {activeButton === "button1" &&(
            programId?  <Tutor_Greeting programId={programId} programName={selectedProgramName}/>
            : <h1>SELECT A COURSE</h1>
          )}
          {activeButton === "button2" && <Post_Resources programId={programId}/>}
          {activeButton === "button3" && <Post_Assesments programId={programId}/>}
          {activeButton === "button4" && <See_Review programId={programId}/>}
          {activeButton === "button5" && <Message/>}
          
        </div>
      </div>
    );
}

export default Tutor_DashBoard;