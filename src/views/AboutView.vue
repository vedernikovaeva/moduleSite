<template>
  <div class="about">
    <h1>Довідник меломана</h1>
    <p>Ласкаво просимо до додатка, що допомагає знайти інформацію про улюблені групи, пісні та альбоми.</p>
    <p>Використовуйте меню для переходу до відповідних розділів.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped>
.about {
  background-color: #a2a8d3; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #113f67; 
}

.about h1 {
  color: #113f67; 
  font-size: 1.8em;
  margin-bottom: 10px;
}

.about p {
  line-height: 1.6;
  margin: 10px 0;
}
</style>
