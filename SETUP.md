## For Development Env
### Virtualenv
- Open a terminal, `cd` to the target directory, run
    - `virtualenv -p python2.7 venv`
    - `source venv/bin/activate`
    - `python --version`

### Database
- Configure PostgreSQL
    - `brew install postgresql`
    - remove all `log`, `postgres` files in `/usr/local/var/`
    - `initdb /usr/local/var/postgres`
    - `pg_ctl -D /usr/local/var/postgres -l logfile start`
    - `pg_ctl -D /usr/local/var/postgres -l logfile stop`

### Backend
- Open a terminal, `cd` to the target directory, run
    - `pip install -r requirements.txt`
    - `django-admin startproject backend`
    - `cd backend`
    - `django-amin startapp tdl`

- Configure psycopg2
    - `vi ~/.bash_profile`
        > add `PATH=/usr/pgsql-11.5/bin:$PATH`
    - `export PATH=/local/pgsql/bin:$PATH`
    - `source ~/.bash_profile`
    - `pip install psycopg2`
    > version check: `pip freeze | grep psycopg2`

### Frontend
- Open a terminal, `cd` to the todolist directory, run
    - `npx create-react-app frontend`
    - to run the react
        - `cd frontend`
        - `npm start`
