const getMyAge = (date) => {
  const currentYear = new Date().getFullYear();
  if (typeof date === 'string') {
    return currentYear - Number(date);
  } else if (typeof date === 'number') {
    return currentYear - date;
  } else if (date instanceof Date) {
    return currentYear - date;
  }
};

getMyAge(new Date(2009));
