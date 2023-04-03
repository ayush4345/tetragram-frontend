import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import tw, { styled } from "twin.macro";
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "/components/headers/light.js";
import data from "/public/data.json"
import { BsGithub } from "react-icons/bs"
import Link from "next/link";

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
    const projectId = router.query.name
    const { name } = router.query
    const [post, setPost] = useState('')
    const [postDetail, setPostDetail] = useState('')

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
        setPost(data.projects)
    }, []);

    console.log(projectId)

    useEffect(() => {
        if (post.length > 0) {
            post.forEach(element => {
                if (element.slug == projectId) {
                    setPostDetail(element)
                }
                console.log(element.slug)
                console.log(projectId)
            });
        }
    }, [post, projectId])

    return (
        <>
            <div className=" mx-8 md:mx-12">
                <StyledHeader links={navLinks} />
            </div>
            <div className=" w-[80vw] m-auto my-10">
                <div className=" text-5xl">{postDetail.title}</div>
                <Link href={`${postDetail.github_link}`} className="flex items-center gap-4 mb-10 hover:text-primary-600 hover:underline"><BsGithub /> Github Repository</Link>
                <ReactMarkdown className="prose max-w-full">
                    {postDetail.markdown}
                </ReactMarkdown>
            </div>

        </>

    )


}