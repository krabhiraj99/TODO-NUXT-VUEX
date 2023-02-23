export const state = () => ({
    tasks: []
})

export const mutations = {
    ADD_TASK(state, task){
        state.tasks = [task,...state.tasks]
    },

    REMOVE_TASK(state, currTask){
        const index = state.tasks.findIndex((task) => {
            return task.id === currTask.id;
        })
        state.tasks.splice(index, 1);
    },

    TOGGLE_STATUS(state, currTask){
        const index = state.tasks.findIndex((task) => {
            return task.id === currTask.id;
        })
        state.tasks[index].done =  !state.tasks[index].done
    }

}