import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-15 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-3xl md:text-4xl text-left w-full capitalize">
            Cosmic Code Explorer
          </h2>
          <p className="font-light text-base sm:text-lg md:text-xl">
            My journey through the digital cosmos is powered by a constellation of
            modern technologies, with JavaScript as my navigation system. I pilot
            frameworks like React.js and Next.js with precision, engineering
            digital spacecraft (websites) that traverse the vast expanse of the
            internet. The advanced architecture of Jamstack serves as my
            spacecraft's engine, enabling me to create high-velocity, secure, and
            dynamic experiences. My design expertise ensures each digital vessel
            not only performs optimally but also captures the beauty of the
            digital universe. Join me as we venture into unexplored digital
            frontiers and push the boundaries of web technology.
          </p>
        </ItemLayout>

        

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats-augustine-sebastians-projects.vercel.app/api/top-langs?username=augustinesebastian007&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="augustinesebastian007"
            loading="lazy"
          />
        </ItemLayout>
        
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats-augustine-sebastians-projects.vercel.app/api?username=augustinesebastian007&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="augustinesebastian007"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://streak-stats.demolab.com?user=augustinesebastian007&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="augustinesebastian007"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,css,docker,figma,firebase,git,github,html,js,jquery,mongodb,mysql,netlify,nextjs,nodejs,npm,react,redux,replit,tailwind,threejs,vscode`}
            alt="augustinesebastian007"
            loading="lazy"
          />
        </ItemLayout>

        

       
      </div>
    </section>
  );
};

export default AboutDetails;
