<template>
  <div class="html body">
    <div class="common-layout">
      <el-container>
        <!-- 页头 -->
        <el-header>
          <div style="color:white">
            <!-- 页头左侧logo -->
            <div class="header-left center">
              <img class="left-logo" src="./assets/京涛海纳.png">
              <img class="left-logo" src="./assets/京涛.png">
            </div>
            
            <!-- 页头中间 中心 -->
            <div class="center-title center">
              微博中心-研发方向
            </div>
          </div>
        </el-header>
        <!-- 页面主体 -->
        <el-container>
          <!-- 侧边栏 -->
          <el-aside>
            <div class="aside">
              <div style="margin:10px 0"><router-link to="/anxiang">暗香</router-link></div>
              <div style="margin:10px 0"><router-link to="/lingyin">泠音</router-link></div>
            </div>
          </el-aside>

          <!-- 内容页 -->
          <el-main>
            本网站尚未完工，敬请期待。
            <router-view></router-view>
          </el-main>

        </el-container>

      </el-container>
    </div>
  </div>
  
</template>



<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
html,body,#app{
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>

<style scoped>

.el-header,
.el-footer {
  background-color: red;
  color: var(--el-text-color-primary);
  text-align: center;
  height: 36rpx;
}

.el-aside {
  background-color: lightgreen;
  color: var(--el-text-color-primary);
  text-align: center;
  height: auto;
  width: 80rpx;
}

.el-main {
  background-color: lightgray;
  color: var(--el-text-color-primary);
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.header-left{
  float: left;
  display: flex;
  flex-direction: row;
  height: 36rpx;
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-logo{
  height: 30rpx;
}

.center-title{
  width: 300rpx;
  height: 36rpx;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13rpx;
  font-weight: bold;
}

.aside{
  display: flex;
  flex-direction: column;
  width: 80rpx;
}

</style>
