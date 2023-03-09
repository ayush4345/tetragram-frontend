import React from "react";
import tw, {styled} from "twin.macro";
//eslint-disable-next-line
// import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "/components/misc/Headings.js";
import { SectionDescription } from "/components/misc/Typography.js";

// import defaultCardImage from "/public/logo.webp";

import SvgDecoratorBlob3 from "/public/blob.svg";

import CipherLogo from "/public/club/cipher/cipher.webp";
import InkheartLogo from "/public/club/inkheart/inkheart.webp";
import MediumLogo from "/public/club/medium/medium.webp";
import RovispLogo from "/public/club/rovisp/rovisp.webp";
import TorsionLogo from "/public/club/torsion/torsion.webp";
import VentureLogo from "/public/club/venture/venture.webp";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto pb-20 md:pb-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-4 flex-shrink-0`}
    img {
      ${tw`w-12 h-12`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

// const DecoratorBlob = styled(SvgDecoratorBlob3)`
//   ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
// `;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "IET NITK consists of six different Special Interest Groups" }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: `/club/cipher/cipher.webp`,
      title: "Cipher",
      description: "Cipher SIG brings together people interested in Computer Science and Information Technology."
    },
    { imageSrc: `/club/inkheart/inkheart.webp`, title: "Inkheart", description:"Inkheart is our new Lit&Phil SIG for people who are passionate about literature, music etc" },
    { imageSrc: `/club/medium/medium.webp`, title: "Medium", description:"Medium SIG is dedicated to people interested in Media and Marketing." },
    { imageSrc: `/club/rovisp/rovisp.webp`, title: "Rovisp", description:"Rovisp SIG brings together people who are passionate about Electronics and Electrical Technology." },
    { imageSrc: `/club/torsion/torsion.webp`, title: "Torsion", description:"Torsion SIG brings together people interested in Mechanical, Civil, Chemical and Material Sciences." },
    { imageSrc: `/club/venture/venture.webp`, title: "Venture", description:"We're interested in exploring the fields of finance, business and management." }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {/* {subheading && <Subheading>{subheading}</Subheading>} */}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description }
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      {/* <DecoratorBlob /> */}
    </Container>
  );
};
