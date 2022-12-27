import Head from 'next/head';
import NavChrome from './NavChrome';
import { Container } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>pointSixtyFive Tools</title>
        <meta name='description' content='Admin tools for various features of pointsixtyfive.com' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavChrome width='100%' />
      <main className={styles.main}>
        <Container maxW='container.lg'>{children}</Container>
      </main>
    </>
  );
}
