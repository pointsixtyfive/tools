/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Flex } from '@chakra-ui/react';
import Login from '../components/Login';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import xfGroups from '../config/xfGroups';
import { useUserData } from '../components/context/UserContext';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { userData } = useUserData();
  console.log(userData);
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
        {!isAuthenticated ? (
          <Login setIsAuthenticated={setIsAuthenticated} />
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
