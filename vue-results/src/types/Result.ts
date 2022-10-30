import type { Provider } from "./Provider";
import type { Color } from "./Color";

export type Result = {
    id: number,
    name: string,
    provider: Provider,
    color: Color
}