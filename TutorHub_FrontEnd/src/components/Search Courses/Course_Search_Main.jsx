import React, { useEffect, useState } from 'react';
import Filter_Component from './Filter_Component';

function Course_Search_Main(){
    const [selectedPrograms, setSelectedPrograms] = useState([]);

    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedPayTypes, setSelectedPayTypes] = useState(['paid']);

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
        <Filter_Component
            setSelectedPrograms = {setSelectedPrograms}
            selectedSubjects = {selectedSubjects}
            selectedLanguages = {selectedLanguages}
            selectedPayTypes = {selectedPayTypes}
            setSelectedSubjects = {setSelectedSubjects}
            setSelectedLanguages = {setSelectedLanguages}
            setSelectedPayTypes = {setSelectedPayTypes}
        />
        </>

    );
}

export default Course_Search_Main;