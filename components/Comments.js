import { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";

const Comments = ({ issueTerm }) => {
  const commentsUUID = `comments_${issueTerm}`;

  useEffect(() => {
    let commentsContainer;
    commentsContainer = document.getElementById(commentsUUID);
    const script = document.createElement("script");

    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", true);
    script.setAttribute("repo", "rizkyzhang/comments");
    script.setAttribute("issue-term", issueTerm);
    script.setAttribute("theme", "github-dark");

    commentsContainer.appendChild(script);

    return () => {
      commentsContainer.innerHTML = "";
    };
  });

  return (
    <Box as="section" mt={20} textAlign="center">
      <Heading>Comments</Heading>
      <Box id={commentsUUID} className="post-comments" position="relative">
        <Box className="utterances-frame"></Box>
      </Box>
    </Box>
  );
};

export default Comments;
