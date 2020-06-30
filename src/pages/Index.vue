<template>
  <q-page class="flex flex-center">
    <ul>
      <li :key="index" v-for="(todo,index) in todos">{{todo.title}}</li>
    </ul>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'todos',
  created () {
    // fetch todos data
    this.getTodosData()
  },
  computed: {
    // get todos data from todos store
    ...mapGetters('todos', ['todos'])
  },
  methods: {
    ...mapActions({
      getTodosData: 'todos/getTodosData'
    })
  }
}
</script>
