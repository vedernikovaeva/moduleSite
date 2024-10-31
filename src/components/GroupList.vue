<template>
    <div>
      <h2>Groups</h2>
      <GroupItem 
        v-for="group in groups" 
        :key="group.id" 
        :group="group" 
        @delete="removeGroup"
      />
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  import GroupItem from './GroupItem.vue';
  
  export default {
    components: { GroupItem },
    computed: {
      ...mapState(['groups']),
    },
    methods: {
      ...mapMutations(['removeGroup']),
    },
  };
  </script>
  