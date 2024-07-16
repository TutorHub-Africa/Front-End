import { useState } from 'react';
// import axios from 'axios';

import { linkedinIcon, emailIcon, telegramIcon } from "../../assets/assets";

function Contact_Tutor(){
    const [students, setStudents] = useState([{name:'eba', id:1}]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [messages, setMessages] = useState([ {id: 1, text: 'Hello, this is Student 1', studentId: 1}]);
    const [newMessage, setNewMessage] = useState('');const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        try {const [students, setStudents] = useState([]);
            const [selectedStudent, setSelectedStudent] = useState('');
            const [messages, setMessages] = useState([]);
            const [newMessage, setNewMessage] = useState('');
            const response = await axios.post('API', { message });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className="course-page-main-content">
            <div className="send-message-container">
                <h2> Contact Tutor </h2>
                <select className='select-course' value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
                    <option value="">Select a student</option>
                    {students.map((student, index) => (
                        <option key={index} value={student.id}>{student.name}</option>
                    ))}
                </select>
                <ul>
                    {messages.filter(message => message.studentId === selectedStudent).map((message, index) => (
                        <li key={index}>{message.text}</li>
                    ))}
                </ul>
                <textarea
                    type="text" 
                    placeholder="Write message..."
                    className="review-textfield"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                <div className="review-but-div">
                    <button className="review-submit-but" onClick={handleSendMessage}>
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact_Tutor;