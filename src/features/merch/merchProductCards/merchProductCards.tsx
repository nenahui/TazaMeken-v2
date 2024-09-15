import { MerchProductCard } from '@/features/merch/merchProductCards/components/merchProductCard/merchProductCard';
import type { Product } from '@/types';
import React from 'react';

interface Props {
  products: Product[];
}

export const MerchProductCards: React.FC<Props> = ({ products }) => {
  return (
    <div className={'grid grid-cols-3 gap-3.5 max-md:grid-cols-2 mb-10'}>
      {products.length === 0 ? (
        <p className={'text-muted-foreground absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4'}>
          На данный момент товаров нет. Пожалуйста, зайдите позже.
        </p>
      ) : (
        products.map((product) => <MerchProductCard key={product.id} product={product} />)
      )}
    </div>
  );
};
