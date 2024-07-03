import Footer from "../SharedComponents/Footer/Footer";
import Banner from "./Banner/Banner";
import EducationSection from "./EducationSection/EducationSection";
import ExpertiseSection from "./ExpertiseSection/ExpertiseSection";


const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <ExpertiseSection></ExpertiseSection>
            <div className="lg:mx-32 mx-6 space-y-20">
                <EducationSection></EducationSection>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;