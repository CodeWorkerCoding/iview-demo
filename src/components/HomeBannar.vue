<template>
  <Carousel v-model="currentVal" :autoplay="true" :loop="true" :autoplay-speed="4000">
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/img/bannar/building.jpeg"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/img/bannar/cuteboys.jpeg"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/img/bannar/lady.jpeg"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/img/bannar/old-time.jpeg"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/img/bannar/scene.jpeg"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/img/bannar/sexlady.jpeg"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/img/bannar/younglady.jpeg"/>
      </div>
    </CarouselItem>

  </Carousel>
</template>

<script>
  export default {
    name: "HomeBannar",
    data() {
      return {
        currentVal: 0
      }
    }
  }
</script>

<style scoped>

  .demo-carousel {
    height: 600px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #506b9e;
  }

  .demo-carousel img {
    height: 600px;
    width: 100%;
  }

</style>
