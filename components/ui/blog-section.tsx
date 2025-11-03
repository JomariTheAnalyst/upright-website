import React from 'react';
import { LazyImage } from './lazy-image';

const blogs = [
  {
    title: 'Design Systems That Scale',
    slug: '#',
    description:
      'Learn how to build and maintain scalable design systems that empower teams to move faster while staying consistent.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=640&h=360&fit=crop',
    createdAt: '2025-08-25',
    author: 'Ava Mitchell',
    readTime: '7 min read',
  },
  {
    title: 'The Psychology of Color in UI',
    slug: '#',
    description:
      'Explore how different colors influence user perception, emotion, and conversion in digital product design.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=640&h=360&fit=crop',
    createdAt: '2025-07-14',
    author: 'Liam Carter',
    readTime: '5 min read',
  },
  {
    title: 'Microinteractions That Delight',
    slug: '#',
    description:
      'Discover how subtle animations and interactions can enhance usability and bring joy to your users.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=640&h=360&fit=crop',
    createdAt: '2025-06-30',
    author: 'Sophia Kim',
    readTime: '6 min read',
  },
  {
    title: 'Accessibility Beyond Compliance',
    slug: '#',
    description:
      'Practical steps to make your UI accessible, not just legally compliant, but genuinely inclusive for everyone.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=640&h=360&fit=crop',
    createdAt: '2025-06-18',
    author: 'Ethan Rodriguez',
    readTime: '8 min read',
  },
  {
    title: 'Dark Mode Done Right',
    slug: '#',
    description:
      'Tips and tricks to design beautiful and functional dark mode experiences that users will love.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=640&h=360&fit=crop',
    createdAt: '2025-05-20',
    author: 'Maya Chen',
    readTime: '4 min read',
  },
  {
    title: 'Typography That Speaks',
    slug: '#',
    description:
      'How to select and pair typefaces that enhance readability, hierarchy, and brand personality.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=640&h=360&fit=crop',
    createdAt: '2025-05-02',
    author: 'Noah Patel',
    readTime: '9 min read',
  },
  {
    title: 'The Future of UI Animation',
    slug: '#',
    description:
      'From motion guidelines to advanced prototyping—discover where UI animation is headed in 2025.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=640&h=360&fit=crop',
    createdAt: '2025-04-15',
    author: 'Chloe Ramirez',
    readTime: '10 min read',
  },
  {
    title: 'Minimalism vs Maximalism in Design',
    slug: '#',
    description:
      'A deep dive into two opposing design philosophies and how to decide which fits your product.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&h=360&fit=crop',
    createdAt: '2025-04-01',
    author: 'Benjamin Scott',
    readTime: '6 min read',
  },
  {
    title: 'Designing for Mobile-First',
    slug: '#',
    description:
      'Best practices for mobile-first design, from layout decisions to performance optimization.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&h=360&fit=crop',
    createdAt: '2025-03-22',
    author: 'Isabella White',
    readTime: '7 min read',
  },
  {
    title: 'Figma Hacks for Power Users',
    slug: '#',
    description:
      'Hidden features, shortcuts, and workflows in Figma that can dramatically speed up your design process.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=640&h=360&fit=crop',
    createdAt: '2025-03-09',
    author: 'James Walker',
    readTime: '5 min read',
  },
  {
    title: 'Designing With AI Tools',
    slug: '#',
    description:
      'A practical look at how AI tools are shaping UI/UX workflows—from ideation to final delivery.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=360&fit=crop',
    createdAt: '2025-02-28',
    author: 'Olivia Brooks',
    readTime: '8 min read',
  },
  {
    title: 'The Art of Prototyping',
    slug: '#',
    description:
      'How to create prototypes that effectively communicate your ideas and speed up stakeholder feedback.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=640&h=360&fit=crop',
    createdAt: '2025-02-14',
    author: 'Daniel Green',
    readTime: '6 min read',
  },
];

export function BlogSection() {
  return (
    <div className="mx-auto w-full max-w-5xl grow">
      <div
        aria-hidden
        className="absolute inset-0 isolate contain-strict -z-10 opacity-60"
      >
        <div className="-rotate-45 bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 rounded-full" />
        <div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] rounded-full" />
        <div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 rounded-full" />
      </div>
      <div className="space-y-1 px-4 py-8">
        <h1 className="font-mono text-4xl font-bold tracking-wide">Latest Blogs and Articles</h1>
        <p className="text-muted-foreground text-base">
          Discover the latest trends and insights in the world of design and
          technology.
        </p>
      </div>
      <div className="absolute inset-x-0 h-px w-full border-b border-dashed" />
      <div className="grid p-4 md:grid-cols-2 lg:grid-cols-3 z-10">
        {blogs.map((blog) => (
          <a
            href={blog.slug}
            key={blog.title}
            className="group hover:bg-accent/60 active:bg-accent flex flex-col gap-2 rounded-lg p-2 duration-75"
          >
            <LazyImage
              src={blog.image}
              fallback="https://placehold.co/640x360?text=fallback-image"
              inView={true}
              alt={blog.title}
              ratio={16 / 9}
              className="transition-all duration-500 group-hover:scale-105"
            />
            <div className="space-y-2 px-2 pb-2">
              <div className="text-muted-foreground flex items-center gap-2 text-[11px] sm:text-xs">
                <p>by {blog.author}</p>
                <div className="bg-muted-foreground size-1 rounded-full" />
                <p>{blog.createdAt}</p>
                <div className="bg-muted-foreground size-1 rounded-full" />
                <p>{blog.readTime}</p>
              </div>
              <h2 className="line-clamp-2 text-lg leading-5 font-semibold tracking-tight">
                {blog.title}
              </h2>
              <p className="text-muted-foreground line-clamp-3 text-sm">
                {blog.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
