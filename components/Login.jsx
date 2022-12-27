/* eslint-disable @next/next/no-html-link-for-pages */
import { InfoIcon } from '@chakra-ui/icons';
import styles from '../styles/Home.module.css';

export default function Login() {
  return (
    <a href='/api/auth/login' className={styles.card}>
      <h2>
        Login <InfoIcon />
      </h2>
      <p>Login to begin</p>
    </a>
  );
}
