import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';

import {
  Container,
  Divider,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { pptFields } from '../config/ppt';
import styles from '../styles/Home.module.css';

export default function Ppt() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();

  return (
    <Container maxW='container.lg'>
      <Head>
        <title>pointSixtyFive Tools - Update PPT</title>
      </Head>

      <nav>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon />}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Tools</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>PPT</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Update PPT</h1>

        <Stack direction={'row'} h='250px' p={4}>
          <Divider orientation='vertical' />
          <Stack direction='column' h='250px' p={4}>
            <Text>1) Select file to upload.</Text>
            <Text>2) Select row which contains the table headers.</Text>
            <Text>
              3) Verify columns match between the input & output (green checkmark). If not, use the dropdown to match
              the input column with the correct output column.
            </Text>
          </Stack>
        </Stack>
        <ReactSpreadsheetImport
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmit={({ validData }) => {
            setData(validData);
            axios.post('api/submit', validData);
          }}
          fields={pptFields}
        />

        {data && (
          <>
            <pre>{JSON.stringify(data)}</pre>
            <Button onClick={() => setData()}>Clear Data</Button>
          </>
        )}

        <Flex align='center' justify='center' wrap='wrap'>
          <div className={styles.card} onClick={() => setIsOpen(true)}>
            <h2>Upload spreadsheet &rarr;</h2>
            <p>Click here to begin.</p>
          </div>
        </Flex>
      </main>
    </Container>
  );
}
