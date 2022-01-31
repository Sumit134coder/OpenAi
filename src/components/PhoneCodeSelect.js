import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { FiChevronDown } from 'react-icons/fi';
import countries from '../utils/countryCodes.json';

function PhoneCodeSelect({ onChange, showText, defaultValue = '+1' }) {
  const cntry = countries.find((cn) => cn.dial_code === defaultValue);
  const [selected, setSelected] = useState(defaultValue !== '+1' && cntry?.code ? cntry : { code: 'US' });

  const handleChange = (el) => {
    const country = countries.find((ele) => ele.code === el.target.value);
    if (country) {
      setSelected(country);
      if (onChange) onChange(country.dial_code);
    }
  };

  return (
    <div className="absolute h-fit inset-y-2.5 left-0 flex items-center">
      <label className="sr-only">
        Country
      </label>
      <div className="flex absolute w-16 justify-center items-end">
        {showText ? <div className="text-sm mr-1">{selected.code}</div> : <ReactCountryFlag countryCode={selected.code} svg className="mr-1" />}
        <FiChevronDown />
      </div>
      <select
        name="country"
        autoComplete="country"
        defaultChecked="US"
        className="opacity-0 w-16 focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
        onChange={handleChange}
      >
        {countries.map((el) => <option key={el.name} value={el.code}>{el.name}</option>)}
      </select>
    </div>
  );
}

export default PhoneCodeSelect;
