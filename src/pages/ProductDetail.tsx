import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Package, Shield, Truck, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  // Find the product
  const product = products.find(p => p.id === id);
  
  // Find related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);
  
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
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16">
          <div className="mil-container text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you are looking for does not exist or has been removed.</p>
            <Button asChild>
              <Link to="/catalog">Return to Catalog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleRequestQuote = () => {
    toast({
      title: "Quote Requested",
      description: `Your quote request for ${product.name} has been submitted.`,
      duration: 3000,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="mil-container">
          <div className="mb-8">
            <Button asChild variant="ghost" className="flex items-center gap-2">
              <Link to="/catalog">
                <ArrowLeft size={16} /> Back to Catalog
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div className="bg-muted rounded-md overflow-hidden">
              <img 
                src={getToyImage(product.category)} 
                alt={product.name}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-2">
                <Badge variant="outline" className="mb-2">{product.category}</Badge>
                {product.new && <Badge className="ml-2 bg-secondary">New</Badge>}
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="text-lg font-medium text-muted-foreground mb-4">{product.brand}</div>
              
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              <div className="flex flex-col gap-4 mb-8">
                <Button onClick={handleRequestQuote} className="bg-secondary hover:bg-secondary/90 flex items-center gap-2">
                  <MessageSquare size={18} /> Request Quote
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 p-3 border border-border rounded-md">
                  <Truck size={20} className="text-secondary" />
                  <span className="text-sm">Free shipping on orders over $200</span>
                </div>
                <div className="flex items-center gap-2 p-3 border border-border rounded-md">
                  <Shield size={20} className="text-secondary" />
                  <span className="text-sm">2-year warranty included</span>
                </div>
                <div className="flex items-center gap-2 p-3 border border-border rounded-md">
                  <Package size={20} className="text-secondary" />
                  <span className="text-sm">Secure packaging for all items</span>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="specifications" className="mb-16">
            <TabsList className="mb-6">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="p-6 border border-border rounded-md">
              <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">{key}</span>
                    <span className="text-muted-foreground">{String(value)}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="details" className="p-6 border border-border rounded-md">
              <h3 className="text-xl font-semibold mb-4">Product Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-secondary mt-2 mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
          
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group">
                    <div className="bg-card rounded-md overflow-hidden border border-border transition-all duration-300 group-hover:border-secondary">
                      <div className="aspect-square bg-muted overflow-hidden">
                        <img 
                          src={getToyImage(relatedProduct.category)} 
                          alt={relatedProduct.name}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-muted-foreground mb-1">{relatedProduct.brand}</div>
                        <h3 className="font-medium mb-2 group-hover:text-secondary transition-colors">{relatedProduct.name}</h3>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline" className="text-xs">{relatedProduct.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
