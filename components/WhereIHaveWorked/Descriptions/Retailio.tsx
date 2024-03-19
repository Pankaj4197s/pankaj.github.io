import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Retailio() {
  const tasks = [
    {
      text: "My role was to develop Frontend functionality for Retailio’s web panels for Retailer and\n" +
        "Distributor as well as also add functionality to internal ADMIN panel. The work included\n" +
        "supporting these with backend API development.",
      keywords: ["Frontend", "Retailio", "web panels", "Retailer", "Distributor", "ADMIN panel", "API"],
    },
    {
      text: "I also worked in ERP integration, MIS\n" +
        "report generation, and synchronization of OMS payments.",
      keywords: ["ERP", "MIS", "OMS payments"],
    },
    {
      text: "Worked on implementing\n" +
        "batch jobs that helped reduce manual intervention in Payment Processing.",
      keywords: ["batch jobs", "Payment Processing"],
    },
    {
      text: "Created UI\n" +
        "in AngularJS where users can upload Payment Information in Excel and trigger batch\n" +
        "jobs to process the same.",
      keywords: ["AngularJS", "Payment Information", "Excel", "batch jobs"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Development Intern{" "}
            <span className="text-AAsecondary">@ Retailio</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            January 2019 - June 2019 | Mumbai, India
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
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
    </>
  );
}
