import React from "react";
import styles from "@/app/services/[slug]/page.module.css";
import OverHauling from "@/components/services/overhauling";
import PropulsionSystem from "@/components/services/propulsionSystem";
import Bowthurster from "@/components/services/bowthurster";
import WinchesServices from "@/components/services/winchesServices";
import Fabrication from "@/components/services/fabrication";
const Page = ({ params }) => {
  const services = params.slug.split("-").join(" ");
  let ComponentToRender;
  switch (services) {
    case "Overhauling of Main Engine and Generator":
      ComponentToRender = OverHauling;
      break;
    case "Propulsion Systems":
      ComponentToRender = PropulsionSystem;
      break;
    case "Bow Thruster Systems":
      ComponentToRender = Bowthurster;
      break;
    case "Winches and Hydraulics":
      ComponentToRender = WinchesServices;
      break;
    case "Fabrication":
      ComponentToRender = Fabrication;
      break;
    default:
      return <div>Service not found</div>;
  }

  return (
    <>
      <div className={`container ${styles.serviceContainer}`}>
        <ComponentToRender />
      </div>
    </>
  );
};

export default Page;
