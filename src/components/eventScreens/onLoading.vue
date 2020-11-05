<template>
   <div class="text-center">
      <v-progress-circular
      :size="size ? size : 50"
      color="primary"
      indeterminate
      ></v-progress-circular>
   </div>
</template>

<script>
export default {
   props: ['size']
}
</script>