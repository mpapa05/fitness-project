import { Timestamp } from "rxjs";

export interface Exercise {
    _id: number;
    name: string;
    description: string;
    category: string;
    image: string;
    video: string;
    status: string;
    muscleGroups: string[] | string;
    createdAt: Timestamp<string>;
    updatedAt: Timestamp<string>;
}
