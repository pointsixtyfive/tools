/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { Avatar, Container, Flex, Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { useUserData } from './context/UserContext';

export default function NavChrome() {
  const { isLoggedIn, userData, setUserData } = useUserData();

  return (
    <Container maxW='100%' backgroundColor='blue.500'>
      <Flex height='4rem' justify='space-between' alignItems='center' gap={4} paddingRight='4rem'>
        <Image src='/p65-icon.png' alt='pointSixtyFive icon' width={48} height={48} />
        <Menu>
          <MenuButton
            as={Avatar}
            aria-label='Options'
            icon={<Avatar name={userData.userInfo?.userName} />}
            variant='outline'
          />
          {isLoggedIn && (
            <MenuList>
              <a onClick={() => setUserData({})}>
                <MenuItem icon={<ExternalLinkIcon />}>Logout</MenuItem>
              </a>
            </MenuList>
          )}
        </Menu>
      </Flex>
    </Container>
  );
}
