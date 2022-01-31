import { AiFillCheckCircle, AiFillCloseCircle, AiFillExclamationCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

const customTypes = {
  success: {
    color: 'text-green-500',
    icon: AiFillCheckCircle,
  },
  error: {
    color: 'text-red-500',
    icon: AiFillCloseCircle,
  },
  info: {
    color: 'text-amber-500',
    icon: AiFillExclamationCircle,
  },
};

function notification({ type = 'info', title, description }) {
  const Icon = customTypes[type].icon;
  const { color } = customTypes[type];

  return toast(
    <div className="flex">
      <div className="w-14">
        <Icon className={`${color} w-7 h-7`} />
      </div>
      <div>
        <div className={`font-sans font-medium ${color}`}>
          {title}
        </div>
        <div className="text-sm font-sans">{description}</div>
      </div>
    </div>,
  );
}

export default notification;
