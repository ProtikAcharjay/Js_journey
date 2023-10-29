<script setup>
import { ref, onMounted } from 'vue';
import { items } from './assets/data.js';
import cart from './components/cart.vue';
import inventory from './components/inventory.vue';
import navbar from './components/navbar.vue';

const item= ref([]);
//this ref will help to make a variable reactive.
let addcart=ref([
  {
    "id":101,
    "image":"http://dummyimage.com/171x169.png/5fa2dd/fffddf",
    "name":"Dirone Goeeeo",
    "price":"$84.61",
    "about":"Dirone Goeeeo is a talented player. Only for $84.61 Million doller only."
  }
]);

function addtocart_method(item) {
  addcart.value.push(item);
}


onMounted(() => {
  // item.value= [1,2,3]
  // console.log(item);
item.value=items
console.log(item);
  // console.log(items);
});


</script>

<template>
<navbar></navbar>

<div class="container" style="padding: 8px;">
<div class="row">
  <div class="col-sm-9">
    <inventory @data_to_parent="addtocart_method" :allplayers="item"></inventory>
  </div>
  <div class="col-sm-3">
    <cart :addcart="addcart"></cart>
  </div>
</div>
</div>
</template>

<style scoped></style>
