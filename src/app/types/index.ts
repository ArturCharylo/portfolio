export interface Star {
  id: number;
  top: string;
  left: string;
  color: string;
  delay: string;
  duration: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  role?: string;
  videoSrc?: string;
  posterSrc?: string;
  url?: string;
}