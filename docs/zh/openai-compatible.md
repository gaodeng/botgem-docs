# OpenAI API 兼容服务配置

本指南说明如何在 BotGem 中设置和配置 OpenAI API 兼容服务。

## 什么是 OpenAI API 兼容服务？

OpenAI API 兼容服务是实现了 OpenAI API 规范的第三方 AI 服务，允许您使用与 OpenAI 相同的 API 格式的替代提供商。这些服务通常提供：

- 与 OpenAI 相比更低的成本
- 不同的模型选项
- 可能更快的响应时间
- 自托管选项以保护隐私

## 流行的兼容服务

几个提供商提供 OpenAI API 兼容端点：

- **OhMyGPT** - 提供各种开源和闭源模型
- **OpenRouter** - 统一 API，支持来自 50 多个提供商的 300 多个模型，具有高可用性
- **Mistral AI** - 提供他们自己的有竞争力的模型

## 在 BotGem 中配置兼容服务

要在 BotGem 中设置 OpenAI API 兼容服务：

1. 打开 BotGem 并进入**设置**
2. 导航到**服务提供商**部分
3. 在列表中找到 **OpenAI API 兼容**提供商
4. 输入以下信息：
   - **API 密钥** - 来自您兼容服务的 API 密钥
   - **基础 URL** - 您兼容服务的 API 端点 URL
   - **模型列表** - 如果需要，自定义模型名称
5. 点击**保存**应用您的更改
