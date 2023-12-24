<script setup lang="ts">
import { ref } from 'vue'
import {PostType} from "../types/posts.ts";
import Review from "./Review.vue";

const posts = ref<PostType[]>([])
posts.value.push(<PostType>{
  image_src: '1.jpg',
  title: 'Первый пост',
  descript: 'First post',
  description: 'Пост, с которого всё началось',
  date: new Date(2023,0,1),
  review: {text: ''},
  compact: true,
})
posts.value.push(<PostType>{
  image_src: '2.jpg',
  title: 'Второй пост',
  descript: 'Second post',
  description: 'Пост - продолжение',
  date: new Date(2023,1,1),
  review: {text: ''},
  compact: true,
})
posts.value.push(<PostType>{
  image_src: '4.jpg',
  title: 'Очередной пост',
  descript: 'Next post',
  description: 'Пошло-поехало',
  date: new Date(2023,1,10),
  review: {text: ''},
  compact: true,
})
posts.value.push(<PostType>{
  image_src: '8.jpg',
  title: 'Последний (',
  descript: 'Finish ребята',
  description: 'Пост, которым всё закончилось',
  date: new Date(2023,11,25),
  review: {text: ''},
  compact: true,
})
</script>

<template>
  <h1>Список постов</h1>
  <ul>
    <li v-for="(post,idx) in posts" :key="idx" @click="post.compact = !post.compact">
        <img :src="'/src/assets/Posts/imgs/'+post.image_src" alt="Изображение"/>
        <div class="content">
          <div class="date" v-if="!post.compact">{{post.date.toLocaleDateString('ru-RU')}}</div>
          <h2>{{post.title}}</h2>
          <p class="descript">{{post.descript}}</p>
          <p v-if="!post.compact">{{post.description}}</p>
          <div class="review">
            <Review v-if="!post.compact" :review="post.review" :level="0"/>
          </div>
        </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
* {
  //border: 1px solid grey;
}
h1 { color: #535bf2; }
h2 { color: darkcyan; }
ul {
  list-style: none;

  li {
    display: grid;
    grid-template-columns: 330px auto;
    grid-column-gap: 10px;
    border: 1px solid grey;
    margin: 10px 0;
    img {
      padding: 5px;
    }
  }
}
.review {
  text-align: left;
}
.date {
  text-align: right;
  font-size: .8rem;
}
.descript {
  text-align: left;
  background-color: aliceblue;
}
</style>
