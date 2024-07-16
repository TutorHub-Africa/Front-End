import { useState } from 'react';
import '../../styles/Tutor_Course_Add/Tutor_Course_Add.css';
import { upload } from "../../assets/assets";



function Tutor_Course_Add(){
    const [title, setTitle] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');
    const [subject, setSubject] = useState('');
    const [isPaid, setIsPaid] = useState(false);
    const [fee, setFee] = useState('');
    const [image, setImage] = useState('');
    const [overview, setOverview] = useState('');
    const [bio, setBio] = useState('');
    const [hoursPerDay, setHoursPerDay] = useState('');
    const [seats, setSeats] = useState('');

    const handleAddProgram = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('API', {
                title,
                gradeLevel,
                subject,
                isPaid,
                fee,
                image,
                overview,
                bio,
                hoursPerDay,
                seats,
            });
    
            console.log(response.data);
            
            setTitle('');
            setGradeLevel('');
            setSubject('');
            setIsPaid(false);
            setFee('');
            setImage('');
            setOverview('');
            setBio('');
            setHoursPerDay('');
            setSeats('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='add-container'>
            <div className='add-program-container'>
                <h2>Add a Program</h2>
                <form onSubmit={handleAddProgram}>
                    <div>
                        <div className="program-add-input">
                            <p>Program Title</p>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Grade Level</p>
                                <select className='add-grade' value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} placeholder="Grade Level">
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map((grade) => (
                                    <option key={grade} value={grade}>{grade}</option>
                                    ))}
                                </select>
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Subject</p>
                            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Payment Type</p>
                            <input type="checkbox" checked={isPaid} onChange={(e) => setIsPaid(e.target.checked)} /> Paid
                        </div>
                    </div>
                    {isPaid && (
                        <div>
                            <div className="program-add-input">
                                <p>Monthly Fee</p>
                                <input type="text" value={fee} onChange={(e) => setFee(e.target.value)} placeholder="Monthly Fee" />
                            </div>
                        </div>
                    )}
                    <div>
                        <div className="program-add-input">
                            <p>Program Image</p>
                            <div className="upload-box">
                                <input type="file" onChange={(e) => setImage(e.target.value)}/>
                                <div className="upload-img">
                                    <img src={upload}/>
                                    <p>Click or Drop File</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Overview</p>
                            <textarea value={overview} onChange={(e) => setOverview(e.target.value)} placeholder="Overview" />
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Write a bit about yourself</p>
                            <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" />
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Hours per Day</p>
                            <input type="text" value={hoursPerDay} onChange={(e) => setHoursPerDay(e.target.value)} placeholder="Hours per Day" />
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Number of Seats</p>
                            <input type="text" value={seats} onChange={(e) => setSeats(e.target.value)} placeholder="Number of Seats" />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        onClick={handleAddProgram}
                        >
                            Add Program
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Tutor_Course_Add;