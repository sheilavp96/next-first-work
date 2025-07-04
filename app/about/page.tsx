import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO",
  description: "About page",
  keywords: ["HOLA"],
};
const AboutPage = () => {
  return (
    <>
      <span className="text-5xl">About PAGE</span>
    </>
  );
};

export default AboutPage;
