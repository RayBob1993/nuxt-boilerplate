<template>
  <div class="container">
    <div
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </div>

    <input
      type="text"
      autofocus
      autocomplete="off"
      placeholder="sdfvsdfv"
      required
    >
  </div>
</template>

<script>
  export default {
    name: 'PageMain',
    data: () => ({
      items: ['1', '2', '3', '4', '5', '6', '7']
    }),
    created () {
    },
    mounted () {
    },
    methods: {
    }
  };
</script>
