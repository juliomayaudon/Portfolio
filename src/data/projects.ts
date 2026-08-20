// Central project data. Bilingual (en/es) structured fields so both the
// listing and the detail pages stay in sync with the site's language toggle.
// Add a new project by adding an object here; a detail page is generated
// automatically at /projects/<slug>.
//
// Asset slots per project live in: public/projects/<slug>/
//   cover.*      main image (optional)
//   diagram.svg  Excalidraw architecture export (optional)
//   gallery/*    screenshots (optional)
// Set the paths below once you drop the files in. Until then the page shows
// tasteful placeholders, so nothing looks broken.

export type Bi = { en: string; es: string };

export interface Project {
  slug: string;
  name: string;
  order: number;
  featured: boolean;
  role: Bi;
  period: string;
  location: string;
  tagLabel: string;      // vertical label
  tagColor: string;      // css var
  summary: Bi;           // one-liner for cards
  overview: Bi;          // intro paragraph on detail page
  problem: Bi;
  solution: Bi;
  results: Bi[];         // bullet list
  stack: string[];       // tech chips (refine from repo)
  stackNote?: Bi;        // e.g. "confirmed from repo"
  links: { label: string; href: string }[];
  metrics: { value?: string; valueEn?: string; valueEs?: string; good?: boolean; label: Bi }[];
  cover: string | null;
  diagram: string | null;
  gallery: { src: string; caption?: Bi }[];
  // Full case-study fields (all optional; sections hide when empty).
  team?: Bi;                                   // e.g. solo vs team framing
  highlights?: Bi[];                           // 3-5 scannable "at a glance" points
  decisions?: { title: Bi; body: Bi }[];       // key decisions & trade-offs
  challenges?: { title: Bi; body: Bi }[];      // challenges & how I solved them
}

