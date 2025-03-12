# sets python3.12 as the base image 
FROM python:3.12-slim

# sets the working dir inside the container
WORKDIR /backend

# installs poetry 
RUN pip install poetry

# copies entire flask app -> firstly copies pyproject and poetry for better caching
COPY pyproject.toml poetry.lock ./

# install dependencies (without virtualenv to avoid issues)
RUN poetry install --no-root

COPY . .

# exposes the flask port
EXPOSE 5000

# can only be one per dockerfile -> tells container how to run application
CMD ["poetry", "run", "python", "main.py"]


