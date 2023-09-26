const checkboxes = document.querySelectorAll(".task-checkbox");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    const taskItem = checkbox.nextElementSibling;
    taskItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
    taskItem.style.color = checkbox.checked ? "gray" : "initial";
  });
});
