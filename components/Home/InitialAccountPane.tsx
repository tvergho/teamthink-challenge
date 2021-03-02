import Image from 'next/image';
import BasePane from './BasePane';
import styles from './styles.module.scss';

const DesignSide = (): JSX.Element => {
  return (
    <div className={`${styles.design} ${styles.section}`}>
      <div className={styles.gap}>
        <div className={styles.quote}>
          <p>“Talent wins games, but teamwork and intelligence win championships.”</p>
          <p>Michael Jordan</p>
        </div>
        <div className={styles.illustration}>
          <Image src="/home-illustration.svg" width={338} height={311} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

const FormSide = (): JSX.Element => {
  return (
    <div className={`${styles['initial-form']} ${styles.section}`} />
  );
};

const InitialAccountPane = (): JSX.Element => {
  return (
    <BasePane>
      <div className={styles.vertical}>
        <DesignSide />
        <FormSide />
      </div>
    </BasePane>
  );
};

export default InitialAccountPane;
