import {
  useRef, useState, useCallback,
} from 'react';
import useWindowSize from 'utils/useWindowSize';
import Image from 'next/image';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BasePane from './BasePane';
import styles from './styles.module.scss';

const buttonStyles = makeStyles({
  label: {
    color: 'white',
    fontSize: '1rem',
  },
  root: {
    marginTop: 20,
  },
});

const googleButtonStyles = makeStyles({
  label: {
    fontSize: '1rem',
  },
  root: {
    marginTop: 20,
    marginBottom: 20,
    border: '3px solid #4285F4',
  },
});

type DesignSideProps = {
  height: number
}

const DesignSide = ({ height }: DesignSideProps): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <div className={`${styles.design} ${styles.section}`} style={{ height: width > 768 ? height : 'auto' }}>
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

type FormSideProps = {
  forwardRef: (...args: any[]) => void
}

const FormSide = ({ forwardRef }: FormSideProps): JSX.Element => {
  const buttonClasses = buttonStyles();
  const googleButtonClasses = googleButtonStyles();

  return (
    <div className={`${styles['initial-form']} ${styles.section}`} ref={forwardRef}>
      <div className={styles['form-text']}>
        <h2>Create an Account</h2>
        <h6>We suggest using your work or school email address.</h6>
      </div>

      <div className={styles['form-block']}>
        <TextField label="Email" fullWidth variant="outlined" />
        <Button classes={buttonClasses} fullWidth color="primary" variant="contained">Continue</Button>
      </div>

      <div className={styles['or-block']}>
        <div className={styles['or-divider']} />
        <div className={styles.or}>OR</div>
        <div className={styles['or-divider']} />
      </div>

      <div className={styles['form-block']}>
        <Button fullWidth classes={googleButtonClasses}>
          <div className={styles['google-icon']}>
            <Image width={18} height={18} src="/icons/google.png" />
          </div>
          <span>Sign In With Email</span>
        </Button>
        <TextField label="Email" fullWidth variant="outlined" />
        <Button classes={buttonClasses} fullWidth color="primary" variant="contained">Sign In With Email</Button>
      </div>
    </div>
  );
};

const InitialAccountPane = (): JSX.Element => {
  const designRef = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(-1);
  const { width } = useWindowSize();

  const setRef = useCallback((node) => {
    if (node) {
      setHeight(node.clientHeight);
    }
    designRef.current = node;
  }, [width]);

  return (
    <BasePane>
      <div className={styles.vertical}>
        <DesignSide height={height} />
        <FormSide forwardRef={setRef} />
      </div>
    </BasePane>
  );
};

export default InitialAccountPane;
