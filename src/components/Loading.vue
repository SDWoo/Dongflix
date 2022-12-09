<template>
  <div
    v-show="modelValue"
    v-cloak
    class="loader">
  </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Boolean,
            default: false,    
        },
    },
};
</script>

<style lang="scss" scoped>
    .loader {
        width: 30px;
        height: 30px;
        margin: 30px auto;
        border: 4px solid #6b6b6a;
        border-top-color: transparent;
        border-radius: 50%;
        animation: loading 1s infinite linear;
    }

    @keyframes loading {
        0% {transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
    }


    [v-cloak] {
        display: none;
    }
</style>