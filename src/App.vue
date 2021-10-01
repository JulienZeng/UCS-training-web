<template>
  <div class="html body">
    <div class="common-layout">
      <el-container>
        <!-- 页头 -->
        <el-header>
          <div style="color:white">
            <!-- 页头左侧logo -->
            <div class="header-left center">
              <img class="left-logo" height="60" src="./assets/京涛海纳.png">
              <div class="left-text center">
                  <div class="logo-text center" style="font-size:22px;font-weight:bold">京 濤 海 納 工 作 室</div>
                  <div class="logo-text center" style="font-size:12px">UNION CREATIVE MEDIA STUDIO</div>
              </div>
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
          <el-aside width="200px">
            <div class="aside-chose">
              
            </div>
          </el-aside>

          <!-- 内容页 -->
          <el-main>
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
  height: 80px;
}

.el-aside {
  background-color: lightgreen;
  color: var(--el-text-color-primary);
  text-align: center;
  height: auto;
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
  height: 80px;
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-text{
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}

.logo-text{
  height: 23px;
  width: 200px;
  text-align: center;
}

.center-title{
  width: 240px;
  height: 80px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
  font-weight: bold;
}

.aside-chose{
  display: flex;
  flex-direction: column;
}

</style>
