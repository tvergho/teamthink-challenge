import Layout from 'components/Layout';
import { Header, InitialAccountPane } from 'components/Home';
import styles from 'styles/Home.module.scss';

const Home = (): JSX.Element => {
  return (
    <Layout title="Home" description="TeamThink is a group interview platform designed to make testing teams easy." className={styles.home}>
      <Header displayAdmin />
      <InitialAccountPane />
    </Layout>
  );
};

export default Home;
