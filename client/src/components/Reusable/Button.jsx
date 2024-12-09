import PropTypes from "prop-types";

Button.propTypes = {
  styles: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.any,
};

export default function Button({ styles, children, onClick }) {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
