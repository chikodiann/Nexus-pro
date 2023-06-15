
'use client'

import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import FirstLayer from '../components/FirstLayer'
import Heading from '../components/Heading'
import listIcon from '../../public/svg-list-icon.svg'
import flexImg1 from '../../public/svg-flex-1.svg'
import flexImg2 from '../../public/svg-flex-2.svg'
import flexImg3 from '../../public/svg-flex-3.svg'
import Listing from '../components/Listing'
import Image from 'next/image'
import classNames from 'classnames'

const AboutUs = () => {
  return (
    <>
      <Box pb={8}>
        <FirstLayer>
          <Heading topic='Our Vision' />
          <Grid gridTemplateColumns={{
            base: '1fr',
            lg: '2fr 1fr'
          }} placeItems='center' gap={4}>
            <GridItem>
              <Flex flexDir='column' gap={4}>
                <Listing src={listIcon} alt='list-icon' detail={`At NexzusPro Trading, we recognize that investing can be a daunting task, particularly for beginners. That's why we're here to assist you in achieving your investment objectives by providing the necessary tools and guidance.`} />
                <Listing src={listIcon} alt='list-icon' detail={`We believe that investing should be accessible to everyone, which is why we provide competitive pricing and low minimum investment requirements. Whether you're looking to expand your portfolio or begin investing for the first time, NexzusPro Trading is committed to assisting you in achieving your financial objectives.
`} />
                <Listing src={listIcon} alt='list-icon' detail={`Aside from our team of experts, we also employ cutting-edge technology to assist you in making informed investment decisions. Our state-of-the-art trading platform allows you to access up-to-date market data and execute trades quickly and efficiently.

`} />
              </Flex>
            </GridItem>
            <GridItem position='relative' className={classNames(` w-80 h-[18rem]`)}>
              <Image src={flexImg1} alt='flex-img-1' fill />
            </GridItem>
          </Grid>
        </FirstLayer>
        {/* Todo: End of the Top Stylings */}

        {/* Start of Second Grid */}
        <Grid className={classNames(` w-[90%] lg:w-[78%] mx-auto`)} gridTemplateColumns={{
          base: '1fr',
          lg: '1fr 2fr'
        }} placeItems={{
          base: 'center',
          lg: 'center start'
        }} gap={4}>
          <GridItem position='relative' className={classNames(` w-80 h-[18rem]`)}>
            <Image src={flexImg2} alt='flex-img-2' fill />
          </GridItem>
          <GridItem mt={{
            base: '8',
            lg: ''
          }}>
            <Heading topic='Our Mission' isTextEnd />
            <Listing src={listIcon} isPlacedRight alt='list-icon' detail={`NexzusPro's mission is to help people achieve their financial goals by providing personalized investment strategies, expert advice, and advanced trading tools. They specialize in buying, selling, and swapping crypto coins to reduce risk for investors with short and long-term objectives.
`} />
          </GridItem>
        </Grid>

        {/* Start of Third Grid */}

        <Grid className={classNames(` mt-16 w-[90%] lg:w-[78%] mx-auto`)} gridTemplateColumns={{
          base: '1fr',
          lg: '2fr 1fr'
        }} placeItems='center' gap={4}>
          <GridItem>
            <Heading topic='Cryptic Key Features' />
            <Flex flexDir='column' gap={4}>
              <Listing src={listIcon} alt='list-icon' detail={`In addition to its decentralized nature, NexzusPro also prioritizes security measures to protect users' investments. The platform uses advanced encryption technology to secure transactions and user data, ensuring that sensitive information is kept confidential and safe from cyber threats.
`} />
              <Listing src={listIcon} alt='list-icon' detail={`Moreover, NexzusPro provides round-the-clock customer support to assist users with any issues or concerns they may have. The platform offers a variety of support channels, including live chat, email, and phone support, ensuring that users receive prompt and efficient assistance whenever they need it.

`} />
              <Listing src={listIcon} alt='list-icon' detail={`Overall, NexzusPro stands out for its decentralized nature, personalized investment strategies, expert advice, advanced trading tools, security measures, and customer support. These features make it an attractive option for cryptocurrency investors who want a comprehensive and reliable platform to manage their investments..

`} />
            </Flex>
          </GridItem>
          <GridItem position='relative' className={classNames(` w-80 h-[18rem]`)}>
            <Image src={flexImg3} alt='flex-img-3' fill />
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default AboutUs