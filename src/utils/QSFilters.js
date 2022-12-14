import qs from 'qs';
import { useState } from 'react';

export const QSFilters = () => {
  const [categories, setCategories] = useState('');
  const [title, setTitle] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(600);
  const [page, setPage] = useState(0);

  const pagination = qs.stringify(
    {
      pagination: {
        start: `${page}`,
        limit: 7,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const filtersTitle = qs.stringify(
    {
      filters: {
        title: {
          $containsi: `${title}`,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const filtersCategory = qs.stringify(
    {
      filters: {
        categories: {
          name: {
            $containsi: `${categories}`,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const filtersPrice = qs.stringify(
    {
      filters: {
        price: {
          $gte: `${minPrice}`,
          $lte: `${maxPrice}`,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  return {
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
  };
};
