<template v-slot:dropdown>
    <div class="outside">
        <div class="">
            <van-cell-group inset>
                <div class="main" v-for="(item,key) in downloads" :key="key">
                    <!-- 左侧图片 -->
                    <div class="photo" :style="{backgroundImage:'url('+ item.photoUrl + ')'}" style="background-size:cover"></div>
                    <van-cell>
                        <template #title>
                            <!-- 介绍文字 -->
                            <div class="itemsName">{{item.name}}</div>
                        </template>
                        <template #label>
                            <div>{{item.shotIntroduction}}</div>
                        </template>
                        <template #value>
                            <van-button round type="primary" @click="openUrl(item.downloadUrl)">&nbsp;&nbsp;下&nbsp;&nbsp;载&nbsp;&nbsp;</van-button>
                        </template>
                    </van-cell>
                </div>
                
            </van-cell-group>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            downloads:[
                {
                    photoUrl:require('../assets/vscode.png'),
                    name:'Visual Studio Code',
                    shotIntroduction:'一款强大且好用的编译器',
                    mainIntroduction:'',
                    downloadUrl:'http://zjlserver.site:3030/VSCodeUserSetup-x64-1.61.0.exe'
                }
            ]
        }
    },
    methods:{
        openUrl(url){
            console.log(url);
            window.open(url);
        }
    }
}
</script>

<style scoped>
.main{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.photo{
    height: 25rpx;
    width: 25rpx;
}
</style>