import {
  Code,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const markdownComponents = {
  h2: ({ children }) => (
    <Heading my={5} size="lg">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" my={5} size="md">
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text my={5}>{children}</Text>,
  a: ({ children, href }) => (
    <Link href={href} color="blue.500" textDecoration="underline">
      {children}
    </Link>
  ),
  ol: ({ children }) => <OrderedList p={5}>{children}</OrderedList>,
  ul: ({ children }) => <UnorderedList p={5}>{children}</UnorderedList>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  img: ({ src, alt }) => <Image src={src} alt={alt} />,
  code: ({ children }) => <Code px={3}>{children}</Code>,
};

export default markdownComponents;
