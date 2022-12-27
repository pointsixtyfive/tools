/* eslint-disable @next/next/no-html-link-for-pages */
import { Avatar, Container, Flex, Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function NavChrome() {
  const { user } = useUser();

  return (
    <Container maxW='100%' backgroundColor='blue.500'>
      <Flex height='4rem' justify='flex-end' alignItems='center' gap={4} paddingRight='4rem'>
        <Menu>
          <MenuButton
            as={Avatar}
            aria-label='Options'
            icon={<Avatar name={user?.name} src={user?.picture}></Avatar>}
            variant='outline'
          />
          <MenuList>
            <a href='/api/auth/logout'>
              <MenuItem icon={<ExternalLinkIcon />} href='/api/auth/logout'>
                Logout
              </MenuItem>
            </a>
          </MenuList>
        </Menu>
      </Flex>
    </Container>
  );
}
