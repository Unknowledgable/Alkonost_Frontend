<template>
 <div class="recCard">
    <h3>"{{ title }}"</h3>
    <p>by {{ artist }}</p>
    <div class="buttons flex gap-2 mt-2">
      <button
        v-for="action in ['like', 'dislike', 'known']"
        :key="action"
        @click="toggleAction(action)"
        :class="[
            'rec-button',
          action === selectedAction
            ? 'ring-2 ring-yellow-400 scale-105'
            : 'opacity-90',
          {
            like: 'bg-green-600 hover:bg-green-700',
            dislike: 'bg-red-600 hover:bg-red-700',
            known: 'bg-gray-600 hover:bg-gray-700'
          }[action]
        ]"
      >
        {{ action }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  artist: String
})
const emit = defineEmits({
  feedback: (payload) => {
    return (
      typeof payload === 'object' &&
      typeof payload.title === 'string' &&
      typeof payload.action === 'string'
    )
  }
})
const selectedAction = ref(null)

function playClick(){
    const audio = new audio('/assets/click.mp3')
    audio.volume = 0.4
    audio.play().catch(() => {})
}
function toggleAction(action) {
    const wasClicked = selectedAction.value === action
    selectedAction.value = wasSelected ? null : action
    if (!wasSelected( {
        playClick()
        emit('feedback', {title: props.title, action})
</script>