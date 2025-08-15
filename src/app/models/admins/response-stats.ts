export interface ResponseStats {
    adminsCount: number;
    usersCount: {
        contributeurs: number;
        gestionnaires: number;
        porteursProjet: number;
    };
    ideasCount: number;
    badgesCount: number;
    projectsCount: {
        inProgress: number;
        stoped: number;
        finished: number
    }
}