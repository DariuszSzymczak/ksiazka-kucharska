<template>
    <div id="main-outer-box">
        <div id="left-sidebar" class="sidebar">
            <slot name="left-sidebar-data"></slot>
        </div>
        <div id="right-sidebar" class="sidebar">
            <slot name="right-sidebar-data"></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">

#main-outer-box{
    width: 100%;
    display: flex;
    flex-direction: row;
    z-index: 10;
    position: relative;
    min-height: 100vw;
}

.sidebar{
  margin: 2vw;
   
    margin-top:4vw;
}

#left-sidebar{
    width: 65%;
    
  
}

#right-sidebar{
    width: 35%;

  
}

</style>