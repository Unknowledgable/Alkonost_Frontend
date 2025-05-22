export function handleImageClick(clickCountRef, showImageRef) {
  clickCountRef.value++

  switch (clickCountRef.value) {
    case 50:
      console.warn('Good job!')
      break
    case 100:
      console.warn('You are getting close.')
      break
    case 150:
      console.warn('Wow, you are becoming more Doug-like.')
      break
    case 200:
      console.warn('You are becoming a true Douglas.')
      break
    case 500:
      console.warn('Welcome home, Douglas!')
      break
  }

  showImageRef.value = false
  setTimeout(() => {
    showImageRef.value = true
  }, 2000)
}
