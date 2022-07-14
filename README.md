# wasmbuild-demo-deno
deno demo using wasmbuild

## Usage

### Build .wasm file

```bash
deno task wasmbuild
```

### Run with .wasm file

```bash
deno run -A main.js
```

### Run with .wasm file in browser

```bash
deno task serve
```

you can see in terminal

```bash
# random port
Listening on http://localhost:4507/
```

open `http://localhost:4507/` in your browser and open the developer console