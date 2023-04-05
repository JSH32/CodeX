#!/bin/bash
cargo install mdbook mdbook-admonish mdbook-mermaid

sites=(
    "codex-cpp"
)

ROOT_DIR=$PWD

rm -r build
mkdir build
cp index.html build

for i in "${sites[@]}"
do
   cd "$ROOT_DIR/$i"
   mdbook build
   cp -r ./book ../build/$i
done