function fetchEmoji(category) {}

function getEmojiGroup(emoji) {}

function main() {
  const emoji = fetchEmoji();
  const emojiGroup = getEmojiGroup(emoji);
  console.log(`Emoji: ${emojiGroup}`);
}

main();
