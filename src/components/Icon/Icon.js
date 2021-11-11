import * as Icons from "../../icons";

const Icon = ({ type, className = "", onClick, ...rest }) => {
  const iconJsx = Icons[type];
  if (!iconJsx) {
    return null;
  }
  return (
    <span className={`icon ${className}`} onClick={onClick}>
      {iconJsx({ ...rest })}
    </span>
  );
};

export default Icon;
