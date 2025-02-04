import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from 'next/image';

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
            Navigating the digital cosmos with a diverse constellation of technologies - 
            Java, Python, PHP, and Flutter are my guiding stars. Like a skilled cosmic 
            architect, I craft digital vessels ranging from melodious streaming platforms 
            to intelligent home automation systems. My journey through the tech universe 
            has been marked by stellar achievements at NASA Space Apps and various 
            hackathon galaxies, where I've engineered solutions that transcend traditional 
            boundaries. As a Local Co-Lead for NASA Space Apps and Deputy Chief FOSS 
            Ambassador, I'm charting new paths for fellow explorers in the vast expanse 
            of technology. My spacecraft's engine is powered by cutting-edge tools and 
            frameworks, while my navigation system is guided by an unwavering curiosity 
            in Quantum Computing and UI/UX design. Join me as we venture into the 
            unexplored frontiers of innovation, where each line of code opens a portal 
            to new technological dimensions.
          </p>
        </ItemLayout>

        

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <Image
            width={800}
            height={200}
            className="w-full h-auto"
            src={`https://github-readme-stats-augustine-sebastians-projects.vercel.app/api/top-langs?username=augustinesebastian007&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="augustinesebastian007"
            loading="lazy"
          />
        </ItemLayout>
        
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Image
            width={800}
            height={200}
            className="w-full h-auto"
            src={`https://github-readme-stats-augustine-sebastians-projects.vercel.app/api?username=augustinesebastian007&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="augustinesebastian007"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Image
            width={800}
            height={200}
            className="w-full h-auto"
            src={`https://streak-stats.demolab.com?user=augustinesebastian007&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="augustinesebastian007"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <Image
            width={800}
            height={200}
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
