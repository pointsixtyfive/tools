import clientPromise from '../db/mongodb';

import Head from 'next/head';
import Link from 'next/link';
import { Box, Container, Flex } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

export default function Home({ isConnected }) {
  return (
    <Container maxW='container.lg'>
      <Head>
        <title>pointSixtyFive Tools</title>
        <meta name='description' content='Admin tools for various features of pointsixtyfive.com' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>pointSixtyFive Tools</h1>

        <Flex align='center' justify='center' wrap='wrap'>
          <Link href='/ppt'>
            <Box className={styles.card}>
              <h2>Update PPT &rarr;</h2>
              <p>Update applications with the current priority placement tool data.</p>
            </Box>
          </Link>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href='https://github.com/vercel/next.js/tree/canary/examples' className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>

          {isConnected ? (
            <h2 className='subtitle'>You are connected to MongoDB</h2>
          ) : (
            <h2 className='subtitle'>
              You are NOT connected to MongoDB. Check the <code>README.md</code> for instructions.
            </h2>
          )}
        </Flex>
      </main>
    </Container>
  );
}

export async function getServerSideProps(context) {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}