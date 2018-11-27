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
      <tbody class="article-body">
        <tr v-for="article in articles" v-bind:key="article.id">
          <td data-label="Title"> {{ article.title }} </td>
          <td data-label="Content"> {{ article.shortContent }} </td>
          <td data-label="Author"> {{ article.author }} </td>
          <td data-label="Email"> {{ article.email }} </td>
          <td data-label="Updated"> {{ article.updatedDate }} </td>
          <td data-label="ViewCount"> {{ article.viewCount }} </td>
          <td data-label="Actions">
            <span v-bind:data-id="article.id" data-action="actionView" class="action"> View </span>
            <span v-bind:data-id="article.id" data-action="actionEdit" class="action"> Edit </span>
            <span v-bind:data-id="article.id" data-action="actionDelete" class="action">
              Delete
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <div class="article-number-select">
        <button class="pagination-label-btn">{{ numberOfListLabel }}</button>
        <div class="dropdown-content">
            <p
              v-for="pagingValue in pagingValues"
              :key="pagingValue"
              :data-index="pagingValue"
              data-action="actionDropdown">
              {{ pagingValue }}
            </p>
        </div>
      </div>
      <div class="article-pagination">
        <a
          v-for="paginationItem in paginationItems"
          :key="paginationItem"
          :data-index="paginationItem"
          data-action="actionPagination">
          {{ paginationItem }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import articles from '../core/SeedDB';
import { getSubString } from '../core/Util';

export default {
  name: 'list',
  data() {
    const articleData = articles.map((article) => {
      const newArticle = article;
      newArticle.shortContent = getSubString(article.content);
      newArticle.author = article.author;
      newArticle.email = article.email;
      newArticle.title = article.title;
      newArticle.content = article.content;

      return newArticle;
    });
    return {
      numberOfList: 2,
      pagingValues: [1, 2, 3, 5, 7, 9],
      articles: articleData,
    };
  },
  computed: {
    paginationItems() {
      const paginationItems = [];

      if (this.articles && this.numberOfList) {
        const numberOfPaging = Math.ceil(this.articles.length / this.numberOfList);

        for (let i = 0; i < numberOfPaging; i += 1) {
          paginationItems.push(i + 1);
        }
      }

      return paginationItems;
    },
    numberOfListLabel() {
      return `Number of Items: ${this.numberOfList}`;
    },
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
