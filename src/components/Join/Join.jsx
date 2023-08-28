import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () =>{
    const form = useRef()
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8i421aw', 'template_175z26u', form.current, 'kktS9BiPAkuf0QXgM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
<div className='join' id='join-us'>
<div className='left-j'>
<hr/>
<div> 
<span className='stroke-text'> READY TO</span>
<span> LEVEL UP</span>
</div>
<div> 
<span> YOUR BODY</span>
<span className='stroke-text'> WITH US</span>
</div>
</div>
<div className='right-j'>
<form ref={form} className='email-container' onSubmit={sendEmail}> 
<input type='email' name='usser_email' placeholder='Enter your emial address'/>
<button className='btn btn-j'>Subscribe Now</button>
</form>

</div>
</div>
);
};
export default Join