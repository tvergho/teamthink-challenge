import Layout from 'components/Layout';
import { Header } from 'components/Interview';
import styles from 'styles/page.module.scss';

const InterviewPage = (): JSX.Element => {
  return (
    <Layout title="Interview" description="Enter your group interview here." className={styles.interview}>
      <Header />
    </Layout>
  );
};

export default InterviewPage;
