/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { Avatar, Container, Flex, Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function NavChrome() {
  return (
    <Container maxW='100%' backgroundColor='blue.500'>
      <Flex height='4rem' justify='space-between' alignItems='center' gap={4} paddingRight='4rem'>
        <Image src='/p65-icon.png' alt='pointSixtyFive icon' width={48} height={48} />
        <Menu>
          <MenuButton as={Avatar} aria-label='Options' icon={<Avatar />} variant='outline' />
          <MenuList>
            <a href='/api/auth/logout'>
              <MenuItem icon={<ExternalLinkIcon />}>Logout</MenuItem>
            </a>

            <a href='/api/auth/login'>
              <MenuItem>Login</MenuItem>
            </a>
          </MenuList>
        </Menu>
      </Flex>
    </Container>
  );
}
