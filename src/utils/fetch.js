// Creating a generic function
// so that we can handle error at one place

export const fetchFromNetwork = url => {
  return fetch(url)
    .then(response => response.json())
    .catch(err => console.error(err));
};
