export default (tpl, data) => {
  return tpl.replace(/{([^}]+)?}/gm, (match, p1) => data[p1]);
};
