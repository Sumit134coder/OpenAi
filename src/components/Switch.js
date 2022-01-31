import { useState } from 'react';
import { Switch as Toggle } from '@headlessui/react';

function Switch({ defaultValue = false, onChange = () => {} }) {
  const [enabled, setEnabled] = useState(defaultValue);

  const handleChange = () => {
    onChange(!enabled);
    setEnabled(!enabled);
  };

  return (
    <Toggle
      checked={defaultValue}
      onChange={handleChange}
      className={`
      ${enabled ? 'bg-primary-500' : 'bg-white'}
      relative inline-flex transition-colors ease-in-out duration-200 items-center
      h-[17px] w-[32px] rounded-full border-2 border-primary-500
      `}
    >
      <span className="sr-only">action</span>
      <span
        className={`${
          enabled ? 'translate-x-[16.5px] bg-white' : 'translate-x-[1.5px] bg-primary-500'
        } inline-block w-[10.5px] h-[10.5px] transform rounded-full transition-transform ease-in-out duration-200`}
      />
    </Toggle>
  );
}

export default Switch;
