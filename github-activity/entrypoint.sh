#!/bin/bash

set -e

if [ -z "$GITHUB_TOKEN" ]; then
  echo -e "\033[31m env GITHUB_TOKEN not empty\033[0m"
  exit 1
fi

echo "GITHUB_TOKEN=$GITHUB_TOKEN" >.env

yarn dev