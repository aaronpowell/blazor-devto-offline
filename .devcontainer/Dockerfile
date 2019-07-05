FROM mcr.microsoft.com/dotnet/core/sdk:3.0.100-preview6-disco

RUN dotnet new -i Microsoft.AspNetCore.Blazor.Templates::3.0.0-preview6.19307.2

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils 2>&1

RUN apt-get -y install git procps lsb-release

RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
ENV DEBIAN_FRONTEND=dialog

ENV SHELL /bin/bash