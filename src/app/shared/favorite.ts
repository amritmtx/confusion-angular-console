import { Dish } from './dish';
import { User } from './user';

export interface Favorite {
    _id: string;
    user: User;
    dishes: Dish[];
    createdAt: string;
    updatedAt: string;
}
