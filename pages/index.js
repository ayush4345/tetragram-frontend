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
        <title>IET NITK</title>
        <link rel="icon" href="/logo.webp" />
      </Head>

      <main className="flex flex-col w-full flex-1 text-center pt-6">
        <BackgroundAsImage />
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
