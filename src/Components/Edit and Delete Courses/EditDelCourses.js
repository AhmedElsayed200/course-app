import ShowUpdateCourses from "../Show and Update Courses/ShowUpdateCourses";
import "./EditDelCourses.css";

const ShowItems = (props) => {
  const { courseItems, delCourse, editCourse, updateCourse } = props;

  const row = courseItems.map((ele, index) => {
    return (
      /*The key is used by React to identify which items have changed, are added, or are removed and 
      should be stable. It's a bad idea to use the array index since it doesn't uniquely identify your 
      elements.*/
      <div className="course-item-row" key={Math.random() * 100}>
        <ShowUpdateCourses
          ele={ele}
          index={index}
          updateCourse={updateCourse}
        />
        <div className="edit-del-but" id={`editDelBut${index}`}>
          <button
            id={`editBut${index}`}
            className="edit-but"
            onClick={() => editCourse(index)}
          >
            Edit Course
          </button>
          <button
            id={`delBut${index}`}
            className="del-but"
            onClick={() => delCourse(index)}
          >
            Delete Course
          </button>
        </div>
      </div>
    );
  });

  return <div id="courseItemsContainer">{row}</div>;
};

export default ShowItems;
