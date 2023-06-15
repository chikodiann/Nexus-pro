'use client'
import { Box, useColorModeValue } from '@chakra-ui/react'
import svgImgBg from '/public/svg-bg.svg'
import classNames from 'classnames';
import Image from 'next/image'
import { ReactNode } from 'react';
const lightTopBg = `#E6E8F8 `
const darkTopBg = `#1D2064`
interface FirstLayerProps {
  children: ReactNode
}
const FirstLayer = ({ children }: FirstLayerProps) => {
  const bgColor = useColorModeValue(lightTopBg, darkTopBg)
  return (
    <Box bgColor={bgColor} className={classNames(`curve relative transition-all duration-500`)}>
      <Image src={svgImgBg} alt='svg-bg' className={classNames(`absolute top-[30px] left-0 object-cover w-40 h-auto`)} />
      <Image src={svgImgBg} alt='svg-bg' className={classNames(`absolute top-[-10px] left-[59px] object-cover w-40 h-auto`)} />
      <Image src={svgImgBg} alt='svg-bg' className={classNames(`absolute bottom-[33px] right-0 object-cover w-40 h-auto`)} />
      <Image src={svgImgBg} alt='svg-bg' className={classNames(`absolute bottom-[-6px] right-[56px] object-cover w-40 h-auto`)} />
      <Box className={classNames(`w-[90%] lg:w-[78%] mx-auto py-10 lg:py-8`)}>
        {children}
      </Box>
    </Box>
  )
}

export default FirstLayer