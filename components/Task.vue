<template>
  <div class="task__item">
    <li :class="task.done ? 'task__item__text' : ''">
      {{ task.task }}
    </li>
    <div>
        <button @click="removeTask" class="remove__button">Remove</button>
        <button class="toggle__button" @click="toggleTask">Toggle</button>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  data() {
    return {
      taskList: this.$store.state.tasks,
    };
  },

  methods:{
    removeTask(){
        this.$store.commit("REMOVE_TASK", this.task);
    },
    toggleTask(){
        this.$store.commit("TOGGLE_STATUS", this.task);

    }
  }

};
</script>

<style>
.task__item{
    display: flex;
    margin: 10px;
    text-align: left;
    justify-content: space-between;
}
.task__item__text{
    margin-right: 10px;
    font-size: 20px;
}
.remove__button{
    cursor: pointer;
    background-color: rgb(211, 73, 18);
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 3px 10px;
}
.toggle__button{
  cursor: pointer;
    background-color: rgb(230, 151, 33);
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 3px 10px;
}
</style>
