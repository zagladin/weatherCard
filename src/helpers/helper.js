export const timeStampConverter = (value) => {
  const date = new Date(value * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const timeStampToHours = (value) => new Date(value * 1000).getHours();
