
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    image: string;
    count: number;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link 
      to={`/catalog?category=${category.id}`}
      className="relative group overflow-hidden rounded-md"
    >
      <div className="aspect-video md:aspect-square overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
          <p className="text-gray-200 text-sm">{category.count} Products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
