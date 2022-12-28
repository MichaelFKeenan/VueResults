import type { Provider } from "./Provider";
import type { Speed } from "./Speed";

export type Result = {
    id: number,
    name: string,
    provider: Provider,
    speed: Speed
}