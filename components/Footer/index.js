import { Image, Stack, Text, chakra } from "@chakra-ui/react";
import { footerStyle, designedStyle, codedStyle } from "./style";

const Footer = () => {
  return (
    <Stack as="footer" {...footerStyle}>
      <Text>
        <chakra.span {...designedStyle}>designed</chakra.span> &{" "}
        <chakra.span {...codedStyle}>&lt;/coded&gt;</chakra.span> by Rizky
      </Text>
      <Text>
        Built with{" "}
        <Image
          src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
          alt="Chakra UI logo"
          display="inline-block"
        />
        <Image
          src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
          alt="Next.js logo"
          display="inline-block"
        />
      </Text>
      <Text>2021 &copy; programmerHood</Text>
    </Stack>
  );
};

export default Footer;
