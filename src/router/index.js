import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = r => require.ensure([], () => r(require('../components/page/Login.vue')), 'login');
const home = r => require.ensure([], () => r(require('../components/common/Home.vue')), 'home');
const readme = r => require.ensure([], () => r(require('../components/page/Readme.vue')), 'readme');
const basetable = r => require.ensure([], () => r(require('../components/page/BaseTable.vue')), 'basetable');
const vuetable = r => require.ensure([], () => r(require('../components/page/VueTable.vue')), 'vuetable');
const baseform = r => require.ensure([], () => r(require('../components/page/BaseForm.vue')), 'baseform');
const vueeditor = r => require.ensure([], () => r(require('../components/page/VueEditor.vue')), 'vueeditor');
const markdown = r => require.ensure([], () => r(require('../components/page/Markdown.vue')), 'markdown');
const upload = r => require.ensure([], () => r(require('../components/page/Upload.vue')), 'upload');
const basecharts = r => require.ensure([], () => r(require('../components/page/BaseCharts.vue')), 'basecharts');
const drag = r => require.ensure([], () => r(require('../components/page/DragList.vue')), 'drag');


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: home,
            children: [
                {path: '/', component: readme},
                {path: '/basetable', component: basetable},
                {path: '/vuetable', component: vuetable},     // vue-datasource组件
                {path: '/baseform', component: baseform},
                {path: '/vueeditor', component: vueeditor}, // Vue-Quill-Editor组件
                {path: '/markdown', component: markdown},    // Vue-Quill-Editor组件
                {path: '/upload', component: upload}, // Vue-Core-Image-Upload组件
                {path: '/basecharts', component: basecharts}, // vue-schart组件
                {path: '/drag', component: drag} // 拖拽列表组件
            ]
        },
        {
            path: '/login',
            component: login
        },
    ]
})
