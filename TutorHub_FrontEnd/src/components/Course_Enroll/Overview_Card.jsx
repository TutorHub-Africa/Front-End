import {useState, useEffect} from 'react';

function OverView_Card({programId}){
    const [courseOverview, setCourseOverview] = useState("Sample Course Overview");

    // useEffect(() => {
    //     fetch(`API ENDPOINT TO GET COURSE INFO/${programId}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setCourseOverview(data.courseOverView);
    //     });
    // }, [programId]);

    return(        
        <div className="course-overview-card">
            <h2>Tutorial Overview</h2>
            <p>{courseOverview}</p>
        </div>
        
    );
}

export default OverView_Card;