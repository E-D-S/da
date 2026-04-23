//Marquee

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`arja-${cols.length}-cols`);

  // setup text for marquee
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const div = col.querySelector('div');
      if (div) {
        const divWrapper = div.closest('div');
        if (divWrapper && divWrapper.children.length === 1) {
          divWrapper.classList.add('arja-text-col');
        }
      }
    });
  });
}
