import { defaultData } from "./data";

export const paginationSimulation = (activePage = 1) => {
  try {
    console.log('SIMULATION')
    const allPublications = defaultData;
    const skip = activePage > 1 ? (activePage - 1) * 5 : 0;
    const limit = activePage * 5;
    return allPublications.slice(skip, limit);
  } catch (error) {
    console.log({ error })
    return [];
  }
};
