import html from '../core.js'
import commonConst from '../utitlity/commonConst.js'

function TodoItem({ todo, index, editPlace }){
    return html`
        <li class="${todo.complete && 'completed'} ${editPlace === index && 'editing'}" 
        ondblclick="dispatch('${commonConst.SELECT_EDIT_ACTION}', ${index})">
            <div class="view">
                <input class="toggle" 
                onchange="dispatch('${commonConst.TOGGLE_ACTION}', ${index})"
                type="checkbox" ${todo.complete && 'checked'}>
                <label>${todo.title}</label>
                <button onclick="dispatch('${commonConst.DESTROY_ITEM_ACTION}', ${index})" class="destroy"></button>
            </div>
            <input 
            onkeyup="event.keyCode === 13 && dispatch('${commonConst.EDIT_ITEM_ACTION}', this.value.trim(), ${index})
            || event.keyCode === 27 && dispatch('${commonConst.CANCEL_EDIT_ACTION}')"  
            class="edit" value="${todo.title}">
        </li>
    `
}

export default TodoItem