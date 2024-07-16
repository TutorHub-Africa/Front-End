import React, { useState } from 'react';

import '../../styles/Search_Courses/Course_Search_Main.css';

import Course_Card from './Course_Card';
import Filter_Component from './Filter_Component';
import Course_Search_Head from './Course_Search_Head';
import Search_Bar from './Search_Bar';

function Course_Search_Main(){
    const [selectedPrograms, setSelectedPrograms] = useState([1,3,4,5,6,7]);

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedPayTypes, setSelectedPayTypes] = useState(['paid']);
    const [selectedRating, setSelectedRating] = useState([]);

    /*
    const selectedSubjects = [
      { name: 'English'},
    ];

    const selectedLanguages = ['Amharic', 'English'];
    */

    /*
    useEffect(() => {
      fetch('API END-POINT TO GET LIST OF SUBJECTS')
        .then(response => response.json())
        .then(data => setSubjects(data));
    }, []); 
    useEffect(() => {
      fetch('API END-POINT TO GET LIST OF LANGUAGES')
        .then(response => response.json())
        .then(data => setLanguages(data));
    }, []);
    */


    return(
        <>
        <div className='total-container'>
        <Course_Search_Head/>

        <div className='course-search-body'>
            <div className='filter-card'>
                <Filter_Component
                    setSelectedPrograms = {setSelectedPrograms}
                    selectedSubjects = {selectedSubjects}
                    setSelectedSubjects = {setSelectedSubjects}
                    selectedLanguages = {selectedLanguages}
                    setSelectedLanguages = {setSelectedLanguages}
                    selectedPayTypes = {selectedPayTypes}
                    setSelectedPayTypes = {setSelectedPayTypes}
                    selectedRating = {selectedRating}
                    setSelectedRating = {setSelectedRating}
                />
            </div>

            <div className='search-section'>
                <Search_Bar
                    setSelectedPrograms = {setSelectedPrograms}
                    selectedSubjects = {selectedSubjects}
                    selectedLanguages = {selectedLanguages}
                    selectedPayTypes = {selectedPayTypes}
                    selectedRating = {selectedRating}
                />

                <div className="program-list">
                    {selectedPrograms.map((program_id, index) => (
                        <div className='course-card' key={index} >
                            <Course_Card
                                programId={program_id}
                            />
                        </div>
                    ))}
                </div> 
            </div>
        </div>
        </div>
        </>

    );
}

export default Course_Search_Main;