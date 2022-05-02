import html from '../core.js'
import TodoItem from '../component/TodoItem.js'
import {connect} from '../store.js'
import commonConst from '../utitlity/commonConst.js'

 
function TodoList({todos, filters}){
    return html`
        <section class="main">
            <input onchange="dispatch('${commonConst.TOGGLE_ALL_ACTION}', this.checked)" 
            id="toggle-all" class="toggle-all" type="checkbox" 
            ${todos.every(todo => todo.complete === filters.all()) && 'checked'} >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos.map((todo, index) => TodoItem({todo, index}))}
            </ul>
        </section>
    `
}

export default connect()(TodoList) 