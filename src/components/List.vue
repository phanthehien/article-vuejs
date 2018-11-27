<template>
  <div>
    <div class="panelNew">
      <input class="new-article-btn" type="button" value="Create Article"/>
    </div>
    <table class="article-list">
      <thead>
      <th>Title</th>
      <th>Content</th>
      <th>Author</th>
      <th>Email</th>
      <th>Updated</th>
      <th>ViewCount</th>
      <th>Actions</th>
      </thead>
      <tbody class="article-body" v-for="article in articles" v-bind:key="article.id">
        <tr><td> {{ article.title }} </td></tr>
      </tbody>
    </table>

    <div class="pagination">
      <div class="article-number-select">
        <button class="pagination-label-btn"></button>
        <div class="dropdown-content">

        </div>
      </div>
      <div class="article-pagination">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
