FROM python:3.11-slim

WORKDIR /tg-bot

COPY Pipfile .
COPY Pipfile.lock .
RUN pip install pipenv --no-cache-dir --disable-pip-version-check
RUN pipenv install --system --deploy --ignore-pipfile

ENTRYPOINT [ "bash", "-c", "python main.py" ]
