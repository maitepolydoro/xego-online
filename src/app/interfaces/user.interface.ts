import { Roles } from '../enums/roles';
import { ICompany } from './company.interface';

export interface IUser {
    id: string;
    actions?: any;
    name: string;
    job_description?: string;
    imageSrc?: string;
    email?: string;
    role?: Roles;
    company?: ICompany;
    active?: boolean;
    create_date?: Date;
}