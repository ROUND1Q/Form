import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./FormInput.module.css";

const FormInput = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.whatsYourNameParent}>
        <div className={styles.whatsYourName}>What’s your name?</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.yourEmailParent}>
        <Form className={styles.yourEmail}>
          <Form.Label>Your email</Form.Label>
          <Form.Control type="text" />
        </Form>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.tellMeAboutYourProjectParent}>
        <Form className={styles.yourEmail}>
          <Form.Label>Tell me about your project</Form.Label>
          <Form.Control type="text" />
        </Form>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-21.svg" />
    </div>
  );
};

export default FormInput;
