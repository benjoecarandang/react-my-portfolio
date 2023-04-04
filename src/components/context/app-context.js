import { createContext, useContext, useEffect, useMemo } from "react";
import { client } from "../utils/api-client";
import { FullPageSpinner } from "../../UI";
import { useQuery } from "react-query";

const AppContext = createContext();
AppContext.displayName = "AuthContext";

const bootstrapAppData = async () => {
  const portfolio = await client("projects.json");
  const resume = await client("resume.json");

  return {
    portfolio: portfolio,
    resume: resume
  };
};

const AppProvider = (props) => {
  const {
    data: appData,
    status,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    error
  } = useQuery({
    queryKey: ["portfolio"],
    queryFn: () => bootstrapAppData()
  });

  const value = useMemo(() => appData, [appData]);

  if (isLoading || isIdle) {
    return <FullPageSpinner />;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  if (isSuccess) {
    return <AppContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandle status: ${status}`);
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be wrapped around AppProvider.");
  }
  return context;
};

export { AppProvider, useAppContext };
