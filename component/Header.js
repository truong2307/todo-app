import html from '../core.js'
import commonConst from '../utitlity/commonConst.js'
 
function Header(){
    return html`
        <header class="header">
            <h1>todos list</h1>
            <input onkeyup="event.keyCode === 13 && dispatch('${commonConst.ADD_ACTION}', this.value.trim())"
                class="new-todo"
                placeholder="What needs to be done?" autofocus>
        </header>
    `
}

export default Header