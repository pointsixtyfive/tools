import { useState } from 'react';
import axios from 'axios';
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';
import Head from 'next/head';

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Code,
  Container,
  Flex,
  ListItem,
  OrderedList,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Text,
  useToast,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { pptFields } from '../config/ppt';
import styles from '../styles/Home.module.css';

export default function Ppt() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function handleSubmit(validData) {
    setIsLoading(true);
    const response = await axios.post('api/submit', validData);
    setIsLoading(false);

    const { data } = response;
    console.log(response);

    if (data.ok) {
      const toastSuccess = {
        title: 'Success',
        description: `${data?.nModified} records updated.`,
        status: 'success',
        duration: 2500,
        isClosable: true,
      };
      toast(toastSuccess);
    } else {
      const toastError = {
        title: 'Error',
        description: `There was an error. Error ${response.status}`,
        status: 'error',
        duration: 2500,
        isClosable: true,
      };
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

        <Box p={4} style={{ borderLeft: '2px solid blue' }}>
          <OrderedList>
            <ListItem>
              <Text>
                Modify the excel sheet by inserting the below data into rows at the end of the PPT. Copy-paste the{' '}
                <Code>National</Code> data into it&apos;s row. Only the date of the PPT should go in the{' '}
                <Code>Updated</Code> row.
                <Text>
                  <Code>
                    <Table variant='unstyled' size='sm'>
                      <Thead>
                        <Tr>
                          <Th>Facility ID</Th>
                          <Th>Facility Name</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>National</Td>
                          <Td></Td>
                        </Tr>
                        <Tr>
                          <Td>Updated</Td>
                          <Td>12/25/2022</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Code>
                </Text>
              </Text>
            </ListItem>
            <ListItem>
              <Text>Upload file.</Text>
            </ListItem>
            <ListItem>
              <Text>Select row which contains the table headers.</Text>
            </ListItem>
            <ListItem>
              <Text>
                Verify columns match between the input & output (green checkmark). If not, use the dropdown to match the
                input column with the correct output column.
              </Text>
            </ListItem>
            <ListItem>
              <Text>Verify there are no errors. National data may be missing fields (ie: Category).</Text>
            </ListItem>
          </OrderedList>
        </Box>

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
