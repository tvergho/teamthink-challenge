import Image from 'next/image';
import styles from './styles.module.scss';

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Image src="/logo-dark.svg" width={400} height={95} />
    </div>
  );
};

export default Header;
