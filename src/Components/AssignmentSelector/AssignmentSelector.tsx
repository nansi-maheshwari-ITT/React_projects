import { useState } from "react";
import { GlobalStyle } from "../../Styles/GlobalStyle";
import CounterAssignment from "../../Screens/CounterAssignment";
import FormAssignment from "../../Screens/FormAssignment";
import StatusCheckerAssignment from "../../Screens/StatusCheckerAssignment";
import AssignmentMenu from "../../Screens/AssignmentMenu";

const AssignmentSelector = () => {
  const [activeScreen, setActiveScreen] = useState<string>("home");

  const handleMenuSelection = (selectedScreen: string) => {
    setActiveScreen(selectedScreen);
  };

  return (
    <>
      <GlobalStyle />
      {activeScreen === "home" && (
        <AssignmentMenu handleMenuSelection={handleMenuSelection} />
      )}
      {activeScreen === "counterScreen" && (
        <CounterAssignment handleMenuSelection={handleMenuSelection} />
      )}
      {activeScreen === "formScreen" && (
        <FormAssignment handleMenuSelection={handleMenuSelection} />
      )}
      {activeScreen === "statusCheckerScreen" && (
        <StatusCheckerAssignment handleMenuSelection={handleMenuSelection} />
      )}
    </>
  );
};

export default AssignmentSelector;
