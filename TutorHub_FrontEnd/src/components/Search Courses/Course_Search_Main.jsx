import React, { useEffect, useState } from 'react';
import Filter_Component from './Filter_Component';

function Course_Search_Main(){
    const [selectedPrograms, setSelectedPrograms] = useState([]);

    return(
        <>
        <Filter_Component
            setSelectedPrograms = {setSelectedPrograms}
        />
        </>

    );
}

export default Course_Search_Main;