# Ollama Setup Guide

This guide explains how to set up and use Ollama with BotGem for running local AI models on your own machine.

## What is Ollama?

Ollama is an open-source tool that allows you to run large language models (LLMs) locally on your computer. By using Ollama with BotGem, you can:

- Run AI models completely offline without sending data to external services
- Maintain full privacy and control over your data
- Avoid API costs associated with cloud-based AI services
- Experiment with a variety of open-source models

## Installation

### macOS

1. Download the Ollama installer from the [official website](https://ollama.com/download)
2. Open the downloaded file and follow the installation instructions
3. Once installed, Ollama will run as a service in the background

### Windows

1. Download the Ollama installer from the [official website](https://ollama.com/download)
2. Run the installer and follow the on-screen instructions
3. After installation, Ollama will start automatically

### Linux

```bash
curl -fsSL https://ollama.com/install.sh | sh
```


## Configuring Ollama in BotGem

Once Ollama is installed and running, follow these steps to configure it in BotGem:

1. Open BotGem and go to **Setting**
2. Navigate to the **Ollama Management Console** section
3. Click **Add** to add a new Ollama instance
4. Enter the Ollama server Name and URL (default is `http://localhost:11434`)
5. Click **Save** to apply your changes

![Ollama Settings Interface](/ollama.png){.light-only}
![Ollama Settings Interface](/ollama-dark.png){.dark-only}

6. Click Top Right Input and type model name to pull the model you want to use

you can find latest model name in [Ollama Model List](https://ollama.com/models)

![Ollama Pull Model](/ollama-pull-model.png){.light-only}
![Ollama Pull Model](/ollama-pull-model-dark.png){.dark-only}