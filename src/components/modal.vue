<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click.self="emitClose"
    >

      <div class="absolute inset-0 bg-black/50"></div>

      <div class="modal-overlay">
        <button
          class="default-button"
          @click="emitClose"
        >
          ×
        </button>

        <div>
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['close'])

function emitClose() {
  emit('close')
}
</script>

<style scoped>
body.modal-open {
  overflow: hidden;
}
</style>
