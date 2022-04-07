import React from 'react'
import "../styles/contact.css"
function Contact() {  
    
    function handleSend()
    {
        let goodToGo=true;
        const warn= document.getElementById("warn");
         warn.innerText="";
       const name= document.getElementById("name").value.trim();
       const email= document.getElementById("email").value.trim();
       const phone= document.getElementById("phone").value.trim();
       const message= document.getElementById("message").value.trim();
       const nameElement= document.getElementById("name");
       const emailElement= document.getElementById("email")
       const phoneelement= document.getElementById("phone")
       const messageElement= document.getElementById("message")
       nameElement.classList.remove("error","good")
       emailElement.classList.remove("error","good")
       phoneelement.classList.remove("error","good")
       messageElement.classList.remove("error","good")
        if(name==="")
        {
            nameElement.classList.add("error");
            goodToGo=false;
        }
        else nameElement.classList.add("good")
        if(email==="")
        {
            emailElement.classList.add("error")
            goodToGo=false;
        }
        else emailElement.classList.add("good")
        if(phone==="")
        {
            phoneelement.classList.add("error")
            goodToGo=false;
        }
        else phoneelement.classList.add("good")
        if(message==="")
        {
            messageElement.classList.add("error")
            goodToGo=false;
        }
        else messageElement.classList.add("good")
        console.log(goodToGo)
        if(goodToGo)
        {
            sendEmail(email,name,phone,message)
        }
        else {warn.classList.remove("green");warn.innerText="Error,Completá todos los espacios :)";}
    }
    function sendEmail(email,name,phone,message)
    {        const warn= document.getElementById("warn");

        window.Email.send({
            SecureToken:"7f081748-d6eb-4663-88ba-dbfcd5f33321",
            To : 'rodrigoniveyroreguero@gmail.com',
            From : `deltaandnature@gmail.com`,
            Subject : "nuevo mensaje de delta y nature",
            Body : `nombre: ${name}<br>
                    email: ${email}<br>
                    telefono: ${phone}<br>
                    mensaje: ${message}`
        }).then(
          message =>{if(message==="OK"){
            warn.classList.add("green")  
            warn.innerText="Mensaje enviado correctamente :)"}}
        );
    }
    
    return (
        <div className='contactPage' id={"Contact"}>
            <div className="contactConteiner">
                <h1 className="enviame">Send me a message</h1>
                <small id='warn' className='warn'></small>
                <div className="contactBox">
                    <div className="fill">
                        <label htmlFor="name" className='myPlaceHolder'>Name</label>
                        <input id="name" type="text" className="contactFill" />
                        <label htmlFor="email" className='myPlaceHolder'>Email</label>
                        <input id="email" type="email" className="contactFill" />
                        <label htmlFor="phone" className='myPlaceHolder'>Phone</label>
                        <input id="phone" type="text" className="contactFill" />
                    </div>
                    <label htmlFor="message" className='myPlaceLastHolder'>Your Message</label>
                    <textarea id="message" className='contactMessage'/>
                </div>
                <button className="more big" onClick={handleSend}>SEND</button>
            </div>
        </div>
    )
}

export default Contact