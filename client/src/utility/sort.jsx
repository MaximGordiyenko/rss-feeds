export const sortFeedsByTitle = (feeds) => {
  return [...feeds].sort((a, b) => a.title.localeCompare(b.title));
};

export const sortFeedsDate = (feeds) => {
  return [...feeds].sort((a, b) => new Date(a.pubdate) - new Date(b.isodate));
};
