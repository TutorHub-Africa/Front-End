import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/tutor/';

function About_Tutor_Card() {
  const location = useLocation();
  const programId = location.state?.programId;
  const [aboutTutor, setAboutTutor] = useState('Sample Tutor Bio');

  useEffect(() => {
    const fetchCourseOverView = async () => {
      try {
        const response = await axios.get(`${baseUrl}${programId.tutorId}`);
        setAboutTutor(response.data.shortDescription);
      } catch (error) {
        console.error('Failed to fetch course overview:', error);
      }
    };

    fetchCourseOverView();
  }, [programId]);

  return (
    <div className="course-overview-card">
      <h2>About Tutor</h2>
      <p>{aboutTutor}</p>
    </div>
  );
}

export default About_Tutor_Card;
