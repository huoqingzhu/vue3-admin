import {
  Input,
  Button,
  Menu,
  Spin,
  Card,
  Popover,
  Table,
  Drawer,
  Modal
} from "ant-design-vue";
const ant = {
  install(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
    Vue.component(Card.name, Card);
    Vue.component(Popover.name, Popover);
    Vue.component(Table.name, Table);
    Vue.component(Spin.name, Spin);
    Vue.component(Drawer.name, Drawer);
    Vue.component(Modal.name, Modal);
    Vue.use(Menu);
  },
};
export default ant;