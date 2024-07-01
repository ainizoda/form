const MAX_RESPONSE_DELAY = 1000;

export type Place = {
  id: number;
  name: string;
};

const get = (query: string): Promise<Place[]> => {
  const data = [
    { id: 1, name: "Rudaki Avenue 13" },
    { id: 2, name: "Rudaki Avenue 14" },
    { id: 3, name: "Rudaki Avenue 15" },
    { id: 4, name: "Ayni Street 31" },
    { id: 5, name: "Ayni Street 32" },
    { id: 6, name: "Firdavsi Avenue 15" },
    { id: 7, name: "Firdavsi Avenue 16" },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      const matchedData = data.filter((place) =>
        place.name.toLowerCase().includes(query.toLowerCase())
      );
      resolve(matchedData);
    }, Math.random() * MAX_RESPONSE_DELAY);
  });
};

export const placesApi = { get };
