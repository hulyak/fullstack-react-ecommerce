import PropTypes from "prop-types";

export default function Page({ children }) {
  return (
    <div>
      <h2>Im page</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
