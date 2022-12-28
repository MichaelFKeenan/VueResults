import providers from "./providers";
import speeds from "./speeds";

export default [
  { id: 1, name: "item 1", provider: providers[0], speed: speeds[1] },
  { id: 2, name: "item 2", provider: providers[0], speed: speeds[0] },
  { id: 3, name: "item 3", provider: providers[1], speed: speeds[0] },
];
