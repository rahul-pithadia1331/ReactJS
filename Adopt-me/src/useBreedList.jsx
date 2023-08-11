import FetchBreedList from "./FetchBreedList";
import { useQuery } from "@tanstack/react-query";

const useBreedList = (animal) => {
  const results = useQuery(["breeds", animal], FetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
};

export default useBreedList;
