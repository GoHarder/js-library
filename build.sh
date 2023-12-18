#!/bin/bash

set -o errexit

main() {
  npx rollup -c

  local package_list=($(ls packages/))

  read -r -a packages <<< "${package_list[@]}"

  for i in "${packages[@]}"; do
    build "$i"
    sleep 1
  done
}

build() {
  local root=$(pwd)

  cd "$(pwd)/packages/$1"
  npm pack

  local file=$(ls . | grep "\.tgz")
  
  mv "$root/packages/$1/$file" "$root/gzips/$file"
  
  cd $root
}

main "$@"