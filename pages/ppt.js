import { useState } from 'react';
import axios from 'axios';
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';
import Head from 'next/head';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Flex,
  Stack,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { pptFields } from '../config/ppt';
import styles from '../styles/Home.module.css';

export default function Ppt() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const toast = useToast();
  const toastSuccess = {
    title: 'Success',
    description: `${responseData?.nModified} records updated.`,
    status: 'success',
    duration: 2500,
    isClosable: true,
  };
  const toastError = {
    title: 'Error',
    description: `There was an error. Error ${responseData.status}`,
    status: 'error',
    duration: 2500,
    isClosable: true,
  };

  async function handleSubmit(validData) {
    setIsLoading(true);
    const response = await axios.post('api/submit', validData);
    setIsLoading(false);

    const { data } = response;
    setResponseData(data);

    if (data.ok) {
      toast(toastSuccess);
    } else {
      toast(toastError);
    }
  }

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
          onSubmit={({ validData }) => handleSubmit(validData)}
          fields={pptFields}
        />

        <Flex align='center' justify='center' wrap='wrap'>
          {isLoading ? (
            <Spinner thickness='4px' speed='1s' emptyColor='gray.200' color='blue.500' size='xl' />
          ) : (
            <div className={styles.card} onClick={() => setIsOpen(true)}>
              <h2>Upload spreadsheet &rarr;</h2>
              <p>Click here to begin.</p>
            </div>
          )}
        </Flex>
      </main>
    </Container>
  );
}
