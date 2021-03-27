/*
 * @Date: 27/03/2021 17.05.43 +0800
 * @Author: KnowsCount
 * @LastEditTime: 27/03/2021 17.07.52 +0800
 * @FilePath: /md/src/plugins/element/index.js
 */
import Vue from "vue";
import {
	Container,
	Header,
	Upload,
	Tooltip,
	Form,
	FormItem,
	Select,
	Option,
	ColorPicker,
	Switch,
	Button,
	Main,
	Col,
	Row,
	Dialog,
	Loading,
	Message,
} from "element-ui";

Vue.use(Container);
Vue.use(Header);
Vue.use(Upload);
Vue.use(Tooltip);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(ColorPicker);
Vue.use(Switch);
Vue.use(Button);
Vue.use(Main);
Vue.use(Col);
Vue.use(Row);
Vue.use(Dialog);
Vue.use(Loading);
Vue.component(Message.name, Message);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
