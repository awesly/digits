/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com', // Covers all avatar subdomains
        },
        // OR for specific subdomains:
        {
          protocol: 'https',
          hostname: '*.githubusercontent.com', // Wildcard for all subdomains
        },
        {
            protocol: 'https',
            hostname: 'www.ics.hawaii.edu',
          },
          // Wildcard version that would cover all subdomains of ics.hawaii.edu:
        {
             protocol: 'https',
             hostname: '*.ics.hawaii.edu',
         },
      ],
    },
  };
  
  export default nextConfig;