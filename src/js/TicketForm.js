/**
 *  Класс для создания формы создания нового тикета
 * */

// Пока пустой закоментирую

export default class TicketForm {
  form() {
    const body = document.querySelector('body');
    const modal = document.createElement('div');
    modal.insertAdjacentHTML('afterbegin', '<div class="title">Добавить тикет</div>');
    modal.classList.add('modal-add');
    body.appendChild(modal);

    const modalAdd = document.querySelector('.modal-add');

    const divForm = document.createElement('div');
    divForm.classList.add('div-form');
    const formAdd = document.createElement('form');
    formAdd.classList.add('form');

    const divButton = document.createElement('div');
    divButton.classList.add('div-button');
    divButton.insertAdjacentHTML('afterbegin', '<button class="btn-ok">Ok</button>');
    divButton.insertAdjacentHTML('afterbegin', '<button class="btn-cancel">Отмена</button>');
    formAdd.appendChild(divButton);
    formAdd.insertAdjacentHTML('afterbegin', '<input type="text" class="dd" name="name" /><br />');
    formAdd.insertAdjacentHTML('afterbegin', '<label for="d">Подробное описание</label><br />');
    formAdd.insertAdjacentHTML('afterbegin', '<input type="text" class="d" name="name" /><br />');
    formAdd.insertAdjacentHTML('afterbegin', '<label for="d">Краткое описание</label><br />');
    divForm.appendChild(formAdd);

    modalAdd.appendChild(divForm);
  }
}
