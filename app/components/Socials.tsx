'use client';
import { Box, Flex } from '@chakra-ui/react'
import classNames from 'classnames';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { IconType } from 'react-icons/lib';
interface SocialItems {
  icon: IconType;
  link: string;
}

const socialItems: SocialItems[] = [
  { icon: BsFacebook, link: '' },
  { icon: BsLinkedin, link: '' },
  { icon: BsTwitter, link: '' },
  { icon: BsInstagram, link: '' },

]


const Socials = () => {
  return (
    <Box>
      <Flex gap='2rem'>
        {socialItems?.map((item, i) => (
          <Link className={classNames(`bg-slate-300 h-8 w-6 grid place-items-center rounded-3xl `)} href={item.link} key={i}>
            <item.icon className={classNames(` cursor-pointer text-[#3F45D8]  text-lg`)} />
          </Link>
        ))}
      </Flex>
    </Box>
  )
}

export default Socials