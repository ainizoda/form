import { ChangeEvent, FC, useState } from "react";
import { placesApi, Place } from "../api";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

export const Form: FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  const handleTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const response = await placesApi.get(value);
    setPlaces(response);
  };

  return (
    <div className="w-96 m-auto mt-8">
      <Autocomplete
        onInput={handleTextChange}
        onChange={handleTextChange}
        listboxProps={{ emptyContent: "Type something to search" }}
        placeholder="Search for places"
      >
        {places.map((place) => (
          <AutocompleteItem value={place.name} key={place.name}>
            {place.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};
