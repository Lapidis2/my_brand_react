import React, { useState } from "react";
import Navbar from "../../Components/Guest/Navbar";
import axios from "axios";
import Footer from "../../Components/Guest/Footer";
import { toast } from "react-toastify";

const Contactus = () => {
  const [loading,setLoading] = useState(false)
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const data = {
        name: name,
        email: email,
        message: message,
      };
      await axios.post("https://mybrand-backend-1-8rxh.onrender.com/message/sendMessage", data, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response)=>{
         if(response.status === 200){
          setEmail("")
          setName("")
          setMessage("")
          toast.success("Message sent")
          setLoading(false)
          
         }
        setLoading(false)
      }).catch((error)=>{
        console.log(error)
      });
    } catch (error) {}
  };
  return (
    <div>
      <div className="container">
        <Navbar />

        <main>
          <div className="contact-us">
            <h1>Get In Touch With Us</h1>
            <div className="contact-container">
              <div className="contact-info">
                <div className="info">
                  <span>Email</span>
                  <p>ngabosevelin@gmail.com</p>
                </div>
                <div className="info">
                  <span>Phone</span>
                  <p>+250792570064</p>
                </div>
                <div className="info">
                  <span>Business Hours</span>
                  <p>monday to sunday 7:00AM-9:00PM</p>
                </div>
              </div>
              <div className="contact-form">
                <form
                  onSubmit={(e) => sendMessage(e)}
                  id="messageForm"
                  action=""
                >
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    id="username"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="useremail"
                    type="text"
                    placeholder="Your Email"
                  />
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    value={message}
                    placeholder="Your Message"
                    id="messages"
                    cols="30"
                    rows="4"
                  ></textarea>
                  <button type="submit">
                    {loading ? (
                      <span className="loader"></span>

                    ): (
                      <span className="btn-word">Send</span>

                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div id="popup" className="popup"></div>
        </main>
      </div>
     
   
    </div>
  );
};

export default Contactus;
