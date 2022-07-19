#! /usr/bin/bash

cd /home/aminjon/projects/mediaViewer

case $1 in
  -p)   uvicorn backend.main:app --host 192.168.43.55 --port 8000 ;;
  -*|*) uvicorn backend.main:app ;;
esac