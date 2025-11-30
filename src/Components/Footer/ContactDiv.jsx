// ContactDiv.jsx (or .js)

import SocialsDiv from "../Socials/SocialsDiv";
import EmailInputForm from "../UI/EmailInputForm";

const ContactDiv = () => {
  return (
    <div className="max-w-xs">
      <p className="ml-1 font-bold max-w-[250px]">
        Have Something To Talk About With Our Professionals?
      </p>
      <EmailInputForm placeholder="Your Email" />
      <SocialsDiv />
    </div>
  );
};

export default ContactDiv;
