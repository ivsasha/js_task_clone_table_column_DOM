'use strict';

const table = document.querySelector('table');

const sections = [table.tHead, ...table.tBodies, table.tFoot];

sections.forEach((section) => {
  for (const row of section.rows) {
    const firstCell = row.cells[1];

    const clone = firstCell.cloneNode(true);

    row.insertBefore(clone, row.cells[row.cells.length - 1]);
  }
});
