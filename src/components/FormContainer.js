import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.whatsYourNameParent}>
        <div className={styles.whatsYourName}>What’s your name?</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.yourEmailParent}>
        <div className={styles.whatsYourName}>Your email</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.tellMeAboutYourProjectParent}>
        <div className={styles.whatsYourName}>Tell me about your project</div>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-21.svg" />
    </div>
  );
};

export default FormContainer;
