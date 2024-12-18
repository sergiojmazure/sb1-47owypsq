-- Sample post data
INSERT INTO posts (
  title,
  slug,
  content,
  excerpt,
  author_name,
  category_name
) VALUES (
  'Bienvenidos a nuestro Blog',
  'bienvenidos-a-nuestro-blog',
  '# Bienvenidos\n\nEste es nuestro primer post en el blog de Innovacion.ec. Aquí compartiremos las últimas novedades sobre Inteligencia Artificial y cómo puede transformar tu negocio.',
  'Una breve introducción a nuestro blog de tecnología e IA.',
  'Sergio J. Mazure',
  'General'
) ON CONFLICT (slug) DO NOTHING;