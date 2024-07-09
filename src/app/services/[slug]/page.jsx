import React from "react";
import Head from "next/head";
import styles from "@/app/services/[slug]/page.module.css";
import OverHauling from "@/components/services/overhauling";
import PropulsionSystem from "@/components/services/propulsionSystem";
import Bowthurster from "@/components/services/bowthurster";
import WinchesServices from "@/components/services/winchesServices";
import Fabrication from "@/components/services/fabrication";

export async function generateMetadata({ params }) {
  const service = params.slug.split("-").join(" ");
  console.log("service in metadata", service);
  switch (service) {
    case "Overhauling of Main Engine and Generator":
      return {
        title: "Overhauling of Main Engine and Generator",
        description:
          "At Shazim Marine Mechanical Services, our team of highly skilled engineers and technicians boasts extensive experience and certifications in a diverse array of diesel engines and main engine overhauls.",
        openGraph: {
          images: [
            {
              url: "https://fama.b-cdn.net/sms/service1.webp",
              height: 1200,
              width: 600,
              alt: "Alt",
            },
          ],
        },
      };
    case "Propulsion Systems":
      return {
        title: "Propulsion Systems",
        description:
          "Our Propulsion Service efficiently manages the entire maintenance process, leveraging the expertise of our highly skilled engineers who have extensive experience with all major installations.",
        openGraph: {
          images: [
            {
              url: "https://fama.b-cdn.net/sms/service2.webp",
              height: 1200,
              width: 600,
              alt: "Alt",
            },
          ],
        },
      };
    case "Bow Thruster Systems":
      return {
        title: "Bow Thruster Systems",
        description:
          "Shazim Marine Mechanical Services offers comprehensive bow thruster inspection and repair services, whether in dock, in-house, or afloat, depending on the specific requirements.",
        openGraph: {
          images: [
            {
              url: "https://fama.b-cdn.net/sms/service3.webp",
              height: 1200,
              width: 600,
              alt: "Alt",
            },
          ],
        },
      };
    case "Winches and Hydraulics":
      return {
        title: "Winches and Hydraulics",
        description:
          "At Shazim Marine Mechanical Services, our team of experienced professionals specializes in hydraulics and winch-related repairs. We provide on-site repair and maintenance services for winches.",
        openGraph: {
          images: [
            {
              url: "https://fama.b-cdn.net/sms/service4.webp",
              height: 1200,
              width: 600,
              alt: "Alt",
            },
          ],
        },
      };
    case "Fabrication":
      return {
        title: "Fabrication",
        description:
          "Shazim Marine Mechanical Services specializes in fabricating structures, piping, and outfitting for the marine and offshore oil and gas industries, with projects in Singapore, Indonesia, and Bangladesh.",
        openGraph: {
          images: [
            {
              url: "https://fama.b-cdn.net/sms/service5.webp",
              height: 1200,
              width: 600,
              alt: "Alt",
            },
          ],
        },
      };
    default:
      return {
        title: "Service Not Found",
        description: "The requested service is not available.",
      };
  }
}

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
