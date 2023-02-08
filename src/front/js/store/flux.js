const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      currentUserEmail: "",
    },
    actions: {
      getCurrentUserEmail: async () => {
        const response = await fetch(
          "https://3001-4geeksacade-reactflaskh-y7dho6eaapi.ws-eu86.gitpod.io/api/user",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        console.log(data.email);
        if (response.ok) setStore({ currentUserEmail: data.email });
      },
    },
  };
};

export default getState;
