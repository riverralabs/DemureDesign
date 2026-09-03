"use client";

import type { Product, ProductCategory } from "@/lib/products";
import Image from "next/image";
import { useMemo, useState } from "react";

const FILTERS: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "planning", label: "Planning" },
  { id: "kids", label: "Kids" },
];

export function ProductShop({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? products
        : products.filter((product) => product.category === filter),
    [filter, products],
  );

  return (
    <div>
      <div className="shop-toolbar">
        <div>
          <p className="eyebrow">Shop</p>
          <h2 className="section-title">Printables</h2>
        </div>
        <div
          className="filters"
          role="group"
          aria-label="Filter printables"
        >
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="filter"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="product-grid">
        {visible.map((product) => (
          <li key={product.id}>
            <article className="product-card">
              <div className="product-media">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 720px) calc(100vw - 48px), (max-width: 1120px) 50vw, 528px"
                  priority={product.id === "quiet-planner"}
                />
              </div>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-facts">{product.facts}</p>
              <div className="product-links">
                <a
                  className="btn btn-primary"
                  href={product.etsy.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Shop on Etsy
                </a>
                {product.gumroad ? (
                  <a
                    className="btn btn-secondary"
                    href={product.gumroad.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Shop on Gumroad
                  </a>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
