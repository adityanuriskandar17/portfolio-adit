'use client';
import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import {
  SiGithub,
  SiGo,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    {
      text: 'Node.js',
      Icon: SiNodedotjs,
    },
    {
      text: 'React',
      Icon: SiReact,
    },
    {
      text: 'Next.js',
      Icon: SiNextdotjs,
    },
    {
      text: 'Tailwind',
      Icon: SiTailwindcss,
    },
    {
      text: 'JavaScript',
      Icon: SiJavascript,
    },
    {
      text: 'TypeScript',
      Icon: SiTypescript,
    },
    {
      text: 'Python',
      Icon: SiPython,
    },
    {
      text: 'Nest.js',
      Icon: SiNestjs,
    },
    {
      text: 'PostgreSQL',
      Icon: SiPostgresql,
    },
    {
      text: 'Github',
      Icon: SiGithub,
    },
    {
      text: 'Go',
      Icon: SiGo,
    },
    {
      text: 'Spring Boot',
      Icon: SiSpringboot,
    },
  ];

  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title
        text='Skills 🧙‍♂️'
        className='flex flex-col items-center justify-center -rotate-6'
      />
      <HoverEffect items={skills} />
    </div>
  );
}
