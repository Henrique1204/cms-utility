import { StateCreator, StoreApi, UseBoundStore, create } from 'zustand';

export const createStoreFactory = <IStore,>(
  initializer: StateCreator<IStore, [], [], IStore>
): { useStore: UseBoundStore<StoreApi<IStore>>; reset: () => void } => {
  const useStore = create<IStore>(initializer);
  const initialState = useStore.getState();

  const reset = () => useStore.setState(initialState, true);

  return {
    useStore,
    reset,
  };
};

export type StoreFactory<IStore> = ReturnType<typeof createStoreFactory<IStore>>;
