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
    - to avoid error when running `python manage.py runserver`, follow below:
        - `pip show django`
        -  `[location]/django/bin/django-admin.py startproject projectName`
        - `cd projectName`
        - `[location]/django/bin/django-admin.py startapp appName`

- Configure psycopg2
    - `pip install psycopg2-binary`
    > version check: `pip freeze | grep psycopg2`

### Frontend
- Open a terminal, `cd` to the todolist directory, run
    - `npx create-react-app frontend`
    - to run the react
        - `cd frontend`
        - `npm start`
