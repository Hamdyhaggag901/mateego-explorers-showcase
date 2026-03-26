import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const FadeInSection = ({ children, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-up");
          el.style.opacity = "1";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default FadeInSection;
