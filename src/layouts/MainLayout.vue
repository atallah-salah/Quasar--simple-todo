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
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
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

.fade-leave-active
  transition-duration: 0.3s
  transition-property: opacity
  transition-timing-function: ease-in-out

.fade-enter
  transition-duration: 0.3s
.fade-leave-active
  opacity: 0.1

</style>
