## Setup your environment
1. Run `cargo install mdbook mdbook-admonish mdbook-mermaid hbs-cli` to install dependencies.
2. In each of the book folders, run `mdbook serve --open` to start the dev server.
3. New books should use the plugins listed below
   1. [admonish](https://github.com/tommilligan/mdbook-admonish)
   2. [mermaid](https://github.com/badboy/mdbook-mermaid) (go into `mermaid-init.js` and [set the theme to neutral](https://mermaid.js.org/config/theming.html#site-wide-theme))
   3. [pagetoc](https://github.com/JorelAli/mdBook-pagetoc) (will need manual installation)