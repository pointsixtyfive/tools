/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';

import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Flex } from '@chakra-ui/react';

import Login from '../components/Login';
import { useUserData } from '../components/context/UserContext';

import xfGroups from '../config/xfGroups';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { isLoggedIn, userData } = useUserData();
  const permissions = {
    ppt: userData.userGroups?.includes(xfGroups.tools.ppt),
    test: false,
  };

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
        {!isLoggedIn ? (
          <Login />
        ) : (
          <>
            {permissions.ppt && (
              <Link href='/ppt'>
                <Box className={styles.card}>
                  <h2>Update PPT &rarr;</h2>
                  <p>Update applications with the current priority placement tool data.</p>
                </Box>
              </Link>
            )}

            {permissions?.test && (
              <a href='https://nextjs.org/learn' className={styles.card}>
                <h2>Learn &rarr;</h2>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>
            )}
            {permissions?.test && (
              <a href='https://github.com/vercel/next.js/tree/canary/examples' className={styles.card}>
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>
            )}
            {permissions?.test && (
              <a
                href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                className={styles.card}
              >
                <h2>Deploy &rarr;</h2>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
              </a>
            )}
          </>
        )}
      </Flex>
    </>
  );
}
