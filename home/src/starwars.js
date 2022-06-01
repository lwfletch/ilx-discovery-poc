const API_SERVER = "https://swapi.dev/api"

export const getStarwarsPeople = () => {
    fetch(`${API_SERVER}/people`).then((res) => res.json()).then((json) => json.results);
}
    

export const getStarwarsPeopleById = (id) =>
    fetch(`${API_SERVER}/people/${id}`).then((res) => res.json())
