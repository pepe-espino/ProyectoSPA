export function getFavorites() {
  const favs = localStorage.getItem('favorites');
  return favs ? JSON.parse(favs) : [];
}

export function addFavorite(id) {
  const favs = getFavorites();
  if (!favs.includes(id)) {
    favs.push(id);
    localStorage.setItem('favorites', JSON.stringify(favs));
  }
}

export function removeFavorite(id) {
  const favs = getFavorites().filter(favId => favId !== id);
  localStorage.setItem('favorites', JSON.stringify(favs));
}

export function isFavorite(id) {
  return getFavorites().includes(id);
}
