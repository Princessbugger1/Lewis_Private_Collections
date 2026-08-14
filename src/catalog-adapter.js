// Safe adapter boundary for the existing catalog UI.
// The UI can adopt these operations incrementally without replacing index.html.
import {
  loadRecords,
  saveRecords,
  moveRecord,
  removeFromSeries,
  deleteRecord
} from './storage.js';

export function catalogData(storage) {
  const read = () => loadRecords(storage);
  const write = records => saveRecords(records, storage);

  return {
    list() {
      return read();
    },
    move(id, destination) {
      return write(moveRecord(read(), id, destination));
    },
    removeFromSeries(id) {
      return write(removeFromSeries(read(), id));
    },
    delete(id) {
      return write(deleteRecord(read(), id));
    }
  };
}
