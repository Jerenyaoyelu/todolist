### To run this todolist app in your local machine, pls follow the below steps:

- Clone the repository

  > `git clone https://github.com/Jerenyaoyelu/todolist.git`

- Env setup

  > `virtualenv -p python2.7 venv`

  > `source venv/bin/activate`

  > `python --version` to make sure the python version

- backend

  > `cd todolist` and `pip install -r requirements.txt`

- frontend

  > `cd todolist` and `npx create-react-app frontend`

        > 'node_modules' etc were not committed to github, so this step is to get all such files, just ignore the conflicts prompt

  > `cd frontend`

  > `npm install axios`

  > `npm install react-icons --save`

- PostgreSQL setup

  - install PostgreSQL

    - `brew install postgresql`
    - remove all `log`, `postgres` files in `/usr/local/var/`
      - `initdb /usr/local/var/postgres`
      - `pg_ctl -D /usr/local/var/postgres -l logfile start`
      - `pg_ctl -D /usr/local/var/postgres -l logfile stop`

  > if you have installed postgresql in your machine, pls go to next command

  - create database `createdb [DBname]`
  - modify `backend/backend/settings.py`
    ```
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'test1', <--- change the database name
            'USER': 'luyaoye', <--- change username
            'PASSWORD': '1234567', <--- change password, if not, then comment this line
            'HOST': 'localhost',
            'PORT':'5432'
        }
    }
    ```
  - `cd backend` and run `python manage.py migrate` to create tables in DB

* Run

  - Open to terminals, activate the venv, and run the below two commands

    > `cd frontend` and `npm start`

        > running in http://localhost:3000/

    > `cd backend` and `python manage.py runserver`

        > running in http://127.0.0.1:8000/api/todos/
