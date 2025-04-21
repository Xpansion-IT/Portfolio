import { AiFillCustomerService, AiFillCode, AiFillRobot } from "react-icons/ai";

export const services = [
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
