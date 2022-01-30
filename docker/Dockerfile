FROM node:14.17.3

RUN apt -y update
RUN apt -y install nano

RUN apt -y install build-essential \
  libusb-1.0-0-dev \
  libudev-dev \
  && yarn

WORKDIR /
RUN mkdir /workspace
WORKDIR /workspace
