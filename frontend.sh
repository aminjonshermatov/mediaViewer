#! /usr/bin/bash

rm -r backend/static/*
cd frontend

case $1 in
  -p)   ng build -c production ;;
  -*|*) ng build -c development ;;
esac

cd ../

mv frontend/dist/media-viewer/*  backend/static/

rm -r frontend/dist