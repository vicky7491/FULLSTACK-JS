const emoji = document.querySelector("#emoji")
const emojis = [
    // Smileys & Emotion
    "😀", "😂", "😍", "😎", "😢",
  
    // People & Body
    "👋", "👍", "👏", "🙏", "💪",
  
    // Animals & Nature
    "🐶", "🐱", "🐦", "🌳", "🌻",
  
    // Food & Drink
    "🍎", "🍔", "🍕", "🍩", "☕",
  
    // Travel & Places
    "🚗", "✈️", "🚀", "🏠", "🏖️",
  
    // Activities
    "⚽", "🏀", "🎸", "🎨", "🎮",
  
    // Objects
    "📱", "💻", "💡", "📦", "🪑",
  
    // Symbols
    "❤️", "✔️", "💲", "⭐", "❓",
  
    // Flags
    "🏳️", "🏴", "🏁", "🇮🇳", "🇺🇸"
  ];

  emoji.addEventListener("mouseover",()=>{
    emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)]
  })
  
