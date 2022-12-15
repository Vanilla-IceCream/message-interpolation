export default (tpl: string, data: any) => {
  if (tpl) return tpl.replace(/{([^}]+)?}/gm, (match, p1) => data[p1]);
  return tpl;
};
