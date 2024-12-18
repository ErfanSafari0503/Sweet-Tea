import PropTypes from "prop-types";

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default function Input({
  type = "text",
  placeholder = "",
  className = "",
  id = "",
  name = "",
  value = "",
  onChange = () => {},
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
