import { ref, onMounted } from 'vue'
import RecommendationCard from '@/components/RecommendationCard.vue'
import { fisherYatesShuffle } from '@/stores/recommendation_card.js'

const recs = ref([])

const fallback = [
  { title: 'All My Exes Live In Texas', artist: 'George Strait' },
  { title: 'El Diablo Anda Suelto', artist: 'La Santa Grifa' },
  { title: 'Beat Box', artist: 'SpottemGottem' },
  { title: 'полковнику никто не пишет', artist: 'Би-2' },
  { title: 'Давай За', artist: 'любе' },
]

async function loadRecs() {
  try {
    const res = await fetch('/api/recommendations')
    if (!res.ok) throw new Error('Request failed')
    const data = await res.json()
    recs.value = fisherYatesShuffle(data).slice(0, 3)
  } catch (e) {
    console.warn('Failed to fetch recs:', e)
    recs.value = fisherYatesShuffle(fallback).slice(0, 3)
  }
}

function handleFeedback({ title, action }) {
  console.log(`feedback: ${title} was ${action}`)
  // Optional: POST to Flask backend
}

onMounted(loadRecs)
