//Marquee

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`arja-${cols.length}-cols`);

  // setup text for marquee
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const dv = col.querySelector('div');
      if (dv) {
        const divWrapper = dv.closest('div');
        if (divWrapper && divWrapper.children.length === 1) {
          divWrapper.classList.add('arja-text-col');
        }
      }
    });
  });
}
