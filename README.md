# [Issue](https://github.com/sveltejs/svelte/issues/12776)

## Dev mode (works)

1.  Run `pnpm run dev`.
2.  The web component styles are inserted into the DOM, and its text becomes red.
3.  Press the button to unmount the web component.
4.  Press the button again to mount it again.
5.  The web component styles are inserted again.

## Preview mode (bugged)

1.  Run `pnpm run preview`.
2.  The web component styles are inserted into the DOM, and its text becomes red.
3.  Press the button to unmount the web component.
4.  Press the button again to mount it again.
5.  The web component styles are not inserted.
