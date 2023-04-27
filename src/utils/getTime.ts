export function getTime(data: Date) {
  const initialDate = new Date(data);

  const diff = Date.now() - initialDate.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 0) return { info: days, nickname: "days" };
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hours > 0) return { info: hours, nickname: "hours" };
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  if (minutes > 0) return { info: minutes, nickname: "minutes" };
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (seconds > 0) return { info: seconds, nickname: "seconds" };
}
