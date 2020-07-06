import { Roles } from '../enums/roles';


export interface IUser {
    name: string;
    jobDescription: string;
    email: string;
    role: Roles;
}