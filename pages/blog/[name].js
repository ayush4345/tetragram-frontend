import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import tw, { styled } from "twin.macro";
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "/components/headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-900 hover:text-primary-600 hover:text-primary-600`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-900 hover:text-primary-600`}
  }
`;

export default function blog() {

    const router = useRouter()
    const { name } = router.query
    const [post, setPost] = useState('')

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
            <NavLink href="/blogs">
                Blogs
            </NavLink>
        </NavLinks>,
        <NavLinks key={2}>
            <PrimaryLink href="/#">
                Contact Us
            </PrimaryLink>
        </NavLinks>
    ];

    useEffect(() => {
        fetch(`/project.md`)
            .then(res => res.text())
            .then(res => setPost(res))
        // .catch(err => console.log(err));

    }, []);

   const hhi ="# hello"

    console.log(post)

    return (
        <>
            <div className=" mx-8 md:mx-12">
                <StyledHeader links={navLinks} />
            </div>
            <div className=" w-[80vw] m-auto my-10">
                <ReactMarkdown className="prose max-w-full">
                    {post}
                </ReactMarkdown>
            </div>

        </>

    )


}