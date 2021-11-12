export default class Download {
  constructor() {
    this.tBody = document.querySelector('.table-body');
    this.arr = [{
      name: 'Storage Standard',
      size: '304 kb', 
      link: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'
    },
    {
      name: 'Streams Standard',
      size: '1.66 mb', 
      link: '/img/cross.png'
    },
    {
      name: 'XMLHttpRequest Standard',
      size: '814 kb', 
      link: 'data:application/pdf,../files/Storage Standard.pdf'
    },
  ];
  }

  events() {
    this.createTable(this.arr);
  }

  createTable(array) {
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
    })
  }

  drop() {
    // const blob = new Blob()
    //   const files = Array.from(ev.dataTransfer.files);
    //   const url = URL.createObjectURL(files[0]);
  }
}
