<template>
    <div>
      <h1 class="text-2xl text-center font-bold py-4 text-gray-800 bg-blue-400">CRUD</h1>
      <h2 class="text-2xl text-center font-bold py-4 text-gray-800 bg-blue-400">Usuarios</h2>
    
      <form class="bg-blue-500" method="post" v-on:submit.prevent="saveTask()">
        
        <div class="max-w-5xl w-full mx-auto justify-betwen">
            <div class="d-block flex px-2 py-4">
              <input type="text"placeholder="Nombre Usuario" name="todo" v-model="task"
               class="text-xl p-2 w-full border-b-2 border-blue rounded-lg mx-8" >
             </div>
          <div class="d-block flex px-2 py-4">
              <input type="text"placeholder="Apellido" name="todo" v-model="task2"
               class="text-xl p-2 mr-2 w-full border-b-2 border-blue rounded-lg" >
   
            
            </div>

            <div class="flex">
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