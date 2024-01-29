import React from "react";
import "./Card.css";

export type CardProps = {
  img: { src: string; alt: string };
  title: string;
}

export function Card({ img, title, children}: React.PropsWithChildren<CardProps>) {
  return (
    <article>
      <img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}