import AboutYachtClubSection from "@/components/AboutYachtClub/AboutYachtClubSection";
import ClubServicesSection from "@/components/ClubServices/ClubServicesSection";
import MeetOurTeamSection from "@/components/MeetOurTeam/MeetOurTeamSection";
import OurBrandSection from "@/components/OurBrand/OurBrandSection";
import AboutUs from "@/components/about-us/about-us"
export default function Home() {
  return (
    <div>
      <ClubServicesSection />
      <AboutUs></AboutUs>
      <AboutYachtClubSection/>
      {/* <MeetOurTeamSection /> */}
      <OurBrandSection />
    </div>
  );
}
