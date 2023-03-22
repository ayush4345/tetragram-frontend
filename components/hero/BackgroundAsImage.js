import React from "react";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router.js";

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
// import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-600`}
  }
`;
const Container = styled.div`
  ${tw`z-40 px-8 -mt-6 bg-center bg-cover h-screen`}
  background-image: url("/iet-upview.webp");
`;

const OpacityOverlay = tw.div`h-[100lvh] -z-10 absolute inset-0 bg-[rgb(115,112,215)] opacity-25`;

const HeroContainer = tw.div`z-20 px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-600 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-lg`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-600 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">
        Home
      </NavLink>
      <NavLink href="#about">
        About US
      </NavLink>
      <NavLink href="#">
        SIGS
      </NavLink>
      <NavLink href="/events">
        Events
      </NavLink>
      <NavLink href="/projects">
        Projects
      </NavLink>
      <NavLink href="/Blogs">
        Blogs
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Contact Us
      </PrimaryLink>
    </NavLinks>
  ];

  const router = useRouter()

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            
            <Heading>
              <span>We Are</span>
              <br />
              <SlantedBackground>IET NITK!</SlantedBackground>
            </Heading>
            <Notification>The Institute of Engineering Technology - National Institute of Technology Karnataka (IET-NITK) Student Chapter</Notification>
            <PrimaryAction  onClick={() => {router.push("/projects")}} >Explore Projects</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            {/* <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            /> */}
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
