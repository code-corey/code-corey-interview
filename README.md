# Corey 面试题

独立站点：https://interview.code-corey.com/

从主站知识库拆分，减轻主站 VuePress 构建内存压力。

## 本地开发

```bash
pnpm install
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
```

## 自定义域名

DNS 增加 CNAME：`interview` → `code-corey.github.io`  
仓库 Pages 绑定：`interview.code-corey.com`
