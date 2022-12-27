export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3d2b43bee3msh8a5faba6247091fp15f390jsned1312f1c416',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '3d2b43bee3msh8a5faba6247091fp15f390jsned1312f1c416',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
