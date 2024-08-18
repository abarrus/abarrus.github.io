<template>
  <div id="app">
    <header>
      <h1>My Vue App</h1>
      <!-- You can add navigation or other header elements here -->
    </header>
    <main>
      <router-view></router-view> <!-- This is where routed components will be displayed -->
    </main>
    <footer>
      <p>&copy; 2024 My Vue App</p>
      <!-- You can add footer content here -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  // You can add data, methods, computed properties, etc., here
};
</script>

<style>
/* Add your global styles here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  background-color: #42b983;
  color: white;
  padding: 10px;
}
footer {
  background-color: #35495e;
  color: white;
  padding: 10px;
}
</style>
