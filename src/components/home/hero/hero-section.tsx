import ContentWrapper from "../../wrappers/content-wrapper";

export default function HeroSection() {
  return (
    <ContentWrapper className="">
      <section className="py-50">
        <div className="container mx-auto h-full">
          <h1 className="text-6xl text-white">Welcome to my website</h1>
        </div>
      </section>
    </ContentWrapper>
  );
}
