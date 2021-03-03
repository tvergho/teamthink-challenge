const stripPhone = (phone, noCountryCode) => {
  let strippedPhone = phone;
  strippedPhone = strippedPhone.replace(' ', '');
  strippedPhone = strippedPhone.replace('(', '');
  strippedPhone = strippedPhone.replace(')', '');
  strippedPhone = strippedPhone.replace('-', '');
  return noCountryCode ? strippedPhone : `+1${strippedPhone}`;
};

const formatPhone = (newText, prevPhone) => {
  const isnum = /^\d+$/.test(stripPhone(newText).slice(1));
  if (!isnum) return prevPhone;

  const strippedPhone = stripPhone(newText, true);
  if (strippedPhone.length > 10) {
    return newText.slice(0, 14);
  }

  let formattedPhone = strippedPhone;
  if (newText.length >= 3 && (newText.length > prevPhone.length || prevPhone.length > 6)) {
    formattedPhone = `(${formattedPhone}`;
    formattedPhone = `${formattedPhone.slice(0, 4)}) ${formattedPhone.slice(4, formattedPhone.length)}`;
  }
  if (newText.length >= 9 && (newText.length > prevPhone.length || prevPhone.length > 10)) {
    formattedPhone = `${formattedPhone.slice(0, 9)}-${formattedPhone.slice(9, formattedPhone.length)}`;
  }
  return formattedPhone;
};

export { stripPhone, formatPhone };
