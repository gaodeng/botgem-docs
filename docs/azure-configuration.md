# Azure OpenAI Configuration Guide

This guide explains how to set up and configure Azure OpenAI as an AI service provider in BotGem.

## Prerequisites

To use Azure OpenAI in BotGem, you'll need:

1. An Azure account with access to Azure OpenAI Service
2. A deployed Azure OpenAI model
3. Your Azure OpenAI API key and endpoint

## Getting Your Azure OpenAI Credentials

If you haven't already set up Azure OpenAI:

1. Visit the [Azure Portal](https://portal.azure.com)
2. Create or access your Azure OpenAI resource
3. Deploy your desired models through the Azure OpenAI Studio
4. Obtain your API key and endpoint URL from the "Keys and Endpoint" section of your resource

## Configuring Azure OpenAI in BotGem

Once you have your credentials, follow these steps to configure Azure OpenAI in BotGem:

1. Open BotGem and go to **Settings**
2. Navigate to the **AI Providers** section
3. Find the **Azure OpenAI** provider in the list
4. Enter the following information:
   - **API Key**: Your Azure OpenAI API key
   - **API Endpoint**: Your Azure OpenAI endpoint URL
   - **Models**: Click the refresh button to get the models list
5. Click **Save** to apply your changes

![Azure OpenAI Settings Interface](/azure-openai.png){.light-only}
![Azure OpenAI Settings Interface](/azure-openai-dark.png){.dark-only}


