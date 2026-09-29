export function almatyTime() {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Almaty',
    hour: 'numeric',
    minute: '2-digit',
  });
}
