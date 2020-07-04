<template>
  <q-page class="flex flex-center">
    <div class="container">
      <div class="headers">
        <h3>The way to get things done</h3>
        <h4>Manage your tasks online</h4>
        <h5>Simple, agile task management</h5>
        <p>for everybody</p>
      </div>

      <router-link to="/todos" class="router-link">
        <q-btn class="manage-tasks-button" label="Manage Tasks" />
      </router-link>
    </div>
  </q-page>
</template>

<script>

export default {

}
</script>

<style lang="sass" scoped>
.container
  height: 600px
  width: 90%
  max-width: 1000px
  border-radius: 18px
  padding: 20px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-evenly
  background-color: #e8e8e8

.manage-todos-button
  width: 50%
  background-color: white

.headers *
  margin: 10px
  text-align: center

.router-link
  text-decoration: none

.manage-tasks-button
  background-color: #ffb700
  color: black
</style>
