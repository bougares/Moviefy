const formatDate = (date) => {
  const formatted = [
    `0${date.getDate()}`,
    `0${date.getMonth() + 1}`,
    `${date.getFullYear()}`,
    `0${date.getHours()}`,
    `0${date.getMinutes()}`
  ].map(component => component.slice(-2));

  return `${formatted.slice(0, 3).join('.')} ${formatted.slice(3).join(':')}`;
};

export default formatDate;
