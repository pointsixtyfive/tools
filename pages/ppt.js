import { useState } from 'react';
import axios from 'axios';
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';
import Head from 'next/head';
import Link from 'next/link';

import {
  Box,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Code,
  Container,
  Flex,
  Input,
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
  Stack,
} from '@chakra-ui/react';
import { ChevronRightIcon, CheckCircleIcon } from '@chakra-ui/icons';

import dbConnect from '../db/dbConnect';
// import PptDate from '../db/models/PptDate';
import { pptFields } from '../config/ppt';
import styles from '../styles/Home.module.css';

export default function Ppt({ dbPptDate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dateIsLoading, setDateIsLoading] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [currentPptDate, setCurrentPptDate] = useState(dbPptDate);
  const toast = useToast();
  const dateRegex = new RegExp('^(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/20\\d\\d$');

  const toastCfg = { duration: 2500, isClosable: true, description: `` };
  const toastSuccess = {
    ...toastCfg,
    title: 'Success',
    status: 'success',
  };
  const toastError = {
    ...toastCfg,
    title: 'Error',
    status: 'error',
  };

  async function handleSubmit(validData) {
    setIsLoading(true);
    const response = await axios.post('api/submit', validData);
    setIsLoading(false);

    const { data } = response;

    if (response.status === 201) {
      toastSuccess.description = `${data?.nModified + data?.nInserted + data?.nUpserted} records updated.`;
      toast(toastSuccess);
    } else {
      toastError.description = `There was an error. Error ${response.status}`;
      toast(toastError);
    }
  }

  async function updatePptDate(updatedDate) {
    if (!dateRegex.test(newDate)) {
      toastError.description = 'The date format should be MM/DD/YYYY';
      toast(toastError);
      return;
    }

    if (newDate.match(currentPptDate)) {
      toastError.description = 'This date matches the current data.';
      toast(toastError);
      return;
    }

    setDateIsLoading(true);
    const response = await axios.post(`api/submit?date=${updatedDate}`);
    setDateIsLoading(false);

    const { data } = response;

    if (response.status === 201) {
      toastSuccess.description = `Date updated.`;
      toast(toastSuccess);
      setCurrentPptDate(data.newDate);
    } else {
      toastError.description = `There was an error. Error ${response.status}`;
      toast(toastError);
    }

    setNewDate('');
  }

  return (
    <>
      <Head>
        <title>pointSixtyFive Tools - Update PPT</title>
      </Head>

      <Container p={0} m={4}>
        <nav style={{ marginBottom: '2rem' }}>
          <Breadcrumb spacing='8px' separator={<ChevronRightIcon />}>
            <BreadcrumbItem>
              <Link href='/'>
                <BreadcrumbLink>Tools</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>PPT</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
      </Container>

      <h1 className={styles.title}>Update PPT</h1>

      <Box p={4} style={{ borderLeft: '2px solid blue' }}>
        <OrderedList>
          <ListItem>
            Modify the excel sheet by inserting the <Code>National</Code> data into rows at the end of the PPT.
            Copy-paste the <Code>National</Code> data into it&apos;s row.
            <Code display='block' maxWidth='fit-content'>
              <Table variant='unstyled' size='sm'>
                <Thead>
                  <Tr>
                    <Th>Facility ID</Th>
                    <Th>...etc</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>National</Td>
                    <Td>...data</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Code>
          </ListItem>
          <ListItem>Upload file</ListItem>
          <ListItem>Select row containing the table headers</ListItem>
          <ListItem>
            Verify columns match between the input & output (<CheckCircleIcon color='green.500' />
            ). If not, use the dropdown to match the input column with the correct output column. This should occur
            automatically. If not, something may be wrong with the excel file.
          </ListItem>
          <ListItem>Verify there are no errors. National data may be missing fields (ie: Category)</ListItem>
          <ListItem>The PPT date stored in the database is displayed. Update the date with the new PPT date.</ListItem>
        </OrderedList>
      </Box>

      <ReactSpreadsheetImport
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={({ validData }) => handleSubmit(validData)}
        fields={pptFields}
      />

      <Flex align='center' justify='center' wrap='wrap'>
        <Stack>
          <Flex gap={2}>
            <Text>Current PPT Date:</Text>
            <Text flex={1} align='center'>
              {currentPptDate}
            </Text>
          </Flex>
          <Flex gap={2}>
            <Input
              name='newDate'
              placeholder='MM/DD/YYYY'
              size='md'
              width='14ch'
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              title='Input date in format MM/DD/YYYY'
              pattern='^(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/20\d\d$'
            />
            <Button isLoading={dateIsLoading} loadingText='Updating' onClick={() => updatePptDate(newDate)}>
              Update Date
            </Button>
          </Flex>
        </Stack>
      </Flex>

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
    </>
  );
}

export async function getStaticProps() {
  await dbConnect();

  // const result = await PptDate.findOne({ 'Facility ID': 'Updated' });

  // return { props: { dbPptDate: result['Facility Name'] ?? 'Unknown' } };
  return { props: { dbPptDate: '9/9/1999' } }; //TODO: temporarily disabled to allow the build to deploy prior to the db being ready
}
