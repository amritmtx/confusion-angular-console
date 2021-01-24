import { Favorite } from './favorite';

export interface FavoriteExists {
    exists: boolean;
    favorites: Favorite;
}
