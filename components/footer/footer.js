import React from "react";
import tw, {styled} from "twin.macro";
import {AiFillHeart} from "react-icons/ai"
import {BsYoutube} from "react-icons/bs"
import {FaFacebookSquare} from "react-icons/fa"

const Container = tw.div`relative bg-gray-900 text-gray-100 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-between md:justify-around lg:justify-between `;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black`;

const CompanyAddress = tw.p`mt-4 max-w-sm font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left `;

const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  img {
    ${tw`w-4 h-4`}
  }
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div` flex items-center justify-center gap-2`
const CompanyInfo = tw.div``

const Divider = tw.div`my-8 border-b-2 border-gray-800`
export default () => {
    return (
        <Container>
            <Content>
                <FiveColumns>
                    <CompanyColumn>
                        <LogoContainer>
                            <LogoImg src="/logo.webp" />
                            <LogoText>IET NITK</LogoText>
                        </LogoContainer>
                        <CompanyAddress>
                            The Institute of Engineering Technology - National Institute of Technology Karnataka
                            (IET-NITK)
                            Student Chapter
                        </CompanyAddress>
                        <SocialLinksContainer>
                            <SocialLink href="https://facebook.com">
                                <FaFacebookSquare className="text-blue-600"/>
                            </SocialLink>
                            <SocialLink href="https://twitter.com">
                                <img src="/twitter-icon.png" />
                            </SocialLink>
                            <SocialLink href="https://youtube.com">
                                <BsYoutube className="text-red-600"/>
                            </SocialLink>
                        </SocialLinksContainer>
                    </CompanyColumn>
                    {/* <Column>
            <ColumnHeading>Quick Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Support</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">About Us</Link>
              </LinkListItem>
            </LinkList>
          </Column> */}
                    <Column>
                        <ColumnHeading>Important Links</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                <Link href="#">About us</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Blogs</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Projects</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Links</Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>SIGs</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                <Link href="#">Cipher</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Torsion</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Rovisp</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Inkheart</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Venture</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Medium</Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Contact</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                +1 (234) (567)-8901
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="mailto:iet@nitk.ac.in">iet@nitk.ac.in</Link>
                            </LinkListItem>
                            {/* <LinkListItem>
                                <Link href="#">Sales</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Report Abuse</Link>
                            </LinkListItem> */}
                        </LinkList>
                    </Column>
                </FiveColumns>
                <Divider />
                <CopyrightAndCompanyInfoRow>
                    <CopyrightNotice> made with <AiFillHeart /> by IET NITK web team</CopyrightNotice>
                    <CompanyInfo>An Amazing Club</CompanyInfo>
                </CopyrightAndCompanyInfoRow>
            </Content>
        </Container>
    );
};
