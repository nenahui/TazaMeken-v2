import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { MerchProductCards } from '@/features/merch/merchProductCards/merchProductCards';
import { MerchBackButton } from '@/features/merch/merchProducts/merchBackButton/merchBackButton';
import { MerchNav } from '@/features/merch/merchProducts/merchNav/merchNav';
import { selectProducts } from '@/features/merch/merchSlice';
import { fetchProducts } from '@/features/merch/merchThunks';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type merchPages = 'all' | 't-shirts' | 'sweatshirts' | 'bags' | 'headwear' | 'bottles' | 'souvenirs';

export const Products: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = React.useState<merchPages>('all');
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (name) {
      setActive(name as merchPages);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts =
    active === 'all'
      ? products
      : products.filter((product) => {
          switch (active) {
            case 't-shirts':
              return product.category.name === 'Футболка';
            case 'sweatshirts':
              return product.category.name === 'Свитшот';
            case 'bags':
              return product.category.name.includes('сумки');
            case 'headwear':
              return ['Кепка', 'Панама', 'Шапка'].includes(product.category.name);
            case 'bottles':
              return product.category.name === 'Многоразовые бутылки';
            case 'souvenirs':
              return product.category.name === 'Сувениры';
            default:
              return false;
          }
        });

  return (
    <>
      <MerchBackButton onClick={() => navigate(-1)} />
      <MerchNav active={active} handleClick={handleClick} />
      <MerchProductCards products={filteredProducts} />
    </>
  );
};
