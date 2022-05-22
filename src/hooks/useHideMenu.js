import { useContext, useEffect } from "react";
import { UIContext } from "../contexts/UIContext";

export const useHideMenu = ({ ocultar = false }) => {
  const { showMenu, hideMenu } = useContext(UIContext);

  useEffect(() => {
    if (ocultar) hideMenu();
    else showMenu();
  }, [showMenu, hideMenu, ocultar]);
};
