import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiLoadingStore {
    private loadingSubject = new BehaviorSubject<Record<string, boolean>>({});
    public loading$ = this.loadingSubject.asObservable();

    setLoading(key: string, value: boolean) {
        const current = this.loadingSubject.getValue();
        this.loadingSubject.next({
            ...current,
            [key]: value,
        });
    }

    getLoadingValue(): Record<string, boolean> {
        return this.loadingSubject.getValue();
    }

    preloadLoadingKeys(keys: string[]) {
        const current = this.loadingSubject.getValue();
        const updated = { ...current };
        keys.forEach((key) => {
            updated[key] = true;
        });
        this.loadingSubject.next(updated);
    }
}
