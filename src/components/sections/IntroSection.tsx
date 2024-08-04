import React from "react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import TextRevealByWord from "../ui/text-reveal";

const IntroSection = () => {
  return (
    <MaxWidthWrapper>
      <TextRevealByWord className="lg:ml-32" text="I craft intuitive, responsive web experiences that seamlessly blend aesthetic design with functional elegance." />
    </MaxWidthWrapper>
  );
};

export default IntroSection;
