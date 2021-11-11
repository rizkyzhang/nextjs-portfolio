import { Image, Stack, Text, Wrap, chakra } from "@chakra-ui/react";
import { footerStyle, designedStyle, codedStyle } from "./style";

const Footer = () => {
  return (
    <Stack as="footer" {...footerStyle}>
      <Text>
        <chakra.span {...designedStyle}>designed</chakra.span> &{" "}
        <chakra.span {...codedStyle}>&lt;/coded&gt;</chakra.span> by Rizky
      </Text>
      <Wrap justify="center">
        <Image
          src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
          alt="Chakra UI logo"
          display="inline-block"
        />
        <Image
          src="https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white"
          alt="Chakra UI logo"
          display="inline-block"
        />
        <Image
          src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
          alt="Chakra UI logo"
          display="inline-block"
        />
        <Image
          src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
          alt="Next.js logo"
          display="inline-block"
        />
      </Wrap>
      <Text>2021 &copy; programmerHood</Text>
    </Stack>
  );
};

export default Footer;
