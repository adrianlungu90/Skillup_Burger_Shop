// Write all the code here
import React from "react";
import Popup from "reactjs-popup";
import NavigationBar from "../layout/Header";

function Contact() {
  const handlePopup = function (e) {
    e.preventDefault();
    return (
      <Popup
        trigger={(open) => (
          <button className="button">
            Trigger - {open ? "Opened" : "Closed"}
          </button>
        )}
        position="right center"
        closeOnDocumentClick
      >
        <span> Popup content </span>
      </Popup>
    );
  };
  return (
    <div>
      <NavigationBar />
      <div className="contact">
        <form action="/contact">
          <h2>Contact Us</h2>
          <input className="name" type="text" placeholder="Name" />
          <input className="email" type="text" placeholder="E-mail" />
          <textarea
            name="Text Area"
            id=""
            cols="30"
            rows="10"
            placeholder="Type in your request"
          ></textarea>

          <Popup
            trigger={(open) => {
              return (
                <button /* type="button" */ className="button">
                  Send{/*  - {open ? "Opened" : "Closed"} */}
                </button>
              );
            }}
            position="right center"
            closeOnDocumentClick
          >
            <span> Your Message has been send </span>
          </Popup>
        </form>
        <div className="formBorder">
          <img src="" alt="" />
        </div>
      </div>
      s
    </div>
  );
}

export default Contact;
