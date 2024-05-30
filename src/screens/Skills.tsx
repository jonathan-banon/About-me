import { IconContext } from "react-icons";
import { FaSymfony } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaVuejs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";

export default function Skills() {
    return (
        <IconContext.Provider value={{ size: '40px', color: 'white' }}>
            <div className="h-4/5">
                <div className="flex w-full justify-around h-1/2 items-center">
                    <div>
                        <p className="mb-20 text-center">Technologies</p>
                        <div className="skills">
                            <div className="flex justify-between">
                                <div className="skill-container">
                                    <FaVuejs className="" />
                                    <p>Vue.Js</p>
                                </div>
                                <div className="skill-container">
                                    <FaSymfony className="" />
                                    <p>Symfony</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="skill-container">
                                    <FaReact className="" />
                                    <p>React</p>
                                </div>
                                <div className="skill-container">
                                    <TbBrandReactNative className="" />
                                    <p>React Native</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Bases de données</p>
                        <div className="skills flex flex-col justify-between items-center">
                            <div className="skill-container">
                                <SiMysql />
                                <p>MySQL</p>
                            </div>
                            <div className="skill-container">
                                <GrGraphQl />
                                <p>GraphQL</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-around h-1/2 items-center">
                    <div>
                        <p>Languages</p>
                        <div className="skills">
                            <div className="skill-container">
                                <IoLogoJavascript />
                                <p>Javascript</p>
                            </div>
                            <div className="PHP">
                                <FaPhp />
                                <p>PHP</p>
                            </div>
                            <div className="skill-container">
                                <SiTypescript />
                                <p>Typescript</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Outils</p>
                        <div className="skills">
                            <div className="skill-container">
                                <FaDocker />
                                <p>Docker</p>
                            </div>
                            <div className="skill-container">
                                <FaGitAlt />
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}