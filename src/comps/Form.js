import { useRef } from "react";
import nodemailer from 'nodemailer';

import Button from "../items/Button";
import Background from '../img/Background';

const Form = (props) => {
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const message = useRef(null);

    const send = () => {
        const transporter = nodemailer.createTransport({
            service: '',
            auth: {
                user: '',
                pass: ''
            }
        });

        const mailOptions = {
            from: emailInput.value,
            to: '',
            subject: nameInput.value,
            text: message.value
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    }

    return (
        <article className="article">
            <section className="request">
                <h1 className="heading" tabIndex='0'>{props.heading}</h1>
                <p className="description" tabIndex='0'>{props.description[0]}</p>
                <p className="description" tabIndex='0'>{props.description[1]}</p>
                <p className="description" tabIndex='0'>{props.description[2]}</p>
            </section>
            <form action="" method="POST" className="form" id='form' onSubmit={send}>
                <input type="text" name="name" id="text-input" className="input" placeholder="What is your name?" ref={nameInput}/>
                <input type="email" name="email" id="email" className="input" placeholder="What is your email?" ref={emailInput}/>
                <textarea placeholder="What do you want to say?" className="input textarea" id="message" name='message' ref={message}/>
                <Button message="Send Message!" origin='form'/>
            </form>
            <Background />
        </article>
    )
}

export default Form; 
