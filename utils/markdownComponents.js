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

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

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
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={atomDark}
        language={match[1]}
        showLineNumbers
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <Code
        backgroundColor="rgb(29, 31, 33)"
        color="white"
        borderRadius="0.3em"
        paddingX="0.6em"
        paddingY="0.3em"
        className={className}
        {...props}
      >
        {children}
      </Code>
    );
  },
};

export default markdownComponents;
