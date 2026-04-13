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
  videoSrc?: string;
  posterSrc?: string;
  url?: string;
}

export interface TimelineProject {
  id: number;
  title: string;
  role: string;
  description: string;
  videoSrc?: string;
  posterSrc?: string;
  url?: string;
}
