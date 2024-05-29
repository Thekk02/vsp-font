<!--电子木鱼点击放松-->


<script >
import {ElMessageBox} from "element-plus";

export default {
  name: "WoodFish",
  computed:{},
  setup(){},
  data(){
    return{
      frequency:0,
      show:false,
    }
  },
  methods:{
    play(){
      this.frequency+=1;
      if(this.frequency === 10){
        ElMessageBox.alert("施主功德圆满，已至化境！")
      }
      this.show = !this.show;
      this.$refs.club.style.transform='rotate(40deg)'
      setTimeout(() => {
        this.show = !this.show
        this.$refs.club.style.transform='rotate(-40deg)'
      }, 200)
    }
  }
}
</script>

<template>
  <div class="woodfish-container" >
    <P  style="position: fixed;text-align: center;top:0px;color:white;font-size: 100px">赛博木鱼</P>
      <img ref="club" class="club" src="../../pictures/club.png" alt="club" style="height: 80px;position: fixed;text-align: center;top:200px;transform: rotateZ(30deg);transition: transform 0.5s cubic-bezier(.85, .1, .89, .65);">
      <img class="woodfish-picture" src="../../pictures/woodfish.png" @click="play">
      <P v-if=show style="position: fixed;text-align: center;top:300px;color:white;font-size: 30px">功德+1</P>


      <p style="position: fixed;text-align: center;top:600px;color:white;font-size: 30px">总共功德为：{{this.frequency}}</p>
  </div>
</template>

<style scoped>
.woodfish-container{
  width: 100%;
  height: 100vh;
  display: flex;
  /*水平垂直居中*/
  align-items: center;
  justify-content: center;
  background-image: url("@/pictures/woodfishback.png");
  background-attachment:fixed;
  background-size: 100% 100%;
  .woodfish-picture{
    width:20%;
    height:30%;
    position: fixed;
    text-align: center;
  }
  .club{


  }

}




</style>