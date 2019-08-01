<style lang="scss" scoped>
.item-container {
  margin: 30px;
}

.item-title {
  font-size: 40px;
  color: #b7bdc6;
  text-align: center;
  margin: 130px 0 52px 0;
}

.item-list-view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 30px #e7e7e7;
  margin-bottom: 30px;
}

.item-left {
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}

.item-left p {
  font-size: 30px;
  color: #000;
  padding: 0 4px 0 30px;
  font-weight: bold;
}

.item-right p {
  font-size: 24px;
  color: #a0a7b3;
}

.icon-committee {
  width: 80px;
  height: 80px;
}

.icon-original {
  width: 30px;
  height: 30px;
}

.hide {
  display: none;
}

.show {
  display: block;
}


.liMenu{
  margin-right: 20px;
  cursor:pointer;
}
.liMenu.hover{
  color:red;
}
</style>

<template>
  <div class="content">
      <!-- 顶部导航栏 -->
    <mt-header title="切换家委会">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.go(-1)"></mt-button> <!-- @click="$router.go(-1)" -->
        </router-link>
        <!-- <mt-button  slot="right"></mt-button> -->
    </mt-header>
    
    <div class='item-container'>
      <div class='item-title'>轻触以切换家委会</div>

      <div class='item-list-view' v-for="(item,index) in itemList" :key="index" @click="switchToCommittee(index)">
        <div class='item-left'>
          <!-- 默认图片 -->
          <img class="icon-committee" src='../../../assets/icon_committee.png' v-if="!item.showView" >
          <!-- 选中图片 -->
          <img class="icon-committee" src='../../../assets/icon_committeeActive.png' v-if="item.showView">
          <p>{{item.pta_name}}</p>
          <!-- 创建者标识 -->
          <img class="icon-original" src='../../../assets/icon_original.png' v-if="index == selectIndex">
        </div>
        <div class="item-right" v-if="index == selectIndex">
          <p>当前使用</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
      
    data() {
        
      return{
        selectIndex:0,
        itemList:[
          {
            pta_name:'一年级一班',
            showView:true
          },
          {
            pta_name:'一年级五班',
            showView:false
          },
          {
            pta_name:'二年级三班',
            showView:false
          },
         
        ]
      }
    },
    methods:{
      switchToCommittee (e) {        
        this.selectIndex = e
        this.itemList[e].showView = true
       for(var i=0; i< this.itemList.length; i++) {
         if(i != e) {
           this.itemList[i].showView = false
         }
       }       
      }
    }
   }

</script>