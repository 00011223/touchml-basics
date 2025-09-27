<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

// 声明两个角色变量用来模拟用户权限
const roles1 = ['user', 'admin']; // 模拟一个用户具备 user 和 admin 两个角色
const roles2 = ['user'];

// 动态路由配置项
// 后面会根据用户的角色去过滤掉用户不应该看到的路由
const dynamicRoutes = [
  // 每个成员就是一个路由配置
  {
    path: 'uca',
    name: 'uca', // 由于添加子路由或删除路由或查询是否存在路由都是使用的路由名称，所以此处的路由都应该是命名路由
    component: () => import('@/views/UserCanAccess.vue'),
    meta: {roles: ['user', 'admin']}, // 使用meta定义当前路由应该由哪些角色来查看
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: import('@/views/Page1.vue'),
        meta: {roles: ['user', 'admin']}
      },
      {
        path: 'page2',
        name: 'page2',
        component: import('@/views/Page2.vue'),
        meta: {roles: ['admin']}
      },
    ]
  },
  {
    path: 'aca',
    name: 'aca',
    component: () => import('@/views/AdminCanAccess.vue'),
    meta: {roles: ['admin']} // 只允许admin查看
  }
];

// 过滤掉不符合权限要求的路由
function filterRoutes(routes, roles) {
  // 深度克隆routes
  let dr = JSON.parse(JSON.stringify(routes));
  dr = dr.filter(route => {
    // 判断 route.meta.roles 的任一成员是否在 roles 中存在
    let result = route.meta.roles.some(role => roles.includes(role));
    if (result && Array.isArray(route.children) && route.children.length > 0) {
      // 当判断到该路由需要保留时，则继续过滤其子路由
      route.children = filterRoutes(route.children, roles);
    }
    return result;
  });
  return dr;
}

// 添加路由
function addRoutes(roles) {
  // 通过角色的权限过滤路由
  const dr = filterRoutes(dynamicRoutes, roles);
  // console.log(dr);

  dr.forEach(route => {

    // hasRoute 判断是否存在指定名称的路由
    if (!router.hasRoute(route.name)) {
      // 添加路由
      // 第一个参数(选填)：父路由的名称
      // 第二个参数：路由配置，只能接收一个配置，不能接收数组
      router.addRoute('dr', route);
    }

  });

  // 读取所有路由
  console.log(router.getRoutes());
}

// 清空路由
function clearRoutes() {
  if (router.hasRoute('aca')) {
    // 删除路由
    // 参数：路由的名称
    router.removeRoute('aca');
  }
  if (router.hasRoute('uca')) {
    router.removeRoute('uca');
  }

  console.log(router.getRoutes());
}

</script>

<template>
  <div>
    <div>
      <button @click="addRoutes(roles1)">添加roles1路由</button>
      <button @click="addRoutes(roles2)">添加roles2路由</button>
      <button @click="clearRoutes()">清空路由</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>