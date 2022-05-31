import { db } from "../../utils/firebase";
const showAllToDo = () => {};

const createToDo = (todo) => {
  return new Promise((resolve, reject) => {
    let doc = db.collection("allToDo").add(todo);
    console.log(doc);
    console.log("return");
  });
};

const updateToDo = (todo) => {};

const deleteToDo = (todo) => {};

export { showAllToDo, createToDo, updateToDo, deleteToDo };
