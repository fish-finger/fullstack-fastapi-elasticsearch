FROM python:3

ADD ./requirements.txt /backend/requirements.txt

WORKDIR /backend

RUN pip install -r requirements.txt

COPY ./app/ /backend

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0"]