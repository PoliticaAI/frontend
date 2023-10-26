import React from "react";
import { Typography, Card, Link } from "@mui/material";

import AppBarComponent from "../components/AppBarComponent";

import rohanPicture from "../assets/pfps/rohan.jpg";
import ayushPicture from "../assets/pfps/ayush.jpg";
import mohitPicture from "../assets/pfps/mohit.jpg";
import jiminPicture from "../assets/pfps/jimin.jpg";

import { SvgIconComponent } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FooterComponent from "../components/FooterComponent";

const GithubSocial = (link: string) => ({
  name: "GitHub",
  icon: GitHubIcon,
  link,
});

const LinkedInSocial = (link: string) => ({
  name: "LinkedIn",
  icon: LinkedInIcon,
  link,
});

const AboutUsCard = ({
  name,
  picture,
  children,
  socials,
}: {
  name: string;
  picture: string;
  children: React.ReactNode;
  socials?: { name: string; icon: SvgIconComponent; link: string }[];
}) => {
  return (
    <Card className="w-64 p-5 rounded-sm flex flex-col items-center">
      <img src={picture} className="w-52 h-52 rounded-full text-center" />
      <Typography variant="h5" textAlign="center" fontWeight={600} mt="1rem">
        {name}
      </Typography>

      <div className="mb-2 flex flex-row space-x-2">
        {socials && (
          <>
            {...socials.map((social) => (
              <Link href={social.link} title={social.name}>
                {React.createElement(social.icon, { className: "text-black" })}
              </Link>
            ))}
          </>
        )}
      </div>

      <Typography variant="body1">{children}</Typography>
    </Card>
  );
};

const AboutUsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <AppBarComponent />

      <div className="w-full pt-10 pb-40">
        <Typography
          variant="h2"
          className="mb-8 mt-16 text-center font-bold text-blue-500"
        >
          Our Team
        </Typography>

        <Typography variant="h6" className="mb-8 text-center">
          We are a passionate group of high school students from Dublin High
          School in Dublin, California.
        </Typography>

        <div className="flex justify-center">
          <div className="flex justify-around content-center w-[80rem]">
            <AboutUsCard
              name="Rohan Vij"
              picture={rohanPicture}
              socials={[
                GithubSocial("https://github.com/Rohan-Vij"),
                LinkedInSocial("https://www.linkedin.com/in/rohankvij/"),
              ]}
            >
              test
            </AboutUsCard>

            <AboutUsCard
              name="Ayush Garg"
              picture={ayushPicture}
              socials={[
                GithubSocial("https://github.com/megargayu/"),
                LinkedInSocial(
                  "https://www.linkedin.com/in/ayush-garg-b270bb24b/"
                ),
              ]}
            >
              Ayush is a motivated programmer and computer scientist interested
              in artificial intelligence and bioinformatics. He was the lead
              frontend developer for this project and helped with branding and
              design. He is currently researching at UC Santa Barbara on MRI and
              CT segmentation and is the first author on a paper accepted into
              the American Physical Society's 2023 Fluid Dynamics conference.
            </AboutUsCard>

            <AboutUsCard
              name="Mohit Varikuti"
              picture={mohitPicture}
              socials={[
                GithubSocial("https://github.com/GitHubEmploy"),
                LinkedInSocial("https://www.linkedin.com/in/mohitvarikuti/"),
              ]}
            >
              test
            </AboutUsCard>

            <AboutUsCard
              name="Jimin Lim"
              picture={jiminPicture}
              socials={[
                LinkedInSocial(
                  "https://www.linkedin.com/in/jimin-lim-678159229/"
                ),
              ]}
            >
              test
            </AboutUsCard>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default AboutUsPage;
