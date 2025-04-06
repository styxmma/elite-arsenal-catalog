
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    brand: string;
    category: string;
    image: string;
    price: number;
    featured?: boolean;
    new?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-card rounded-md overflow-hidden border border-border transition-all duration-300 group-hover:border-secondary">
        <div className="relative aspect-square bg-muted overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {product.new && (
            <Badge className="absolute top-2 right-2 bg-secondary">New</Badge>
          )}
        </div>
        <div className="p-4">
          <div className="text-sm text-muted-foreground mb-1">{product.brand}</div>
          <h3 className="font-medium mb-2 group-hover:text-secondary transition-colors">{product.name}</h3>
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="text-xs">{product.category}</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
