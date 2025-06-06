
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

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
  const { toast } = useToast();

  // Black and green military themed images for each category
  const getToyImage = (category: string) => {
    switch (category) {
      case 'firearms':
        return 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'; // Black circuit board
      case 'ammunition':
        return 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'; // Black and gray laptop
      case 'accessories':
        return 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'; // Black and white photo
      case 'gear':
      default:
        return 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'; // Black and red building
    }
  };

  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    toast({
      title: "Quote Requested",
      description: `Your quote request for ${product.name} has been submitted.`,
      duration: 3000,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-card rounded-md overflow-hidden border border-border transition-all duration-300 group-hover:border-secondary">
        <div className="relative aspect-square bg-muted overflow-hidden">
          <img 
            src={getToyImage(product.category)} 
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
          <Button 
            onClick={handleRequestQuote} 
            className="w-full mt-3 bg-secondary hover:bg-secondary/90 flex items-center justify-center gap-2"
            size="sm"
          >
            <MessageSquare size={14} /> Request Quote
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
