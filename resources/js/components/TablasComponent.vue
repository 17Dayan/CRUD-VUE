<template>
    <div class="justify-center w-full max-w-6xl mx-auto   p-5 items-center">
        <div v-for="task in tasks" :key="task.id" class="flex justify-content-center p-2 border-b-2 border-gray-300 my-2">
           <input type="checkbox">
           <p class="mx-2 mt-1 text-gray-900">{{ task.todo }}</p>
            
           <div class="ml-auto flex">
            <router-link :to= "'/edit/'+task.id">
                <svg class="h-8 w-8 text-emerald-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg>
            </router-link>

            <form >
              <Button type="submit">
                <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
              </Button>

            </form>

           </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            tasks: []
        }
        
    },
    created(){
        axios.get('/tasks').then(response => this.tasks = response.data).catch();

    }
}
</script>

