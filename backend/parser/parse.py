import configparser
import os
from datetime import datetime

from backend.util.db import create_connection, execute_query


def check_path(filename):
    config = configparser.ConfigParser()
    config.read(filename)

    keys = [
        "root_path"
    ]
    path = False
    for key in keys:
        try:
            path = config.get("path", key)
        except configparser.NoOptionError:
            path = False
    cur_dir = os.getcwd()
    connection = create_connection(cur_dir + '/backend/parser/data.db')
    arr = []

    def get_file(value):
        if value and os.path.exists(value):
            if os.path.isdir(value):
                directories = os.listdir(value)
                if directories:
                    for i in range(len(directories)):
                        get_file(value + '/' + directories[i])

            elif os.path.isfile(value):
                arr.append(value)
                return

    get_file(path)
    clear_table = "delete from mediaFiles"
    execute_query(connection, clear_table)
    for p in arr:
        if p:
            a = p[len(path):].split('/')
            if os.path.isfile(p):
                utc = str(datetime.utcnow())

                sql = "insert into mediaFiles (file_name, directory_name, path, is_visible, added_date, updated_date) " \
                      "values ('"+a[-1]+"', '"+a[1]+"', '"+p+"', 1,'"+utc+"','"+utc+"');"
                execute_query(connection, sql)


def main():
    config_path = "backend/general/config.ini"
    check_path(config_path)


if __name__ == "__main__":
    main()
