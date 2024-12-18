import PropTypes from "prop-types";

Button.propTypes = {
  styles: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default function Button({
  styles,
  type = "button",
  children,
  onClick = () => {},
  isDisabled = false,
}) {
  return (
    <button
      className={styles}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
