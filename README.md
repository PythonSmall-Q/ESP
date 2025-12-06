# EnterpriseFlex Platform (EFP)

EnterpriseFlex Platform (Atlas) — 企业级SaaS/PaaS平台的开源核心与参考实现。本仓库为单体工作区（monorepo）骨架，涵盖前端壳应用、微应用占位、核心后端服务占位、插件SDK、Kubernetes运维与监控清单。

## 目标
- 插件化架构与开放生态
- 企业级安全、审计与合规
- 微前端 + 微服务的混合模式
- 支持混合云部署

## 结构
- apps/
  - shell-frontend/ (Vite + React18 微前端壳应用)
  - microapps/ (各业务微应用占位)
- services/ (Java/Go/Node/Python 等服务占位与README)
- gateway/ (API 网关占位)
- shared/
  - design-system/ (设计系统与基础组件占位)
  - sdk/ (平台 SDK，占位)
  - sdk-plugins/ (插件SDK与manifest示例)
- ops/
  - k8s/ (部署清单)
  - monitoring/ (Prometheus/Grafana规则与仪表盘)

## 快速开始（开发）

Prerequisites: Node.js 18+, pnpm 8+, Java 17+, Go 1.20+, Python 3.11+

```bash
# 安装前端壳应用依赖并启动开发服务器
cd apps/shell-frontend
pnpm install
pnpm dev
```

服务端各模块目前为占位，后续按模块README进行落地。

## 路线图
- v0.1: 项目骨架、壳应用、插件SDK接口与示例
- v0.2: 用户服务与审批服务基础API，微前端加载演示
- v0.3: 设计系统基础组件、仪表盘小部件框架
- v0.4+: 扩展到其他业务模块并完善CI/CD与安全策略

## 许可证
核心平台开源（Apache-2.0）。企业版功能将采用商业许可。