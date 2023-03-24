let tasksArr = []

function handleCheck(id) {
  const liItem = document.getElementById(id)
  const objIdx = tasksArr.findIndex((item) => item.id === id)
  tasksArr[objIdx].isDone = liItem.checked
  liItem.classList.toggle('is-completed')
  handleFilter()
}

function ListItem(item) {
  const { task, isDone, id } = item
  const className = isDone ? 'is-completed' : '_'
  return `<li name="task-${id}">
      <label class="custom-checkbox">
        <input class=${className} id="${id}" type="checkbox" onclick="handleCheck(${id})" ${
    isDone ? 'checked' : ''
  }/>
        <span class="checkmark"></span>
        <p>${task}</p>
      </label>
    </li>`
}

function handleSubmit() {
  const input = document.getElementsByTagName('input')[0]
  if (input.value) {
    const id = tasksArr.length ? tasksArr[tasksArr.length - 1].id + 1 : 1
    tasksArr.push({
      id,
      task: input.value.trim(),
      isDone: false,
    })
    renderList()
    handleClear(input)
  }
}

function renderList(arr = tasksArr) {
  const listContainer = document.getElementById('task-list')
  listContainer.innerHTML = ''
  arr.forEach(
    (listItem) =>
      (listContainer.innerHTML = `${listContainer.innerHTML}${ListItem(
        listItem
      )}`)
  )
}

function handleClear(input) {
  input.value = ''
}

function handleDelete() {
  const newTasksArr = tasksArr.filter((item) => !item.isDone)
  tasksArr = newTasksArr
  renderList()
}

function handleFilter() {
  const filter = document.getElementsByTagName('select')[0]
  switch (filter.value) {
    case '*':
      renderList()
      break
    case 'done':
      const doneArr = tasksArr.filter((item) => item.isDone)
      renderList(doneArr)
      break
    case 'undone':
      const undoneArr = tasksArr.filter((item) => !item.isDone)
      renderList(undoneArr)
      break
    default:
      break
  }
}
