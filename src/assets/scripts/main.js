// window.addEventListener('devicelight', (e) => {
//   if (e.value < 20) {
//     document.body.style.setProperty('--background-default', '#282828');
//     document.body.style.setProperty('--text-deafult', '#ffffff');
//     document.body.style.setProperty('--complementary', '#c9c9c9');
//   } else {
//     document.body.style.setProperty('--background-default', '#ffffff');
//     document.body.style.setProperty('--text-deafult', '#282828');
//     document.body.style.setProperty('--complementary', '#949494');
//   }
// });

Mousetrap.bind('up up down down left right left right b a',() => {
    document.body.addEventListener("mousemove", (e) => {
      document.body.style.setProperty('--highlight-R', e.clientX);
      document.body.style.setProperty('--highlight-G', e.clientY);
    });
});
