const dataRT = Array.from({ length: 30 }, (_, index) => ({
  value: (index + 1).toString().padStart(2, "0"),
  label: (index + 1).toString().padStart(2, "0"),
}));

const dataRW = Array.from({ length: 8 }, (_, index) => ({
  value: (index + 1).toString().padStart(2, "0"),
  label: (index + 1).toString().padStart(2, "0"),
}));

export { dataRT, dataRW };
