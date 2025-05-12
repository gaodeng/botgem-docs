# Azure OpenAI 配置指南

本指南说明如何在 BotGem 中设置和配置 Azure OpenAI 作为 AI 服务提供商。

## 前提条件

要在 BotGem 中使用 Azure OpenAI，您需要：

1. 一个可以访问 Azure OpenAI 服务的 Azure 账户
2. 一个已部署的 Azure OpenAI 模型
3. 您的 Azure OpenAI API 密钥和端点

## 获取您的 Azure OpenAI 凭据

如果您尚未设置 Azure OpenAI：

1. 访问 [Azure 门户](https://portal.azure.com)
2. 创建或访问您的 Azure OpenAI 资源
3. 通过 Azure OpenAI Studio 部署您想要的模型
4. 从资源的"密钥和端点"部分获取您的 API 密钥和端点 URL

## 在 BotGem 中配置 Azure OpenAI

获取凭据后，按照以下步骤在 BotGem 中配置 Azure OpenAI：

1. 打开 BotGem 并进入**设置**
2. 导航到 **AI 提供商**部分
3. 在列表中找到 **Azure OpenAI** 提供商
4. 输入以下信息：
   - **API 密钥**：您的 Azure OpenAI API 密钥
   - **API 端点**：您的 Azure OpenAI 端点 URL
   - **模型**：点击刷新按钮获取模型列表
5. 点击**保存**应用您的更改

![Azure OpenAI 设置界面](/azure-openai.png){.light-only}
![Azure OpenAI 设置界面](/azure-openai-dark.png){.dark-only}
