import { HomeButtonProps } from "./HomeButtonPropsInterface";
import { HomeBtn } from "./HomeButtonStyle";

export const HomeButton: React.FC<HomeButtonProps> = ({
  handleMenuSelection,
}) => {
  return <HomeBtn onClick={() => handleMenuSelection(0)}>Home</HomeBtn>;
};
