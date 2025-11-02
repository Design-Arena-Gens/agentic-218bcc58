export function cn(...inputs) {
  return inputs
    .flatMap((i) => (typeof i === "string" ? i : Object.entries(i).filter(([, v]) => !!v).map(([k]) => k)))
    .filter(Boolean)
    .join(" ");
}
