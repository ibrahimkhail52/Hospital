import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
const SocialsDiv = () => {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit LinkedIn profile"
        href="https://www.linkedin.com/in/murtaza-ibrahimkhail-a302b0347"
      >
        <BsLinkedin />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit GitHub profile"
        href="https://github.com/ibrahimkhail52"
      >
        <BsGithub />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Facebook page"
        href="https://www.facebook.com/share/1Eb4ErYHCH/"
      >
        <BsFacebook />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Twitter page"
        href="https://x.com/ibrahimkhail52"
      >
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialsDiv;
