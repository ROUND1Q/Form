import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.whatsYourNameParent}>
        <input
          className={styles.whatsYourName}
          placeholder="What’s your name?"
          type="text"
        />
        <div className={styles.groupChild} />
      </div>
      <div className={styles.yourEmailParent}>
        <input
          className={styles.whatsYourName}
          placeholder="Your email"
          type="text"
        />
        <div className={styles.groupChild} />
      </div>
      <div className={styles.tellMeAboutYourProjectParent}>
        <input
          className={styles.whatsYourName}
          placeholder="Tell me about your project"
          type="text"
        />
        <div className={styles.groupChild} />
      </div>
      <div className={styles.biarrowRightShortParent}>
        <button className={styles.biarrowRightShort}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </button>
        <img
          className={styles.teenyiconsattachSolid}
          alt=""
          src="/teenyiconsattachsolid.svg"
        />
      </div>
    </div>
  );
};

export default Form;
