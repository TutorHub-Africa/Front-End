import React, { useState } from 'react';

import Course_Card from './Course_Card';
import Filter_Component from './Filter_Component';
import Course_Search_Head from './Course_Search_Head';

function Course_Search_Main(){
    const [selectedPrograms, setSelectedPrograms] = useState([1,2]);

    return(
        <>
        <Course_Search_Head/>
        {/* <Filter_Component
            setSelectedPrograms = {setSelectedPrograms}
        />

        <div className="program-list">
            {selectedPrograms.map((program_id) => (
                <Course_Card
                    key={program_id}
                    programId={program_id}
                />
            ))}
        </div> */}
        </>

    );
}

export default Course_Search_Main;