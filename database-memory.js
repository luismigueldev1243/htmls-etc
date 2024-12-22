import { randomUUID } from "node:crypto";
export class databaseMemory {
  #videos = new Map();
  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoarray) => {
        const id = videoarray[0];
        const data = videoarray[1];
        return {
          id,
          ...data,
        };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }
        return true;
      });
  }
  create(video) {
    const videoid = randomUUID();
    this.#videos.set(videoid, video);
  }
  update(id, video) {
    this.#videos.set(id, video);
  }
  delete(id) {
    this.#videos.delete(id);
  }
}
