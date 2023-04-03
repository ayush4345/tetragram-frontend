import React, { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import Pagination from '@mui/material/Pagination';
import { PrimaryButton as PrimaryButtonBase } from "/components/misc/Buttons.js";
import { BiUser } from "react-icons/bi"
import { AiOutlineTags } from "react-icons/ai"
import data from "/public/data.json"
import { useRouter } from "next/router.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-900 hover:text-primary-600 hover:text-primary-600`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-900 hover:text-primary-600`}
  }
`;

const Column = tw.div`mt-8 mx-4`;

const Card = tw.div`rounded border-2 border-dashed border-primary-400 w-[83vw] m-auto flex flex-col sm:flex-row h-full`;
const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center h-80 w-full sm:w-[326px] lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-0 border-t-0 rounded-t-none flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold bg-primary-700`}
  `
const Repository = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold bg-black`}
  `

export default function ProjectPage() {

    const [noOfBlog, setNoOfBlog] = useState(5)
    const [noOfPage, setNoOfPage] = useState(1)
    const [selectedPage, setSelectedPage] = useState(1)

    const router = useRouter()
    console.log(data.projects)

    useEffect(() => {
        const number = data.projects.length / noOfBlog
        setNoOfPage(Math.ceil(number))
    }, [])

    console.log(noOfPage)


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

    return (
        <div>
            <div className=" mx-8 md:mx-12">
                <StyledHeader links={navLinks} />
            </div>
            <div className=" min-h-[70vh]">
                {data.projects.map((post, index) => {
                    if (index < selectedPage * 5 && index > ((selectedPage - 1) * 5 - 1)) {
                        return (
                            <Column key={index}>
                                <Card>
                                    {/* <Image imageSrc={post.imageSrc} /> */}
                                    <Details>
                                        <MetaContainer>
                                            <Meta>
                                                <BiUser />
                                                <div className="w-full">{post.built_by}</div>
                                            </Meta>
                                            {/* <Meta>
                                                <AiOutlineTags />
                                                <div>{post.category}</div>
                                            </Meta> */}
                                        </MetaContainer>
                                        <Title>{post.title}</Title>
                                        <Description>{post.description}</Description>
                                        <div className=" flex gap-3 flex-col sm:flex-row">
                                            <Link href={`/project/${post.slug}`}>Read More</Link>
                                            <Repository href={`${post.github_link}`}>Project Repository </Repository>
                                        </div>

                                    </Details>
                                </Card>
                            </Column>
                        )

                    } else {
                        return (<></>)
                    }

                })}
            </div>
            <div className=" flex justify-center my-10">
                <Pagination count={noOfPage} onChange={(event, page) => { setSelectedPage(page) }} />
            </div>
        </div>
    )
}