export const projects: Project[] = [
  {
    slug: 'meduco',
    name: 'Meduco',
    order: 1,
    featured: true,
    role: { en: 'Product Owner & Technical Lead', es: 'Product Owner y Technical Lead' },
    period: 'Dic 2025 - Present',
    location: 'Cuenca, Ecuador',
    tagLabel: 'Software & Product',
    tagColor: 'var(--dev)',
    summary: {
      en: 'EdTech platform for medical professionals: public site, LMS academy, and admin portal, built from scratch.',
      es: 'Plataforma EdTech para profesionales médicos: sitio público, academia LMS y portal admin, construidos desde cero.',
    },
    overview: {
      en: 'Meduco is a continuing-medical-education platform for exam prep (EHEP / CACES). I own the product end to end: a monorepo of three independent React apps plus a PHP REST API, from architecture and development to deployment. Its flagship feature is the Simulator, a central question bank students turn into personalized practice exams.',
      es: 'Meduco es una plataforma de educación médica continua para preparación de exámenes (EHEP / CACES). Soy dueño del producto de punta a punta: un monorepo de tres apps React independientes más una API REST en PHP, desde la arquitectura y el desarrollo hasta el despliegue. Su función estrella es el Simulador, un banco central de preguntas que los estudiantes convierten en exámenes de práctica personalizados.',
    },
    problem: {
      en: 'Prep for medical board exams was scattered across tools. There was no single place for students to study from a real question bank, build custom practice exams, and track progress, and no unified CMS for the team to manage courses, events, and content.',
      es: 'La preparación para exámenes médicos estaba dispersa en varias herramientas. No había un solo lugar para que los estudiantes estudiaran con un banco de preguntas real, armaran exámenes de práctica y siguieran su progreso, ni un CMS unificado para que el equipo gestionara cursos, eventos y contenido.',
    },
    solution: {
      en: 'I built a monorepo with three React 18 + Vite SPAs (public site, student academy, and admin CMS) on top of a custom PHP REST API with JWT auth over MySQL. The academy delivers the Simulator: custom quizzes by subject and state, timed exam mode, an SM-2 spaced-repetition engine, and a daily challenge with streaks. The admin panel manages the question bank (with Excel import), courses, events, media, and role-based permissions. Everything deploys automatically through GitHub Actions.',
      es: 'Construí un monorepo con tres SPAs en React 18 + Vite (sitio público, academia del estudiante y CMS admin) sobre una API REST en PHP a medida con autenticación JWT y MySQL. La academia entrega el Simulador: quizzes personalizados por materia y estado, modo examen cronometrado, un motor de repaso espaciado SM-2 y un reto diario con rachas. El panel admin gestiona el banco de preguntas (con importación por Excel), cursos, eventos, medios y permisos por rol. Todo se despliega automáticamente con GitHub Actions.',
    },
    results: [
      { en: 'Live in production at meducoeduca.com across four subdomains.', es: 'En producción en meducoeduca.com sobre cuatro subdominios.' },
      { en: 'Simulator with SM-2 spaced repetition, timed exam mode, and a daily challenge.', es: 'Simulador con repaso espaciado SM-2, modo examen cronometrado y reto diario.' },
      { en: 'Role-based CMS (Super Admin, Admin, Editor, Author) with Excel question import.', es: 'CMS por roles (Super Admin, Admin, Editor, Autor) con importación de preguntas por Excel.' },
      { en: 'Fully automated branch-based CI/CD (develop to staging, main to production).', es: 'CI/CD automatizado por ramas (develop a staging, main a producción).' },
    ],
    stack: ['React 18', 'Vite', 'Tailwind', 'PHP 7.4+', 'PDO', 'MySQL 8', 'JWT', 'WordPress (headless)', 'GitHub Actions'],
    links: [{ label: 'meducoeduca.com', href: 'https://meducoeduca.com' }],
    team: {
      en: 'Solo project. I owned it end to end: product, architecture, all three React apps, the PHP API, database, and deployment.',
      es: 'Proyecto en solitario. Lo llevé de punta a punta: producto, arquitectura, las tres apps React, la API PHP, la base de datos y el despliegue.',
    },
    highlights: [
      { en: 'Monorepo: 3 React SPAs + a custom PHP REST API on MySQL', es: 'Monorepo: 3 SPAs React + una API REST PHP a medida sobre MySQL' },
      { en: 'Custom LMS with a Simulator: SM-2 spaced repetition, timed exams, daily challenge', es: 'LMS a medida con Simulador: repaso espaciado SM-2, exámenes cronometrados, reto diario' },
      { en: 'JWT auth, role-based CMS, headless WordPress blog', es: 'Auth JWT, CMS por roles, blog en WordPress headless' },
      { en: 'Automated CI/CD to Hostinger via GitHub Actions', es: 'CI/CD automatizado a Hostinger con GitHub Actions' },
      { en: 'Live in production at meducoeduca.com', es: 'En producción en meducoeduca.com' },
    ],
    decisions: [
      {
        title: { en: 'A lean custom PHP API instead of a framework', es: 'Una API PHP a medida en vez de un framework' },
        body: {
          en: 'I built a small router (router.php) with 20 focused controllers over PDO instead of pulling in Laravel or Symfony. The target was shared hosting (Hostinger) with no server-side build step, so a dependency-light app deploys faster, costs less, and stays easy to reason about. The trade-off is that I hand-rolled routing, JWT auth, CORS, and rate limiting, so I kept each piece small and auditable.',
          es: 'Construí un router pequeño (router.php) con 20 controllers enfocados sobre PDO en vez de traer Laravel o Symfony. El destino era hosting compartido (Hostinger) sin paso de build en el servidor, así que una app liviana en dependencias despliega más rápido, cuesta menos y es más fácil de razonar. El trade-off: implementé a mano el routing, la auth JWT, el CORS y el rate limiting, así que mantuve cada pieza pequeña y auditable.',
        },
      },
      {
        title: { en: 'Headless WordPress for the blog, not the app', es: 'WordPress headless para el blog, no para la app' },
        body: {
          en: 'The blog needs a familiar authoring experience for non-technical editors, so it lives in a headless WordPress the public site reads via wp-json/wp/v2, while the product (courses, simulator, admin) stays on the custom API. Editors get a great CMS without coupling the core app to WordPress.',
          es: 'El blog necesita una experiencia de edición familiar para editores no técnicos, así que vive en un WordPress headless que el sitio público consume vía wp-json/wp/v2, mientras el producto (cursos, simulador, admin) se queda en la API a medida. Los editores tienen un buen CMS sin acoplar el core a WordPress.',
        },
      },
      {
        title: { en: 'Three SPAs in one monorepo', es: 'Tres SPAs en un monorepo' },
        body: {
          en: 'Public site, student academy, and admin have different audiences, auth, and deploy targets (separate subdomains), so I kept them as independent Vite apps in a single repo: shared history and CI, but independent builds and blast radius, so a bug in admin can never take down the public site.',
          es: 'El sitio público, la academia y el admin tienen audiencias, auth y destinos de deploy distintos (subdominios separados), así que los mantuve como apps Vite independientes en un solo repo: historia y CI compartidos, pero builds y radio de impacto independientes, así que un bug en admin nunca tumba el sitio público.',
        },
      },
      {
        title: { en: 'Stateless JWT that fails closed', es: 'JWT sin estado que falla cerrado' },
        body: {
          en: 'Auth is JWT so the API stays stateless across subdomains. I made the signing secret mandatory: if it is missing, the backend rejects every token instead of silently accepting them: a misconfigured deploy fails closed, not open.',
          es: 'La auth es JWT para que la API sea stateless entre subdominios. Hice el secreto de firma obligatorio: si falta, el backend rechaza todos los tokens en vez de aceptarlos en silencio: un deploy mal configurado falla cerrado, no abierto.',
        },
      },
      {
        title: { en: 'SM-2 spaced repetition in the Simulator', es: 'Repaso espaciado SM-2 en el Simulador' },
        body: {
          en: 'Instead of random practice, I implemented an SM-2-style algorithm that reschedules each student’s failed and pending questions, so study time targets weak areas. That is the difference between a quiz and a real study tool.',
          es: 'En vez de práctica aleatoria, implementé un algoritmo tipo SM-2 que reprograma las preguntas falladas y pendientes de cada estudiante, para que el tiempo de estudio apunte a las áreas débiles. Esa es la diferencia entre un quiz y una herramienta de estudio real.',
        },
      },
    ],
    challenges: [
      {
        title: { en: 'Serving uploads without exposing the server', es: 'Servir uploads sin exponer el servidor' },
        body: {
          en: 'Uploaded files live under /uploads, but that same path must never leak source code or the .env. In router.php I confined serving to /uploads, resolved real paths to block traversal (e.g. /uploads/../.env), whitelisted image and PDF MIME types, and set X-Content-Type-Options: nosniff.',
          es: 'Los archivos subidos viven bajo /uploads, pero esa ruta nunca debe filtrar el código ni el .env. En router.php confiné el serving a /uploads, resolví rutas reales para bloquear traversal (p. ej. /uploads/../.env), permití solo MIME de imagen y PDF, y puse X-Content-Type-Options: nosniff.',
        },
      },
      {
        title: { en: 'CORS across four subdomains, safely', es: 'CORS entre cuatro subdominios, con seguridad' },
        body: {
          en: 'Three frontends on different subdomains call the API with credentials. Instead of a blanket wildcard, I reflect only origins matching a strict regex for *.meducoeduca.com (plus localhost in dev), and only then allow credentials.',
          es: 'Tres frontends en subdominios distintos llaman a la API con credenciales. En vez de un comodín abierto, reflejo solo los orígenes que cumplen un regex estricto para *.meducoeduca.com (más localhost en dev), y solo entonces permito credenciales.',
        },
      },
      {
        title: { en: 'Bulk question import from Excel', es: 'Importación masiva de preguntas por Excel' },
        body: {
          en: 'Admins needed to load the question bank fast. I built an XLSX import that parses the spreadsheet in the admin app and normalizes and validates it server-side, turning a spreadsheet into hundreds of ready questions with their options.',
          es: 'Los admins necesitaban cargar el banco de preguntas rápido. Construí una importación XLSX que parsea la hoja en el admin y la normaliza y valida en el servidor, convirtiendo una hoja de cálculo en cientos de preguntas listas con sus opciones.',
        },
      },
    ],
    metrics: [
      { value: '3', label: { en: 'React apps + PHP API', es: 'apps React + API PHP' } },
      { value: 'SM-2', good: true, label: { en: 'spaced-repetition engine', es: 'motor de repaso espaciado' } },
    ],
    cover: '/projects/meduco/cover.jpg',
    diagram: null,
    gallery: [
      { src: '/projects/meduco/gallery/01-simulator-builder.jpg',
        caption: { en: 'Simulator builder: students assemble a custom exam by topic, question state (unanswered, failed, marked) and length.',
                   es: 'Armador del Simulador: el estudiante crea un examen a medida por materia, estado de la pregunta (no respondidas, falladas, marcadas) y cantidad.' } },
      { src: '/projects/meduco/gallery/02-simulator-question.jpg',
        caption: { en: 'Taking a simulator: real clinical-case questions with live score, progress bar and timed exam mode.',
                   es: 'Rindiendo un simulador: preguntas de casos clínicos reales con puntaje en vivo, barra de progreso y modo examen cronometrado.' } },
      { src: '/projects/meduco/gallery/03-academy-lesson.jpg',
        caption: { en: 'Student academy (the custom LMS): video lessons with syllabus, notes, resources and progress tracking.',
                   es: 'Academia del estudiante (el LMS a medida): lecciones en video con temario, notas, recursos y seguimiento de progreso.' } },
      { src: '/projects/meduco/gallery/04-admin-dashboard.jpg',
        caption: { en: 'Admin dashboard: KPIs for courses, students, leads and blog, with student-acquisition and course-mix charts.',
                   es: 'Dashboard admin: KPIs de cursos, estudiantes, leads y blog, con gráficos de adquisición de estudiantes y mezcla de cursos.' } },
      { src: '/projects/meduco/gallery/05-course-detail.jpg',
        caption: { en: 'Public site: course page with pricing, curriculum, instructor and reviews.',
                   es: 'Sitio público: página de curso con precio, contenido, instructor y reseñas.' } },
      { src: '/projects/meduco/gallery/06-event-detail.jpg',
        caption: { en: 'Public site: event / webinar page with free registration (reCAPTCHA-protected sign-up).',
                   es: 'Sitio público: página de evento / webinar con inscripción gratuita (registro protegido con reCAPTCHA).' } },
      { src: '/projects/meduco/gallery/07-contact.jpg',
        caption: { en: 'Public site: contact page with a validated form and FAQ.',
                   es: 'Sitio público: página de contacto con formulario validado y preguntas frecuentes.' } },
    ],
  },
  {
    slug: 'graviny',
    name: 'Graviny',
    order: 2,
    featured: true,
    role: { en: 'Web & Platform Developer', es: 'Desarrollador Web y de Plataforma' },
    period: '2025 - Present',
    location: 'Remote',
    tagLabel: 'Software & Product',
    tagColor: 'var(--dev)',
    summary: {
      en: 'A bilingual website for a marketing consultancy with a custom admin portal, a headless WordPress blog, and lead capture, built and deployed end to end.',
      es: 'Un sitio bilingüe para una consultora de marketing con portal de administración a medida, blog en WordPress headless y captura de leads, construido y desplegado de punta a punta.',
    },
    overview: {
      en: 'The full web platform for a marketing consultancy: a bilingual (EN/ES) public site, a custom admin portal, and a headless WordPress blog, on a lean PHP + MySQL backend. I built and shipped the whole technical side, from the React frontend and the admin portal to the blog integration and the deployment to shared hosting.',
      es: 'La plataforma web completa de una consultora de marketing: un sitio público bilingüe (EN/ES), un portal de administración a medida y un blog en WordPress headless, sobre un backend liviano en PHP + MySQL. Construí y lancé todo el lado técnico, desde el frontend en React y el portal admin hasta la integración del blog y el despliegue a hosting compartido.',
    },
    problem: {
      en: 'The consultancy needed a professional bilingual web presence that captured leads and let the team publish and manage content without touching code, running affordably on shared hosting rather than a heavy managed stack.',
      es: 'La consultora necesitaba una presencia web bilingüe y profesional que capturara leads y permitiera al equipo publicar y gestionar contenido sin tocar código, corriendo de forma económica en hosting compartido en vez de un stack pesado gestionado.',
    },
    solution: {
      en: 'I built the frontend as two separate builds from one React + Vite codebase: the public marketing site (services, portfolio, blog, contact, newsletter, with Framer Motion and full EN/ES i18n) and a custom admin portal (dashboard, leads and subscriber management). Both talk to a lean PHP + MySQL API that captures leads and subscribers and powers the admin, with secure auth (bcrypt, login-attempt throttling, token sessions). The blog runs on a headless WordPress the site consumes over REST, so non-technical editors get a familiar CMS. Everything ships to Hostinger through reproducible, versioned deploy builds.',
      es: 'Construí el frontend como dos builds separados desde un mismo codebase React + Vite: el sitio público de marketing (servicios, portafolio, blog, contacto, newsletter, con Framer Motion e i18n EN/ES completo) y un portal admin a medida (dashboard, gestión de leads y suscriptores). Ambos hablan con una API liviana en PHP + MySQL que captura leads y suscriptores y alimenta el admin, con auth segura (bcrypt, throttling de intentos de login, sesiones por token). El blog corre en un WordPress headless que el sitio consume por REST, para que editores no técnicos tengan un CMS familiar. Todo se despliega a Hostinger con builds versionados y reproducibles.',
    },
    team: {
      en: 'I built and shipped the entire web platform end to end: the public site, the admin portal, the headless blog integration, and the deployment.',
      es: 'Construí y lancé toda la plataforma web de punta a punta: el sitio público, el portal admin, la integración del blog headless y el despliegue.',
    },
    highlights: [
      { en: 'Two builds from one codebase: public site + custom admin portal', es: 'Dos builds desde un mismo codebase: sitio público + portal admin a medida' },
      { en: 'Bilingual (EN/ES) marketing site with Framer Motion', es: 'Sitio de marketing bilingüe (EN/ES) con Framer Motion' },
      { en: 'Headless WordPress blog consumed over REST', es: 'Blog en WordPress headless consumido por REST' },
      { en: 'Lead + newsletter capture on a lean PHP + MySQL API', es: 'Captura de leads y newsletter en una API liviana PHP + MySQL' },
      { en: 'Secure admin auth and reproducible deploys to Hostinger', es: 'Auth de admin segura y deploys reproducibles a Hostinger' },
    ],
    decisions: [
      {
        title: { en: 'Two isolated builds: public site and admin portal', es: 'Dos builds aislados: sitio público y portal admin' },
        body: {
          en: 'Rather than ship one app with a hidden admin area, I build the public site and the admin portal as two separate Vite builds from the same repo, served on different entry points. The admin never ships inside the public bundle (the dev server even blocks /admin), so a marketing site visitor can never reach admin code and the two can be deployed and cached independently.',
          es: 'En vez de una sola app con un área admin escondida, construyo el sitio público y el portal admin como dos builds Vite separados desde el mismo repo, servidos en entradas distintas. El admin nunca viaja dentro del bundle público (el dev server incluso bloquea /admin), así un visitante del sitio de marketing nunca llega al código de admin y ambos se despliegan y cachean por separado.',
        },
      },
      {
        title: { en: 'Headless WordPress for the blog only', es: 'WordPress headless solo para el blog' },
        body: {
          en: 'The blog needs a familiar editor for non-technical authors, so it lives in a headless WordPress the React site reads over REST, while the rest of the site stays a fast custom frontend. Editors get a real CMS without the marketing site inheriting WordPress themes, plugins, or performance.',
          es: 'El blog necesita un editor familiar para autores no técnicos, así que vive en un WordPress headless que el sitio React lee por REST, mientras el resto del sitio se queda como un frontend a medida y rápido. Los editores tienen un CMS real sin que el sitio herede temas, plugins o rendimiento de WordPress.',
        },
      },
      {
        title: { en: 'Lean PHP + MySQL on shared hosting, not a heavy framework', es: 'PHP + MySQL liviano en hosting compartido, no un framework pesado' },
        body: {
          en: 'For a small consultancy, a dependency-light PHP + MySQL backend on Hostinger is the pragmatic choice: cheap, no server build step, and easy to hand off. The trade-off is hand-rolling auth and routing, which I kept small and secured deliberately.',
          es: 'Para una consultora pequeña, un backend liviano en PHP + MySQL sobre Hostinger es la opción pragmática: barato, sin paso de build en el servidor y fácil de traspasar. El trade-off es implementar a mano la auth y el routing, que mantuve pequeños y aseguré a propósito.',
        },
      },
      {
        title: { en: 'Bilingual from day one', es: 'Bilingüe desde el día uno' },
        body: {
          en: 'The consultancy serves both English and Spanish markets, so the whole site is driven by a language context and a single translations source rather than duplicated pages, keeping both languages in sync as content grows.',
          es: 'La consultora atiende mercados en inglés y español, así que todo el sitio se maneja con un contexto de idioma y una única fuente de traducciones en vez de páginas duplicadas, manteniendo ambos idiomas sincronizados a medida que crece el contenido.',
        },
      },
    ],
    challenges: [
      {
        title: { en: 'Securing a public admin on shared hosting', es: 'Asegurar un admin público en hosting compartido' },
        body: {
          en: 'With no framework auth to lean on, I secured the admin myself: bcrypt password hashing, a login-attempts table for throttling and lockout, token-based sessions, and .htaccess protection, so a brute-force attempt on an internet-facing admin does not get far.',
          es: 'Sin auth de framework en la que apoyarme, aseguré el admin a mano: hashing bcrypt, una tabla de intentos de login para throttling y bloqueo, sesiones por token y protección con .htaccess, para que un ataque de fuerza bruta a un admin expuesto a internet no avance.',
        },
      },
      {
        title: { en: 'Two SPAs, an API, and WordPress under one domain', es: 'Dos SPAs, una API y WordPress bajo un mismo dominio' },
        body: {
          en: 'On one Hostinger domain the public site, the admin portal, the PHP API, and the headless WordPress all have to coexist. I set up .htaccess routing so each SPA falls back to its own entry, the API resolves under its path, and the WordPress blog stays reachable, without the routes stepping on each other.',
          es: 'En un solo dominio de Hostinger conviven el sitio público, el portal admin, la API PHP y el WordPress headless. Configuré el routing por .htaccess para que cada SPA caiga en su propia entrada, la API resuelva bajo su ruta y el blog de WordPress siga accesible, sin que las rutas se pisen.',
        },
      },
      {
        title: { en: 'Reproducible deploys to shared hosting', es: 'Deploys reproducibles a hosting compartido' },
        body: {
          en: 'Shared hosting has no CI, so I scripted the deploy: a build step packages the compiled site, admin, and backend into a versioned zip (shipped through v11) that uploads and unpacks the same way every time, making releases repeatable and rollback-able.',
          es: 'El hosting compartido no tiene CI, así que scripteé el deploy: un paso de build empaqueta el sitio, el admin y el backend compilados en un zip versionado (llegó hasta v11) que sube y descomprime igual cada vez, haciendo los releases repetibles y reversibles.',
        },
      },
    ],
    results: [
      { en: 'Live bilingual marketing site: services, portfolio, blog, and contact.', es: 'Sitio de marketing bilingüe en producción: servicios, portafolio, blog y contacto.' },
      { en: 'Custom admin portal with a dashboard and leads and subscriber management.', es: 'Portal admin a medida con dashboard y gestión de leads y suscriptores.' },
      { en: 'Headless WordPress blog integrated into the React site.', es: 'Blog en WordPress headless integrado en el sitio React.' },
      { en: 'Reproducible, versioned deploys to Hostinger, shipped through v11.', es: 'Deploys versionados y reproducibles a Hostinger, hasta la v11.' },
    ],
    stack: ['React 18', 'Vite', 'Tailwind', 'Framer Motion', 'React Router', 'PHP', 'MySQL', 'WordPress (headless)', 'Hostinger'],
    links: [{ label: 'graviny.com', href: 'https://www.graviny.com' }],
    metrics: [
      { value: '2', label: { en: 'builds: site + admin portal', es: 'builds: sitio + portal admin' } },
      { valueEn: 'EN / ES', valueEs: 'EN / ES', good: true, label: { en: 'bilingual site', es: 'sitio bilingüe' } },
    ],
    cover: '/projects/graviny/cover.jpg',
    diagram: null,
    gallery: [
      { src: '/projects/graviny/gallery/01-admin-dashboard.jpg',
        caption: { en: 'Admin portal: the dashboard I built to manage leads, subscribers, and blog content, with live metrics and per-service breakdown.',
                   es: 'Portal de admin: el dashboard que construí para gestionar leads, suscriptores y contenido del blog, con métricas en vivo y desglose por servicio.' } },
      { src: '/projects/graviny/gallery/02-process.jpg',
        caption: { en: 'Public marketing site: an animated services section, built in React with Framer Motion and full EN/ES.',
                   es: 'Sitio de marketing público: sección de servicios animada, hecha en React con Framer Motion y bilingüe EN/ES.' } },
      { src: '/projects/graviny/gallery/03-blog.jpg',
        caption: { en: 'Headless blog: articles authored in WordPress and rendered by the React site over the REST API.',
                   es: 'Blog headless: los artículos se editan en WordPress y el sitio React los renderiza a través de la API REST.' } },
      { src: '/projects/graviny/gallery/04-contact.jpg',
        caption: { en: 'Lead capture: the contact form that feeds straight into the admin portal, with validation and service selection.',
                   es: 'Captación de leads: el formulario de contacto que alimenta directo el portal de admin, con validación y selección de servicio.' } },
    ],
  },
  {
    slug: 'kalungi-abm-tool',
    name: 'Kalungi ABM Tool',
    order: 3,
    featured: true,
    role: { en: 'Technical Lead & Lead Developer', es: 'Technical Lead y Desarrollador Principal' },
    period: 'Kalungi · 2025 - Present',
    location: 'Remote',
    tagLabel: 'Software & Product',
    tagColor: 'var(--dev)',
    summary: {
      en: 'Internal full-stack ABM intelligence platform: company qualification, LinkedIn contact extraction and AI enrichment, TAM analysis, and title databases, in one authenticated dashboard.',
      es: 'Plataforma interna full-stack de inteligencia ABM: calificación de empresas, extracción de contactos de LinkedIn y enriquecimiento con IA, análisis de TAM y bases de títulos, en un solo dashboard autenticado.',
    },
    overview: {
      en: 'An internal platform for the Kalungi ABM team that bundles the whole prospecting workflow into one authenticated app: turn ICP documents into ranked job-title databases and LinkedIn queries, qualify companies with AI, extract and enrich contacts from LinkedIn Sales Navigator, sync to HubSpot, and run Total Addressable Market analysis over public labor data. I led the architecture and built most of the platform as the technical lead of a small team.',
      es: 'Una plataforma interna para el equipo de ABM de Kalungi que reúne todo el flujo de prospección en una sola app autenticada: convierte documentos de ICP en bases de títulos rankeadas y queries de LinkedIn, califica empresas con IA, extrae y enriquece contactos desde LinkedIn Sales Navigator, sincroniza con HubSpot y corre análisis de TAM sobre datos públicos de empleo. Lideré la arquitectura y construí la mayor parte de la plataforma como líder técnico de un equipo pequeño.',
    },
    problem: {
      en: 'ABM prospecting was spread across LinkedIn, spreadsheets, and one-off scripts: analysts qualified companies, pulled contacts, and built title lists by hand, per client, with no shared source of truth. It was slow, hard to audit, and did not scale across engagements.',
      es: 'La prospección ABM estaba repartida entre LinkedIn, hojas de cálculo y scripts sueltos: los analistas calificaban empresas, extraían contactos y armaban listas de títulos a mano, por cliente, sin una fuente de verdad compartida. Era lento, difícil de auditar y no escalaba entre clientes.',
    },
    solution: {
      en: 'I designed and built a FastAPI backend that serves a React + TypeScript SPA as a single deployable, with JWT auth and roles (admin / user / viewer) and multi-account workspaces. Behind it, Python pipelines qualify companies (LinkedIn scrape, then web and news search, then a GPT verdict and score), extract contacts from Sales Navigator deduped by a stable LinkedIn id, and enrich them through a multi-stage fallback chain before scoring persona fit. It integrates OpenAI and Claude, HubSpot, Apollo, Serper and Google Sheets/Docs, and a TAM tool that maps an ICP to NAICS and SOC codes and joins BLS and US Census data into an interactive dashboard. It runs on Railway.',
      es: 'Diseñé y construí un backend en FastAPI que sirve una SPA en React + TypeScript como un solo desplegable, con auth JWT y roles (admin / user / viewer) y workspaces multi-cuenta. Por detrás, pipelines en Python califican empresas (scrape de LinkedIn, luego búsqueda web y de noticias, luego un veredicto y score con GPT), extraen contactos de Sales Navigator deduplicados por un id estable de LinkedIn, y los enriquecen con una cadena de fallback de varias etapas antes de puntuar el encaje de persona. Integra OpenAI y Claude, HubSpot, Apollo, Serper y Google Sheets/Docs, y una herramienta de TAM que mapea un ICP a códigos NAICS y SOC y une datos de BLS y del Censo de EE. UU. en un dashboard interactivo. Corre en Railway.',
    },
    team: {
      en: 'Technical lead of a small two-person team. I owned the architecture and built most of the platform (API, pipelines, and frontend).',
      es: 'Líder técnico de un equipo pequeño de dos personas. Fui dueño de la arquitectura y construí la mayor parte de la plataforma (API, pipelines y frontend).',
    },
    highlights: [
      { en: 'Full-stack: FastAPI backend serving a React + TypeScript SPA as one deployable', es: 'Full-stack: backend FastAPI que sirve una SPA React + TypeScript como un solo desplegable' },
      { en: '5 ABM tools in one authenticated dashboard, with roles and workspaces', es: '5 herramientas de ABM en un dashboard autenticado, con roles y workspaces' },
      { en: 'AI company qualification + contact enrichment (OpenAI / Claude)', es: 'Calificación de empresas y enriquecimiento de contactos con IA (OpenAI / Claude)' },
      { en: 'LinkedIn Sales Navigator, HubSpot, Apollo, Serper and Google integrations', es: 'Integraciones con LinkedIn Sales Navigator, HubSpot, Apollo, Serper y Google' },
      { en: 'Concurrency and cost-safety guardrails for long-running AI pipelines', es: 'Concurrencia y guardas de costo para pipelines de IA de larga duración' },
    ],
    decisions: [
      {
        title: { en: 'One deployable: the API serves the built SPA', es: 'Un solo desplegable: la API sirve la SPA compilada' },
        body: {
          en: 'Instead of hosting the React app and the API separately, the FastAPI backend serves the built frontend, so there is a single service, a single origin, and one auth boundary. A Docker multi-stage build compiles the SPA and copies it into the Python image; deploy is a git push to Railway. Fewer moving parts for a small team to run.',
          es: 'En vez de hostear la app React y la API por separado, el backend FastAPI sirve el frontend compilado, así hay un solo servicio, un solo origen y una sola frontera de auth. Un build Docker multi-etapa compila la SPA y la copia dentro de la imagen de Python; el deploy es un git push a Railway. Menos piezas móviles para operar con un equipo pequeño.',
        },
      },
      {
        title: { en: 'A verified reference as the source of truth for LinkedIn', es: 'Una referencia verificada como fuente de verdad para LinkedIn' },
        body: {
          en: 'Sales Navigator has no official API, so its behavior is reverse-engineered and fragile. I pinned a proven reference (a working notebook) and made the request-building code mirror it exactly: each account\'s real user-agent paired with its own cookies (a generic UA triggers hard 429 throttling), and pagination driven by the total count, not by "a short page means done". Deviating from the reference is what breaks.',
          es: 'Sales Navigator no tiene API oficial, así que su comportamiento es de ingeniería inversa y frágil. Fijé una referencia probada (un notebook que funciona) e hice que el código de construcción de requests la replique exactamente: el user-agent real de cada cuenta emparejado con sus propias cookies (un UA genérico dispara throttling 429 duro), y paginación guiada por el conteo total, no por "una página corta significa que terminó". Desviarse de la referencia es lo que rompe.',
        },
      },
      {
        title: { en: 'Pre-segment queries to the 1,000-result ceiling', es: 'Pre-segmentar queries al techo de 1.000 resultados' },
        body: {
          en: 'Sales Navigator only serves the first 1,000 results of any search (offsets beyond that come back empty). Rather than silently lose data, the tool treats 1,000 as a hard ceiling and the UI flags any query that needs splitting, so a search is always broken into slices that each return complete results.',
          es: 'Sales Navigator solo entrega los primeros 1.000 resultados de cualquier búsqueda (los offsets más allá vuelven vacíos). En vez de perder datos en silencio, la herramienta trata 1.000 como techo duro y la UI marca cualquier query que haya que dividir, para que una búsqueda siempre se parta en slices que devuelven resultados completos.',
        },
      },
      {
        title: { en: 'A multi-stage fallback chain for contact enrichment', es: 'Una cadena de fallback de varias etapas para enriquecer contactos' },
        body: {
          en: 'No single source reliably returns a contact\'s title and company, so enrichment tries several in order (Apollo, then a LinkedIn profile scrape, then LLM recovery, then a photo fallback) and stops as soon as it has enough. The scrape reads the profile endpoint that actually carries title and company; relying on the obvious positions endpoint alone had left those fields blank for the large majority of contacts.',
          es: 'Ninguna fuente sola devuelve de forma confiable el título y la empresa de un contacto, así que el enriquecimiento prueba varias en orden (Apollo, luego un scrape del perfil de LinkedIn, luego recuperación con LLM, luego un fallback de foto) y se detiene apenas tiene lo suficiente. El scrape lee el endpoint de perfil que realmente trae título y empresa; apoyarse solo en el endpoint obvio de posiciones dejaba esos campos vacíos en la gran mayoría de contactos.',
        },
      },
      {
        title: { en: 'Guardrails around long-running AI pipelines', es: 'Guardas alrededor de pipelines de IA de larga duración' },
        body: {
          en: 'The heavy work runs as in-process workers behind a concurrency semaphore, every AI client has an explicit timeout, and the database connection pool is tuned (liveness checks, recycling, generous size) so background jobs cannot exhaust it and hang login. A deploy restarts the server, so a startup handler resets any stale in-flight statuses instead of leaving runs wedged.',
          es: 'El trabajo pesado corre como workers in-process detrás de un semáforo de concurrencia, cada cliente de IA tiene un timeout explícito, y el pool de conexiones a la base está afinado (chequeos de liveness, reciclado, tamaño generoso) para que los jobs de fondo no lo agoten y cuelguen el login. Un deploy reinicia el servidor, así que un handler de arranque resetea los estados en vuelo que quedaron colgados en vez de dejar corridas trabadas.',
        },
      },
    ],
    challenges: [
      {
        title: { en: 'A runaway AI-cost bug hiding in an auto-import loop', es: 'Un bug de costo de IA descontrolado escondido en un loop de auto-import' },
        body: {
          en: 'An auto-import cycle ran about once a minute and, without a guard, re-scored every contact with an OpenAI call on each pass, forever, quietly burning money and exhausting threads. I fixed it so the enrichment worker only touches contacts that are not already done and returns immediately (no AI calls) when there is nothing to do, and only starts when work actually exists.',
          es: 'Un ciclo de auto-import corría más o menos cada minuto y, sin un guarda, re-puntuaba cada contacto con una llamada a OpenAI en cada pasada, para siempre, quemando dinero en silencio y agotando threads. Lo corregí para que el worker de enriquecimiento solo toque contactos que no estén ya listos y retorne de inmediato (sin llamadas de IA) cuando no hay nada que hacer, y solo arranque cuando de verdad hay trabajo.',
        },
      },
      {
        title: { en: 'Long-running jobs on a server that restarts on every deploy', es: 'Jobs largos en un servidor que reinicia en cada deploy' },
        body: {
          en: 'Segment analyses and scrapes run for minutes as in-process threads, but a deploy restarts the server and kills them. I made runs resilient: a startup handler resets stale statuses (running to error, queued to pending) so nothing stays wedged, workers commit before slow network calls to release their DB connection, and explicit AI timeouts stop a single hung call from freezing a worker at 40%.',
          es: 'Los análisis de segmentos y los scrapes corren por minutos como threads in-process, pero un deploy reinicia el servidor y los mata. Hice las corridas resilientes: un handler de arranque resetea estados colgados (running a error, queued a pending) para que nada quede trabado, los workers hacen commit antes de llamadas de red lentas para liberar su conexión, y timeouts de IA explícitos evitan que una sola llamada colgada congele un worker al 40%.',
        },
      },
      {
        title: { en: 'Staying under LinkedIn rate limits across accounts', es: 'Mantenerse bajo los límites de LinkedIn entre cuentas' },
        body: {
          en: 'Scraping at volume gets an account throttled or blocked fast. The tool pairs each request with the account\'s real user-agent and cookies, paces itself (a long pause every 99 requests, interruptible for cancels), and enforces a per-account daily cap that is global across workspaces, round-robining across accounts and backing off on 429 instead of silently skipping work.',
          es: 'Scrapear a volumen hace que una cuenta sea throttled o bloqueada rápido. La herramienta empareja cada request con el user-agent y las cookies reales de la cuenta, se autorregula (una pausa larga cada 99 requests, interrumpible para cancelaciones) y aplica un cap diario por cuenta que es global entre workspaces, rotando entre cuentas y haciendo backoff en 429 en vez de saltarse trabajo en silencio.',
        },
      },
      {
        title: { en: 'Shared repo, two developers, zero-downtime discipline', es: 'Repo compartido, dos desarrolladores, disciplina de cero downtime' },
        body: {
          en: 'With two of us pushing to the same repo that auto-deploys on every push, a careless push could restart the server mid-run or clobber a teammate. We enforce pull-and-rebase before every push with a versioned pre-push hook that blocks pushing when the branch is behind main, and the rule is never to push while a run is active without warning first.',
          es: 'Con dos personas empujando al mismo repo que auto-despliega en cada push, un push descuidado podía reiniciar el servidor a mitad de una corrida o pisar a un compañero. Forzamos pull-and-rebase antes de cada push con un pre-push hook versionado que bloquea el push cuando la rama está detrás de main, y la regla es nunca pushear con una corrida activa sin avisar antes.',
        },
      },
    ],
    results: [
      { en: 'In production on Railway and used day to day by the Kalungi ABM team.', es: 'En producción en Railway y usada a diario por el equipo de ABM de Kalungi.' },
      { en: 'Consolidated title research, company qualification, contact extraction and TAM into one authenticated dashboard.', es: 'Consolidó la investigación de títulos, la calificación de empresas, la extracción de contactos y el TAM en un dashboard autenticado.' },
      { en: 'AI qualification and enrichment across LinkedIn and HubSpot at scale, with per-account rate safety.', es: 'Calificación y enriquecimiento con IA a escala entre LinkedIn y HubSpot, con seguridad de rate por cuenta.' },
      { en: 'Company analysis runs up to 20 companies concurrently behind a worker semaphore.', es: 'El análisis de empresas corre hasta 20 empresas en paralelo detrás de un semáforo de workers.' },
    ],
    stack: ['Python 3.12', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React 18', 'TypeScript', 'Vite', 'Tailwind', 'OpenAI', 'Anthropic', 'JWT', 'Docker', 'Railway'],
    links: [],
    metrics: [
      { value: '5', label: { en: 'ABM tools in one platform', es: 'herramientas de ABM en una plataforma' } },
      { value: '20', good: true, label: { en: 'companies analyzed in parallel', es: 'empresas analizadas en paralelo' } },
    ],
    cover: '/projects/kalungi-abm-tool/cover.jpg',
    diagram: null,
    gallery: [
      { src: '/projects/kalungi-abm-tool/gallery/01-tools-home.jpg',
        caption: { en: 'The internal toolkit home: five ABM tools (title databases, company intelligence, segments, TAM) in one authenticated dashboard.',
                   es: 'La home del toolkit interno: cinco herramientas de ABM (bases de títulos, company intelligence, segments, TAM) en un dashboard autenticado.' } },
      { src: '/projects/kalungi-abm-tool/gallery/02-segments-dashboard.jpg',
        caption: { en: 'ABM Segments dashboard: qualification breakdown, score distribution, and a Sankey of the whole qualification flow.',
                   es: 'Dashboard de ABM Segments: desglose de calificación, distribución de score y un Sankey de todo el flujo de calificación.' } },
      { src: '/projects/kalungi-abm-tool/gallery/03-company-detail.jpg',
        caption: { en: 'Company detail: an AI ICP-fit score with the supporting evidence pulled from LinkedIn, web, news, HubSpot and Crunchbase.',
                   es: 'Detalle de empresa: un score de encaje con el ICP por IA y la evidencia que lo respalda, tomada de LinkedIn, web, noticias, HubSpot y Crunchbase.' } },
      { src: '/projects/kalungi-abm-tool/gallery/04-persona-guides.jpg',
        caption: { en: 'AI-generated persona guides (P1 / P2) with pain points, fears and goals, derived from the ICP.',
                   es: 'Guías de persona generadas con IA (P1 / P2) con pain points, miedos y objetivos, derivadas del ICP.' } },
    ],
  },
  {
    slug: 'acopio-venezuela',
    name: 'Acopio Venezuela',
    order: 4,
    featured: true,
    role: { en: 'Creator & Full-Stack Developer', es: 'Creator y Full-Stack Developer' },
    period: 'Jun 2025 - Present',
    location: 'Remote · Venezuela',
    tagLabel: 'Software & Product',
    tagColor: 'var(--dev)',
    summary: {
      en: 'A platform to run humanitarian collection centers: donations, live inventory, shipments and role-based dashboards, in production.',
      es: 'Una plataforma para gestionar centros de acopio humanitario: donaciones, inventario en vivo, envíos y dashboards por rol, en producción.',
    },
    overview: {
      en: 'Acopio Venezuela is a platform for running humanitarian collection centers. It tracks donations, internal consumption, shipments and a live inventory per center, with a public page for each center and role-based dashboards for the teams. I designed and built it end to end on Next.js 16 and PostgreSQL, and it runs in production on Railway.',
      es: 'Acopio Venezuela es una plataforma para gestionar centros de acopio humanitario. Registra donaciones, consumo interno, envíos y un inventario en vivo por centro, con una página pública para cada centro y dashboards por rol para los equipos. La diseñé y construí de punta a punta sobre Next.js 16 y PostgreSQL, y corre en producción en Railway.',
    },
    problem: {
      en: 'Collection centers were tracking donations, stock and shipments across spreadsheets and chats. There was no shared, reliable inventory, no clean public presence for each center, and no safe way to let volunteers and coordinators help without exposing everything to everyone.',
      es: 'Los centros de acopio llevaban donaciones, stock y envíos entre hojas de cálculo y chats. No había un inventario compartido y confiable, ni una presencia pública clara para cada centro, ni una forma segura de que voluntarios y coordinadores ayudaran sin exponerlo todo a todos.',
    },
    solution: {
      en: 'I built a single Next.js app with a public side (a homepage, a page per center with its location on a map, and open registration for centers and volunteers) and a protected side (dashboards, donations, shipments, internal consumption and an admin portal). Every write goes through a REST API that authorizes by role and keeps a running inventory per center inside database transactions: donations add stock, shipments and internal consumption subtract it. Photos go to Cloudinary, maps use Leaflet, and dashboards use Recharts.',
      es: 'Construí una sola app Next.js con un lado público (una homepage, una página por centro con su ubicación en un mapa, y registro abierto de centros y voluntarios) y un lado protegido (dashboards, donaciones, envíos, consumo interno y un portal de administración). Cada escritura pasa por una API REST que autoriza por rol y mantiene un inventario por centro dentro de transacciones de base de datos: las donaciones suman stock, los envíos y el consumo interno lo restan. Las fotos van a Cloudinary, los mapas usan Leaflet y los dashboards usan Recharts.',
    },
    stack: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Prisma 5', 'PostgreSQL', 'NextAuth (JWT)', 'Tailwind CSS v4', 'Cloudinary', 'Leaflet', 'Recharts', 'Railway'],
    links: [{ label: 'acopiovnzla-production.up.railway.app', href: 'https://acopiovnzla-production.up.railway.app' }],
    metrics: [
      { value: 'Live', good: true, label: { en: 'in production on Railway', es: 'en producción en Railway' } },
      { valueEn: '5 roles', valueEs: '5 roles', label: { en: 'scoped by country + center', es: 'scopeados por país + centro' } },
    ],
    team: {
      en: 'Solo project. I owned it end to end: product, data model, the Next.js app, every API, auth and roles, and the Railway deployment.',
      es: 'Proyecto en solitario. Lo llevé de punta a punta: producto, modelo de datos, la app Next.js, cada API, auth y roles, y el despliegue en Railway.',
    },
    highlights: [
      { en: 'Full-stack Next.js 16 (App Router) with Prisma and PostgreSQL, live in production on Railway.', es: 'Full-stack Next.js 16 (App Router) con Prisma y PostgreSQL, en producción en Railway.' },
      { en: 'Transactional inventory per center: donations increment, shipments and consumption decrement.', es: 'Inventario transaccional por centro: las donaciones suman, los envíos y el consumo restan.' },
      { en: 'Five roles (superadmin, country admin, center lead, coordinator, volunteer) with writes scoped server-side.', es: 'Cinco roles (superadmin, admin de país, responsable, coordinador, voluntario) con escrituras scopeadas en el servidor.' },
      { en: 'A public page per center with its location on an interactive Leaflet map and open registration.', es: 'Una página pública por centro con su ubicación en un mapa interactivo de Leaflet y registro abierto.' },
      { en: 'Bulk CSV donation import with product matching assisted, optionally, by an LLM.', es: 'Importación masiva de donaciones por CSV con emparejado de productos asistido, opcionalmente, por un LLM.' },
    ],
    decisions: [
      { title: { en: 'One Next.js app for the public and protected sides', es: 'Una sola app Next.js para el lado público y el protegido' },
        body: { en: 'I kept the public center pages and the protected dashboards in a single Next.js app using route groups, so there is one codebase and one deploy instead of a separate frontend and backend. The trade-off is a shared surface, which I contain with a route proxy that allows an explicit public path list and sends everything else to login.',
                es: 'Mantuve las páginas públicas de los centros y los dashboards protegidos en una sola app Next.js usando route groups, así hay un solo codebase y un solo deploy en vez de un frontend y un backend separados. El trade-off es una superficie compartida, que contengo con un proxy de rutas que permite una lista explícita de rutas públicas y manda todo lo demás al login.' } },
      { title: { en: 'A running inventory table instead of summing on every read', es: 'Una tabla de inventario acumulado en vez de sumar en cada lectura' },
        body: { en: 'Stock lives in an Inventario row per center and product, updated with increment and decrement inside transactions, rather than recomputed by summing donations minus shipments and consumption on every read. The trade-off is that each write must keep the ledger correct, which I guarantee with a Prisma transaction, in exchange for fast reads and simple dashboards.',
                es: 'El stock vive en una fila de Inventario por centro y producto, actualizada con increment y decrement dentro de transacciones, en vez de recalcularlo sumando donaciones menos envíos y consumo en cada lectura. El trade-off es que cada escritura debe mantener el libro correcto, lo que garantizo con una transacción de Prisma, a cambio de lecturas rápidas y dashboards simples.' } },
      { title: { en: 'Authorization resolved server-side, in one place', es: 'Autorización resuelta en el servidor, en un solo lugar' },
        body: { en: 'Non-global roles are forced to their own center by a single helper (resolveCentroDestino), so a coordinator can never write to another center even by editing the request body. Trusting the client-supplied center id would have been simpler but unsafe; resolving it on the server is safe by default with no real downside.',
                es: 'Los roles no globales quedan forzados a su propio centro por un único helper (resolveCentroDestino), así un coordinador nunca puede escribir en otro centro ni editando el cuerpo de la petición. Confiar en el id de centro enviado por el cliente habría sido más simple pero inseguro; resolverlo en el servidor es seguro por defecto y sin desventaja real.' } },
      { title: { en: 'AI product matching kept optional and fail-safe', es: 'Emparejado de productos por IA, opcional y a prueba de fallos' },
        body: { en: 'The CSV importer can call an LLM to map free-text product names to the catalog, but it is optional (the app works without the key), prompted to leave a match empty rather than guess wrong, and every id it returns is validated against the catalog before use. The trade-off is that some names stay unmatched for the user to fix, which is the safe default.',
                es: 'El importador de CSV puede llamar a un LLM para mapear nombres libres de productos al catálogo, pero es opcional (la app funciona sin la key), con un prompt que prefiere dejar el match vacío antes que adivinar mal, y cada id que devuelve se valida contra el catálogo antes de usarlo. El trade-off es que algunos nombres quedan sin emparejar para que el usuario los corrija, que es el default seguro.' } },
      { title: { en: 'Prisma db push over a migration history', es: 'Prisma db push en vez de un historial de migraciones' },
        body: { en: 'The schema evolves with prisma db push against Railway Postgres rather than a full migration log. For a solo project this iterates faster; the trade-off is no migration history yet, which is acceptable at this stage and can be added later.',
                es: 'El esquema evoluciona con prisma db push contra el Postgres de Railway en vez de un historial completo de migraciones. Para un proyecto en solitario esto itera más rápido; el trade-off es que aún no hay historial de migraciones, algo aceptable en esta etapa y que se puede agregar después.' } },
    ],
    challenges: [
      { title: { en: 'Keeping inventory correct under partial failures', es: 'Mantener el inventario correcto ante fallos parciales' },
        body: { en: 'A single donation writes its row, its line items, and several inventory updates; if any step failed midway, stock would drift. I wrapped the whole operation in a Prisma transaction so it is all-or-nothing, and rejected non-positive or non-finite quantities up front so a bad row can never silently subtract stock.',
                es: 'Una sola donación escribe su fila, sus líneas de items y varias actualizaciones de inventario; si algún paso fallara a medias, el stock se desviaría. Envolví toda la operación en una transacción de Prisma para que sea todo o nada, y rechazo cantidades no positivas o no finitas de entrada para que una fila mala nunca reste stock en silencio.' } },
      { title: { en: 'Letting volunteers and coordinators help without over-exposing data', es: 'Dejar que voluntarios y coordinadores ayuden sin sobreexponer datos' },
        body: { en: 'I modeled five roles and enforce them on every API. Volunteers have no login at all (no password hash), coordinators and center leads are pinned to their own center, and country admins can only create and edit within their assigned countries. The scope is resolved on the server, not trusted from the client.',
                es: 'Modelé cinco roles y los aplico en cada API. Los voluntarios no tienen login (sin hash de contraseña), coordinadores y responsables quedan fijados a su propio centro, y los admins de país solo crean y editan dentro de sus países asignados. El alcance se resuelve en el servidor, no se confía en el cliente.' } },
      { title: { en: 'Importing messy real-world CSVs', es: 'Importar CSVs reales y desordenados' },
        body: { en: 'Donation exports arrive with inconsistent product names. The importer normalizes text, matches against the catalog, optionally asks an LLM for the hard cases (validating every suggestion), caps the batch at 2000 rows, and shows a preview before anything is written to the database.',
                es: 'Los exports de donaciones llegan con nombres de producto inconsistentes. El importador normaliza el texto, empareja contra el catálogo, opcionalmente consulta a un LLM para los casos difíciles (validando cada sugerencia), limita el lote a 2000 filas y muestra una vista previa antes de escribir nada en la base de datos.' } },
      { title: { en: 'A public page per center, safely', es: 'Una página pública por centro, de forma segura' },
        body: { en: 'Each center has an open public page with its map location and contact, while everything operational stays behind authentication. A route proxy allows an explicit list of public paths and redirects everything else to login, so the public surface is deliberate rather than accidental.',
                es: 'Cada centro tiene una página pública abierta con su ubicación en el mapa y su contacto, mientras todo lo operativo queda detrás de autenticación. Un proxy de rutas permite una lista explícita de rutas públicas y redirige todo lo demás al login, así la superficie pública es deliberada y no accidental.' } },
    ],
    results: [
      { en: 'Live in production on Railway (app plus PostgreSQL), with a public page for each collection center.', es: 'En producción en Railway (app más PostgreSQL), con una página pública para cada centro de acopio.' },
      { en: 'Seeded catalog of 93 products across 12 categories, ready for real centers to start logging.', es: 'Catálogo cargado de 93 productos en 12 categorías, listo para que los centros empiecen a registrar.' },
      { en: 'One codebase covers the public site, five role-based dashboards, and a full REST API.', es: 'Un solo codebase cubre el sitio público, cinco dashboards por rol y una API REST completa.' },
      { en: 'Inventory, donations, shipments and internal consumption tracked per center, with CSV and PDF export.', es: 'Inventario, donaciones, envíos y consumo interno por centro, con exportación CSV y PDF.' },
    ],
    cover: '/projects/acopio-venezuela/cover.jpg',
    diagram: null,
    gallery: [
      { src: '/projects/acopio-venezuela/gallery/01-dashboard.jpg',
        caption: { en: 'Global dashboard: superadmin view with filters by country, city, center and category, and live totals across every center.',
                   es: 'Dashboard global: vista de superadmin con filtros por país, ciudad, centro y categoría, y totales en vivo de todos los centros.' } },
      { src: '/projects/acopio-venezuela/gallery/02-inventory-analytics.jpg',
        caption: { en: 'Inventory analytics: stock distribution by category and shipments by status, drawn with Recharts.',
                   es: 'Analítica de inventario: distribución del stock por categoría y envíos por estado, hechos con Recharts.' } },
      { src: '/projects/acopio-venezuela/gallery/03-donations-csv.jpg',
        caption: { en: 'Donations log with search and filters, plus CSV import and export. Import matches free-text product names to the catalog.',
                   es: 'Registro de donaciones con búsqueda y filtros, más importación y exportación CSV. La importación empareja nombres libres de producto con el catálogo.' } },
      { src: '/projects/acopio-venezuela/gallery/04-center-public.jpg',
        caption: { en: 'Public page for a center: live donation, shipment and volunteer counts, and what has been collected by unit of measure.',
                   es: 'Página pública de un centro: donaciones, envíos y voluntarios en vivo, y lo recolectado por tipo de medida.' } },
      { src: '/projects/acopio-venezuela/gallery/05-center-map.jpg',
        caption: { en: 'Center location on an interactive Leaflet map, with the available inventory broken down by category.',
                   es: 'Ubicación del centro en un mapa interactivo de Leaflet, con el inventario disponible desglosado por categoría.' } },
      { src: '/projects/acopio-venezuela/gallery/06-register-center.jpg',
        caption: { en: 'Open self-registration: anyone can register a collection center and becomes its responsable to manage it right away.',
                   es: 'Auto-registro abierto: cualquiera puede registrar un centro de acopio y queda como responsable para gestionarlo de inmediato.' } },
    ],
  },
  {
    slug: 'abm-programs',
    name: 'ABM Programs',
    order: 5,
    featured: false,
    role: { en: 'ABM Manager, Kalungi', es: 'ABM Manager, Kalungi' },
    period: 'Feb 2023 - Present',
    location: 'Remote · Seattle, USA',
    tagLabel: 'ABM & Growth',
    tagColor: 'var(--abm)',
    summary: {
      en: 'Led data-driven ABM programs for B2B SaaS clients, surpassing targets on MQLs and engagement.',
      es: 'Lideré programas de ABM basados en datos para clientes B2B SaaS, superando objetivos en MQLs y engagement.',
    },
    overview: {
      en: 'As ABM Manager I ran account-based marketing programs for B2B SaaS clients, from strategy and CRM architecture to multichannel execution and reporting.',
      es: 'Como ABM Manager operé programas de account-based marketing para clientes B2B SaaS, desde la estrategia y la arquitectura CRM hasta la ejecución multicanal y el reporting.',
    },
    problem: {
      en: 'Enterprise pipeline for B2B SaaS clients needed targeted, measurable demand generation aligned with each client\'s growth goals.',
      es: 'El pipeline enterprise de clientes B2B SaaS necesitaba generación de demanda medible y dirigida, alineada con las metas de crecimiento de cada cliente.',
    },
    solution: {
      en: 'I designed and executed data-driven ABM campaigns targeting high-value accounts, built and maintained the CRM architecture, ran multichannel outreach, and reported performance to CMOs and stakeholders.',
      es: 'Diseñé y ejecuté campañas de ABM basadas en datos apuntando a cuentas de alto valor, construí y mantuve la arquitectura CRM, operé el outreach multicanal y reporté el desempeño a CMOs y stakeholders.',
    },
    results: [
      { en: 'Surpassed client targets on MQLs, engagement, and subscribers.', es: 'Superé objetivos de clientes en MQLs, engagement y suscriptores.' },
      { en: 'Aligned marketing output with executive business objectives.', es: 'Alineé el output de marketing con los objetivos de negocio ejecutivos.' },
      { en: 'Led cross-functional teams of copywriters, content, and automation specialists.', es: 'Lideré equipos cross-funcionales de copywriters, contenido y especialistas en automatización.' },
    ],
    stack: ['HubSpot', 'Salesforce', 'Apollo', 'ZoomInfo', 'Sales Navigator', 'Power BI'],
    links: [],
    metrics: [
      { valueEn: 'Above target', valueEs: 'Sobre objetivo', good: true, label: { en: 'MQLs & engagement', es: 'MQLs y engagement' } },
      { value: 'CMO', label: { en: 'stakeholder alignment', es: 'alineación con stakeholders' } },
    ],
    cover: null,
    diagram: null,
    gallery: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
export const allProjects = [...projects].sort((a, b) => a.order - b.order);
