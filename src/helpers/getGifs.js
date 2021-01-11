export const getGifs = async (categorie) => {
  const URL = `https://api.giphy.com/v1/gifs/search?limit=6&q=${encodeURI(
    categorie
  )}&api_key=ILMyIw8NSK1EvnhctbMglTd5k6XCDXn1`;
  try {
    const response = await fetch(URL);
    const { data } = await response.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;
  } catch (error) {
    alert(`Un error ha sucedido ${error}`);
  }
};
