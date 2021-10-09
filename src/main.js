import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'

//引入组件库 Vant
import Vant from 'vant';
import 'vant/lib/index.css';

//定义页面标题
function title(){
    document.title = '京涛海纳工作室-微博中心'
}

const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')
title()

app.use(Vant);