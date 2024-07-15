import { useState } from 'react';

import '../../styles/Search_Courses/Search_Bar.css';
import searchIcon from '../../assets/searchIcon.png';

function Search_Bar(
    setSelectedPrograms,
    selectedSubjects,
    selectedLanguages,
    selectedPayTypes,
    selectedRating)
    {
    const [inputValue, setInputValue] = useState('');
    const [searchedValue, setSearchedValue] = useState('');

    const fetchPossiblePrograms = () => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            selectedPayTypes, 
            selectedSubjects, 
            selectedLanguages, 
            selectedRating, 
            searchedValue
          })
        };
      
        fetch('API END-POINT TO GET COURSE KEYS', requestOptions)
          .then(response => response.json())
          .then(data => {
            // Update selected programs list
            setSelectedPrograms(data);
        });
    }


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleSearch = () => {
        setSearchedValue(inputValue);
        fetchPossiblePrograms();
    };
    

    return (
        <div className="search-bar">
            <input 
                type="text" 
                className="search-input" 
                placeholder="Search For Tutorial..." 
                onChange={handleInputChange}
            />
            <div className="profile">
                <img 
                    className="search-icon" 
                    src={searchIcon} 
                    alt='searchIcon'
                    onClick={handleSearch}
                />
            </div>
        </div>
    );
};

export default Search_Bar;
