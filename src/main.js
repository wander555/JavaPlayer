import { createApp } from "vue";
import {
  Button,
  Tabbar,
  TabbarItem,
  Form,
  Field,
  CellGroup,
  Picker,
  Checkbox,
  CheckboxGroup,
  DatetimePicker,
  RadioGroup,
  Radio,
  List,
  NavBar,
  Area,
  PullRefresh,
  Image as VanImage,
  Space,
  Tag,
  Lazyload,
  ImagePreview,
} from "vant";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./utils/rem";

//vue-video-player
import VideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
// import "vue-video-player/src/custom-theme.css";

const pinia = createPinia();

import "vant/es/toast/style";

createApp(App)
  .use(Button)
  .use(router)
  .use(pinia)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Picker)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(DatetimePicker)
  .use(RadioGroup)
  .use(Radio)
  .use(List)
  .use(NavBar)
  .use(Area)
  .use(PullRefresh)
  .use(Space)
  .use(VanImage)
  .use(Tag)
  .use(ImagePreview)
  .use(Lazyload)
  .use(VideoPlayer)
  .mount("#app");
