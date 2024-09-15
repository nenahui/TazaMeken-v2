import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/types';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

export const MerchProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link to={'/eco-merch/payment'}>
      <Card className={'w-96 shadow-none border'}>
        <CardHeader className={'overflow-hidden'}>
          <img
            className={' h-96 rounded-md object-cover'}
            src={`http://localhost:8089/api/files/${product.photoName}`}
            alt={product.id.toString()}
          />
        </CardHeader>
        <CardContent className={'mb-0 pb-2'}>
          <CardTitle className={'mb-1'}>{product.category.name}</CardTitle>
          <div className={'flex gap-5'}>
            <CardDescription>{product.color.name}</CardDescription>
            {product.gender && <CardDescription>{product.gender.name}</CardDescription>}
          </div>
        </CardContent>
        <CardFooter>
          <Button className={'w-full'}>Заказать</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
