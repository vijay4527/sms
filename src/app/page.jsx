import AboutYachtClubSection from "@/components/AboutYachtClub/AboutYachtClubSection";
import ClubServicesSection from "@/components/ClubServices/ClubServicesSection";
import MeetOurTeamSection from "@/components/MeetOurTeam/MeetOurTeamSection";
import OurBrandSection from "@/components/OurBrand/OurBrandSection";

export default function Home() {
  return (
    <div>
      <ClubServicesSection />
      <AboutYachtClubSection/>
      <MeetOurTeamSection />
      <OurBrandSection />
    </div>
  );
}
