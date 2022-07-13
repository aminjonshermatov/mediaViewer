#! /usr/bin/bash

./parser.sh &>> parser.log
./backend.sh &>> backend.log
./frontend.sh &>> frontend.log