import styles from './styles.module.scss';

const Loading = (): JSX.Element => {
  return (
    <div className={styles.loading}>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
