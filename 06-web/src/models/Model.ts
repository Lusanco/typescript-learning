import { AxiosPromise } from "axios";

type ModelAttributes<T> = {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
};

type Sync<T> = {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
};

type Events = {
  on(eventName: string, callback: () => void): void;
};

export class Model {}
