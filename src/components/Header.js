import PropTypes from "prop-types";

const Header = ({ title, onAdd, showAdd }) => {
  const bgColor = () => {
    return { backgroundColor: showAdd ? "red" : "green" };
  };
  return (
    <header className="header d-flex justify-content-between align-items-center">
      <h1>{title}</h1>
      <button className="btn h-25 w-25" style={bgColor()} onClick={onAdd}>
        {showAdd ? "Close" : "Add"}
      </button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
