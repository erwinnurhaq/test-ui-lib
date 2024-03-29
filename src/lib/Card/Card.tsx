import React from 'react';
import './Card.css';
import { FaAndroid } from 'react-icons/fa';

export type CardProps = {
  img: { src: string; alt: string };
  title: string;
};

export default function Card({
  img,
  title,
  children,
}: React.PropsWithChildren<CardProps>) {
  return (
    <article data-card="">
      <img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
      <FaAndroid />
    </article>
  );
}
