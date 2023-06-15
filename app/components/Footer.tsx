'use client';

import { Box, Flex, Text, useColorMode, useColorModeValue, SimpleGrid, Select, InputGroup, InputLeftElement } from '@chakra-ui/react';
import classNames from 'classnames';
import FooterList from './FooterList';
import Logo from './Logo';
import logoLight from '/public/logo_light.svg';
import logoDark from '/public/logo_dark.svg';
import Socials from './Socials';
import { BsGlobeAmericas } from 'react-icons/bs';
const lightBg = '#ECEDFD'
const darkBg = '#191D39'


const Footer = () => {
  const { colorMode } = useColorMode()
  const bgColor = useColorModeValue(lightBg, darkBg)
  return (
    <Box bgColor={bgColor} py={16} as="footer">
      <Box className={classNames(` w-[90%] lg:w-[78%] mx-auto`)}>
        <SimpleGrid minChildWidth='150px' alignItems='flex-start' justifyContent='center' gap='4rem'>
          <Box>
            <Flex direction='column' gap='1rem'>
              {colorMode === 'light' ? <Logo src={logoDark} alt='Dark_Logo' /> : <Logo src={logoLight} alt='Light_Logo' />}
              <Text>
                NexzusPro is a platform that allows you to buy, sell, receive and send crypto confidently.
              </Text>
            </Flex>
          </Box>
          <Box>
            <FooterList title="Company" link1="/trade" link2="/portfolio" link3="/market" link4="/security" linkTitle1='Trade' linkTitle2='Portfolio' linkTitle3='Market' linkTitle4='Security' />
          </Box>
          <Box>
            <FooterList title="Features" link1="/about" link2="/contact" link3="/faqs" linkTitle1='About Us' linkTitle2='Contact' linkTitle3='FAQs' />
          </Box>
          <Box>
            <FooterList title="Cookies" link1="/terms" link2="/privacy" link3="/support" linkTitle1='Terms' linkTitle2='Privacy' linkTitle3='Support' />
          </Box>
          <Box>
            <Flex mb='3rem'>
              <Socials />
            </Flex>

            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <BsGlobeAmericas color='gray.300' />
              </InputLeftElement>
              <Select className={classNames(` text-center ring-1 ring-blue-400`)} >
                <option value="option-1">
                  English - En
                </option>

              </Select>
            </InputGroup>

            <Text mt='3rem' >
              &copy; NexusPro {new Date().getFullYear()}.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Footer