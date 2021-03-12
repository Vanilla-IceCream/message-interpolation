export default (tpl, data) => {
  if (tpl) return tpl.replace(/{([^}]+)?}/gm, (match, p1) => data[p1]);
  return tpl;
};
