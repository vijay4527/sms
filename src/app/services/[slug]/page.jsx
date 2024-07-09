import React from "react";
import Head from "next/head";
import styles from "@/app/services/[slug]/page.module.css";
import OverHauling from "@/components/services/overhauling";
import PropulsionSystem from "@/components/services/propulsionSystem";
import Bowthurster from "@/components/services/bowthurster";
import WinchesServices from "@/components/services/winchesServices";
import Fabrication from "@/components/services/fabrication";
const generateMetadata = (service) => {
  switch (service) {
    case "Overhauling of Main Engine and Generator":
      return {
        title: "Overhauling of Main Engine and Generator",
        description:
          "Expert overhauling services for main engines and generators, ensuring optimal performance and longevity.",
      };
    case "Propulsion Systems":
      return {
        title: "Propulsion Systems",
        description:
          "Comprehensive services for propulsion systems, enhancing vessel efficiency and reliability.",
      };
    case "Bow Thruster Systems":
      return {
        title: "Bow Thruster Systems",
        description:
          "Specialized services for bow thruster systems, improving maneuverability and control.",
      };
    case "Winches and Hydraulics":
      return {
        title: "Winches and Hydraulics",
        description:
          "Professional winch and hydraulic system services for robust and efficient operations.",
      };
    case "Fabrication":
      return {
        title: "Fabrication",
        description:
          "Custom fabrication services to meet diverse marine and industrial needs.",
      };
    default:
      return {
        title: "Service Not Found",
        description: "The requested service is not available.",
      };
  }
};

const Page = ({ params }) => {
  const services = params.slug.split("-").join(" ");
  let ComponentToRender;
  let metadata;

  switch (services) {
    case "Overhauling of Main Engine and Generator":
      ComponentToRender = OverHauling;
      metadata = generateMetadata(services);
      break;
    case "Propulsion Systems":
      ComponentToRender = PropulsionSystem;
      metadata = generateMetadata(services);
      break;
    case "Bow Thruster Systems":
      ComponentToRender = Bowthurster;
      metadata = generateMetadata(services);
      break;
    case "Winches and Hydraulics":
      ComponentToRender = WinchesServices;
      metadata = generateMetadata(services);
      break;
    case "Fabrication":
      ComponentToRender = Fabrication;
      metadata = generateMetadata(services);
      break;
    default:
      return <div>Service not found</div>;
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className={`container ${styles.serviceContainer}`}>
        <ComponentToRender />
      </div>
    </>
  );
};

export default Page;
