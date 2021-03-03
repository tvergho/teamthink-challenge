import { Form } from 'utils/useForm';
import { TextField, Button } from '@material-ui/core';
import { buttonStyles } from './index';
import styles from './styles.module.scss';

type CreateAccountProps = {
  form: Form,
  onCreate: () => void
}

const CreateAccountPane = ({ form, onCreate }: CreateAccountProps): JSX.Element => {
  const buttonClasses = buttonStyles();

  const { onChange, values, errors } = form;

  return (
    <div className={styles['main-form']}>
      <div className={styles['main-form-block']}>
        <div className={styles['form-text']}>
          <h2>Create an Account</h2>
          <h6>We suggest using your work or school email address.</h6>
        </div>

        <div className={styles.form}>
          <TextField label="Email" fullWidth variant="outlined" name="email" onChange={onChange} value={values.email} error={errors.email} />
          <TextField label="Full Name" fullWidth variant="outlined" name="name" onChange={onChange} value={values.name} error={errors.name} />
          <TextField label="Phone Number" fullWidth variant="outlined" name="phone" onChange={onChange} value={values.phone} error={errors.phone} />
          <TextField label="Password" fullWidth variant="outlined" type="password" name="password" onChange={onChange} value={values.password} error={errors.password} />
          <TextField label="Confirm Password" fullWidth variant="outlined" type="password" name="confirmPassword" onChange={onChange} value={values.confirmPassword} error={errors.confirmPassword} />
          <Button classes={buttonClasses} fullWidth color="primary" variant="contained" onClick={onCreate}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPane;
