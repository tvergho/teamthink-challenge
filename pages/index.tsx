import { useState } from 'react';
import useForm from 'utils/useForm';
import Layout from 'components/Layout';
import {
  Header, InitialAccountPane, BasePane, CreateAccountPane,
} from 'components/Home';
import { useRouter } from 'next/router';
import styles from 'styles/page.module.scss';

const Home = (): JSX.Element => {
  const router = useRouter();
  const [visiblePane, setVisiblePane] = useState('initial');

  const form = useForm({
    email: { required: true, validate: 'email' },
    name: { required: true },
    phone: { required: true, validate: 'phone' },
    password: { required: true },
    confirmPassword: { required: true, validate: 'confirmPassword' },
  });
  const {
    validate, clearErrors,
  } = form;

  const navigateCreate = () => {
    if (validate(['email'])) {
      setVisiblePane('create');
      clearErrors();
    }
  };

  const onCreateAccount = () => {
    if (validate()) {
      router.push('/interview');
    }
  };

  return (
    <Layout title="Home" description="TeamThink is a group interview platform designed to make testing teams easy." className={styles.home}>
      <Header displayAdmin />
      <BasePane>
        {visiblePane === 'initial' && (
          <InitialAccountPane
            form={form}
            navigateCreate={navigateCreate}
          />
        )}
        {visiblePane === 'create' && <CreateAccountPane form={form} onCreate={onCreateAccount} />}
      </BasePane>
    </Layout>
  );
};

export default Home;
