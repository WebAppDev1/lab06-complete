'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const playlistStore = {

  store: new JsonStore('./models/playlist-store.json', { playlistCollection: [] }),
  collection: 'playlistCollection',

  //updated
  getAllPlaylists() {
    return this.store.findAll(this.collection);
  },
  
  //updated
  getPlaylist(id) {
    return this.store.findOneBy(this.collection, (collection => collection.id === id));
  },
  
  //updated
  removeSong(id, songId) {
    const arrayName = "songs";
    this.store.removeItem(this.collection, id, arrayName, songId);
  },
  
  //updated
  removePlaylist(id) {
    const playlist = this.getPlaylist(id);
    this.store.removeCollection(this.collection, playlist);
  },
  
  //added
  removeAllPlaylists() {
    this.store.removeAll(this.collection);
  },
  
  //updated
  addPlaylist(playlist) {
    this.store.addCollection(this.collection, playlist);
  },
  
  //updated
  addSong(id, song) {
    const arrayName = "songs";
    this.store.addItem(this.collection, id, arrayName, song);
  },

};

export default playlistStore;