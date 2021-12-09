<template>
  <div>
    {{ error.statusCode }}
  </div>
</template>

<script>
  export default {
    name: 'PageError',
    props: {
      error: {
        type: Object,
        default: () => ({})
      }
    }
  };
</script>
