# Gemini Thinking Mode

Gemini 2.5 series models have thinking capabilities enabled by default, allowing them to perform deeper reasoning and tackle complex problems. Want to make the most of this powerful feature? This guide will show you how to customize and use Gemini's Thinking Mode in BotGem to see the model's reasoning process and get better results.

## How to Customize Thinking Mode for Gemini 2.5 Models

> **Note**: Thinking is enabled by default for the Gemini 2.5 series models. The following configuration allows you to customize the thinking behavior and make it visible in responses.
>
> Thought summaries offer insights into the model's internal reasoning process. This feature can be valuable for verifying the model's approach and keeping users informed during longer tasks, especially when combined with streaming.

![Gemini 2.5 Thinking Mode Settings Interface](/gemini-thinking-dark.png){.dark-only}
![Gemini 2.5 Thinking Mode Settings Interface](/gemini-thinking.png){.light-only}

You can enable thought summaries (make the thinking process visible) in the chat window by following these steps:

1. Click the **settings icon** in the top right corner of the chat window
2. Find the **Parameters** input field in the settings panel
3. Copy the following configuration into **Parameters**:

```json
{
  "thinkingConfig": {
    "includeThoughts": true
  }
}
```

## Understanding Thinking Mode

Gemini Thinking Mode allows the model to engage in more detailed reasoning before providing a response. This feature is particularly useful for:

- Complex problem-solving
- Multi-step reasoning tasks
- Detailed analysis and planning
- Code generation and debugging

While thinking is enabled by default for Gemini 2.5 series models, the `thinkingConfig` parameter with `includeThoughts` set to `true` allows you to see the model's reasoning process through thought summaries. These summaries offer insights into the model's internal reasoning, making the thinking visible in the response and giving you insight into how the model arrived at its conclusions.

Thought summaries are valuable for:
- Verifying the model's approach to solving problems
- Understanding the reasoning behind complex answers
- Keeping users informed during longer tasks
- Identifying where reasoning might have gone wrong

If you want to adjust the thinking process further, you can also set a thinking budget:

```json
{
  "thinkingConfig": {
    "includeThoughts": true,
    "thinkingBudget": 16000
  }
}
```

The `thinkingBudget` parameter lets you guide the model on the number of thinking tokens it can use when generating a response:

- **Range**: Must be an integer from 0 to 24576 tokens
- **Default**: If not specified, Gemini will dynamically adjust the budget based on the complexity of the request
- **Disable thinking**: Setting the budget to 0 disables thinking completely
- **Recommended for complex tasks**: 8000-16000 tokens
- **Model support**: Note that `thinkingBudget` is only supported in Gemini 2.5 Flash

A higher token count generally allows for more detailed reasoning, which can be beneficial for tackling more complex tasks. Depending on the prompt, the model might overflow or underflow the token budget.



## Troubleshooting

If you encounter issues with Thinking Mode:

- Ensure your Google API key has access to Gemini 2.5 models
- Verify that the parameters are correctly formatted in JSON
- Try adjusting the thinking budget if responses are incomplete or not detailed enough
- For very complex tasks, consider breaking them down into smaller steps

For more information about Google Gemini configuration, see the [Google AI Configuration Guide](google-configuration.md).
