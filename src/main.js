import Vue from "vue";
import App from "./App.vue";

//完整版导入mint-ui
// import MintUI from "mint-ui";
// import "mint-ui/lib/style.css";
// Vue.use(MintUI);

//引入mint-ui
import { Header } from "mint-ui";
Vue.component(Header.name, Header);

//引入mui
import "./lib/mui/css/mui.css";

//创建一个vue实例
const vm = new Vue({
  el: "#app",
  render: c => c(App)
});
