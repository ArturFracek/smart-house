<template>
  <div class="nav">
    <button v-if="$route.params" class="mainView__smartHouse" @click="goToHome">
      <i class="fa-solid fa-house-laptop"></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      if (this.$route.path === "/") return;
      this.$router.push("/");
    },
  },
};
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
  color: rgb(5, 4, 4);
  font-size: 6vh;
  animation: onTrigger 0.5s;
  margin-bottom: 1vh;
  text-shadow: 0 9px 4px rgba(182, 181, 181, 0.637);
  transition: all 250ms ease;
}
.fa-house-laptop:hover,
.mainView__smartHouse:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
