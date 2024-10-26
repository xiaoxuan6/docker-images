#!/bin/bash

set -e

if [ -z "$GH_TOKEN" ]; then
  echo -e "\033[31m env GH_TOKEN not empty\033[0m"
  exit 1
fi

echo "GH_TOKEN=$GH_TOKEN" >.env

pnpm dev
