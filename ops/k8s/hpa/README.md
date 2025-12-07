HorizontalPodAutoscaler manifests for services.

Prerequisites:
- Metrics Server installed.

Defaults:
- Target average CPU utilization: 70% unless specified.
- Min replicas: 2, Max replicas: 10.
