import html from '../core.js'
import {connect} from '../store.js'
import commonConst from '../utitlity/commonConst.js'

function Footer({todos, filters, buttonActive}){
    if(todos.length > 0){
        const keyOfFiltersArr = Object.keys(filters);
        return html`
        <footer class="footer">
            <span class="todo-count">
            <strong>
                ${todos.filter(todo => todo.complete === true).length}
            </strong> item left</span>
            <ul class="filters">
                
                ${keyOfFiltersArr.map(key => html`
                    <li>
                        <a onclick="dispatch('${commonConst.ACTIVE_BUTTON_ACTION}', '${key}')" class="${buttonActive === key && 'selected'}" 
                        href="#">
                        ${key[0].toUpperCase() + key.slice(1, key.length)}
                    </a>
                        
                    </li>
                `)}
            </ul>

            ${todos.some(todo => todo.complete === true) && html`
            <button onclick="dispatch('${commonConst.CLEAR_ALL_COMPLETE_ACTION}')" class="clear-completed">Clear completed</button>
            `}
        </footer>
    `
    }
}

export default connect()(Footer)