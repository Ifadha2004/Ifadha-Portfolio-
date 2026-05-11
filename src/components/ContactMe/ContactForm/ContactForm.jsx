// import React, { useRef } from "react";
// import "./ContactForm.css";
// import emailjs from "@emailjs/browser";
// import { BsFillSendFill } from "react-icons/bs";

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_930vljm",
//         "template_bsw2dyt",
//         form.current,
//         "iAFQ12-l5fVMPQ4Yk"
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//           form.current.reset();
//         },
//         () => {
//           alert("Something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className="contact-form-content">
//       <form ref={form} onSubmit={sendEmail}>
//         <div className="name-container">
//           <input type="text" name="firstname" placeholder="First Name" />
//           <input type="text" name="lastname" placeholder="Last Name" />
//         </div>

//         <input type="text" name="subject" placeholder="Subject" />
//         <textarea name="message" placeholder="Message" rows={3} />

//         {/* Button with hover-swap effect */}
//         <button type="submit" className="send-btn" aria-label="Send message">
//           <span className="send-btn__icon" aria-hidden="true">
//             <BsFillSendFill />
//           </span>
//           <span className="send-btn__label">SEND</span>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useRef, useState, useEffect } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillSendFill, BsCheckCircleFill, BsExclamationTriangleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const NAME_REGEX = /^[A-Za-z][A-Za-z\s'’-]{1,39}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email validation
const MIN_SUBJECT = 3;
const MIN_MESSAGE = 10;

const Toast = ({ open, type, title, text, onClose, duration = 3800 }) => {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, onClose, duration]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={`toast ${type}`}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 380, damping: 24 }}
          role="status"
          aria-live="polite"
        >
          <div className="toast__icon">
            {type === "success" ? <BsCheckCircleFill /> : <BsExclamationTriangleFill />}
          </div>
          <div className="toast__content">
            <div className="toast__title">{title}</div>
            <div className="toast__desc">{text}</div>
          </div>
          <button className="toast__close" aria-label="Close notification" onClick={onClose}>
            <IoClose />
          </button>
          <div className="toast__progress" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ open: false, type: "success", title: "", text: "" });

  const showToast = (type, title, text) => setToast({ open: true, type, title, text });

  const validate = (vals) => {
    const e = {};

    if (!vals.firstname) e.firstname = "First name is required.";
    else if (!NAME_REGEX.test(vals.firstname)) e.firstname = "Use 2–40 letters.";

    if (!vals.lastname) e.lastname = "Last name is required.";
    else if (!NAME_REGEX.test(vals.lastname)) e.lastname = "Use 2–40 letters.";

    // Added email validation
    if (!vals.email) e.email = "Email address is required.";
    else if (!EMAIL_REGEX.test(vals.email)) e.email = "Please enter a valid email.";

    if (!vals.subject) e.subject = "Subject is required.";
    else if (vals.subject.length < MIN_SUBJECT) e.subject = `Min ${MIN_SUBJECT} characters.`;

    if (!vals.message) e.message = "Message is required.";
    else if (vals.message.length < MIN_MESSAGE) e.message = `Min ${MIN_MESSAGE} characters.`;

    return e;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // 1. Capture values for validation
    const vals = {
      firstname: form.current.firstname.value.trim(),
      lastname: form.current.lastname.value.trim(),
      email: form.current.email.value.trim(),
      subject: form.current.subject.value.trim(),
      message: form.current.message.value.trim(),
    };

    // 2. Validate
    const eMap = validate(vals);
    setErrors(eMap);

    if (Object.keys(eMap).length > 0) {
      showToast("error", "Error Notification", "Please fix the highlighted fields.");
      return;
    }

    // 3. Send using the simple .then() pattern which EmailJS prefers
    setSending(true);

    emailjs
      .sendForm(
        "service_1iez5or",
        "template_bsw2dyt",
        form.current, // Ensure this points to the form element
        "iAFQ12-l5fVMPQ4Yk"
      )
      .then(
        (result) => {
          setSending(false);
          showToast("success", "Success Notification", "Your message has been sent.");
          form.current.reset();
          setErrors({});
        },
        (error) => {
          setSending(false);
          console.error("FAILED...", error.text); // This will tell you EXACTLY why in the console
          showToast("error", "Error Notification", "Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail} noValidate>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className={errors.firstname ? "is-invalid" : ""}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className={errors.lastname ? "is-invalid" : ""}
          />
        </div>

        {/* New Email Input Field */}
        <input
          type="email"
          name="email" // This name MUST match {{email}} in your template
          placeholder="Email Address"
          className={errors.email ? "is-invalid" : ""}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className={errors.subject ? "is-invalid" : ""}
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          className={errors.message ? "is-invalid" : ""}
        />

        <button type="submit" className="send-btn" disabled={sending}>
          <span className="send-btn__icon"><BsFillSendFill /></span>
          <span className="send-btn__label">{sending ? "SENDING..." : "SEND"}</span>
        </button>
      </form>

      <div className="toast-root">
        <Toast
          open={toast.open}
          type={toast.type}
          title={toast.title}
          text={toast.text}
          onClose={() => setToast((t) => ({ ...t, open: false }))}
        />
      </div>
    </div>
  );
};

export default ContactForm;