import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl border border-border bg-surface-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-text">{service.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-text-muted">{service.description}</p>
      <Link
        to="/diensten"
        className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-light"
      >
        Meer info <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
