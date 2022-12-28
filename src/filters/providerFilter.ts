import type { Filter } from "./filter";

const filter: Filter = (result: any, selectedProvider: any) => {
    return selectedProvider == null || result.provider.id === selectedProvider.id;
}

export default filter;