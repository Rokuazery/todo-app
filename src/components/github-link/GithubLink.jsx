import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const GithubLink = () => {
  const githubURL = "https://github.com/Rokuazery";

  // this just to avoid the security risk warning
  const openGithubInNewTab = (e) => {
    e.preventDefault();
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex justify-center flex-col items-center md:text-base text-xs sm:text-sm">
      <hr className="w-full mb-2"></hr>
      <p>
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Visit my Github page{" "}
        <a
          className="text-blue-600 underline font-semibold"
          href={githubURL}
          onClick={openGithubInNewTab}
        >
          @Rokuazery
        </a>{" "}
        ❤️
      </p>
    </div>
  );
};

export default GithubLink;
