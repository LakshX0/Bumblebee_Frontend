// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/admin/user',
    icon: icon('ic_user'),
  },
  {
    title: 'loan',
    path: '/admin/loan',
    icon: icon('hand-money-outline'),
  },
  {
    title: 'admin',
    path: '/admin/admin',
    icon: icon('user-admin'),
  },
  {
    title: 'category',
    path: '/admin/category',
    icon: icon('category'),
  },
  {
    title: 'brand',
    path: '/admin/brand',
    icon: icon('brand-appgallery'),
  },
  {
    title: 'product',
    path: '/admin/product',
    icon: icon('product-variant'),
  },
  {
    title: 'orders',
    path: '/admin/purchase',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'product list',
  //   path: '/admin/produclist',
  //   icon: icon('purchase'),
  // },
];

export default navConfig;
