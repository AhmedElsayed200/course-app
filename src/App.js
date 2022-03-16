import { useState } from "react";
import ShowItems from "./Components/Edit and Delete Courses/EditDelCourses";
import AddCourse from "./Components/Add Course/AddCourse";
import "./App.css";

function App() {
  const [courseItems, setItems] = useState(["HTML", "CSS", "JavaScript"]);

  const addCourse = (ele) => {
    const beforeItems = courseItems;
    setItems([...beforeItems, ele]);
  };

  const updateCourse = (ele, index) => {
    const txtBox = document.getElementById(`txtBox${index}`);
    const updatedItems = [...courseItems];
    updatedItems[index] = ele;
    txtBox.setAttribute("readOnly", true);

    // without calling the component while editing a course, the new courseItems won't pass again to
    // the ShowItems component to be rendered, also the state has been updated
    // to sum up [App component won't render ShowItems component if an element value changed]
    // App acctually doesn't feel that something (state) has changed
    setItems(
      updatedItems,
      <ShowItems
        courseItems={courseItems}
        delCourse={deleteCourse}
        editCourse={editCourse}
        updateCourse={updateCourse}
      />
    );
  };

  const editCourse = (index) => {
    const txtBox = document.getElementById(`txtBox${index}`);
    const editDelBut = document.getElementById(`editDelBut${index}`);
    const updateBut = document.getElementById(`updateBut${index}`);
    txtBox.removeAttribute("readOnly");
    txtBox.classList.add("onfocus");
    txtBox.focus();
    editDelBut.classList.add("hide");
    updateBut.classList.remove("hide");
  };

  const deleteCourse = (index) => {
    const beforeItems = courseItems;
    const updatedItems = beforeItems.filter((ele, i) => {
      return index !== i;
    });
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <h1>Add Courses</h1>
      <AddCourse addCourse={addCourse} />
      <ShowItems
        courseItems={courseItems}
        delCourse={deleteCourse}
        editCourse={editCourse}
        updateCourse={updateCourse}
      />
    </div>
  );
}

export default App;
