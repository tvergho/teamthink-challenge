import styles from './styles.module.scss';

type MessageProps = {
  message: string
}

const Message = ({ message }: MessageProps): JSX.Element => {
  return (
    <div className={styles.message}>
      <h1>{message}</h1>
    </div>
  );
};

export default Message;
