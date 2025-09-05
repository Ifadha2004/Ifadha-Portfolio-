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

const NAME_REGEX = /^[A-Za-z][A-Za-z\s'’-]{1,39}$/; // letters + spaces + ' or –; 2–40 chars
const MIN_SUBJECT = 3;
const MIN_MESSAGE = 10;

// Simple toast component (success / error) shown bottom-right
const Toast = ({ open, type, title, text, onClose, duration = 3800 }) => {
  // auto close
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

  // toast state
  const [toast, setToast] = useState({ open: false, type: "success", title: "", text: "" });
  const showToast = (type, title, text) => setToast({ open: true, type, title, text });

  const validate = (vals) => {
    const e = {};

    if (!vals.firstname) e.firstname = "First name is required.";
    else if (!NAME_REGEX.test(vals.firstname)) e.firstname = "Use 2–40 letters (spaces/’/–).";

    if (!vals.lastname) e.lastname = "Last name is required.";
    else if (!NAME_REGEX.test(vals.lastname)) e.lastname = "Use 2–40 letters (spaces/’/–).";

    if (!vals.subject) e.subject = "Subject is required.";
    else if (vals.subject.length < MIN_SUBJECT)
      e.subject = `Subject must be at least ${MIN_SUBJECT} characters.`;

    if (!vals.message) e.message = "Message is required.";
    else if (vals.message.length < MIN_MESSAGE)
      e.message = `Message must be at least ${MIN_MESSAGE} characters.`;

    return e;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const vals = {
      firstname: form.current.firstname.value.trim(),
      lastname: form.current.lastname.value.trim(),
      subject: form.current.subject.value.trim(),
      message: form.current.message.value.trim(),
    };

    const eMap = validate(vals);
    setErrors(eMap);

    if (Object.keys(eMap).length > 0) {
      showToast("error", "Error Notification", "Please fix the highlighted fields.");
      return;
    }

    try {
      setSending(true);
      await emailjs.sendForm(
        "service_930vljm",
        "template_bsw2dyt",
        form.current,
        "iAFQ12-l5fVMPQ4Yk"
      );
      showToast("success", "Success Notification", "Your message has been sent.");
      form.current.reset();
      setErrors({});
    } catch {
      showToast("error", "Error Notification", "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail} noValidate>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            aria-invalid={!!errors.firstname}
            className={errors.firstname ? "is-invalid" : ""}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            aria-invalid={!!errors.lastname}
            className={errors.lastname ? "is-invalid" : ""}
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          aria-invalid={!!errors.subject}
          className={errors.subject ? "is-invalid" : ""}
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          aria-invalid={!!errors.message}
          className={errors.message ? "is-invalid" : ""}
        />

        {/* Button with hover-swap effect; disabled while sending */}
        <button type="submit" className="send-btn" aria-label="Send message" disabled={sending}>
          <span className="send-btn__icon" aria-hidden="true">
            <BsFillSendFill />
          </span>
          <span className="send-btn__label">{sending ? "SENDING..." : "SEND"}</span>
        </button>
      </form>

      {/* Toasts (bottom-right) */}
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
