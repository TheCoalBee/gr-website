import { Link } from "react-router-dom";
import './styles/projects.css'
import Heading from "./components/misc/Heading";
import Project from "./components/projects/Project";
import CallToAction from "./components/misc/CallToAction";
import OurPartners from './components/misc/OurPartners';
import ContentBlock from "./components/home/ContentBlock";
import ContentText from "./components/home/ContentText"

function NotFound() {
  return (
    <main id="NotFound">
        <img loading="lazy" className="background" src={"/auto-images/notfound-bg.jpg"}></img>

        <Heading title={"Page Not Found"} content={""}/>

        <ContentBlock 
            alignment="right" 
            wordContent={<ContentText header="This Page Is Still Under Construction" paragraph="Looks like this page isn’t quite finished — we’re still building it! In the meantime, you can head back to our homepage or explore other sections of our site. Thanks for your patience while we put the finishing touches on things."/>}
            imageContent={<img loading="lazy" src="/auto-images/notfound-bg.jpg"/>}
            theme="dark"
          />

        <CallToAction />
    </main>
  );
}

export default NotFound;