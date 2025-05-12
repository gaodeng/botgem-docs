# Claude 扩展思考模式

### 如何为 Claude 3.7 Sonnet 启用扩展思考模式

![Claude 3.7 Sonnet 设置界面](/claude-3.7-sonnet.png){.light-only}
![Claude 3.7 Sonnet 设置界面](/claude-3.7-sonnet-dark.png){.dark-only}

您可以通过以下步骤在聊天窗口中启用扩展思考模式：

1. 点击聊天窗口右上角的**设置图标**
2. 在设置面板中找到 **Parameters** 输入框
3. 将以下配置复制到 **Parameters** 中：

```json
{
  "max_tokens": 64000,
  "thinking": {
    "type": "enabled",
    "budget_tokens": 16000
  }
}
```
