interface Position {
  x: number;
  y: number;
}

interface Store {
  modalPosition: Position;
}

const store: Store = {
  modalPosition: { x: 0, y: 0 },
};

export default store;
