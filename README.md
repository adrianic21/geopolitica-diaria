# Geopolítica Diaria — Generador de Análisis

App web para generar guiones de análisis geopolítico diario usando la API de Claude.

## Despliegue en Vercel (recomendado, gratis)

1. Sube este proyecto a un repositorio de GitHub
2. Entra en [vercel.com](https://vercel.com) y haz clic en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detecta automáticamente que es un proyecto Vite/React
5. Haz clic en "Deploy" — listo

**Sin configuración adicional necesaria.** El build command es `npm run build` y el output directory es `dist`, que Vercel detecta solo.

## Uso

1. Abre la app en tu navegador
2. Haz clic en "Configurar API" e introduce tu clave de Anthropic (la clave se guarda solo en tu navegador)
3. Haz clic en "Generar análisis geopolítico de hoy"
4. Copia o descarga el guion generado

## Desarrollo local

```bash
npm install
npm run dev
```

## Obtener clave API

En [console.anthropic.com](https://console.anthropic.com) → API Keys → Create Key
