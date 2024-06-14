FROM python:3.12.3

RUN apt update && apt install -y postgresql postgresql-contrib libpq-dev python3-dev

RUN pip install --upgrade pip

COPY ./backend/ ./
RUN pip install -r requirements.txt

RUN pip install gunicorn
