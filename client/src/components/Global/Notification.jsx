import PropTypes from "prop-types";

Notification.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string,
};

//src="src/images/success-icon.svg"

export default function Notification({ icon, message }) {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="flex w-10/12 justify-between gap-4 items-center p-4 border-default rounded-xl shadow-md">
        <div>
          <img className="w-40  " src={icon} alt="" />
        </div>
        <div>
          <p className="text-sm opacity-60">{message}</p>
        </div>
      </div>
    </div>
  );
}
