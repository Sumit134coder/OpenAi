const isUserLoggedIn = () => localStorage.getItem('token');

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const fixedDigitNumber = (num, digits = 4) => (num).toLocaleString('en-US', { minimumIntegerDigits: digits, useGrouping: false });

const formatUSPhoneNumber = (phoneNumberString) => {
  const cleaned = (`${phoneNumberString}`).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
};

const timezonesList = [
  { name: 'Eastern Standard Time (EST)', value: '1' },
  { name: 'Central Standard Time (CST)', value: '2' },
  { name: 'Pacific Standard Time (PST)', value: '3' },
  { name: 'Mountain Standard Time (MST)', value: '4' },
  { name: 'Hawaii–Aleutian Standard Time (HST)', value: '5' },
  { name: 'Alaska Standard Time (AKST)', value: '6' },
];

const gendersList = [
  { name: 'Male', value: 'male' },
  { name: 'Female', value: 'female' },
  { name: 'Non-binary', value: 'non-binary' },
];

export {
  isUserLoggedIn,
  classNames,
  fixedDigitNumber,
  formatUSPhoneNumber,
  timezonesList,
  gendersList,
};
