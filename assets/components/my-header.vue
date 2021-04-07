<template>
    <div>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 background-color="#545c64"
                 v-bind:router="true"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-menu-item v-for="item in menuList" v-bind:index="item.router" v-bind:disabled="item.disabled">
                {{item.name}}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            activeIndex: '1',
            menuList: [
                { name: "麥塊伺服器", disabled: false, router: '/', icon: 'el-icon-menu' },
                { name: "消息中心", disabled: false, router: '/', icon: 'el-icon-menu'},
                { name: "管理", disabled: false, router: '/test', icon: 'el-icon-menu' },
            ]
        }
    },
    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>