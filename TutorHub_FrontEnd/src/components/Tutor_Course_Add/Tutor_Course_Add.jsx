import { useState } from 'react'
import '../../styles/Tutor_Course_Add/Tutor_Course_Add.css'
import { upload } from '../../assets/assets'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Tutor_Course_Add() {
    const navigate_to = useNavigate();
    const [title, setTitle] = useState('')
    const [gradeLevel, setGradeLevel] = useState('')
    const [subject, setSubject] = useState('')
    const [isPaid, setIsPaid] = useState(false)
    const [fee, setFee] = useState('')
    const [image, setImage] = useState('')
    const [overview, setOverview] = useState('')
    const [bio, setBio] = useState('')
    const [hoursPerDay, setHoursPerDay] = useState('')
    const [seats, setSeats] = useState('')

    const handleAddProgram = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post(
                'http://localhost:3000/course/',
                {
                    title,
                    grade: gradeLevel,
                    subject,
                    // isPaid,
                    fee,
                    image,
                    description: overview,
                    // bio,
                    durationPerDay: hoursPerDay,
                    seatsRemaining: seats,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            )

            console.log(response.data)

            setTitle('')
            setGradeLevel('')
            setSubject('')
            setIsPaid(false)
            setFee('')
            setImage('')
            setOverview('')
            setBio('')
            setHoursPerDay('')
            setSeats('')
        } catch (error) {
            console.error(error, error.message)
        }
        navigate_to('/tutor');
    }

    return (
        <div className="add-container">
            <div className="add-program-container">
                <h2>Add a Program</h2>
                <form onSubmit={handleAddProgram}>
                    <div>
                        <div className="program-add-input">
                            <p>Program Title</p>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Grade Level</p>
                            <select
                                className="add-grade"
                                value={gradeLevel}
                                onChange={(e) => setGradeLevel(e.target.value)}
                                placeholder="Grade Level"
                            >
                                {Array.from(
                                    { length: 12 },
                                    (_, i) => i + 1
                                ).map((grade) => (
                                    <option key={grade} value={grade}>
                                        {grade}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Subject</p>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="Subject"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="program-add-input">
                            <p>Monthly Fee</p>
                            <input
                                type="text"
                                value={fee}
                                onChange={(e) => setFee(e.target.value)}
                                placeholder="Monthly Fee"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Program Image</p>
                            <div className="upload-box">
                                <input
                                    type="text"
                                    value={image}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Image URL"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Overview</p>
                            <textarea
                                value={overview}
                                onChange={(e) => setOverview(e.target.value)}
                                placeholder="Overview"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="program-add-input">
                            <p>Hours per Day</p>
                            <input
                                type="text"
                                value={hoursPerDay}
                                onChange={(e) => setHoursPerDay(e.target.value)}
                                placeholder="Hours per Day"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="program-add-input">
                            <p>Number of Seats</p>
                            <input
                                type="text"
                                value={seats}
                                onChange={(e) => setSeats(e.target.value)}
                                placeholder="Number of Seats"
                            />
                        </div>
                    </div>

                    <button type="submit" onClick={handleAddProgram}>
                        Add Program
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Tutor_Course_Add
