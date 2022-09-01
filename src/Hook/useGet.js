import { useEffect, useState } from 'react';
import { QSFilters } from '../utils/QSFilters';

export const useGet = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    pagination,
    filtersTitle,
    filtersCategory,
    filtersPrice,
    page,
    setPage,
    setTitle,
    setCategories,
    setMinPrice,
    setMaxPrice,
  } = QSFilters();

  useEffect(() => {
    setIsLoading(true);
    // (filtersTitle || filtersCategory || filtersPrice) && setPage(0);
    fetch(
      `http://localhost:1337/api/products?populate=image&populate=categories&${pagination}&${filtersTitle}&${filtersCategory}&${filtersPrice}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.data) {
          console.log('ERROR');
        }
        setProducts(data.data);
      });
    setIsLoading(false);
  }, [pagination, filtersTitle, filtersCategory, filtersPrice]);

  return {
    products,
    isLoading,
    page,
    setPage,
    setTitle,
    setCategories,
    setMinPrice,
    setMaxPrice,
  };
};
