#! /usr/bin/bash

{ ./parser.sh >> parser.log 2>&1; } &
{ ./backend.sh >> backend.log 2>&1; } &
{ ./frontend.sh >> frontend.log 2>&1; } &