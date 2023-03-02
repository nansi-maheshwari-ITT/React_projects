import { HomeButtonProps } from "./HomeButtonPropsInterface";
import { HomeBtn } from "./HomeButtonStyle";

export const HomeButton: React.FC<HomeButtonProps> = ({
  handleMenuSelection,
}) => {
  return <HomeBtn onClick={() => handleMenuSelection("home")}>Home</HomeBtn>;
};
