

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b0dbbb4c.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.fe5f5d73.js"];
export const stylesheets = ["_app/immutable/assets/2.5e30cbb9.css"];
export const fonts = [];
