import React from "react";
import { UIProvider } from "./contexts/UIContext";
import RouterPage from "./pages/RouterPage";

const TicketApp = () => {
  return (
    <>
      <UIProvider>
        <RouterPage />
      </UIProvider>
    </>
  );
};

export default TicketApp;
