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

const AboutUsCard = ({
  name,
  picture,
  bio,
  socials,
}: {
  name: string;
  picture: string;
  bio: string;
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

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        {bio}
      </Typography>
    </Card>
  );
};

const AboutUsPage = () => {
  return (
    <div>
      <AppBarComponent />

      <div className="h-[calc(100vh-20rem)] min-h-[35rem]">
        <Typography
          variant="h2"
          fontWeight={600}
          mb="2rem"
          mt="4rem"
          textAlign="center"
        >
          Our Team
        </Typography>

        <Typography variant="h6" mb="2rem" textAlign="center">
          We are a passionate group of high school students based in Dublin,
          California.
        </Typography>

        <div className="w-full flex justify-center">
          <div className="flex justify-around content-center w-[80rem]">
            <AboutUsCard
              name="Rohan Vij"
              picture={rohanPicture}
              bio="test"
              socials={[
                {
                  name: "GitHub",
                  icon: GitHubIcon,
                  link: "https://github.com/Rohan-Vij",
                },
                {
                  name: "LinkedIn",
                  icon: LinkedInIcon,
                  link: "https://www.linkedin.com/in/rohankvij/",
                },
              ]}
            />

            <AboutUsCard
              name="Ayush Garg"
              picture={ayushPicture}
              bio="test"
              socials={[
                {
                  name: "GitHub",
                  icon: GitHubIcon,
                  link: "https://github.com/megargayu/",
                },
                {
                  name: "LinkedIn",
                  icon: LinkedInIcon,
                  link: "https://www.linkedin.com/in/ayush-garg-b270bb24b/",
                },
              ]}
            />

            <AboutUsCard
              name="Mohit Varikuti"
              picture={mohitPicture}
              bio="test"
              socials={[
                {
                  name: "GitHub",
                  icon: GitHubIcon,
                  link: "https://github.com/GitHubEmploy",
                },
                {
                  name: "LinkedIn",
                  icon: LinkedInIcon,
                  link: "https://www.linkedin.com/in/mohitvarikuti/",
                },
              ]}
            />

            <AboutUsCard
              name="Jimin Lim"
              picture={jiminPicture}
              bio="test"
              socials={[
                {
                  name: "LinkedIn",
                  icon: LinkedInIcon,
                  link: "https://www.linkedin.com/in/jimin-lim-678159229/",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
