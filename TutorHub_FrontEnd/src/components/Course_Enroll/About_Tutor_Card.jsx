import {useState, useEffect} from 'react';

function About_Tutor_Card({programId}){
    const [aboutTutor, setAboutTutor] = useState("About Tutor");

    // useEffect(() => {
    //     fetch(`API ENDPOINT TO GET COURSE INFO/${programId}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setAboutTutor(data.aboutTutor);
    //     });
    // }, [programId]);

    return(        
        <div className="course-overview-card">
            <h2>About Tutor</h2>
            <p>{aboutTutor}</p>
        </div>
        
    );
}

export default About_Tutor_Card;