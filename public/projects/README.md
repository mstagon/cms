# 프로젝트 이미지 폴더 구조

각 프로젝트별로 이미지를 관리하는 폴더입니다.

## 폴더 구조

```
public/projects/
  [project-slug]/
    [이미지 이름].jpg    # 대문 이미지 (파일명 자유, hero.* 우선)
    architecture/
      [이미지 이름].jpg  # 아키텍처 이미지 (파일명 자유, 파일명 순서대로 정렬)
      ...
```

## 지원하는 이미지 형식

- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.gif`

## 이미지 이름 규칙

**이미지 이름은 자유롭게 지정할 수 있습니다!**

- **대문 이미지**: `hero.*`로 시작하는 파일이 있으면 우선 사용, 없으면 폴더 내 첫 번째 이미지 파일 사용
- **아키텍처 이미지**: `architecture/` 폴더 내 모든 이미지 파일을 파일명 순서대로 자동으로 읽어옵니다

예시:

- `hero.jpg`, `main-image.png`, `cover.webp` 등 모두 가능
- `architecture/` 폴더에 `diagram-1.jpg`, `system-arch.png`, `flow-chart.webp` 등 모두 가능

## 이미지 우선순위

1. **대문 이미지**: `public/projects/[slug]/` 폴더의 이미지 (우선) > `project.image` > `projectDetail.images[0]`
2. **아키텍처 이미지**: `public/projects/[slug]/architecture/` 폴더의 모든 이미지 (우선) > `projectDetail.architecture.diagrams`

## 프로젝트 목록

- `doss`
- `rest-forest`
- `phc`
- `planz`
- `moyang`
- `tripcut`
- `teamo`
- `employment`
- `smu-ecampus-progress-checking`
- `digital-bridge`
