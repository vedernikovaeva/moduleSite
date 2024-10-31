<template>
    <div>
      <h2>Albums</h2>
      <input v-model="filterGroup" placeholder="Filter by group name" />
      <ul>
        <li 
          v-for="album in filteredAlbums" 
          :key="album.id"
        >
          {{ album.name }} - Group ID: {{ album.groupId }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        filterGroup: '',
      };
    },
    computed: {
      ...mapState(['albums']),
      filteredAlbums() {
        return this.albums.filter(album => 
          album.groupId.toString().includes(this.filterGroup)
        );
      },
    },
  };
  </script>
  