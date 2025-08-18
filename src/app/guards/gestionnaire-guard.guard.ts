import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const gestionnaireGuardGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem("user_role");
  const router = inject(Router);
  if (role === "GESTIONNAIRE") {
    return true;
  } else {
    router.navigate(["login"]);
    return false;
  }
};
