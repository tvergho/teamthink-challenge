import styles from './styles.module.scss';

const Info = (): JSX.Element => {
  return (
    <div className={styles.info}>
      <h1>Phi Gamma Nu Group Interview</h1>
      <p>Teamthink is a video interviewing platform for groups. </p>
      <p>Candidates answer a series of brainteasers and questions with other candidates and are evaluted on their teamwork, problem-solving, and creative thinking.</p>
      <p>Learn more about the platform here.</p>
    </div>
  );
};

export default Info;
