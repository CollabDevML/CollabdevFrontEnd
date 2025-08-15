import { Enumerations } from "../enums/enums";

export interface ResponseAdmins {
    id: number;
    prenom: string;
    nom: string;
    email: string;
    role: Enumerations.Role
}