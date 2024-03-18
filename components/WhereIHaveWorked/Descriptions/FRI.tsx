import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function FRI() {
  const tasks = [
    {
      text: "Reviewed two ongoing projects as an Intern - Mukhya Mantri Jal Swavlambhan Abhiyan (MJSA) and Rajasthan Forestry and Biodiversity Project - Phase II",
      keywords: ["Mukhya Mantri Jal Swavlambhan Abhiyan", "MJSA", "Biodiversity Project - Phase II"],
    },
    {
      text: "Analysis of the R&D department and gauged how various technologies like Quantum Geographic Information System (GIS) and Management Information System (MIS) are being used in\n" +
        "the projects.",
      keywords: ["Quantum Geographic Information System", "GIS", "Management Information System", "MIS"],
    },
    {
      text: "Visited a Self Help Group (SHG) under Community Mobilization and Joint Forest Management",
      keywords: ["Self Help Group", "SHG", "Community Mobilization", "Joint Forest Management"]
    }
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Research Intern{" "}
          <span className="text-AAsecondary">@ Forest Research Institute</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">
          April 2017 - June 2017 | Jaipur, India
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {tasks.map((item, index) => {
          return (
            <div key={index} className="flex flex-row space-x-2">
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
  );
}
