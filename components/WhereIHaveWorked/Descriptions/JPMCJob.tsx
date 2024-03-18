import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function JPMCJob() {
  const tasks = [
    {
      text: "Working on converting existing legacy applications to containerized workloads and migrating\n" +
        "them from the Private Cloud to Amazon Web Services(AWS EKS",
      keywords: ["Advisor Connect", "CRM softwares"],
    },
    {
      text: "Actively involved\n" +
        "in the development of Active Inventory Management (AIM) Cash Optimization based on\n" +
        "Signavio BDM that Cash Managers and Portfolio Managers use to actively manage residual\n" +
        "cash on client accounts before the close of day. This helped the business optimize\n" +
        "operations and invest more than $1.6 Billion in previously uninvested cash in 2022 alone.\n" +
        "The total invested cash volume in 2022 via AIM was $188 Billion. AIM was recognized\n" +
        "as the ’Best Use of IT in Treasury and Capital Markets’ by Informaconnect in December\n" +
        "2022",
      keywords: ["Oracle", "Spring Boot", "Apache Kafka", "Elasticsearch"],
    },
    {
      text: "Worked on updating the authentication and authorization setup across\n" +
        "micro-services to use OAuth2",
      keywords: ["Spring Cloud Data Flow"],
    },
    {
      text: "Worked on enhancing the CI/CD pipelines to the latest industry\n" +
        "standards. I also worked on Single Page Application Development using ReactJS",
      keywords: ["5000+ advisors", "one-stop-shop solution"],
    },
    // {
    //   text: "Developed an algorithm for optimal data reconciliation by comparing 10M+ records daily with efficient heap memory consumption. Built a dashboard having graphical visualisation of these data inconsistencies.",
    //   keywords: ["optimal data reconciliation", "10M+ records"],
    // },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Associate Software Developer{" "}
            <span className="text-AAsecondary">@ Fullstack</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            July 2019 - Present | Mumbai, India
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
