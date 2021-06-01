<template>
     <el-container class="container">
    <el-header class="header">
        <!-- <p><img src="../assets/1.png" alt=""></p> -->
        <p class="zi">在线体检预约管理后台</p>
    </el-header>
    <el-container>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template #title><i class="el-icon-tickets"></i>体检商品管理</template>
        <el-menu-item-group>
         
          <el-menu-item index="1-1" class="el-icon-tickets">体检套餐管理</el-menu-item>
          
        </el-menu-item-group>
        <el-menu-item-group title="">
          <el-menu-item index="1-3" class="el-icon-tickets">体检项管理</el-menu-item>
        </el-menu-item-group>
      
      </el-submenu>
      <el-submenu index="2">
        <template #title><i class="el-icon-tickets"></i>体检信息管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1" class="el-icon-tickets">预约信息查询</el-menu-item>
          <el-menu-item index="2-2" class="el-icon-tickets">体检机构管理</el-menu-item>
        </el-menu-item-group>
       
      </el-submenu>
      <el-submenu index="3">
        <template #title><i class="el-icon-tickets"></i>体检指标管理</template>
        <el-menu-item-group>
          <el-menu-item index="3-1" class="el-icon-tickets">标准指标管理</el-menu-item>
          <el-menu-item index="3-2" class="el-icon-tickets">机构指标管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
      <el-main class="main">
          <div class="ti">
              <p class="jian">体检项管理</p>
          </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="less" scoped>
 .container{
     width: 100%;
     height: 100%;
 }
 .header{
     position: relative;
     width: 100%;
     height: 260px;
     background-color: #23262E;
 }
 .aside{
     height: 100%;
     background-color: #393D49;
 }
 .main{
     height: 100%;
     background-color: rgb(128, 128, 128);
 }
 .header .zi{
     position:absolute;
     top: 5px;
    left: 60px;
    color: rgb(253, 251, 251);
 }
 .main{
     position: relative;
     width: 100%;
     height: 100%;
     background-color: #f6f6f6;
 }
 .main .ti{
     position:absolute;
     width: 100%;
     height: 40px;
     top: 0;
     background-color: #fff;
 }
 .main .ti p{
     position:absolute;
     top: -5px;
     width: 80px;
     height: 28.83px;
 }
</style>