export const getUsuarioStorage = () => {
  return {
    escritorio: localStorage.getItem("escritorio"),
    agente: localStorage.getItem("agente")
  };
};

export const setUsuarioStorage = ({ agente, escritorio }) => {
  localStorage.setItem("agente", agente);
  localStorage.setItem("escritorio", escritorio);
};
