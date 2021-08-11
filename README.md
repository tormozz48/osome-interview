# osome-interview
Osome interview project

## Local development

To run project locally you need to:

Create external docker network:
```bash
docker network create osome-interview
```
Run docker-compose inside current project
```bash
docker-compose up -d
```
Check application log
```bash
docker logs -f osome-interview
```