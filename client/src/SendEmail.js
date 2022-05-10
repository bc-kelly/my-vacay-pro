import React, {useState} from "react";
import { send } from 'emailjs-com';
import './SendEmail.css';

function SendEmail() {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_ha89jer',
            'template_40s14ia',
            toSend,
            'Ws7QUB2cjwEbj1Fhb'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        alert ('your invite has been sent!')
        e.target.reset();
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        
      };


    return (
        <div className="send-email-div"  > 
            <h3 className="invite-header" >Invite a friend to join your account </h3>
            <form onSubmit={onSubmit} className="send-email-form" >
                <div> 
                    <input
                        className="email-form-input"
                        id="from_name"
                        type='text'
                        name='from_name'
                        placeholder='from name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        className="email-form-input"
                        id="to_name"
                        type='text'
                        name='to_name'
                        placeholder='to name'
                        value={toSend.to_name}
                        onChange={handleChange}
                    />
                 </div>
                 <div>
                    <textarea
                        className="email-form-input"
                        id="message"
                        type='text'
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                </div> 
                <div>
                    <input
                        className="email-form-input"
                        id="reply_to"
                        type='text'
                        name='reply_to'
                        placeholder='Their email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' className="submit-email-btn" > Submit </button> 
            </form>
        </div>

    )
}

export default SendEmail;