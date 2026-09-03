import { Link } from "react-router-dom";

const ActionButton = ({to, icon: Icon, text }) => {
  return (
    <Link
      to={to}
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-md
        bg-primary
        px-4
        py-2.5
        text-sm
        font-medium
        text-white
        shadow-sm
        transition-all
        hover:bg-primary-dark
        hover:shadow-md
        active:scale-[0.98]
      "
    >
      {Icon && <Icon size={18} strokeWidth={1.8} />}
      {text}
    </Link>
  );
};

export default ActionButton;
