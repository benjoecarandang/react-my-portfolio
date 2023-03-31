import {
  createContext,
  useContext,
  useEffect,
  useMemo
} from "react";
import { useAsync } from "../hooks/use-async";
import { client } from "../utils/api-client";
import FullPageSpinner from "../../UI/FullPageSpinner";

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
    data,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData
  } = useAsync();

  useEffect(() => {
    run(bootstrapAppData());
  }, [run]);

  // const getPortfolio = useCallback(() => {
  //   authProvider.getPortfolio();
  // }, []);

  const value = useMemo(() => (data), [data]);

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
