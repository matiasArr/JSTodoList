export default class AddTodo{
    constructor() {
        this.addBtn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
    }
    onClick(callback) {
        this.addBtn.onclick = () => {
            if (title.value === '' || description.value === '') {
                //elimina el texto (d-none) de la class del alert
                //alert.classList.remove('d-none');
                //alert.innerText = 'Title and Description are required';
                console.error('incorrecto');
            }else{
                callback(this.title.value, this.description.value);
            }
        }
    }
}