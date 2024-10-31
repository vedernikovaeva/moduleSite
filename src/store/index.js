import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groups: [
      { id: 1, name: 'The Beatles' },
      { id: 2, name: 'Queen' },
      { id: 3, name: 'Led Zeppelin' },
    ],
    albums: [
      { id: 1, groupId: 1, name: 'Abbey Road', songs: ['Come Together', 'Something'] },
      { id: 2, groupId: 1, name: "Sgt. Pepper's Lonely Hearts Club Band", songs: ['Lucy in the Sky with Diamonds', 'A Day in the Life'] },
      { id: 3, groupId: 2, name: 'A Night at the Opera', songs: ['Bohemian Rhapsody', 'Love of My Life'] },
      { id: 4, groupId: 2, name: 'News of the World', songs: ['We Will Rock You', 'We Are the Champions'] },
      { id: 5, groupId: 3, name: 'Led Zeppelin IV', songs: ['Stairway to Heaven', 'Black Dog'] },
      { id: 6, groupId: 3, name: 'Physical Graffiti', songs: ['Kashmir', 'In My Time of Dying'] },
    ],
    songs: [
      'Come Together', 'Something', 'Lucy in the Sky with Diamonds', 'A Day in the Life',
      'Bohemian Rhapsody', 'Love of My Life', 'We Will Rock You', 'We Are the Champions',
      'Stairway to Heaven', 'Black Dog', 'Kashmir', 'In My Time of Dying'
    ],
  },
  mutations: {
    removeGroup(state, groupId) {
      state.groups = state.groups.filter(group => group.id !== groupId);
      state.albums = state.albums.filter(album => album.groupId !== groupId);
    },
    removeAlbum(state, albumId) {
      state.albums = state.albums.filter(album => album.id !== albumId);
    },
    removeSong(state, songName) {
      state.albums.forEach(album => {
        album.songs = album.songs.filter(song => song !== songName);
      });
    },
  },
  actions: {},
  getters: {
    getAlbumsByGroup: (state) => (groupId) => {
      return state.albums.filter(album => album.groupId === groupId);
    },
    getAlbumsContainingSong: (state) => (songName) => {
      return state.albums.filter(album => album.songs.includes(songName));
    },
  },
});

