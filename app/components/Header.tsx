'use client';
import logoLight from '/public/logo_light.svg';
import logoDark from '/public/logo_dark.svg';
import Link from 'next/link';
import {
  Button, useColorMode, useDisclosure, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  Box,
  Flex,
  Divider,
  Hide,
} from '@chakra-ui/react';
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { HamburgerIcon } from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Logo from './Logo';
import { useRef } from 'react';
interface MenuItemsProps {
  [key: string]: string
}
const menuItems: MenuItemsProps[] = [
  { name: 'Home', href: '/' },
  { name: 'Asset', href: '/asset' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'About Us', href: '/about' },
];


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('#E6E8F8', '#262A82');
  const color = useColorModeValue('#565A9F', '#D3D5EE')
  const pathname = usePathname()

  return (
    <>
      <Box as='header' className={classNames(`header-box-shadow transition duration-500 border-b`, { ' border-b-[#B8BBF5]': colorMode === 'light', ' border-b-[#0D99FF]': colorMode === 'dark' }, {
        ' text-[#8689BD]': colorMode === 'light', 'text-[#E8E9EF]': colorMode === 'dark'
      }, { ' bg-[#E6E8F8]': colorMode === 'light', 'bg-[#262A82]': colorMode === 'dark' })}>
        <Box className={`component-container py-4 `}>

          {/* Todo:  Desktop Nav Design With ChakraUI */}

          <Flex alignItems='center' justifyContent='space-between'>
            {colorMode === 'light' ? <Logo src={logoDark} alt='Dark_Logo' /> : <Logo src={logoLight} alt='Light_Logo' />}
            <Hide below='lg'>
              <Flex gap={16} alignItems='center'>
                {menuItems?.map((item, i) => (
                  <Link className={classNames(` transition-all duration-300 hover:text-blue-300 font-[500] text-lg`, { ' text-blue-400 font-[600': pathname === item.href })} onClick={onClose} key={i} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </Flex>
            </Hide>
            <Hide below='lg'>
              <Flex>
                <Button className=' bg-blue-600 text-zinc-200 hover:bg-blue-700 active:scale-95' mr={3}>Connect wallet</Button>
                <Button>{colorMode === 'light' ? <MdDarkMode className='cursor-pointer' onClick={toggleColorMode} /> : <BsFillSunFill className='cursor-pointer' onClick={toggleColorMode} />}</Button>
              </Flex>
            </Hide>
            <HamburgerIcon className={classNames({ ' hidden': isOpen === true })} boxSize='1.5em' boxShadow='lg' cursor='pointer' ref={btnRef} onClick={onOpen} display={{ lg: 'none' }} />
          </Flex>


          {/* Todo:  Mobile Nav Design With ChakraUI  */}

          <Drawer
            size={{
              base: 'sm',
              md: 'md',
              lg: 'lg',

            }}
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <Box display={{
              lg: 'none'
            }}>
              <DrawerOverlay />
              <DrawerContent bgColor={bgColor} color={color}>
                <DrawerCloseButton />
                {colorMode === 'light' ? <Logo src={logoDark} alt='Dark_Logo' /> : <Logo src={logoLight} alt='Light_Logo' />}
                <Divider variant='solid' />
                <DrawerBody mt={12}>
                  <Flex flexDir='column' justifyContent='center' alignItems='center' gap={4}>
                    {menuItems?.map((item, i) => (
                      <Link className={classNames(` w-full p-2 rounded transition-all duration-300 hover:bg-blue-300 font-[500] text-lg`, { ' bg-blue-400 font-[600': pathname === item.href })} onClick={onClose} key={i} href={item.href}>
                        {item.name}
                      </Link>
                    ))}
                  </Flex>
                </DrawerBody>

                <DrawerFooter>
                  <Button className=' bg-blue-600 text-zinc-200 hover:bg-blue-700 active:scale-95' mr={3}>Connect wallet</Button>
                  {colorMode === 'light' ? <MdDarkMode className='cursor-pointer' onClick={toggleColorMode} /> : <BsFillSunFill className='cursor-pointer' onClick={toggleColorMode} />}
                </DrawerFooter>
              </DrawerContent>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </>
  )
}

export default Navbar