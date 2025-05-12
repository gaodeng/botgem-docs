# Ollama 设置指南

本指南说明如何设置和使用 Ollama 与 BotGem 一起在您自己的机器上运行本地 AI 模型。

## 什么是 Ollama？

Ollama 是一个开源工具，允许您在本地计算机上运行大型语言模型 (LLMs)。通过将 Ollama 与 BotGem 一起使用，您可以：

- 完全离线运行 AI 模型，无需将数据发送到外部服务
- 保持对您数据的完全隐私和控制
- 避免与基于云的 AI 服务相关的 API 成本
- 尝试各种开源模型

## 安装

### macOS

1. 从[官方网站](https://ollama.com/download)下载 Ollama 安装程序
2. 打开下载的文件并按照安装说明进行操作
3. 安装完成后，Ollama 将在后台作为服务运行

### Windows

1. 从[官方网站](https://ollama.com/download)下载 Ollama 安装程序
2. 运行安装程序并按照屏幕上的说明进行操作
3. 安装后，Ollama 将自动启动

### Linux

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

## 在 BotGem 中配置 Ollama

一旦 Ollama 安装并运行，按照以下步骤在 BotGem 中配置它：

1. 打开 BotGem 并进入**设置**
2. 导航到 **Ollama 管理控制台**部分
3. 点击**添加**来添加新的 Ollama 实例
4. 输入 Ollama 服务器名称和 URL（默认为 `http://localhost:11434`）
5. 点击**保存**应用您的更改

![Ollama 设置界面](/ollama.png){.light-only}
![Ollama 设置界面](/ollama-dark.png){.dark-only}

6. 点击右上角输入框并输入模型名称以拉取您想要使用的模型

您可以在 [Ollama 模型列表](https://ollama.com/models) 中找到最新的模型名称

![Ollama 拉取模型](/ollama-pull-model.png){.light-only}
![Ollama 拉取模型](/ollama-pull-model-dark.png){.dark-only}
