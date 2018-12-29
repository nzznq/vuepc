import scrollBar from './scrollbar'

const install = function(Vue) {

  Vue.component(scrollBar.name, scrollBar);
  
};

// install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  scrollBar,
}