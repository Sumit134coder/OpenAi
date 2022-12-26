export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4919ec3d94mshc5986b5245062b2p1ee1acjsn4bd7dddfb4b4',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '4919ec3d94mshc5986b5245062b2p1ee1acjsn4bd7dddfb4b4',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
