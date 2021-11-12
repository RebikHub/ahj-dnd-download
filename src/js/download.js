export default class Download {
  constructor() {

  }

  events() {

  }

  drop() {
    this.dndInput.addEventListener('dragover', (ev) => {
      ev.preventDefault();
    });
    this.dndInput.addEventListener('drop', (ev) => {
      ev.preventDefault();
      const files = Array.from(ev.dataTransfer.files);
      const url = URL.createObjectURL(files[0]);
      this.addBlockWithImg(url, files[0].name);
    });
  }
}
