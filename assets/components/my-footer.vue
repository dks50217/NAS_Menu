<template>
    <div>
        <ul class="icons">
            <li><a href="https://twitter.com/dks50217" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="https://www.instagram.com/dks50217" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="https://github.com/dks50217" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="dks50217@gmail.com" class="icon fa-envelope"><span class="label">Email</span></a></li>
        </ul>
        <ul class="copyright">
                <li>&copy; Untitled.</li><li>Credits: <a href="#">dks50217</a></li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            iconList: [
                { name: "麥塊伺服器", disabled: false, href: 'https://twitter.com/dks50217', class:"icon brands fa-twitter" },
                { name: "消息中心", disabled: false, href: 'https://www.instagram.com/dks50217', class: 'icon brands fa-instagram'},
                { name: "管理", disabled: false, href: 'https://github.com/dks50217', class: 'icon brands fa-github' },
                { name: "管理", disabled: false, href: 'dks50217@gmail.com', class: 'icon fa-envelope' }
            ]
        }
    },
    methods: {
     
    }
}
</script>