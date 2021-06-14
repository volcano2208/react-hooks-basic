import React, {useState, useRef} from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const {onSubmit} = props;

  const [searchTerm, setSearchterm] = useState("");

  const typingTimeRef = useRef(null);

  function handleChangeSearch(e) {
    const value = e.target.value;
    setSearchterm(value);
    if (!onSubmit) return;
    if (typingTimeRef.current) {
      clearTimeout(typingTimeRef.current);
    }
    typingTimeRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  }

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleChangeSearch} placeholder="Search"/>
    </form>
  );
}

export default PostFiltersForm;
