#!/bin/bash

# Define the commit message prefix (e.g., "Auto-commit: ")
COMMIT_PREFIX="Auto-update: "

# Get the current date and time for the commit message
CURRENT_TIME=$(date +"%Y-%m-%d %H:%M:%S")

# Git commands
git add .
git commit -m "${COMMIT_PREFIX}${CURRENT_TIME}" || true
git push origin master
