/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Flex } from '@chakra-ui/react';

import { useUser } from '@auth0/nextjs-auth0/client';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <Container p={0} m={4}>
        <nav style={{ marginBottom: '4rem' }}>
          <Breadcrumb spacing='8px'>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Tools</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
      </Container>

      <h1 className={styles.title}>pointSixtyFive Tools</h1>

      <Flex align='center' justify='center' wrap='wrap'>
        {!user ? (
          <a href='/api/auth/login'>
            <Box className={styles.card}>
              <h2>Login &rarr;</h2>
              <p>Start here to login for access to the tools.</p>
            </Box>
          </a>
        ) : (
          <>
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
          </>
        )}
      </Flex>
    </>
  );
}
