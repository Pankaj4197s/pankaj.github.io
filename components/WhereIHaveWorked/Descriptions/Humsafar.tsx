import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Humsafar() {
  const tasks = [
    {
      text: "Created a cross-platform application for The Humsafar Trust - An NGO for LGBTQIA+\n" +
        "Developed an application based on Ionic, Cordova, Spring Boot, and MySQL.",
      keywords: ["Structured Product", "full-stack software developer"],
    },
    {
      text: "The app\n" +
        "supports Social Feed for LGBTQ Events, adding these events to the calendar & setting\n" +
        "reminders and SOS integration with calling and Navigation support that can be used\n" +
        "in emergencies.",
      keywords: [
        "document-inventory workflow",
        "ReactJS",
        "TypeScript",
        "Spring Boot",
        "SQL Server",
        "DBMS",
      ],
    },
    {
      text: "The app also hosts a vast collection of resources ranging from Legal,\n" +
        "Medical, and Social support that can help the LGBTQIA+ community in India.",
      keywords: [
        "Mockito",
        "JUnit",
        "JEST",
        "Jenkins",
        "CICD pipeline",
        "private cloud",
      ],
    },
    // {
    //   text: "Implemented efficient log monitoring using Splunk, enabling proactive identification and resolution of system issues. Conducted comprehensive API testing using Postman and utilized Git for version control, ensuring a streamlined development process and efficient collaboration within the team.",
    //   keywords: ["Splunk", "Postman", "REST APIs", "GIT"],
    // },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Technology Analyst Intern{" "}
            <span className="text-AAsecondary">@ Web App</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            October 2019 - October 2020 | Mumbai, India
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
