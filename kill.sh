#! /usr/bin/bash

kill -9 `pgrep uvicorn`
kill -9 `pgrep backend.sh`

kill -9 `pgrep 'ng serve'`
kill -9 `pgrep frontend.sh`

kill -9 `pgrep all.sh`
