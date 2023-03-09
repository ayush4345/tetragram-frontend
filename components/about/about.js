import React from "react";
import tw, {styled} from "twin.macro";
// import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "/components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import EmailIllustrationSrc from "/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 lg:mx-8 xl:mx-auto`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`lg:w-5/12 flex-shrink-0 h-80 lg:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`lg:w-9/12 mt-16 lg:mt-0`,
  props.textOnLeft ? tw`lg:mr-12 xl:mr-16 lg:order-first` : tw`lg:ml-12 xl:ml-16 lg:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`xl:py-4 text-center md:w-9/12 m-auto lg:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`font-black text-left text-2xl sm:text-3xl xl:text-4xl text-center lg:text-left leading-tight`;
const Description = tw.p`mt-4 text-center lg:text-left text-sm lg:text-base xl:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

// const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`

export default ({
  subheading = "Contact Us",
  heading = <>Who are <span className="text-primary-500">we</span> ?</>,
  description = "The Institute of Engineering Technology - National Institute of Technology Karnataka (IET-NITK) Student Chapter is actively involved in inculcating a passion for innovation and appreciation temperament in the minds of those who have potential to change the future. We conduct workshops and seminars throughout the academic calendar striving to impact relevant skills to the students. Apart from this, we strive to invite eminent personalities to conduct lectures for the benefit of the club members and keeping doors opened for others interested. We are affiliated to IET London, which is one of the world’s leading professional societies for the engineering and technology community, with more than 168,000 members in 150 countries and offices in Europe, North America and Asia-Pacific. The IET provides a global knowledge network to facilitate the exchange of ideas and promote the positive role of science, engineering and technology in the world.",
  submitButtonText = "Contact Me",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc="/iet-upview.webp" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {/* {subheading && <Subheading>{subheading}</Subheading>} */}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            {/* <Form action={formAction} method={formMethod}>
              <Input type="email" name="email" placeholder="Your Email Address" />
              {/* <SubmitButton type="submit">{submitButtonText}</SubmitButton> 
            </Form> */}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
