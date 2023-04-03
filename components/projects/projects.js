import React, { useState } from "react";
import Slider from "react-slick";
import tw, { styled } from "twin.macro";
import { SectionHeading } from "/components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "/components/misc/Buttons";
import data from "/public/data.json"
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { useRouter } from "next/router";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-4 xl:mx-auto pb-16 lg:pb-20 overflow-hidden`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;

const Description = tw.p`text-sm mt-2 sm:mt-4`;

const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto bg-primary-700 sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
    // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
    const [sliderRef, setSliderRef] = useState(null);
    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    const router = useRouter()
    console.log(data.projects)

    return (
        <section style={{ transform: "none" }}>
            <Container>
                <Content>
                    <HeadingWithControl>
                        <Heading>Projects</Heading>
                        <Controls>
                            <PrevButton onClick={sliderRef?.slickPrev}><AiOutlineLeft /></PrevButton>
                            <NextButton onClick={sliderRef?.slickNext}><AiOutlineRight /></NextButton>
                        </Controls>
                    </HeadingWithControl>
                    <CardSlider ref={setSliderRef} {...sliderSettings}>
                        {data.projects.map((card, index) => (
                            <Card key={index}>
                                {/* <CardImage imageSrc={card.imageSrc} /> */}
                                <TextInfo>
                                    <TitleReviewContainer>
                                        <Title>{card.title}</Title>
                                    </TitleReviewContainer>
                                    <SecondaryInfoContainer>
                                        <MetaContainer>
                                            <Meta>
                                                <BiUser />
                                                <div className=" w-full">{card.built_by}</div>
                                            </Meta>
                                        </MetaContainer>
                                    </SecondaryInfoContainer>
                                    <Description>{card.description}</Description>
                                </TextInfo>
                                <PrimaryButton onClick={() => { router.push(`/project/${card.slug}`) }}>Read More</PrimaryButton>
                            </Card>
                        ))}
                    </CardSlider>
                </Content>
            </Container>
        </section>
    );
};
