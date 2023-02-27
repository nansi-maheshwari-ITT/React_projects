import { useState } from "react";
import { GlobalStyle } from "../../Styles/GlobalStyle";
import Assignment1 from "../../Screens/Assignment1/Assignment1";
import Assignment2 from "../../Screens/Assignment2/Assignment2";
import Assignment3 from "../../Screens/Assignment3/Assignment3";
import AssignmentMenu from "../../Screens/AssignmentMenu/AssignmentMenu";

const AssignmentDisplay = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  const handleMenuSelection = (selectedScreen: number) => {
    setActiveScreen(selectedScreen);
  };

  return (
    <>
      <GlobalStyle />
      {activeScreen === 0 && (
        <AssignmentMenu handleMenuSelection={handleMenuSelection} />
      )}
      {activeScreen === 1 && (
        <Assignment1 handleMenuSelection={handleMenuSelection} />
      )}
      {activeScreen === 2 && (
        <Assignment2 handleMenuSelection={handleMenuSelection} />
      )}
      {activeScreen === 3 && (
        <Assignment3 handleMenuSelection={handleMenuSelection} />
      )}
    </>
  );
};

export default AssignmentDisplay;
