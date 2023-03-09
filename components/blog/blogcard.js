import React from "react";
import tw, { styled } from "twin.macro";

import { SectionHeading as HeadingTitle, Subheading } from "/components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "/components/misc/Buttons.js";
// import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
// import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import { BiUser } from "react-icons/bi"
import { AiOutlineTags } from "react-icons/ai"


const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto pb-20 lg:pb-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 mx-4 sm:mx-0 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`rounded border-2 border-dashed border-primary-400 lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
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

// const DecoratorBlob1 = tw(
//   SvgDecoratorBlob1
// )`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
// const DecoratorBlob2 = tw(
//   SvgDecoratorBlob2
// )`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
    subheading = "Blog",
    heading = <>We Love <span tw="text-primary-600">Writing.</span></>,
    description = "We love to write! Check out more of our stuff on Blogs Section.",

}) => {
    const blogPosts = [
        {
            imageSrc:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            author: "Adam Wathan",
            category: "SEO",
            title: "Optimizing your website for your main keyword",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "https://reddit.com"
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1479660095429-2cf4e1360472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            author: "Owais Khan",
            category: "Advertising",
            title: "Creating The perfect advertisement campaign",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "https://timerse.com"
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            author: "Steve Schoger",
            category: "Social Media",
            title: "Efficient management of your social media assets",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "https://timerse.com"
        }
    ];
    return (
        <Container>
            <Content>
                <HeadingInfoContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    <HeadingTitle>{heading}</HeadingTitle>
                    <HeadingDescription>{description}</HeadingDescription>
                </HeadingInfoContainer>
                <ThreeColumn>
                    {blogPosts.map((post, index) => (
                        <Column key={index}>
                            <Card>
                                <Image imageSrc={post.imageSrc} />
                                <Details>
                                    <MetaContainer>
                                        <Meta>
                                            <BiUser />
                                            <div>{post.author}</div>
                                        </Meta>
                                        <Meta>
                                            <AiOutlineTags />
                                            <div>{post.category}</div>
                                        </Meta>
                                    </MetaContainer>
                                    <Title>{post.title}</Title>
                                    <Description>{post.description}</Description>
                                    <Link href={post.url}>Read Post</Link>
                                </Details>
                            </Card>
                        </Column>
                    ))}
                </ThreeColumn>
            </Content>
            {/* <DecoratorBlob1 />
      <DecoratorBlob2 /> */}
        </Container>
    );
};
