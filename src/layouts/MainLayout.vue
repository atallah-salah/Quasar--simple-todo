<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Quasar simple todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
<style lang="sass">
.q-header
  background-color: $secondary
  color: black
  font-size: 30px
  font-weight: 500
  padding: 10px

.q-toolbar__title
  font-size: 28px
  font-weight: bolder

.q-page-container
  background-color: $primary
</style>
