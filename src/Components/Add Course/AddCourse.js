import { useState } from "react";
import "./AddCourse.css";

const AddCourse = (props) => {
  const [addedCourse, setCourse] = useState("");
  const { addCourse } = props;

  const handleChange = (e) => {
    setCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addedCourse !== "") addCourse(addedCourse);
  };

  return (
    <form id="addCourseForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="addCourseTxtBox"
        id="addCourseTxtBox"
        onChange={handleChange}
      />
      <input type="submit" value="Add Course" id="addCourseBut" />
    </form>
  );
};

export default AddCourse;
