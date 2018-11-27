export const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const getSubString = (text, length = 30) => {
  if (text) {
    return `${text.slice(0, length)}...`;
  }

  return text;
};

export const formatDate = (date) => {
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yy = date.getFullYear();

  return `${yy}-${mm}-${dd}`;
};
