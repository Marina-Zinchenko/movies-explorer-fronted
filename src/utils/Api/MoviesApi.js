import { MOVIES_API_URL } from '../config/config';


//Проверка ответа от сервера
export const checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const getMovies = () => {
  return fetch(`${MOVIES_API_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => checkResponse(res))
}
 