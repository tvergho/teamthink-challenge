import styles from './styles.module.scss';

type BasePaneProps = {
  children: React.ReactNode
}
const BasePane = ({ children }: BasePaneProps): JSX.Element => {
  return (
    <div className={styles.pane}>
      {children}
    </div>
  );
};

export default BasePane;
