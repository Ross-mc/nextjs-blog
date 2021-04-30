import { useRef, useState } from "react";
import classes from "./contactform.module.css";

const ContactForm = () => {
  const emailInput = useRef("");
  const nameInput = useRef("");
  const messageInput = useRef("");
  const [outputMessage, setOutputMessage] = useState(null);
  const [sending, setSending] = useState(null);

  const clearForm = () => {
    emailInput.current.value = "";
    nameInput.current.value = "";
    messageInput.current.value = "";
  }

  const sendMessageHandler = (e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const name = nameInput.current.value;
    const message = messageInput.current.value;

    if (
      !email ||
      !email.includes("a") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      return;
    }
    setSending(true)

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        name,
        message
      })
    }).then(res => {
      setSending(false)
      if (res.status === 201){
        setOutputMessage({
          type: "success",
          message: "Your comment was saved!"
        })
      } else {
        setOutputMessage({
          type: "fail",
          message: "Error sending comment. Please try again later"
        })
      }
      clearForm()
      setTimeout(() => {
        setOutputMessage(null);
      }, 2000)
    }).catch(err => {
      setSending(false);
      setOutputMessage({
        type: "fail",
        message: "Error sending comment. Please try again later"
      })
      setTimeout(() => {
        setOutputMessage(null);
      }, 2000)
      clearForm()
    })
    
  }



  return (
    <section className={classes.contact}>
      <h1>How can I help?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailInput}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required ref={nameInput}/>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" rows="5" ref={messageInput}/>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {sending && <p>Sending...</p>}
      {outputMessage && <p style={{color: outputMessage.type === "success" ? "green" : "red"}}>{outputMessage.message}</p>}
    </section>
  )
}

export default ContactForm