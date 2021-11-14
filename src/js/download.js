import arrayLinks from './libLink';

export default class Download {
  constructor() {
    this.tBody = document.querySelector('.table-body');
    this.size = document.querySelector('.download-size');
  }

  events() {
    this.createTable(arrayLinks);
  }

  createTable(array) {
    // console.log(arrayLinks);
    array.forEach((elem) => {
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdSize = document.createElement('td');
      const tdLink = document.createElement('td');
      const tdLinkSrc = document.createElement('a');
      tdName.textContent = elem.name;
      tdSize.textContent = elem.size;
      tdLinkSrc.textContent = 'Download';
      tdLinkSrc.href = elem.link;
      tdLink.appendChild(tdLinkSrc);
      tr.appendChild(tdName);
      tr.appendChild(tdSize);
      tr.appendChild(tdLink);
      this.tBody.appendChild(tr);
    });
    Download.clickTodownload();
  }

  static clickTodownload() {
    const links = document.querySelectorAll('td > a');
    for (const i of links) {
      i.addEventListener('click', (ev) => {
        ev.preventDefault();
        const file = ev.target.href;
        // Download.dataURLtoFile(file);
        // console.log(Download.dataURLtoFile(file));
        // console.log(ev.target.href.split(',')[1]);
        const reader = new FileReader();
        // reader.readAsDataURL(file);
        console.log(reader.readAsDataURL(file));
      });
    }
    // console.log(links);
  }

  static dataURLtoFile(dataUrl, fileName) {
    const arr = dataUrl.split(',');
    console.log(arr);
    const mime = arr[0].match(/:(.*?);/)[1];
    console.log(mime);
    const bstr = atob(arr[1]);
    console.log(bstr);
    let n = bstr.length;
    console.log(n);
    const u8arr = new Uint8Array(n);
    console.log(u8arr);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  }

  static inputAndConvert() {
    const input = document.querySelector('.input-pdf');
    input.addEventListener('change', () => {
      const selectedFile = input.files;
      // console.log(input.files);
      if (selectedFile.length > 0) {
        const fileToLoad = selectedFile[0];
        // console.log(fileToLoad);
        const fileReader = new FileReader();
        fileReader.onload = (fileLoadedEvent) => {
          const base64 = fileLoadedEvent.target.result;
          // console.log(base64);
        };
        fileReader.readAsDataURL(fileToLoad);
      }
    });
  }
}
