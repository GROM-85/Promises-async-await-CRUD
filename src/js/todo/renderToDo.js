export const createNewTaskElement = ({ title,id }) => {
    return ` <li id="${id}">
          <input type="checkbox" />
          <label>${title}</label>
          <input class="edit-input" type="hidden" value="${title}"/>
          <button class="edit" data-action="edit">Edit</button>
          <button class="delete" data-action="delete">Delete</button>
        </li>`;
  };