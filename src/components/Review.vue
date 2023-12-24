<script setup lang="ts">
import {ReviewType} from "../types/posts.ts";
// import {onUnmounted} from "vue";

const prop = defineProps<{ review: any, level: number }>()
// console.log(prop.review, prop.level)
if (prop.review && prop.review.answer === undefined) prop.review.answer = <ReviewType>{text: ''}
// console.log(prop.review)
/*onUnmounted(() => {
  if (prop.review) prop.review.answer = undefined
})*/
</script>

<template>
  <form :style="{marginLeft: level*20+'px'}">
    <textarea v-model="review.text" @click.stop.prevent/>
  </form>
  <Review v-if="review.text.length" :review="review.answer" :level="level+1"/>
</template>

<style scoped lang="scss">
textarea {
  width: 400px;
  height: 100px;
}
</style>