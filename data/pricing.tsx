import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Pay once and get life-time access to our high quality components.',
  plans: [
    {
      id: 'oss',
      title: 'Basic',
      description: 'Basic website, perfect to get started.',
      price: '$100',
      features: [
        {
          title: 'Up to 5 Static Pages',
        },
        {
          title: 'Fully Responsive Designs',
        },
        {
          title: 'Basic Animation and Transitions',
        },
        {
          title: 'Fast Loading Speed and Optimization',
        },
        {
          title: 'No Monthly Maintainence',
        },
        {
          title: 'Connect to personalized domain if needed',
        },
        
        
      ],
      action: "Sign Up"
     
    },
    {
      id: 'bootstrap',
      title: 'Standard',
      description: 'Perfect for a business with experience.',
      price: '$200',
      isRecommended: true,
      features: [
        {
          title: 'Everything in Basic',
        },
        {
          title: 'Fully Responsive Designs',
        },
        {
          title: 'Up to 10 Static Pages',
        },
        {
          title: 'Advanced UI/UX Design',
        },
        {
          title :"Fastest Loading Speed and Optimization",
        },
        {
          title: 'Basic Interactive Elements',
        },
        {
          title: 'Basic Thirdparty API Integrations',
        },
        {
          title :"Connect to personalized domain if needed",
        },
        
       
        null,
        {
          title: "Monthly Maintenance: $20",
          iconColor: 'green.500',
        },
      ],
      action: "Sign Up"
     
    },
    {
      id: 'startup',
      title: 'Premium',
      description: "Business' that really know what they are doing.",
      price: (
        <HStack>
          <Text>$499-</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Everything in Basic and Standard',
        },
        {
          title: 'Fully Responsive Designs',
        },
        {
          title: 'Full-Stack Application: Frontend and Backend',
        },
        {
          title :"Any Thirdparty API Integration",
        },
        {
          title :"Full Database Structure Made Personalized Just For You ",
        },
        {
          title: 'Fully Interactive Elements',
        },
        {
          title :"Connect to personalized domain if needed",
        },
        {
          title :"Connect to personalized database",
        },
        
       
        null,
        {
          title: 'Monthly Maintainence : $50',
          iconColor: 'green.500',
        },
      ],
      action: "Sign Up"
     
    },
  ],
}
