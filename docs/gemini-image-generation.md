# Gemini Image Generation Guide

This guide explains how to enable image generation and editing capabilities with Gemini 2.0 Flash Experimental in BotGem.

## Enabling Image Generation with Gemini 2.0 Flash Experimental

![Gemini 2.0 Flash Experimental Settings Interface](/gemini-2.0-flash-exp.png){.light-only}
![Gemini 2.0 Flash Experimental Settings Interface](/gemini-2.0-flash-exp-dark.png){.dark-only}

You can enable image generation and editing capabilities in the chat window by following these steps:

1. Click the **settings icon** in the top right corner of the chat window
2. Disable the **Prompt** option in the chat settings
3. Find the **Parameters** input field in the settings panel
4. Copy the following configuration into **Parameters**:

```json
{
  "responseModalities": [
    "Text",
    "Image"
  ]
}
```

## Using Image Generation Features

Once you've enabled image generation capabilities, you can:

1. Ask Gemini to create images by describing what you want
2. Request edits to existing images by uploading them and providing instructions
3. Generate variations of images

## Example Prompts

Here are some example prompts you can use:

- "Create an image of a mountain landscape at sunset"
- "Draw a cartoon cat wearing a space suit"
- "Generate a logo for a coffee shop named 'Morning Brew'"

## Troubleshooting

If you encounter issues with image generation:

- Ensure your Google API key has access to Gemini 2.0 Flash Experimental
- Verify that the parameters are correctly formatted in JSON
- Check that the Prompt option is disabled in chat settings

For more information about Google Gemini configuration, see the [Google AI Configuration Guide](google-configuration.md).
