import ContentWrapper from "@/components/wrappers/content-wrapper";
import { TFunction } from "@/types/i18n";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiFillCustomerService, AiFillCode, AiFillRobot } from "react-icons/ai";

export default function ServicesSection({ t }: { t: TFunction }) {
  return (
    <ContentWrapper className="bg-text not-only:py-16 md:py-28">
      <div className="space-y-3 scroll-mt-32" id="services">
        <h1 className="text-3xl font-bold tracking-tighter text-center text-background lg:text-4xl xl:text-5xl/none intersect:animate-fade-up intersect-once">
          {t.rich("servicesTitle", {
            span: (span) => <span className="text-primary">{span}</span>,
          })}
        </h1>
        <p className="max-w-[600px] text-center mx-auto text-background/70 text-base lg:text-lg intersect:animate-fade-up intersect:animate-delay-50 intersect-once">
          {t("servicesSubTitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 intersect:animate-fade-up intersect:animate-delay-100 intersect-once">
          {services.map((service, index) => (
            <div
              className={`bg-text shadow-md border border-secondary/50 p-5 rounded-lg space-y-3`}
              key={index}
            >
              <div className="aspect-square p-1 rounded-md flex justify-center items-center text-4xl w-fit bg-primary text-text">
                {service.icon}
              </div>
              <h2 className="text-background text-base lg:text-lg font-bold">
                {t(service.titleKey)}
              </h2>
              <ul className="space-y-2">
                {service.pointKeys.map((pointKey) => (
                  <li
                    className="flex gap-2 text-xs lg:text-sm text-background/60 font-medium"
                    key={pointKey}
                  >
                    <IoMdCheckmarkCircleOutline className="text-lg text-primary min-h-4 min-w-4 h-4 w-4 mt-0.5" />
                    {t(pointKey)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}

const services = [
  {
    icon: <AiFillCustomerService />,
    titleKey: "serviceOneTitle",
    pointKeys: [
      "serviceOneFeatureOne",
      "serviceOneFeatureTwo",
      "serviceOneFeatureThree",
      "serviceOneFeatureFour",
    ],
  },
  {
    icon: <AiFillCode />,
    titleKey: "serviceTwoTitle",
    pointKeys: [
      "serviceTwoFeatureOne",
      "serviceTwoFeatureTwo",
      "serviceTwoFeatureThree",
      "serviceTwoFeatureFour",
    ],
  },
  {
    icon: <AiFillRobot />,
    titleKey: "serviceThreeTitle",
    pointKeys: [
      "serviceThreeFeatureOne",
      "serviceThreeFeatureTwo",
      "serviceThreeFeatureThree",
    ],
  },
];
