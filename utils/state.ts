import {signal} from "@preact/signals";

export type ItemsPerPageSignal = {
  value: number;
}

export type AppStateSignal = {
  itemsPerPage: ItemsPerPageSignal;
}


function createState(): AppStateSignal {
  const itemsPerPage: ItemsPerPageSignal = signal<number>(20);

  return { itemsPerPage};
}

export default createState();