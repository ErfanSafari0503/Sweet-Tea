import PropTypes from "prop-types";

Button.propTypes = {
  styles: PropTypes.string,
  children: PropTypes.string,
};

export default function Button({ styles, children }) {
  return <button className={styles}>{children}</button>;
}
