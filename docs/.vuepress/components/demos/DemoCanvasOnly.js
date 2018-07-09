const editor = grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#gjs',
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Height of the editor
  height: '300px',
  // Disable the storage manager for the moment
  storageManager: { type: null },
  // Avoid any default panel
  panels: { defaults: [] },
});