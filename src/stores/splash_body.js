export function handleImageClick(clickCountRef, showImageRef) {
  clickCountRef.value++

  switch (clickCountRef.value) {
    case 50:
      alert('Good job!')
      break
    case 100:
      alert('You are getting close.')
      break
    case 150:
      alert('Wow, you are becoming more Doug-like.')
      break
    case 200:
      alert('You are becoming a true Douglas.')
      break
    case 500:
      alert('Welcome home, Douglas!')
      break
  }

  showImageRef.value = false
  setTimeout(() => {
    showImageRef.value = true
  }, 5)
}
