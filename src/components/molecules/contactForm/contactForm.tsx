import "./contactForm.scss";

const ContactForm = () => {
  return (
    <form>
      <input type="text" placeholder="Name" id="name" name="Name" />
      <input type="email" placeholder="Email" id="email" name="Email" />
      <input type="text" placeholder="Subject" id="subject" name="Subject" />
      <textarea placeholder="Message" id="message" name="Message" />
      <button type="submit">Send message</button>
    </form>
  )
}

export default ContactForm;