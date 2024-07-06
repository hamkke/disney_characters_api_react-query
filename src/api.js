const API = 'https://disney_api.nomadcoders.workers.dev/characters';

export function fetchCharacters() {
  return fetch(API).then((response) => response.json());
}

export const fetchCharacterDetail = async (id) => {
  const response = await fetch(`${API}/${id}`);
  const json = await response.json();
  return json;
};
