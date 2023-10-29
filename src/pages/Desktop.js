import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { sendEmail } from './EmailSender'; // Імпортуйте функцію sendEmail
import styles from "./Desktop.module.css"; // Додайте імпорт стилів
const serverUrl = 'http://localhost:3000';

const Desktop = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await sendEmail(data);
      if (response.ok) {
        showMessage('Email sent successfully');
      } else {
        showMessage('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      showMessage('An error occurred while sending email');
    }
  };

  const showMessage = (message) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add(styles.message);
    document.body.appendChild(messageElement);
    setTimeout(() => {
      document.body.removeChild(messageElement);
    }, 3000);
  };

  return (
    <main className={styles.desktop}>
      <main className={styles.contactMe}>
        <div className={styles.letMeKnowIfYouWantToTalParent}>
          <h1 className={styles.letMeKnowContainer}>
            <p
              className={styles.letMeKnow}
            >{`Let me know if you want to talk `}</p>
            <p className={styles.letMeKnow}>about a potential collaboration.</p>
            <p className={styles.letMeKnow}>
              I'am available for freelance work.
            </p>
          </h1>
          <a
            className={styles.contactMe1}
            href="http://localhost:3000/"
            target="_blank"
          >
            Contact Me
          </a>
          <div className={styles.groupChild} />
        </div>
        <a
          className={styles.infonamemailcom}
          href="http://localhost:3000/"
        >
          infoname@mail.com
        </a>
        <Form onSubmit={handleSubmit}>
          <InputGroup className={styles.whatsYourNameParent}>
            <FormControl
              name="name"
              className={styles.whatsYourName}
              placeholder="What’s your name?"
              type="text"
            />
          </InputGroup>
          <InputGroup className={styles.yourEmailParent}>
            <FormControl
              name="email"
              className={styles.whatsYourName}
              placeholder="Your email"
              type="text"
            />
          </InputGroup>
          <InputGroup className={styles.tellMeAboutYourProjectParent}>
            <FormControl
              name="message"
              className={styles.whatsYourName}
              placeholder="Tell me about your project"
              as="textarea"
            />
          </InputGroup>
          <button type="submit" className={styles.rectangleButton}>
            Get a Quote
          </button>
        </Form>
        <div className={styles.letsBeFriends}>Let’s be Friends</div>
        <img className={styles.contactMeItem} alt="" src="/group-27.svg" />
      </main>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </main>
  );
};

export default Desktop;
