import Card from "../components/Technologies/Card";
import python from "../assets/python-svgrepo-com.svg";
import typescript from "../assets/typescript-official-svgrepo-com.svg";
import html from "../assets/html-5-svgrepo-com.svg";
import css from "../assets/css-3-svgrepo-com.svg";
import javascript from "../assets/javascript-svgrepo-com.svg";
import sql from "../assets/sql-database-generic-svgrepo-com.svg";
import django from "../assets/django-svgrepo-com.svg";
import react from "../assets/react-svgrepo-com.svg";
import tailwind from "../assets/tailwind-svgrepo-com.svg";
import azure from "../assets/azure-svgrepo-com.svg";
import github from "../assets/github-142-svgrepo-com (2).svg";
import mysql from "../assets/mysql-logo-svgrepo-com.svg";
import figma from "../assets/figma-svgrepo-com.svg";

const Technologies = () => {
  return (
    <div className="w-full mt-6 rounded-xl flex flex-col items-center">
      <h1 className="text-5xl text-[#AC8DAF]">Technologies</h1>
      <div className="flex flex-col justify-center items-center w-full mt-9">
        <div className="w-4/5 h-full rounded-xl bg-[#DDB6C6] flex flex-col items-center">
          <h2 className="font-bold text-2xl">Languages</h2>
          <div className="w-full grid grid-cols-5">
            <Card image={python} text="Python" />
            <Card image={typescript} text="Typescript" />
            <Card image={html} text="Html" />
            <Card image={css} text="Css" />
            <Card image={javascript} text="Javascript" />
            <Card image={sql} text="Sql" />
          </div>
          <h2 className="font-bold text-2xl">Frameworks/Libraries</h2>
          <div className="w-full grid grid-cols-5">
            <Card image={django} text="Django" />
            <Card image={react} text="React" />
            <Card image={tailwind} text="Tailwindcss" />
          </div>
          <h2 className="font-bold text-2xl">Other</h2>
          <div className="w-full grid grid-cols-5">
            <Card image={azure} text="Microsoft Azure" />
            <Card image={github} text="Github" />
            <Card image={mysql} text="MySQL" />
            <Card image={figma} text="Figma" />
            <Card image="" text="Docker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
