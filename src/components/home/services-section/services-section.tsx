import ContentWrapper from "@/components/wrappers/content-wrapper";
import { TFunction } from "@/types/i18n";
import { AiFillCustomerService } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
export default function ServicesSection({ t }: { t: TFunction }) {
  return (
    <ContentWrapper className="bg-text not-only:py-16 md:py-28 ">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tighter text-center text-background lg:text-4xl xl:text-5xl/none">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="max-w-[600px] text-center mx-auto text-background/70 text-base lg:text-lg">
          We build custom software solutions that help businesses streamline
          operations, enhance customer experiences, and drive growth.
        </p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-text py-10 space-y-3">
            <div className="aspect-square p-1 rounded-md flex justify-center items-center text-4xl w-fit bg-primary text-text">
              <AiFillCustomerService />
            </div>
            <h2 className="text-background text-lg font-bold">
              Software Development
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <IoMdCheckmarkCircleOutline className="text-lg text-primary" />{" "}
                Custom software development (web, mobile, desktop)
              </li>
              <li className="flex items-center gap-2 text-sm">
                <IoMdCheckmarkCircleOutline className="text-lg text-primary" />{" "}
                Software maintenance and support
              </li>
              <li className="flex items-center gap-2 text-sm">
                <IoMdCheckmarkCircleOutline className="text-lg text-primary" />{" "}
                Software testing and quality assurance
              </li>
              <li className="flex items-center gap-2 text-sm">
                <IoMdCheckmarkCircleOutline className="text-lg text-primary" />{" "}
                Software consulting and auditing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
