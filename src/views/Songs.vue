<template>
    <div>
      <h2>Songs</h2>
      <input v-model="songSearch" placeholder="Search for song" />
      <ul>
        <li v-for="album in filteredAlbums" :key="album.id">
          {{ album.name }} - Songs: {{ album.songs.join(', ') }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        songSearch: '',
      };
    },
    computed: {
      ...mapGetters(['getAlbumsContainingSong']),
      filteredAlbums() {
        return this.songSearch ? this.getAlbumsContainingSong(this.songSearch) : [];
      },
    },
  };
  </script>
  