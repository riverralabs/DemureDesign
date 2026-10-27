"use client";

import type { Product, ProductCategory } from "@/lib/products";
import { saleCaption } from "@/lib/products";
import { ShopOnEtsy, ShopOnGumroad } from "@/components/ShopButtons";
import Image from "next/image";
import { useMemo, useState } from "react";

const FILTERS: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Wedding" },
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
  const saleNote = saleCaption(visible);

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

      <p className="shop-note">
        Same files on both shops. Etsy if you already shop there. Gumroad for a
        direct checkout. Instant download, so there is no shipping cost.
        {saleNote ? ` ${saleNote}` : ""}
      </p>

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
                />
              </div>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-facts">{product.facts}</p>
              {product.etsy.price ? (
                <p className="product-price">
                  {product.compareAtPrice ? (
                    <>
                      <span className="product-price-now">
                        <span className="visually-hidden">Sale price </span>
                        {`$${product.etsy.price}`}
                      </span>
                      <del className="product-price-was">
                        <span className="visually-hidden">Regular price </span>
                        {`$${product.compareAtPrice}`}
                      </del>
                    </>
                  ) : (
                    <span className="product-price-now">
                      <span className="visually-hidden">Price </span>
                      {`$${product.etsy.price}`}
                    </span>
                  )}
                </p>
              ) : null}
              <div className="product-links">
                <ShopOnEtsy href={product.etsy.url} />
                {product.gumroad ? (
                  <ShopOnGumroad href={product.gumroad.url} />
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
