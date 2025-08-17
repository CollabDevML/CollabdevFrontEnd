import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const contributeurGuardGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem("user_role");
  const router = inject(Router);
  if (role === "CONTRIBUTEUR") {
    return true;
  } else {
    router.navigate(["login"]);
    return false;
  }
};
