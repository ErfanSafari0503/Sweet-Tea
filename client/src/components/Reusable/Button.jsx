import PropTypes from "prop-types";

Button.propTypes = {
  styles: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

function handlePreventDefault(e) {
  e.preventdefault();
}

export default function Button({
  styles,
  children,
  onClick = handlePreventDefault,
}) {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
