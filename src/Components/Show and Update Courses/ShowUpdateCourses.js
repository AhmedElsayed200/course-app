import { useState } from "react";
import "./ShowUpdateCourses.css";

const ShowUpdateCourses = (props) => {
  const [courseItem, setItem] = useState("");
  const { ele, index, updateCourse } = props;

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  // default value (delete func work now since key is not the index) ! if using value (input is not editable)
  const handleSubmit = (e) => {
    e.preventDefault();
    const index = e.target.querySelector("input").getAttribute("index");
    const editBut = document.getElementById(`editBut${index}`);
    const delBut = document.getElementById(`delBut${index}`);
    const txtBox = document.getElementById(`txtBox${index}`);
    if (courseItem !== "") {
      updateCourse(courseItem, index);
      editBut.classList.remove("hide");
      delBut.classList.remove("hide");
      txtBox.classList.remove("onfocus");
    }
  };

  return (
    <form className="show-form" onSubmit={handleSubmit}>
      <input
        type="text"
        defaultValue={ele}
        name={`txtBox${index}`}
        id={`txtBox${index}`}
        className="show-txt-box"
        readOnly
        onChange={handleChange}
        index={index}
      />
      <input className="update-but hide" type="submit" value="Update Course" id={`updateBut${index}`} />
    </form>
  );
};

export default ShowUpdateCourses;
