export const httpError = (error: number): string => {
  if (error >= 500 && error < 600) {
    return 'Ocurrió algo inesperado de nuestro lado. Si esto persiste, por favor contacta al equipo de soporte.';
  }

  switch (error) {
    case 400:
      return 'No pudimos procesar tu petición con la información que nos enviaste. Por favor, corrige la información de la petición e intenta enviarla nuevamente.';
    case 401:
      return 'Usuario o contraseña incorrectos. Por favor, verifica tus credenciales de acceso';
    case 403:
      return 'Lo sentimos, no cuentas con los permisos suficientes para acceder a este contenido. Ponte en contacto con tu asesor si consideras que esto es un error.';
    case 404:
      return 'El contenido que solicitas no está disponible o fue eliminado.';
    case 409:
      return 'Lo sentimos, de momento no podemos guardar los cambios de la manera que lo estás intentando.';
    default:
      return 'Error desconocido. Por favor, ponte en contacto con el equipo de soporte.';
  }
};
