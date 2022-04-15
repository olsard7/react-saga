export const getLatestNews = async (searchQuery) => {
  const request = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`
  );
  return await request.json();
};
