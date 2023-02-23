<template>
  <div class="main__div">
    <div class="task__container">
      <div class="input__div">
        <input class="input__tag" type="text" placeholder="Type tasks" v-model="newTask" />
        <button class="add__button" @click="addTask">Add</button>

      </div>
      <div class="task__div">
        <Task
          v-for="(task, index) in $store.state.tasks"
          :key="index"
          :task="task"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      newTask: "",
      id:0,
    };
  },

  methods: {
    addTask() {
      const currTask = {
        id: this.id,
        task : this.newTask,
        done:false,
      }
      this.id++;
      if(this.newTask){
        this.$store.commit("ADD_TASK", currTask);
      }
      this.newTask = "";
    },
  },
};
</script>

<style>
.add__button {
  cursor: pointer;
  background-color: rgb(125, 226, 31);
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 6px 20px;
  margin-left: 20px;
}

.task__container{
  min-width: 500px;
}
.main__div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task__div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
}
.task__container{
  margin-top: 50px;
}
.input__tag{
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(125, 226, 31);
  padding-bottom: 10px;
  font-size: 16px;
  flex: 1;
}
.input__div{
  display: flex;
  justify-content: space-between;
}
</style>
