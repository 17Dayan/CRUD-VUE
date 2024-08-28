<template>
    <div>
      <h1 class="text-2xl text-center font-bold py-4 text-gray-800 bg-blue-400">edit user</h1>

    
      <form method="post" v-on:submit.prevent="saveTask()">
        
        <div class="bg-blue-500">
            <div class="d-block flex px-2 py-4">
              <input type="text"placeholder="Nombre Usuario" name="todo" v-model="task"
               class="text-xl p-2 mr-2 w-9/10 border-b-2 border-blue rounded-lg" >
             </div>
          <div class="d-block flex px-2 py-4">
              <input type="text"placeholder="Apellido" name="todo" v-model="task2"
               class="text-xl p-2 mr-2 w-9/10 border-b-2 border-blue rounded-lg" >
   
            
            </div>

            <div>
                <input type="submit" value="save" class="bg-purple-500 w-2/12 rounded-lg text-white font-bold">
            </div>
        </div>
           
            
      </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
      return {
        task: '',
        task2: ''
      }
    },
    methods: {
       saveTask(){
        axios.post('/tasks', {todo: this.task, }).then(response => {console.log(response)}).catch(error => {console.log(error.response)});
        this.task = '';
       },
    }
}
</script>