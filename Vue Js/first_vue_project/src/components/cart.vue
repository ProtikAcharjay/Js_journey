<script setup>
import { ref, computed } from 'vue';
const {addcart} = defineProps(['addcart']);

const addcartRef = ref(addcart);

let total_price= computed(()=>{
 let total =0;
 addcartRef.value.array.forEach(element => {
  total += parseFloat(element.price)
 });
 return total
})
</script>

<template>
<ul class="list-group">
    <li class="list-group-item">
      <span class="item-name">Name</span>
      <span class="item-price">price</span>
    </li>
<hr>
    <li class="list-group-item" v-for="(onecart, index) in addcart" :key="index" style="padding: 4px;">
      <span class="item-name">{{onecart.name}}</span>
      <span class="item-price">{{onecart.price}}</span>
    </li>
<hr>
    <li class="list-group-item">
      <span class="item-name">Total</span>
      <span class="item-price">{{total_price}}</span>
    </li>
  </ul>
</template>

<style scoped>
.item-name {
  margin-right: 100px; /* Adjust the margin value as needed */
}
</style>
