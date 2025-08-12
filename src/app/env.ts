export class Env {
  private static _env = {
    production: false,
    apiUrl: 'http://localhost:8180/',
    authUrl: 'http://localhost:8180',
  };
  // Les urls pour l'inscription des utilisateurs
  public static INSCRIPTION_URL: string = Env._env.apiUrl + 'utilisateurs';
  public static CREATE_CONTRIBUTEUR: string =
    Env.INSCRIPTION_URL + '/contributeurs';
  public static CREATE_GESTIONNAIRE: string =
    Env.INSCRIPTION_URL + '/gestionnaires';
  public static CREATE_PORTER_PROJET: string =
    Env.INSCRIPTION_URL + '/porteurs-projet';
  public static GETRECOMMANDATIONIDEEPROJET: string =
    Env._env.apiUrl + 'recommandations/idees-projet';
  public static GETRECOMMANDATIONPROJET: string =
    Env._env.apiUrl + 'recommandations/projets';
  public static LOGIN_URL: string = Env._env.authUrl + '/authentification';

  public static UPLOAD_URL: string = Env._env.apiUrl + 'upload';

  //urls pour recupérer les données d'un utilisateur gestionnaire
  public static GET_UTILISATEURGESTIONNAIRE: string = Env._env.apiUrl + 'utilisateurs'

  //urls pour accepter/refuser une demande de contribution
  public static MODIFIER_EST_ACCEPTEE: string = Env._env.apiUrl + 'gestionnaires/projets/demandes-contribution'

  //urls pour recupérer les données d'un gestionnaire
  public static GET_GESTIONNAIRE: string = Env._env.apiUrl + 'utilisateurs/gestionnaires'
}
