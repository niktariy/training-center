import { categories } from '../constants/categories';

export const formatCategory = categoryKey => {
  return categories.find(category => category.key === categoryKey).name;
};
