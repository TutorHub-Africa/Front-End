import '../../styles/Search_Courses/Filter_Component.css';
import React, { useEffect, useState } from 'react';

import star from '../../assets/star.png';

const Filter_Component = ({
  setSelectedPrograms,
  selectedSubjects,
  setSelectedSubjects,
  selectedLanguages,
  setSelectedLanguages,
  selectedPayTypes,
  setSelectedPayTypes,
  selectedRating,
  setSelectedRating
  }) => 
  {
    const [showMoreSubjects, setShowMoreSubjects] = useState(false);
    const [showMoreLanguages, setShowMoreLanguages] = useState(false);

    const fetchPossiblePrograms = () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({selectedPayTypes, selectedSubjects, selectedLanguages, selectedRating})
      };
    
      fetch('API END-POINT TO GET COURSE KEYS', requestOptions)
        .then(response => response.json())
        .then(data => {
          // Update selected programs list
          setSelectedPrograms(data);
        });
    }


    const handleSelectSubject = async(subject, isChecked) => {
      if(isChecked){
        setSelectedSubjects(prev => [...prev, subject])
      }
      else{
        setSelectedSubjects(prev => prev.filter(item => item !== subject))
      }

      fetchPossiblePrograms();
    }


    const handleSelectLanguage = async(language, isChecked) => {
      if(isChecked){
        setSelectedLanguages(prev => [...prev, language])
      }
      else{
        setSelectedLanguages(prev => prev.filter(item => item !== language))
      }

      fetchPossiblePrograms();
    }


    const handleSelectPayType = async(pay_type, isChecked) => {
      if(isChecked){
        setSelectedPayTypes(prev => [...prev, pay_type])
      }
      else{
        setSelectedPayTypes(prev => prev.filter(item => item !== pay_type))
      }

      fetchPossiblePrograms();
    }
    

    const handleSelectRating = async(rating, isChecked) => {
      if(isChecked){
        setSelectedRating(prev => [...prev, rating])
      }
      else{
        setSelectedRating(prev => prev.filter(item => item !== rating))
      }

      fetchPossiblePrograms();
    }


    return (
      <div className="filter-container">


        <div className="filter-section">
          <h3>Subject</h3>

          {selectedSubjects.slice(0, showMoreSubjects ? selectedSubjects.length : 6).map(
            (subject, index) => (
              <div className="filter-item" key={index}>
                <input type="checkbox" id={subject.name} name={subject.name} onChange={(event) => handleSelectSubject(subject.name, event.target.checked)}/>
                <label>{subject.name}</label>
              </div>
              )
            )
          }

          <button className="show-more-button" onClick={() => setShowMoreSubjects(!showMoreSubjects)}>
            {showMoreSubjects ? 'Show Less' : 'Show More'}
          </button>
        </div>


        <div className="filter-section">
          <h3>Language</h3>

          {selectedLanguages.slice(0, showMoreLanguages ? selectedLanguages.length : 4).map(
            (language, index) => (
              <div className="filter-item" key={index}>
                <input type="checkbox" id={language} name={language} onChange={(event) => handleSelectLanguage(language, event.target.checked)}/>
                <label>{language}</label>
              </div>
              )
            )
          }

          <button className="show-more-button" onClick={() => setShowMoreLanguages(!showMoreLanguages)}>
            {showMoreLanguages ? 'Show Less' : 'Show More'}
          </button>
        </div>


        <div className="filter-section">
          <h3>Price</h3>

          <div className="filter-item">
            <input type="checkbox" id="free" name="free" onChange={(event) => handleSelectPayType("free", event.target.checked)}/>
            <label>Free</label>
          </div>

          <div className="filter-item">
            <input type="checkbox" id="paid" name="paid" onChange={(event) => handleSelectPayType("paid", event.target.checked)} defaultChecked/>
            <label>Paid</label>
          </div>
        </div>


        <div className="filter-section">
          <h3>Rating</h3>

          <div className="filter-item">
            <input type="checkbox" id="5_star" name="5_star" onChange={(event) => handleSelectRating(5, event.target.checked)}/>
            <img src={star} alt="star" className="star-icon"/>
            <img src={star} alt="star" className="star-icon"/>
            <img src={star} alt="star" className="star-icon"/>
            <img src={star} alt="star" className="star-icon"/>
            <img src={star} alt="star" className="star-icon"/>
          </div>

          <div className="filter-item">
            <input type="checkbox" id="4_star" name="4_star" onChange={(event) => handleSelectRating(4, event.target.checked)}/>
            <img src={star} alt="star" className="star-icon"/>
            <img src={star} alt="star" className="star-icon"/>
            <img src={star} alt="star" className="star-icon"/>
            <img src={star} alt="star" className="star-icon"/>
          </div>

          <div className="filter-item">
            <input type="checkbox" id="3_star" name="3_star" onChange={(event) => handleSelectRating(3, event.target.checked)}/>
            <img src={star} alt="star" className="star-icon"/>
            <img src={star} alt="star" className="star-icon"/>
            <img src={star} alt="star" className="star-icon"/>
          </div>

          <div className="filter-item">
            <input type="checkbox" id="2_star" name="2_star" onChange={(event) => handleSelectRating(2, event.target.checked)}/>
            <img src={star} alt="star" className="star-icon"/>
            <img src={star} alt="star" className="star-icon"/>
          </div>

          <div className="filter-item">
            <input type="checkbox" id="1_star" name="1_star" onChange={(event) => handleSelectRating(1, event.target.checked)}/>
            <img src={star} alt="star" className="star-icon"/>
          </div>

          
        </div>

      </div>
    );
};

export default Filter_Component;