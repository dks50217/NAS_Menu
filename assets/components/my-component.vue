<template>
    <div>
        <el-button type="primary">{{who}}</el-button>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            who: 'world'
        }
    }
}
</script>

<style>
    .hello {
        background-color: #ffe;
    }
</style>