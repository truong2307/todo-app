import storage from "./utitlity/storage.js"

const init = {
    todos: storage.get(),
    buttonActive: 'all',
    editPlace: null,
    filters:{
        all: () => true,
        active: todo => todo.complete === false,
        complete: todo => todo.complete === true,
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
    destroyItem(state, index){
        state.todos.splice(index, 1);
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
        state.buttonActive = activeBtnValue;
    },
    clearAllComplete(state){
        state.todos = state.todos.filter(todo => todo.complete === false);
        storage.set(state.todos);
    },
    selectEditItem(state, editIndex){
        state.editPlace = editIndex;
    },
    editItem(state, newTodo, index){
        if(newTodo === '')
        {
            this.destroyItem(state, index);
        }
        else{
            state.todos[index].title = newTodo;
            storage.set(state.todos);
        }    
        state.editPlace = null;
    },
    cancelEdit(state){
        state.editPlace = null;
    }
}

export default function reducer ( state = init, action, args){
    actions[action] && actions[action](state,...args)
    return state;       
}