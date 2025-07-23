import { ApiLoadingStore } from "../stores/loading.store";
import { finalize, Observable } from "rxjs";

export const withApiLoading$ = <T>(
    key: string,
    observable$: Observable<T>,
    store: ApiLoadingStore
): Observable<T> => {
    store.setLoading(key, true);
    return observable$.pipe(
        finalize(() => store.setLoading(key, false))
    );
};