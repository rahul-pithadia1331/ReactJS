import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Result from "./Result";
import useBreedList from "./useBreedList";
import FetchSearch from "./FetchSearch";
const ANIMALS = ["dog", "bird", "cat", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], FetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const obj = {
            location: formData.get("location") ?? "",
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">Location</label>
        <input id="location" placeholder="Location" />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          name="animal"
          onChange={(event) => {
            setAnimal(event.target.value);
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option key="--Select--">--Select--</option>
          {ANIMALS.map((animal) => {
            return <option key={animal}>{animal}</option>;
          })}
        </select>
        <label htmlFor="breed">Breed</label>
        <select id="breed" name="breed" disabled={!breeds.length}>
          <option key="--Select--">--Select--</option>
          {breeds.map((breed) => {
            return (
              <option key={breed} value={breed}>
                {breed}
              </option>
            );
          })}
        </select>
        <button>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
