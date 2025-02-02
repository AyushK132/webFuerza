'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'

import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'




import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Saas UI Landingspage</title>
        <meta name="description" content="Free SaaS landingspage starter kit" />
      </Head>
      <HeroSection />
      <HighlightsSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
    </Box>
  );
}


const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace sx={{ fontSize: "75px", fontWeight: "extrabold" }}>
                WebFuerza
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                WebFuerza specializes <Em>FullStack Development</Em>
                <Br /> creating responsive, interactive, and visually stunning websites for brands. We focus on performance, user experience, and modern design to elevate your online presence and grow your business.
              </FallInPlace>
            }

         

          >
            <FallInPlace delay={0.8}>
             

              
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                  style={{ borderRadius: "16px" }} 
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Accessible',
            icon: FiSmile,
            description: 'All components strictly follow modern standards.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Themable',
            icon: FiSliders,
            description:
              'Fully customize all components to your brand with theme support and style props.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Composable',
            icon: FiGrid,
            description:
              'Components to fit your needs to gain a broader audience for your website',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Productive',
            icon: FiThumbsUp,
            description:
              "Focus on your business, We'll handle the website",
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Jumpstart your business with modern up-to-date UI/UX.
            Including backend screens with Clerk and Supabase
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
            
              <Text color="cyan.300" display="inline">
              Why Waste Your Time? We Got You Covered
              </Text>
            </Box>
           
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build your UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “WebFuerza helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building your business that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'UI/UX',
            'Navigation',
            'Scaling',
      
            'Personalize Components',
            'Custom Layout',
            'Provided Maintainence',
            'Fast Loading',
            'Time-Saving',
            'Custom Themes',
            'FullStack',
            'Personalized Database',
            'Custom Domain Connection',
            'Responsive',
            
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> Website
        </Heading>
      }
      description={
        <>
          WebFuerza includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          business attention.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Components.',
          icon: FiBox,
          description:
            'Custom components for your business',
          variant: 'inline',
        },
        {
          title: 'Database Connection.',
          icon: FiLock,
          description:
            'We provide custom databse connection so your data is not lost',
          variant: 'inline',
        },
        {
          title: 'Responsive.',
          icon: FiSearch,
          description:
            'We make your website look beautiful on any device',
          variant: 'inline',
        },
        {
          title: 'Fast Loading Speeds.',
          icon: FiUserPlus,
          description:
            'Tired of taking forever to load? With the help on NextJs, loading speed has never been any faster',
          variant: 'inline',
        },
        {
          title: 'Thirdparty API Integrations',
          icon: FiFlag,
          description:
            "Implement features toggles for your billing plans with easy to use tools. Connect any API you wish for.",
          variant: 'inline',
        },
        {
          title: 'Personalized Domain.',
          icon: FiTrendingUp,
          description:
            'Connect to a domain you are already paying for',
          variant: 'inline',
        },
       
      ]}
    />
  )
}



const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Princing may be change depending on your requests.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
