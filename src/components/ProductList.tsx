import React from "react";
import { Product } from "../utils/types";
import { ProductCard } from "./ProductCard";

export function ProductList(props: { products: Product[] }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {props.products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          src={p.src}
          value={p.value}
          products={props.products}
        ></ProductCard>
      ))}
    </div>
  );
}
