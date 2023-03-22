import React from "react";
import tw, { styled } from "twin.macro";
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-900 hover:text-primary-600 hover:text-primary-600`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-900 hover:text-primary-600`}
  }
`;

export default function EventPage() {


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
            <NavLink href="#">
                Blogs
            </NavLink>
        </NavLinks>,
        <NavLinks key={2}>
            <PrimaryLink href="/#">
                Contact Us
            </PrimaryLink>
        </NavLinks>
    ];



    return (
        <div>
            <div className=" mx-8 md:mx-12">
                <StyledHeader links={navLinks} />
            </div>   
        </div>
    )
}