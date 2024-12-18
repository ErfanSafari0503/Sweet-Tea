import PropTypes from "prop-types";

Button.propTypes = {
  styles: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

function handlePreventDefault(e) {
  e.preventdefault();
}

export default function Button({
  styles,
  type = "button",
  children,
  onClick = handlePreventDefault,
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
