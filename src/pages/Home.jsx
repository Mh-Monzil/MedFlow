import Banner from "@/components/Home/Banner";
import BannerCard from "@/components/Home/BannerCard";
import MedicalServices from "@/components/Home/MedicalServices";
import Welcome from "@/components/Home/Welcome";



const Home = () => {
    return (
        <div>
            <Banner />
            <BannerCard />
            <Welcome />
            <MedicalServices />
        </div>
    );
};

export default Home;