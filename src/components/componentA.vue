<template>
  <div class="content">
    <h1>Count Name {{ countTask }} - {{propsStatic}}, {{nameComponent}}</h1>
    <table>
      <th>Name</th>
      <th>Country</th>
      <th>People</th>
      <th></th>
      <tbody>
      <tr v-for="(todo,index) in listTodo" v-bind:key="index">
        <td @click="informationTask(index)">{{ todo.name }}</td>
        <td>{{ todo.country }}</td>
        <td><router-link :to="{name:'project-name',params:{name:todo.people}}">{{ todo.people }}</router-link></td>
        <td>
          <button @click="editTask(index)">Edit</button>
          <button @click="removeTask(index)">Remove</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="add-task">
      <input type="text" ref="nameTask" placeholder="Name" v-model="task.name"/>
      <input type="text" placeholder="Country" v-model="task.country"/>
      <input type="text" placeholder="People" v-model="task.people"/>
      <button @click="addTask">Add</button>
    </div>
  </div>
</template>

<script>

export default {
  el:'.content',
  inheritAttrs: false,
  props:{
    propsStatic:String,
    nameComponent:String
  },
  data() {
    return {
      listTodo: [
        {
          name: 'Vue JS',
          country: 'china',
          people: 'Who?',
          description: "Components are reusable instances with a name: in this case"
        },
        {
          name: 'React JS',
          country: 'America',
          people: 'facebook',
          description: "Components are reusable instances with a name: in this case"
        },
        {
          name: 'PHP',
          country: 'world',
          people: 'community',
          description: "Components are reusable instances with a name: in this case"
        }
      ],
      task: {name: '', country: '', people: ''}
    };
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    addTask() {
      if (this.task.name !== '') {
        let task = {...this.task};
        this.listTodo.push(task);
        this.task.name = '';
        this.task.country = '';
        this.task.people = '';
      }
      console.log(this.$route.params);
      console.log(this.$el);
    },
    removeTask(index) {
      this.listTodo = this.listTodo.filter((val, i) => i !== index);
    },
    editTask(index) {
      this.listTodo[index].name = 'edit_name'
    },
    informationTask(index){
      this.$emit('myEvent',this.listTodo[index]);
    },
    focusInput() {
      this.$refs.nameTask.focus();
    }
  },
  computed: {
    countTask() {
      return this.listTodo.length;
    }
  }
}
</script>

<style>
.content {
  margin: 0;
  padding: 0;
}

table {
  width: 100%;
  border: gray 1px solid;
}

th, td {
  border: aquamarine 1px solid;
}

.add-task {
  margin: 20px;
  display: inline-flex;
  justify-content: space-between;
}

.add-task input {
  margin: 5px;
  padding: 5px;
}
</style>
