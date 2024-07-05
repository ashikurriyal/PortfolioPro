import Footer from "../SharedComponents/Footer/Footer";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import Banner from "./Banner/Banner";
import ContactMeSection from "./ContactMeSection/ContactMeSection";
import EducationSection from "./EducationSection/EducationSection";
import ExpertiseSection from "./ExpertiseSection/ExpertiseSection";
import ProjectSection from "./ProjectSection/ProjectSection";


const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <div className="lg:mx-32 mx-6 space-y-20">
                <AboutMeSection></AboutMeSection>
            </div>
            <ExpertiseSection></ExpertiseSection>
            <div className="lg:mx-32 mx-6 space-y-20">
                <ProjectSection></ProjectSection>
                <EducationSection></EducationSection>
            </div>
            <ContactMeSection></ContactMeSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;