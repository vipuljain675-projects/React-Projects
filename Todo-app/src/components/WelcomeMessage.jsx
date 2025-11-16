import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ todoitems }) => {
  return (
    todoitems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;
