<script setup>
// defining props
const {allplayers}=defineProps(['allplayers']);
const emit = defineEmits();
function addtocart_method(item) {
    emit("data_to_parent", item);
}
</script>

<template>
<div class="row">
      <!-- <div class="card" style="width: 18rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuGLaZe_5S9Q_FabMV1DOrRjHdEQRrIKU7aUk-ei5RhjtA84CA7N-MU8AUtJESRSsVc4&usqp=CAU" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Neymar jr</h5>
          <h6 class="card-title">$100 M</h6>
          <p class="card-text">Debuting for Brazil aged 18, Neymar is the all-time top goalscorer for his national team with 79 goals in 128 matches.</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="https://www.realmadrid.com/img/vertical_380px/cristiano_550x650.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Cristiano Ronaldo</h5>
          <h6 class="card-title">$100 M</h6>
          <p class="card-text">is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team.</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Messi</h5>
          <h6 class="card-title">$100 M</h6>
          <p class="card-text">Lionel Andrés Messi also known as Leo Messi, is an Argentine professional footballer who plays as a forward.</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyKO0NHQkrFDSd-PZYZWZ7KpyQ-0vM3nSArWRKcUNK7ZVirOsmgKToZh5991Z2mjICJI&usqp=CAU" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Vinicius Jr</h5>
          <h6 class="card-title">$150 M</h6>
          <p class="card-text">Vini Jr. is a professional footballer from Brazil who plays as a Left Wing (LW) for Real Madrid.</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div> -->
      
      <div class="card" v-for="(player, index) in allplayers" :key="index" style="width: 18rem;">
        <img :src="player.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{player.name}}</h5>
          <h6 class="card-title">{{player.price}} M</h6>
          <p class="card-text">{{player.about}}</p>
          <a href="#" @click="addtocart_method(player)" class="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>
</template>

<style scoped></style>