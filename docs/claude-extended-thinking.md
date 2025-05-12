# Claude Extended Thinking Mode

### How to Enable Extended Thinking Mode for Claude 3.7 Sonnet

![Claude 3.7 Sonnet Settings Interface](/claude-3.7-sonnet.png){.light-only}
![Claude 3.7 Sonnet Settings Interface](/claude-3.7-sonnet-dark.png){.dark-only}

You can enable Extended thinking mode in the chat window by following these steps:

1. Click the **settings icon** in the top right corner of the chat window
2. Find the **Parameters** input field in the settings panel
3. Copy the following configuration into **Parameters**:

```json
{
  "max_tokens": 64000,
  "thinking": {
    "type": "enabled",
    "budget_tokens": 16000
  }
}
```
