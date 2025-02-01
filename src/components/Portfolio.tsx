import SkillsList from "./ui/SkillsList";
import AboutMe from "./ui/AboutMe";
import Footer from "./ui/Footer";
import ContactMe from "./ui/ContactMe";
import ProjectsList from "./ui/ProjectsList";
import GithubAddress from "./ui/GithubAddress";
import Navbar from "./ui/Navbar";

const Portfolio: React.FC = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <SkillsList />
      <ProjectsList />
      <GithubAddress />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Portfolio;
