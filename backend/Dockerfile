FROM python:3.11-slim

WORKDIR /backend

COPY Pipfile .
COPY Pipfile.lock .
RUN pip install pipenv --no-cache-dir --disable-pip-version-check
RUN pipenv install --system --deploy --ignore-pipfile

EXPOSE 80

ENTRYPOINT [ "bash", "-c", "uvicorn app.main:app --port 80 --host 0.0.0.0 $@", "docker-entrypoint.sh" ]

CMD [ "--reload" ]
