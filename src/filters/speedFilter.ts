import type { Filter } from "./filter";

const filter: Filter = (result: any, selectedSpeed: any) => {
    return selectedSpeed == null || result.speed.id === selectedSpeed.id;
}

export default filter;