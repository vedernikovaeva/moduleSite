<template>
  <div id="app">
    <nav class="nav-bar">
      <router-link to="/groups">Groups</router-link> |
      <router-link to="/albums">Albums</router-link> |
      <router-link to="/songs">Songs</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    
    <router-view class="content-container" />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #e7eaf6; 
  color: #113f67; 
  line-height: 1.6;
}

#app {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.nav-bar {
  background-color: #38598b; 
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
}

.nav-bar a {
  margin: 0 10px;
  color: #e7eaf6; 
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-bar a:hover {
  color: #a2a8d3; 
}

.nav-bar a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

.content-container {
  background: #a2a8d3; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about {
  padding: 20px;
}

.about h1 {
  color: #113f67; 
}

.about p {
  line-height: 1.6;
  margin: 10px 0;
}
</style>
