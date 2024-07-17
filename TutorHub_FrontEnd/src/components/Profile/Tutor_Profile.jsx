import { useState } from 'react';

import Tutor_Profile_Card from './Tutor_Profile_Card';
import Profile_Edit from './Profile_Edit';

const Tutor_Profile = () => {
    const [name, setName] = useState("Robert Fox");
    const [email, setEmail] = useState("info@gmai.com")
    const [phone, setPhone] = useState("+123 9500 600");
    const [bio, setBio] = useState("Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur Vesti bulum a nec odio aea the duru");
    const [profilePic, setProfilePic] = useState("https://via.placeholder.com/100");
    const [shortDescription, setShortDescription] = useState("I am a professional tutor with 10 years of experience in teaching.");
    const [skill, setSkill] = useState("Mathematics, Physics, Chemistry");
    const [socialMedia, setSocialMedia] = useState({twitter: 'a', facebook: 'b', instagram: 'c', linkedin: 'd', youtube: 'e'});

    const profile = {
        name: name,
        email: email,
        phone: phone,
        bio: bio,
        profilePic: profilePic,
        shortDescription: shortDescription,
        skill: skill,
        socialMedia: socialMedia
      };

    const [editMode, setEditMode] = useState(false);
      
    return(
        <div className='profile-page-cont'>
            {!editMode && (<Tutor_Profile_Card profile={profile} setEditMode={setEditMode}/>)}
            
            {editMode && (
                <Profile_Edit 
                    setEditMode={setEditMode}

                    name={name}
                    email={email}
                    phone={phone}
                    bio={bio}
                    profilePic={profilePic}
                    shortDescription={shortDescription}
                    skill={skill}
                    socialMedia={socialMedia}

                    setPhone={setPhone}
                    setBio={setBio}
                    setProfilePic={setProfilePic}
                    setShortDescription={setShortDescription}
                    setSkill={setSkill}
                    setSocialMedia={setSocialMedia}
                />      
            )}
        </div>
    );
};

export default Tutor_Profile;
