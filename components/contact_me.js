import {WINDOS_TYPES_ENUM} from "../pages/index.js"
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import { useEffect, useState } from "react";
import axios from "axios";


export default function ContactMe({window, close}) {
    const [message, setMessage] = useState({from: "", subject:"", text: ""});


    function sendMessage() {
        var data = {
            service_id: 'service_u9w18da',
            template_id: 'template_lwidyrs',
            user_id: 'SmvzQDSlLXNDitPbE',
            template_params : {
                visitor_name: message.subject,
                    visitor_email: message.from,
                visitor_message: message.text
            }
        };


        axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        close(window.id)
    }

    useEffect(()=>{
        console.log("message:", message);
    },[message])


    return (
        <div className="contact_me">
            <div className="contact_me_input_div">
                <div className="input_label">
                    <p>From:</p>
                </div>
                <div className="contact_me_input">
                    <input className="input" onChange={e=>{
                        setMessage({from: e.target.value, subject: message.subject, text: message.text})
                    }}/>
                </div>
            </div>

            <div className="contact_me_input_div">
                <div className="input_label">
                    <p>To:</p>
                </div>
                <div className="contact_me_input">
                    <p className="input">artemmordan@gmail.com</p>
                </div>
            </div>

            <div className="contact_me_input_div">
                <div className="input_label">
                    <p>Subject:</p>
                </div>
                <div className="contact_me_input">
                    <input className="input" onChange={e=>{
                        setMessage({from: message.from, subject: e.target.value, text: message.text})
                    }}/>
                </div>
            </div>

            <div className="message_div">
                <div className="contact_me_input_div_message">
                    <div className="input_message_div">
                        <textarea className="input_text_area" onChange={e=>{
                        setMessage({from: message.from, subject: message.subject, text: e.target.value})
                    }}/>
                    </div>
                </div>
                <div className="send_button_div">
                    <button className="github_button" onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}