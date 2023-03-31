import { client } from "../utils/api-client";

const getPortfolio = () => {
  return client('projects.json');
};

export { getPortfolio };
