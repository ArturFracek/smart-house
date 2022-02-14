<template>
  <div class="nav">
    <button class="mainView__smartHouse" @click="$router.push({ path: '/' })">
      <i class="fa-solid fa-house-laptop"></i>
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8%;
  border-bottom: 1px solid grey;
  padding: 1vh;
}
.mainView__smartHouse {
  margin-top: 2vh;
  width: 15vw;
  border: none;
  background-color: transparent;
  border-radius: 6px;
}
.fa-house-laptop {
  color: rgb(117, 112, 112);
  font-size: 6vh;
  animation: onTrigger 0.5s;
  margin-bottom: 1vh;
  text-shadow: 0 9px 4px rgba(89, 92, 88, 0.637);
}
.fa-house-laptop:hover,
.mainView__smartHouse:hover {
  color: rgb(206, 3, 3);
  border-color: rgb(206, 3, 3);
  cursor: pointer;
}
</style>