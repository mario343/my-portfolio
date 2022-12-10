import { Flex, Link, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

const SocialsLinks = () => {
  const [hoverGitHub, setHoverGithub] = useState(false);
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverInbox, setHoverInbox] = useState(false);
  return (
    <Flex fontSize="32px" justify="space-between" w="100%" alignSelf="center">
      <Link
        href="https://github.com/mario343"
        isExternal
        onMouseOver={() => setHoverGithub(true)}
        onMouseLeave={() => setHoverGithub(false)}
      >
        <Tooltip
          label="Check out my Github profile"
          bg="white"
          color="black"
          openDelay={250}
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={hoverGitHub ? { color: "#f8d820" } : {}}
          />
        </Tooltip>
      </Link>

      <Link
        href="mailto:mariowilk999@gmail.com"
        isExternal
        onMouseOver={() => setHoverInbox(true)}
        onMouseLeave={() => setHoverInbox(false)}
      >
        <Tooltip
          label="Send me an email"
          bg="white"
          color="black"
          openDelay={250}
        >
          <FontAwesomeIcon
            icon={faInbox}
            style={hoverInbox ? { color: "#f8d820" } : {}}
          />
        </Tooltip>
      </Link>
      <Link
        href="https://www.linkedin.com/in/mariusz-wilk-934b58184/"
        isExternal
        onMouseOver={() => setHoverLinkedin(true)}
        onMouseLeave={() => setHoverLinkedin(false)}
      >
        <Tooltip
          label="Add me on Linkedin"
          bg="white"
          color="black"
          openDelay={250}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={hoverLinkedin ? { color: "#f8d820" } : {}}
          />
        </Tooltip>
      </Link>
    </Flex>
  );
};

export { SocialsLinks };
