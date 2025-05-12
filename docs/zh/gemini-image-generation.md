# Gemini 图像生成指南

本指南介绍如何在 BotGem 中启用 Gemini 2.0 Flash Experimental 的图像生成和编辑功能。

## 启用 Gemini 2.0 Flash Experimental 的图像生成功能

![Gemini 2.0 Flash Experimental 设置界面](/gemini-2.0-flash-exp.png){.light-only}
![Gemini 2.0 Flash Experimental 设置界面](/gemini-2.0-flash-exp-dark.png){.dark-only}

您可以按照以下步骤在聊天窗口中启用图像生成和编辑功能：

1. 点击聊天窗口右上角的**设置图标**
2. 在聊天设置中禁用 **Prompt** 选项
3. 在设置面板中找到 **Parameters** 输入字段
4. 将以下配置复制到 **Parameters** 中：

```json
{
  "responseModalities": [
    "Text",
    "Image"
  ]
}
```

## 使用图像生成功能

启用图像生成功能后，您可以：

1. 通过描述您想要的内容，让 Gemini 创建图像
2. 通过上传现有图像并提供指令，请求编辑图像
3. 生成图像的变体

## 示例提示

以下是一些您可以使用的示例提示：

- "创建一张日落时分的山景图像"
- "画一只穿着太空服的卡通猫"
- "为一家名为'Morning Brew'的咖啡店生成一个标志"

## 故障排除

如果您在图像生成过程中遇到问题：

- 确保您的 Google API 密钥可以访问 Gemini 2.0 Flash Experimental
- 验证参数是否以正确的 JSON 格式设置
- 检查聊天设置中的 Prompt 选项是否已禁用

有关 Google Gemini 配置的更多信息，请参阅 [Google AI 配置指南](google-configuration.md)。
