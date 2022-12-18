import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button, ButtonGroup } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const fields = [
    {
      // Visible in table header and when matching columns.
      label: 'Name',
      // This is the key used for this field when we call onSubmit.
      key: 'name',
      // Allows for better automatic column matching. Optional.
      alternateMatches: ['first name', 'first'],
      // Used when editing and validating information.
      fieldType: {
        // There are 3 types - "input" / "checkbox" / "select".
        type: 'input',
      },
      // Used in the first step to provide an example of what data is expected in this field. Optional.
      example: 'Stephanie',
      // Can have multiple validations that are visible in Validation Step table.
      validations: [
        {
          // Can be "required" / "unique" / "regex"
          rule: 'required',
          errorMessage: 'Name is required',
          // There can be "info" / "warning" / "error" levels. Optional. Default "error".
          level: 'error',
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>pointSixtyFive Tools</title>
        <meta name='description' content='Admin tools for various features of pointsixtyfive.com' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <Button colorScheme='blue' size={'md'} variant='solid' onClick={() => setIsOpen(true)}>
          OPEN
        </Button>
        <ReactSpreadsheetImport
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmit={() => console.log('submit')}
          fields={fields}
        />
      </main>
    </div>
  );
}
