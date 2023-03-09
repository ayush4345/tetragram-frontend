import Head from "next/head";
import tw, { styled } from "twin.macro";
import About from "/components/about/about";
import Blog from "/components/blog/blogcard";
import Footer from "/components/footer/footer";
import BackgroundAsImage from "/components/hero/BackgroundAsImage";
import Projects from "/components/projects/projects";
import Aboutsigs from "/components/sigs/aboutsigs";

export default function Home() {

  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-600`;
  const HighlightedText = tw.span`text-primary-600`;


  return (
    <div className="flex flex-col min-h-screen ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 text-center pt-6">
        <BackgroundAsImage />
        {/* <StyledButton>In Style</StyledButton>
        <br />
        <TailwindButton>In Tailwind Style</TailwindButton>
        <br />
        <ConditionalButton isRed={true}>Conditional Tailwind</ConditionalButton> */}
      </main>
      <About />
      <Aboutsigs
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            Our <HighlightedText>SIGS</HighlightedText>
          </>
        }
      />
      <Blog />
      <Projects />
      <Footer />
    </div>
  );
}

// still works despite importing from twin.macro
const StyledButton = styled.button`
  background: red;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid black;
`;

const TailwindButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`;

const ConditionalButton = styled.button(({ isRed }) => [
  isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-500`,
  tw`
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
  `,
]);