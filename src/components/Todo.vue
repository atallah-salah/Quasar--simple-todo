<template>
    <div class="todo-container">
      <p>{{todo.title}}</p>
      <div class="todo-controls">
        add
      </div>
    </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>
<style lang="sass" scoped>
  .todo-container
    display: flex
    justify-content: space-between
    font-size: 20px
    padding: 10px
    padding-left: 20px
    border-bottom: #d6d6d6 solid 1px
</style>
