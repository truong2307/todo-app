import storage from "./utitlity/storage.js"

const init = {
    todos: storage.get()

}

const actions = {
    add(state, title){
        if(title.length > 0)
        state.todos.push({
            title: title,
            complete: false
        })
        storage.set(state.todos)
    }
}

export default function reducer ( state = init, action, args){
    actions[action] && actions[action](state,...args)
    return state;       
}