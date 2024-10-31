<template>
    <div>
      <h3>{{ group.name }}</h3>
      <button @click="$emit('delete', group.id)">Delete Group</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      group: Object,
    },
  };
  </script>
  