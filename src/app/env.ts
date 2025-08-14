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


  public static PROJET: string =
    Env._env.apiUrl + 'gestionnaires/projets';


  public static TACHE: string =
    Env.INSCRIPTION_URL + '/gestionnaires/projets/taches';

  public static PROJET_GESTIONNAIRE: string =
    Env._env.apiUrl + 'gestionnaires/';


  public static IDEEPROJETLISTE: string =
    Env.INSCRIPTION_URL + '/idees-projet';
  public static LOGIN_URL: string = Env._env.authUrl + '/authentification';

  public static UPLOAD_URL: string = Env._env.apiUrl + 'upload';

  //urls pour recupérer les données d'un gestionnaire
  public static GET_GESTIONNAIRE: string = Env._env.apiUrl + 'utilisateurs/gestionnaires'

  //urls pour accepter/refuser une demande de contribution
  public static MODIFIER_EST_ACCEPTEE: string = Env._env.apiUrl + 'gestionnaires/projets/demandes-contribution'
}
