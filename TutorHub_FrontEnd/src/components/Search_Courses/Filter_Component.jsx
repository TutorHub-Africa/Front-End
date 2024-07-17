import '../../styles/Search_Courses/Filter_Component.css';
import React, { useEffect, useState } from 'react';

import star from '../../assets/star.png';

const Filter_Component = ({
  setSelectedSubjects,
  setSelectedRatingChange,
  setGradeLevelChange,
  setDurationPerDayChange,
}) => {
  const [selectedRating, setSelectedRating] = useState();
  const [gradeLevel, setGradeLevel] = useState('');
  const [durationPerDay, setDurationPerDay] = useState('');

  const handleSelectSubject = async (subject, isChecked) => {
    if (isChecked) {
      setSelectedSubjects((prev) => [...prev, subject]);
    } else {
      setSelectedSubjects((prev) => prev.filter((item) => item !== subject));
    }

    fetchPossiblePrograms();
  };

  const handleSelectRating = async (rating, isChecked) => {
    setSelectedRating(rating);
    setSelectedRatingChange(rating);
  };

  const handleGradeLevelChange = (event) => {
    const newGradeLevel = event.target.value;
    setGradeLevel(newGradeLevel);
    setGradeLevelChange((prev) => newGradeLevel);
  };

  const handleDurationPerDayChange = (event) => {
    const newDurationPerDay = event.target.value;
    setDurationPerDay(newDurationPerDay);
    setDurationPerDayChange((prev) => newDurationPerDay);
  };

  return (
    <div className="filter-container">
      <h3>Filter</h3>
      <div className="filter-section">
        <h3>Grade Level</h3>
        <select
          className="filter-grade-and-hour"
          value={gradeLevel}
          onChange={handleGradeLevelChange}
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <h3>Max Hours Per Day</h3>
        <input
          className="filter-grade-and-hour"
          type="number"
          value={durationPerDay}
          onChange={handleDurationPerDayChange}
          min="0"
        />
      </div>

      {/* <div className="filter-section">
        <h3>Subject</h3>

        {selectedSubjects
          .slice(0, showMoreSubjects ? selectedSubjects.length : 6)
          .map((subject, index) => (
            <div className="filter-item" key={index}>
              <input
                type="checkbox"
                id={subject.name}
                name={subject.name}
                onChange={(event) =>
                  handleSelectSubject(subject.name, event.target.checked)
                }
              />
              <label>{subject.name}</label>
            </div>
          ))}

        <button
          className="show-more-button"
          onClick={() => setShowMoreSubjects(!showMoreSubjects)}
        >
          {showMoreSubjects ? 'Show Less' : 'Show More'}
        </button>
      </div> */}

      <div className="filter-section">
        <h3>Rating</h3>
        {/* <div className="filter-item">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <label key={ratingValue}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onChange={() => handleSelectRating(ratingValue)}
                  checked={selectedRating === ratingValue}
                />
                <div className="stars">
                  {[...Array(ratingValue)].map((_, starIndex) => (
                    <img
                      key={starIndex}
                      src={star}
                      alt={`${ratingValue} star`}
                      className="star-icon"
                    />
                  ))}
                </div>
              </label>
            );
          })}
        </div> */}

        <div className="filter-item">
          <input
            type="radio"
            id="5_star"
            name="star"
            onChange={(event) => handleSelectRating(5, event.target.checked)}
          />
          <img src={star} alt="star" className="star-icon" />
          <img src={star} alt="star" className="star-icon" />
          <img src={star} alt="star" className="star-icon" />
          <img src={star} alt="star" className="star-icon" />
          <img src={star} alt="star" className="star-icon" />
        </div>

        <div className="filter-item">
          <input
            type="radio"
            id="4_star"
            name="star"
            onChange={(event) => handleSelectRating(4, event.target.checked)}
          />
          <img src={star} alt="star" className="star-icon" />
          <img src={star} alt="star" className="star-icon" />
          <img src={star} alt="star" className="star-icon" />
          <img src={star} alt="star" className="star-icon" />
        </div>

        <div className="filter-item">
          <input
            type="radio"
            id="3_star"
            name="star"
            onChange={(event) => handleSelectRating(3, event.target.checked)}
          />
          <img src={star} alt="star" className="star-icon" />
          <img src={star} alt="star" className="star-icon" />
          <img src={star} alt="star" className="star-icon" />
        </div>

        <div className="filter-item">
          <input
            type="radio"
            id="2_star"
            name="star"
            onChange={(event) => handleSelectRating(2, event.target.checked)}
          />
          <img src={star} alt="star" className="star-icon" />
          <img src={star} alt="star" className="star-icon" />
        </div>

        <div className="filter-item">
          <input
            type="radio"
            id="1_star"
            name="star"
            onChange={(event) => handleSelectRating(1, event.target.checked)}
          />
          <img src={star} alt="star" className="star-icon" />
        </div>
      </div>
    </div>
  );
};

export default Filter_Component;
