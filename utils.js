//eliminar caracteres extraños, tildes, apostrefes y otros
export const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
