export default function checkFovorite(favorites, story) {
    return favorites.some(favorite => favorite.id === story.id);
}