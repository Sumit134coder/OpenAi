import { useState } from 'react';

function Select({
  options, type = 'simple', placeholder, onChange, defaultValue,
}) {
  if (defaultValue) {
    if (typeof defaultValue !== 'object') defaultValue = [defaultValue];
  } else defaultValue = [];

  const optionsMap = new Map();
  options.forEach((el) => optionsMap.set(el.value, el.name));

  const initialValue = new Set();
  defaultValue.forEach((value) => initialValue.add(value));
  const [selected, setSelected] = useState(initialValue);

  const handleChange = (el) => {
    const newValue = el.target.value;
    const temp = new Set(selected);
    if (type === 'multiple') {
      if (temp.has(newValue)) temp.delete(newValue);
      else temp.add(newValue);
    } else {
      temp.clear();
      temp.add(newValue);
    }
    setSelected(temp);
    if (onChange) onChange(Array.from(temp));
  };

  return (
    <select
      className={`${selected.size === 0 ? 'bg-light-400 border-transparent' : ''} form-input peer with-floating-label`}
      value="selected"
      onChange={handleChange}
    >
      <option className="hidden" value="selected">
        {selected.size > 0
          ? Array.from(selected).map((value) => optionsMap.get(value)).join(type === 'simple' ? '' : ', ')
          : placeholder}
      </option>
      {options.map((el) => (
        <option key={el.value} value={el.value} className={selected.has(el.value) ? 'bg-light-400' : ''}>
          {el.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
