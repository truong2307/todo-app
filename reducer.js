import storage from "./utitlity/storage.js"

const init = {
    todos: storage.get(),
    filter: 'all',
    buttonActive: 'all',
    filters:{
        all: () => true,
        active: todo => !todo.complete,
        complete: todo => todo.complete,
    }

}

const actions = {
    add(state, title){
        if(title)
        state.todos.push({
            title: title,
            complete: false
        })
        storage.set(state.todos);
    },
    toggle(state, index){
        const todoNeedChange = state.todos[index];
        todoNeedChange.complete = !todoNeedChange.complete
        storage.set(state.todos);
    },
    toggleAll(state, isCheckedAll){
        state.todos.forEach(todo => todo.complete = isCheckedAll);
        storage.set(state.todos);
    },
    activeBtn(state, activeBtnValue){
        state.buttonActive = activeBtnValue
    }
}

export default function reducer ( state = init, action, args){
    actions[action] && actions[action](state,...args)
    return state;       
}