import html from '../core.js'
import commonConst from '../utitlity/commonConst.js'

function TodoItem({ todo, index }){
    return html`
        <li class="${todo.complete && 'completed'}">
            <div class="view">
                <input class="toggle" 
                onchange="dispatch('${commonConst.TOGGLE_ACTION}', ${index})"
                type="checkbox" ${todo.complete && 'checked'}>
                <label>${todo.title}</label>
                <button onclick="dispatch('${commonConst.DESTROY_ITEM}', ${index})" class="destroy"></button>
            </div>
            <input class="edit" value="${todo.title}">
        </li>
    `
}

export default TodoItem