import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const nameRef = useRef();
  const dateRef = useRef();

  const handleAddButtonClicked = (e) => {
    e.preventDefault();

    const todoName = nameRef.current.value;
    const dueDate = dateRef.current.value;

    addNewItem(todoName, dueDate);

    // clear inputs
    nameRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={nameRef} />
        </div>
        <div className="col-4">
          <input type="date" ref={dateRef} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
